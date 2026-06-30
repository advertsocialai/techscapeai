import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

// Browser client — only knows the anon key, so it can hit RPCs and Edge
// Functions but not the locked-down `contact_submissions` table directly.
export const supabase = url && anon
  ? createClient(url, anon, { auth: { persistSession: false } })
  : null

export const isSupabaseConfigured = () => Boolean(supabase)
