// ── send-contact-email ─────────────────────────────────────────────────────
//
// Receives "Send Us a Message" submissions from the public site, persists
// them to the `contact_submissions` table, and emails info@techscapeai.in
// via Resend.
//
// Deploy:    supabase functions deploy send-contact-email
// Secrets:   supabase secrets set RESEND_API_KEY=re_xxx \
//                                  CONTACT_TO_EMAIL=info@techscapeai.in \
//                                  CONTACT_FROM_EMAIL='TechScape AI <onboarding@resend.dev>'
//
// FROM_EMAIL note: Until you verify your domain in Resend, you must use
// `onboarding@resend.dev` as the From address. Once you verify
// techscapeai.in in Resend → DNS, switch to e.g. contact@techscapeai.in.
//
// The function bypasses RLS via SUPABASE_SERVICE_ROLE_KEY (auto-injected by
// Supabase). Browsers call it with the publishable key as Bearer auth.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') ?? ''
const TO_EMAIL = Deno.env.get('CONTACT_TO_EMAIL') ?? 'info@techscapeai.in'
const FROM_EMAIL =
  Deno.env.get('CONTACT_FROM_EMAIL') ?? 'TechScape AI <onboarding@resend.dev>'

interface ContactPayload {
  full_name: string
  email: string
  phone?: string
  i_am?: string
  interested_in?: string
  message: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)
  )
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' })

  let body: ContactPayload
  try {
    body = await req.json()
  } catch {
    return json(400, { error: 'Invalid JSON' })
  }

  const fullName = (body.full_name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!fullName || !email || !message) {
    return json(400, { error: 'Name, email, and message are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Invalid email address.' })
  }
  if (fullName.length > 200 || message.length > 5000) {
    return json(413, { error: 'Payload too large.' })
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null
  const userAgent = req.headers.get('user-agent') ?? null

  const row = {
    full_name: fullName,
    email,
    phone: body.phone?.trim() || null,
    i_am: body.i_am?.trim() || null,
    interested_in: body.interested_in?.trim() || null,
    message,
    ip_address: ip,
    user_agent: userAgent,
  }

  const { data: inserted, error: dbError } = await supabase
    .from('contact_submissions')
    .insert([row])
    .select('id')
    .single()

  if (dbError) {
    console.error('DB insert failed:', dbError)
    return json(500, { error: 'Database insert failed', detail: dbError.message })
  }

  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set — submission saved but no email sent.')
    return json(200, { ok: true, id: inserted?.id, emailSent: false })
  }

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #e5e7eb; border-radius: 12px;">
      <h2 style="margin: 0 0 16px; color: #fff; font-size: 20px;">New contact submission — TechScape AI</h2>
      <table style="border-collapse: collapse; line-height: 1.7; font-size: 14px; margin-bottom: 16px;">
        <tr><td style="color: #999; padding-right: 16px;">Name</td><td style="color: #fff;">${escapeHtml(fullName)}</td></tr>
        <tr><td style="color: #999; padding-right: 16px;">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color: #3D75F3;">${escapeHtml(email)}</a></td></tr>
        ${row.phone ? `<tr><td style="color: #999; padding-right: 16px;">Phone</td><td style="color: #fff;">${escapeHtml(row.phone)}</td></tr>` : ''}
        ${row.i_am ? `<tr><td style="color: #999; padding-right: 16px;">I am a</td><td style="color: #fff;">${escapeHtml(row.i_am)}</td></tr>` : ''}
        ${row.interested_in ? `<tr><td style="color: #999; padding-right: 16px;">Interested in</td><td style="color: #fff;">${escapeHtml(row.interested_in)}</td></tr>` : ''}
      </table>
      <div style="background: #161616; border: 1px solid #262626; border-radius: 8px; padding: 16px;">
        <div style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</div>
        <div style="color: #fff; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
      <p style="color: #555; font-size: 11px; margin-top: 24px;">
        Submission ID: ${inserted?.id ?? 'n/a'} · Received at ${new Date().toISOString()}
      </p>
    </div>
  `

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `[TechScape AI] New contact: ${fullName}`,
      html,
    }),
  })

  if (!emailRes.ok) {
    const detail = await emailRes.text()
    console.error('Resend email failed:', emailRes.status, detail)
    return json(200, {
      ok: true,
      id: inserted?.id,
      emailSent: false,
      warning: 'Saved, but email delivery failed. We will follow up manually.',
    })
  }

  await supabase
    .from('contact_submissions')
    .update({ email_sent_at: new Date().toISOString() })
    .eq('id', inserted!.id)

  return json(200, { ok: true, id: inserted?.id, emailSent: true })
})
