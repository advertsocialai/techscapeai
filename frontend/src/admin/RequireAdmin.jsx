import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase, isAdmin } from '../lib/supabase'

/* Gate for /admin routes — renders children only for a signed-in admin,
   otherwise sends the visitor to /login. */
export default function RequireAdmin({ children }) {
  const [state, setState] = useState(supabase ? 'checking' : 'denied') // checking | allowed | denied

  useEffect(() => {
    if (!supabase) return
    const apply = (session) => setState(isAdmin(session?.user) ? 'allowed' : 'denied')

    supabase.auth.getSession().then(({ data }) => apply(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => apply(session))
    return () => sub.subscription.unsubscribe()
  }, [])

  if (state === 'checking') {
    return (
      <div className="grid min-h-screen place-items-center bg-black">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      </div>
    )
  }
  if (state === 'denied') return <Navigate to="/login" replace />
  return children
}
