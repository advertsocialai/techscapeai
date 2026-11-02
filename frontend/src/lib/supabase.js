import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

// "Remember me" on the login page decides where the admin session lives:
// localStorage survives a browser restart, sessionStorage ends with the tab.
const REMEMBER_KEY = 'ts-admin-remember'

const safe = (fn, fallback = null) => {
  try { return fn() } catch { return fallback }
}

const sessionStore = {
  getItem: (k) => safe(() => localStorage.getItem(k) ?? sessionStorage.getItem(k)),
  setItem: (k, v) => safe(() => {
    const remember = localStorage.getItem(REMEMBER_KEY) === '1'
    ;(remember ? localStorage : sessionStorage).setItem(k, v)
    ;(remember ? sessionStorage : localStorage).removeItem(k)
  }),
  removeItem: (k) => safe(() => {
    localStorage.removeItem(k)
    sessionStorage.removeItem(k)
  }),
}

export const setRememberMe = (remember) =>
  safe(() => localStorage.setItem(REMEMBER_KEY, remember ? '1' : '0'))

// Browser client — only knows the anon key, so it can hit RPCs, Edge
// Functions and Auth, but not the locked-down tables directly.
export const supabase = url && anon
  ? createClient(url, anon, { auth: { persistSession: true, storage: sessionStore } })
  : null

export const isSupabaseConfigured = () => Boolean(supabase)

// Admins are Supabase Auth users with app_metadata.role = 'admin'.
// app_metadata can only be set server-side (SQL / service role), so a user
// cannot grant it to themselves.
export const isAdmin = (user) => user?.app_metadata?.role === 'admin'
