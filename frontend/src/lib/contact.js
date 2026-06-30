// Posts the "Send Us a Message" form to the Supabase Edge Function
// `send-contact-email`, which persists the row and emails info@techscapeai.in.
//
// Returns: { ok: boolean, id?: string, emailSent?: boolean, warning?: string }
// Throws : Error('reason') on validation/network failure

const URL = import.meta.env.VITE_SUPABASE_URL
  ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`
  : null
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY

export async function submitContactForm(payload) {
  if (!URL || !ANON) {
    throw new Error(
      'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local.'
    )
  }

  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ANON}`,
      'apikey': ANON,
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`)
  }
  return data
}
