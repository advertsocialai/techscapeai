import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
  e.preventDefault()

  if (!form.email || !form.password) return

  setStatus('loading')

  // simulate API call
  setTimeout(() => {
    setStatus('idle')

    navigate('/admin')
  }, 1500)
}

  return (
    <div className="min-h-screen flex flex-row overflow-hidden">

      {/* Left panel - dark with background image */}
      <div
        className="hidden md:flex flex-1 items-center justify-center relative overflow-hidden"
        style={{ background: '#000000' }}
      >
        <img src={loginBg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <img src={loginSphere} alt="3D Sphere" className="relative z-10 max-w-[473px] max-h-[483px] w-[80%]" />
      </div>

      {/* Middle panel - TechScape login (existing) */}
      <div
        className="w-full md:w-[720px] flex-shrink-0 flex flex-col justify-center overflow-y-auto"
        style={{ background: '#FFFFFF', minHeight: '100vh' }}
      >
        <div className="px-6 py-10 md:px-16 md:py-12 w-full max-w-[420px] mx-auto flex flex-col gap-6">

          <div className="flex justify-center mb-2">
            <Link to="/"><img src={loginBrand} alt="Tech Scape AI" className="h-[48px] w-auto" /></Link>
          </div>

          <h1 className="text-[20px] font-semibold text-center" style={{ color: '#1a1a1a' }}>
            Nice to see you again
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="login-email" className="text-[11px] tracking-[0.3px]" style={{ color: '#333' }}>Login</label>
              <input
                id="login-email"
                type="text" name="email" value={form.email} onChange={handleChange}
                placeholder="Email or phone number" required
                className="h-[48px] rounded-[6px] px-4 text-[12px] tracking-[0.3px] outline-none transition-all duration-200"
                style={{ background: '#f2f2f2', border: '0.5px solid #e5e5e5', color: '#1a1a1a', fontFamily: 'Inter, sans-serif' }}
                onFocus={e => { e.target.style.borderColor = '#3D75F3'; e.target.style.background = '#fff' }}
                onBlur={e => { e.target.style.borderColor = '#e5e5e5'; e.target.style.background = '#f2f2f2' }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="login-password" className="text-[11px] tracking-[0.3px]" style={{ color: '#333' }}>Password</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPass ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange}
                  placeholder="Enter password" required
                  className="h-[48px] w-full rounded-[6px] px-4 pr-12 text-[12px] tracking-[0.3px] outline-none transition-all duration-200"
                  style={{ background: '#f2f2f2', border: '0.5px solid #e5e5e5', color: '#1a1a1a', fontFamily: 'Inter, sans-serif' }}
                  onFocus={e => { e.target.style.borderColor = '#3D75F3'; e.target.style.background = '#fff' }}
                  onBlur={e => { e.target.style.borderColor = '#e5e5e5'; e.target.style.background = '#f2f2f2' }}
                />
                <button type="button" onClick={() => setShowPass(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors" style={{ color: '#808080' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#1A1A1A'}
                  onMouseLeave={e => e.currentTarget.style.color = '#808080'}>
                  <EyeIcon open={showPass} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <button type="button" onClick={() => setRemember(v => !v)}
                  className="relative w-[40px] h-[20px] flex-shrink-0 transition-all duration-200"
                  style={{ background: remember ? 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' : '#f2f2f2', border: '0.5px solid #e5e5e5', borderRadius: '36.5px' }}>
                  <span className="absolute top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow transition-all duration-200" style={{ left: remember ? '21px' : '2px' }} />
                </button>
                <span className="text-[12px] tracking-[0.3px]" style={{ color: '#808080', fontFamily: 'Inter, sans-serif' }}>Remember me</span>
              </label>
              <a href="#" className="text-[12px] tracking-[0.3px] font-medium" style={{ color: '#007aff', fontFamily: 'Inter, sans-serif' }}>Forgot password?</a>
            </div>

            {status === 'error' && <p className="text-[12px] text-red-500 text-center">Invalid credentials. Please try again.</p>}

            <button type="submit" disabled={status === 'loading'}
              className="h-[48px] w-full flex items-center justify-center text-[14px] font-semibold text-white disabled:opacity-60 transition-all"
              style={{ background: 'linear-gradient(97.97deg, #3D75F3 48.08%, #F5A086 100%)', borderRadius: '8px' }}>
              {status === 'loading' ? <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : 'Log In'}
            </button>
          </form>

          <div className="w-full" style={{ height: '0.5px', background: '#e5e5e5' }} />

          <div className="flex flex-col gap-[8px]">
            {SOCIAL.map(({ label, icon }) => (
              <button key={label} type="button"
                className="h-[40px] flex items-center justify-center gap-3 text-[12px] tracking-[0.3px] font-medium transition-all duration-200"
                style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', borderRadius: '6px', color: '#1A1A1A', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={e => e.currentTarget.style.background = '#F9F9F9'}
                onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}>
                <img src={icon} alt="" className="w-5 h-5" />{label}
              </button>
            ))}
          </div>

          <p className="text-center text-[12px] tracking-[0.3px]" style={{ color: '#808080', fontFamily: 'Inter, sans-serif' }}>
            Dont have an account?{' '}
            <Link to="/contact" className="font-medium" style={{ color: '#007aff' }}>Sign up now</Link>
          </p>

          <div style={{ height:'0.5px', background:'#e5e5e5' }} />
          <p className="text-center text-[11px]" style={{ color:'#aaa' }}>← Back to techscapeai.com</p>
        </div>
      </div>

      {/* Right panel - GoGaga AI Concierge */}
      <div
        className="hidden lg:flex w-[420px] flex-shrink-0 flex-col justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(175deg, #0A1628 0%, #142240 20%, #1C3566 38%, #C87850 70%, #D29678 85%, #DCAA8C 100%)' }}
      >
        {/* Stars */}
        {[[55,18],[140,30],[230,12],[310,45],[78,65],[360,22]].map(([l,t],i) => (
          <div key={i} style={{ position:'absolute', width:2, height:2, borderRadius:'50%', background:'white', opacity:0.7, top:t, left:l }} />
        ))}

        <div style={{ padding:'0 32px', position:'relative', zIndex:10 }}>

          {/* GoGaga Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:32 }}>
            <div style={{ width:48, height:48, borderRadius:14, background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="32" height="26" viewBox="0 0 167 134" fill="none">
                <path d="M166.198 31.7C166.198 49.2 152 63.4 134.5 63.4C117 63.4 102.8 49.2 102.8 31.7C102.8 14.2 117 0 134.5 0C152 0 166.198 14.2 166.198 31.7Z" fill="#1C6DD0"/>
                <path d="M134.5 70.5C152 70.5 166.2 84.7 166.2 102.2C166.2 119.1 153 132.9 136.5 133.9L136.5 134H69.8C64.8 134 62.3 127.9 65.9 124.4L111.7 80.2C117.5 74.2 125.6 70.5 134.5 70.5Z" fill="rgba(255,255,255,0.95)"/>
                <path d="M0 102.2C0 84.7 14.2 70.5 31.7 70.5C49.2 70.5 63.4 84.7 63.4 102.2C63.4 119.8 49.2 134 31.7 134C14.2 134 0 119.8 0 102.2Z" fill="#F7BFA0"/>
                <path d="M31.7 63.4C14.2 63.4 0 49.2 0 31.7C0 14.9 13.1 1.1 29.7 0.1L29.7 0H96.4C101.4 0 103.9 6.1 100.3 9.5L54.5 53.8C48.7 59.7 40.6 63.4 31.7 63.4Z" fill="rgba(255,255,255,0.9)"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize:22, fontWeight:700, color:'#fff' }}>GoGaga</div>
              <div style={{ fontSize:12, color:'#F7BFA0', fontStyle:'italic' }}>AI Concierge</div>
            </div>
          </div>

          {/* Glass card */}
          <div style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.22)', borderRadius:24, padding:'28px 24px', backdropFilter:'blur(40px)', WebkitBackdropFilter:'blur(40px)' }}>

            <div style={{ fontSize:18, fontWeight:700, color:'#fff', marginBottom:4 }}>GoGaga Admin</div>
            <div style={{ fontSize:13, color:'rgba(255,220,200,0.75)', marginBottom:24 }}>Travel AI Command Center</div>

            {/* Stats */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:24 }}>
              {[
                { label:'Leads Today', value:'24', color:'#60A5FA' },
                { label:'AI Handled', value:'87%', color:'#A78BFA' },
                { label:'Bookings', value:'₹2.4L', color:'#F7BFA0' },
                { label:'Response', value:'8s', color:'#34D399' },
              ].map(s => (
                <div key={s.label} style={{ background:'rgba(255,255,255,0.08)', borderRadius:12, padding:'10px 14px' }}>
                  <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', marginBottom:4, textTransform:'uppercase', letterSpacing:'0.5px' }}>{s.label}</div>
                  <div style={{ fontSize:20, fontWeight:700, color:s.color }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Enter button — GoGaga Command Center is a separate deployment
                (techscapeai-platform) with no public URL wired here yet, so
                this stays disabled rather than linking to a 404 or guessing
                a destination. */}
            <button
              disabled
              title="Coming soon"
              style={{ width:'100%', height:50, background:'linear-gradient(135deg, rgba(200,120,80,0.85), rgba(220,96,56,0.9))', border:'1px solid rgba(255,180,140,0.4)', borderRadius:14, color:'#fff', fontSize:15, fontWeight:700, cursor:'not-allowed', display:'flex', alignItems:'center', justifyContent:'center', gap:8, opacity:0.6 }}>
              Launch Command Center — Coming Soon
            </button>

            <div style={{ textAlign:'center', marginTop:16, fontSize:11, color:'rgba(255,255,255,0.35)' }}>
              Powered by TechScape AI · Anthropic Partner
            </div>
          </div>

          {/* Live indicator */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:20, justifyContent:'center' }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:'#10B981' }}></div>
            <span style={{ fontSize:12, color:'rgba(255,255,255,0.5)' }}>Agent online · WhatsApp active</span>
          </div>
        </div>
      </div>

    </div>
  )
}
