// ── newsletter-subscribe ───────────────────────────────────────────────────
//
// Receives footer "Newsletter" sign-ups from the public site and persists
// them to the `newsletter_subscribers` table. Re-subscribing with an address
// that already exists is treated as success (alreadySubscribed: true).
//
// Deploy:    supabase functions deploy newsletter-subscribe
//
// The function bypasses RLS via SUPABASE_SERVICE_ROLE_KEY (auto-injected by
// Supabase). Browsers call it with the publishable key as Bearer auth.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

interface SubscribePayload {
  email: string
  source?: string
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

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' })

  let body: SubscribePayload
  try {
    body = await req.json()
  } catch {
    return json(400, { error: 'Invalid JSON' })
  }

  const email = (body.email ?? '').trim().toLowerCase()

  if (!email) {
    return json(400, { error: 'Email is required.' })
  }
  if (email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Invalid email address.' })
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  const { error: dbError } = await supabase
    .from('newsletter_subscribers')
    .insert([{
      email,
      source: body.source?.trim().slice(0, 100) || null,
      ip_address: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null,
      user_agent: req.headers.get('user-agent') ?? null,
    }])

  // 23505 = unique_violation → address is already on the list.
  if (dbError?.code === '23505') {
    return json(200, { ok: true, alreadySubscribed: true })
  }
  if (dbError) {
    console.error('DB insert failed:', dbError)
    return json(500, { error: 'Database insert failed', detail: dbError.message })
  }

  return json(200, { ok: true, alreadySubscribed: false })
})
