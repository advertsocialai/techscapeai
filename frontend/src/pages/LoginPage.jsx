import { useState } from 'react'
import { Link } from 'react-router-dom'

/* Figma asset URLs — social login icons */
const GOOGLE_ICON   = 'https://www.figma.com/api/mcp/asset/7435606b-1ba3-4698-9bb8-e21746b96081'
const MS_ICON       = 'https://www.figma.com/api/mcp/asset/d000c349-9f24-4f4e-98bc-0216f5b71525'
const LINKEDIN_ICON = 'https://www.figma.com/api/mcp/asset/6bac4fd4-551b-4814-aab1-07829e3f95bc'

function Logo() {
  return (
    <div className="flex flex-col items-center gap-3 mb-2">
      <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
        <circle cx="15" cy="27" r="14" fill="#F5A086" />
        <circle cx="35" cy="17" r="14" fill="#3D75F3" />
        <circle cx="25" cy="22" r="7" fill="#fff" opacity="0.12" />
      </svg>
      <span className="text-[18px] font-bold text-white tracking-tight text-center leading-tight">
        Tech<span className="grad-text">Scape AI</span>
      </span>
    </div>
  )
}

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

const SOCIAL = [
  { label: 'Sign in with Google',    icon: GOOGLE_ICON },
  { label: 'Sign in with Microsoft', icon: MS_ICON },
  { label: 'Sign in with LinkedIn',  icon: LINKEDIN_ICON },
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
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(61,117,243,0.1) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-60" />

      {/* Card */}
      <div className="relative w-full max-w-[400px]">

        {/* Gradient border wrapper */}
        <div className="grad-border">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col gap-7"
            style={{ background: 'linear-gradient(160deg, #0d0d14 0%, #080810 100%)' }}>

            {/* Logo */}
            <Logo />

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-[22px] font-bold text-white leading-snug">
                Nice to see you again
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest px-1">
                  Login
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email or phone number"
                  required
                  className="h-[48px] rounded-lg px-4 text-[13px] text-white placeholder-white/25 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(61,117,243,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest px-1">
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
                    className="h-[48px] w-full rounded-lg px-4 pr-12 text-[13px] text-white placeholder-white/25 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(61,117,243,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                  >
                    <EyeIcon open={showPass} />
                  </button>
                </div>
              </div>

              {/* Remember me + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  {/* Toggle switch */}
                  <button
                    type="button"
                    onClick={() => setRemember(v => !v)}
                    className="relative w-[38px] h-[22px] rounded-full transition-all duration-200 flex-shrink-0"
                    style={{ background: remember ? 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' : 'rgba(255,255,255,0.1)' }}
                  >
                    <span
                      className="absolute top-[3px] w-[16px] h-[16px] bg-white rounded-full shadow transition-all duration-200"
                      style={{ left: remember ? '19px' : '3px' }}
                    />
                  </button>
                  <span className="text-[12px] text-white/50">Remember me</span>
                </label>
                <a href="#" className="text-[12px] text-[#3D75F3] hover:text-[#6B9FFF] transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-[12px] text-red-400 text-center">Invalid credentials. Please try again.</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn h-[48px] flex items-center justify-center text-[14px] font-semibold text-white capitalize disabled:opacity-60 transition-all"
                style={{ boxShadow: '0 4px 24px rgba(61,117,243,0.25)' }}
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : 'Log In'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
              <span className="text-[11px] text-white/25 uppercase tracking-widest">or</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
            </div>

            {/* Social login */}
            <div className="flex flex-col gap-3">
              {SOCIAL.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  className="h-[44px] flex items-center justify-center gap-3 rounded-lg text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <img src={icon} alt="" className="w-[20px] h-[20px] object-contain" />
                  {label}
                </button>
              ))}
            </div>

            {/* Sign up link */}
            <p className="text-center text-[13px] text-white/35">
              Don't have an account?{' '}
              <Link to="/contact" className="text-[#3D75F3] hover:text-[#6B9FFF] transition-colors font-medium">
                Sign up now
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
