import { useState } from 'react'
import { Link } from 'react-router-dom'
import loginBg from '../assets/login-bg.png'
import loginSphere from '../assets/login-sphere.png'
import loginBrand from '../assets/login-brand.svg'
import googleIcon from '../assets/google-icon.png'
import microsoftIcon from '../assets/microsoft-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'

const SOCIAL = [
  { label: 'Sign in with Google',     icon: googleIcon },
  { label: 'Sign in with Microsoft',  icon: microsoftIcon },
  { label: 'Sign in with Linked in',  icon: linkedinIcon },
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

export default function LoginPage() {
  const [form, setForm]         = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [remember, setRemember] = useState(false)
  const [status, setStatus]     = useState('idle')

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

      {/* -- Left panel -- dark with background image (hidden on mobile) -- */}
      <div
        className="hidden md:flex flex-1 items-center justify-center relative overflow-hidden"
        style={{ background: '#000000' }}
      >
        <img
          src={loginBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <img
          src={loginSphere}
          alt="3D Sphere"
          className="relative z-10 max-w-[473px] max-h-[483px] w-[80%]"
        />
      </div>

      {/* -- Right panel -- white form panel -- */}
      <div
        className="w-full md:w-[720px] flex-shrink-0 flex flex-col justify-center overflow-y-auto"
        style={{ background: '#FFFFFF', minHeight: '100vh' }}
      >
        <div className="px-6 py-10 md:px-16 md:py-12 w-full max-w-[420px] mx-auto flex flex-col gap-6">

          {/* Logo — Figma-exact brand SVG (dark text for white bg) */}
          <div className="flex justify-center mb-2">
            <Link to="/">
              <img src={loginBrand} alt="Tech Scape AI" className="h-[48px] w-auto" />
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-[20px] font-semibold text-center" style={{ color: '#1a1a1a' }}>
            Nice to see you again
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] tracking-[0.3px]" style={{ color: '#333' }}>
                Login
              </label>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email or phone number"
                required
                className="h-[48px] rounded-[6px] px-4 text-[12px] tracking-[0.3px] outline-none transition-all duration-200"
                style={{
                  background: '#f2f2f2',
                  border: '0.5px solid #e5e5e5',
                  color: '#1a1a1a',
                  fontFamily: 'Inter, sans-serif',
                }}
                onFocus={e => { e.target.style.borderColor = '#3D75F3'; e.target.style.background = '#fff'; }}
                onBlur={e => { e.target.style.borderColor = '#e5e5e5'; e.target.style.background = '#f2f2f2'; }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] tracking-[0.3px]" style={{ color: '#333' }}>
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
                  className="h-[48px] w-full rounded-[6px] px-4 pr-12 text-[12px] tracking-[0.3px] outline-none transition-all duration-200"
                  style={{
                    background: '#f2f2f2',
                    border: '0.5px solid #e5e5e5',
                    color: '#1a1a1a',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#3D75F3'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#e5e5e5'; e.target.style.background = '#f2f2f2'; }}
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
                  className="relative w-[40px] h-[20px] flex-shrink-0 transition-all duration-200"
                  style={{
                    background: remember ? 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' : '#f2f2f2',
                    border: '0.5px solid #e5e5e5',
                    borderRadius: '36.5px',
                  }}
                >
                  <span
                    className="absolute top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow transition-all duration-200"
                    style={{ left: remember ? '21px' : '2px' }}
                  />
                </button>
                <span className="text-[12px] tracking-[0.3px]" style={{ color: '#808080', fontFamily: 'Inter, sans-serif' }}>Remember me</span>
              </label>
              <a href="#" className="text-[12px] tracking-[0.3px] font-medium transition-colors" style={{ color: '#007aff', fontFamily: 'Inter, sans-serif' }}>
                Forgot password?
              </a>
            </div>

            {/* Error */}
            {status === 'error' && (
              <p className="text-[12px] text-red-500 text-center">Invalid credentials. Please try again.</p>
            )}

            {/* Submit — full-width gradient button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="h-[48px] w-full flex items-center justify-center text-[14px] font-semibold text-white disabled:opacity-60 transition-all"
              style={{
                background: 'linear-gradient(97.97deg, #3D75F3 48.08%, #F5A086 100%)',
                borderRadius: '8px',
              }}
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : 'Log In'}
            </button>
          </form>

          {/* Divider */}
          <div className="w-full" style={{ height: '0.5px', background: '#e5e5e5' }} />

          {/* Social login */}
          <div className="flex flex-col gap-[8px]">
            {SOCIAL.map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className="h-[40px] flex items-center justify-center gap-3 text-[12px] tracking-[0.3px] font-medium transition-all duration-200"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E5E5',
                  borderRadius: '6px',
                  color: '#1A1A1A',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#F9F9F9'}
                onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
              >
                <img src={icon} alt="" className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>

          {/* Sign up link */}
          <p className="text-center text-[12px] tracking-[0.3px]" style={{ color: '#808080', fontFamily: 'Inter, sans-serif' }}>
            Dont have an account?{' '}
            <Link to="/contact" className="font-medium transition-colors" style={{ color: '#007aff' }}>
              Sign up now
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}
