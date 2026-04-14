import { useState } from 'react'
import { Link } from 'react-router-dom'

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022"/>
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00"/>
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
    </svg>
  )
}

function LinkedInBtnIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const SOCIAL = [
  { label: 'Sign in with Google',    Icon: GoogleIcon },
  { label: 'Sign in with Microsoft', Icon: MicrosoftIcon },
  { label: 'Sign in with LinkedIn',  Icon: LinkedInBtnIcon },
]

function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
}


const FEATURES = [
  'Custom AI agents deployed in days, not months',
  'Transparent pricing — no lock-in, no surprises',
  'Trusted by teams across 10+ countries',
]

export default function LoginPage() {
  const [form, setForm]         = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [remember, setRemember] = useState(false)
  const [status, setStatus]     = useState('idle') // idle | loading | error

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) return
    setStatus('loading')
    /* TODO: wire to auth API */
    setTimeout(() => setStatus('idle'), 1500)
  }

  return (
    <div className="min-h-screen flex flex-row overflow-hidden">

      {/* ── Left panel — dark branded (hidden on mobile) ── */}
      <div
        className="hidden md:flex flex-1 flex-col justify-between p-12 lg:p-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #050714 0%, #080C1A 100%)' }}
      >
        {/* Grid texture */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Blue radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(61,117,243,0.18) 0%, transparent 65%)',
          }}
        />

        {/* Top: Logo */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none">
              <circle cx="12" cy="23" r="12" fill="#F5A086" />
              <circle cx="30" cy="14" r="12" fill="#3D75F3" />
              <circle cx="21" cy="18" r="5.5" fill="#fff" opacity="0.12" />
            </svg>
            <span className="text-[15px] font-bold text-white tracking-tight leading-tight">
              TechScape <span className="grad-text">AI</span>
            </span>
          </Link>
        </div>

        {/* Middle: Headline + bullets */}
        <div className="relative z-10 flex flex-col gap-8 max-w-[420px]">
          <h1 className="text-[36px] lg:text-[44px] font-extrabold text-white tracking-[-0.025em] leading-[1.1]">
            Welcome Back to<br />
            <span className="grad-text">TechScape AI</span>
          </h1>
          <p className="text-[15px] text-white/50 leading-relaxed">
            The AI-powered platform moving businesses forward.
          </p>

          <ul className="flex flex-col gap-4">
            {FEATURES.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(61,117,243,0.15)', border: '1px solid rgba(61,117,243,0.35)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#3D75F3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[14px] text-white/60 leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom: tagline */}
        <div className="relative z-10">
          <p className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} TechScape AI. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Right panel — white form panel ── */}
      <div
        className="w-full md:w-[720px] flex-shrink-0 flex flex-col justify-center overflow-y-auto"
        style={{ background: '#FFFFFF', minHeight: '100vh' }}
      >
        <div className="px-6 py-10 md:px-16 md:py-12 w-full max-w-[520px] mx-auto flex flex-col gap-7">

          {/* Logo — mobile only */}
          <div className="flex flex-col items-center gap-3 mb-2 md:hidden">
            <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
              <circle cx="14" cy="25" r="13" fill="#F5A086" />
              <circle cx="32" cy="15" r="13" fill="#3D75F3" />
              <circle cx="23" cy="20" r="6" fill="#fff" opacity="0.12" />
            </svg>
            <span className="text-[17px] font-bold tracking-tight text-center" style={{ color: '#1A1A1A' }}>
              Tech<span className="grad-text">Scape AI</span>
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-[24px] md:text-[28px] font-bold leading-snug" style={{ color: '#1A1A1A' }}>
              Nice to see you again
            </h1>
            <p className="text-[14px] mt-1" style={{ color: '#808080' }}>
              Sign in to your TechScape AI account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-widest px-1" style={{ color: '#808080' }}>
                Login
              </label>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email or phone number"
                required
                className="h-[48px] rounded-lg px-4 text-[13px] outline-none transition-all duration-200"
                style={{
                  background: '#F2F2F2',
                  border: '1px solid #E5E5E5',
                  color: '#1A1A1A',
                }}
                onFocus={e => { e.target.style.borderColor = '#3D75F3'; e.target.style.background = '#fff'; }}
                onBlur={e => { e.target.style.borderColor = '#E5E5E5'; e.target.style.background = '#F2F2F2'; }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-widest px-1" style={{ color: '#808080' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="h-[48px] w-full rounded-lg px-4 pr-12 text-[13px] outline-none transition-all duration-200"
                  style={{
                    background: '#F2F2F2',
                    border: '1px solid #E5E5E5',
                    color: '#1A1A1A',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#3D75F3'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#E5E5E5'; e.target.style.background = '#F2F2F2'; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: '#808080' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#1A1A1A'}
                  onMouseLeave={e => e.currentTarget.style.color = '#808080'}
                >
                  <EyeIcon open={showPass} />
                </button>
              </div>
            </div>

            {/* Remember me + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <button
                  type="button"
                  onClick={() => setRemember(v => !v)}
                  className="relative w-[38px] h-[22px] rounded-full transition-all duration-200 flex-shrink-0"
                  style={{ background: remember ? 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' : '#E5E5E5' }}
                >
                  <span
                    className="absolute top-[3px] w-[16px] h-[16px] bg-white rounded-full shadow transition-all duration-200"
                    style={{ left: remember ? '19px' : '3px' }}
                  />
                </button>
                <span className="text-[12px]" style={{ color: '#808080' }}>Remember me</span>
              </label>
              <a href="#" className="text-[12px] font-medium transition-colors" style={{ color: '#007AFF' }}>
                Forgot password?
              </a>
            </div>

            {/* Error */}
            {status === 'error' && (
              <p className="text-[12px] text-red-500 text-center">Invalid credentials. Please try again.</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn h-[48px] flex items-center justify-center text-[14px] font-semibold text-white capitalize disabled:opacity-60 transition-all"
              style={{ boxShadow: '0 4px 24px rgba(61,117,243,0.25)' }}
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : 'Log In'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
            <span className="text-[11px] uppercase tracking-widest" style={{ color: '#808080' }}>or</span>
            <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
          </div>

          {/* Social login */}
          <div className="flex flex-col gap-3">
            {SOCIAL.map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                className="h-[44px] flex items-center justify-center gap-3 rounded-lg text-[13px] font-medium transition-all duration-200"
                style={{ background: '#FFFFFF', border: '1px solid #686767', color: '#1A1A1A' }}
                onMouseEnter={e => e.currentTarget.style.background = '#F9F9F9'}
                onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
              >
                <Icon />
                {label}
              </button>
            ))}
          </div>

          {/* Sign up link */}
          <p className="text-center text-[13px]" style={{ color: '#808080' }}>
            Don&apos;t have an account?{' '}
            <Link to="/contact" className="font-medium transition-colors" style={{ color: '#007AFF' }}>
              Sign up now
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}
