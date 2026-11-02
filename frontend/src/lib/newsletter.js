// Posts the footer "Newsletter" email to the Supabase Edge Function
// `newsletter-subscribe`, which stores it in `newsletter_subscribers`.
//
// Returns: { ok: boolean, alreadySubscribed?: boolean }
// Throws : Error('reason') on validation/network failure

const URL = import.meta.env.VITE_SUPABASE_URL
  ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/newsletter-subscribe`
  : null
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY

export async function subscribeToNewsletter(email, source = 'footer') {
  if (!URL || !ANON) {
    throw new Error(
      'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local.'
    )
  }

  let res
  try {
    res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ANON}`,
        'apikey': ANON,
      },
      body: JSON.stringify({ email, source }),
    })
  } catch {
    throw new Error('Could not reach the server. Please try again.')
  }

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`)
  }
  return data
}
