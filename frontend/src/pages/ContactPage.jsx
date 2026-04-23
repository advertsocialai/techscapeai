import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitContact } from '../services/api'

const ROLE_OPTIONS = [
  'Founder / CEO',
  'CTO / Tech Lead',
  'Product Manager',
  'Marketing Lead',
  'Operations Manager',
  'Other',
]

const INTEREST_OPTIONS = [
  'AI Agents & Automation',
  'Digital Marketing & SEO',
  'Training & Education',
  'CRM & Digital Branding',
  'Custom POC Build',
  'General Inquiry',
]

const CHECKPOINTS = [
  'Free first consultation — no commitment required',
  'Response within 24 hours',
  'Custom proposal scoped to your exact needs',
  'Delivery timeline agreed upfront',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', role: '', interest: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setStatus('loading')
    try {
      await submitContact(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', role: '', interest: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-black pt-12 pb-20">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(61,117,243,0.07) 0%, transparent 60%)' }} />

      <div className="wrap relative">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="label mb-4">Contact Us</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-extrabold tracking-[-0.02em] text-white leading-tight mb-5">
            Let&apos;s Build Something<br />
            <span className="grad-text">Together</span>
          </h1>
          <p className="text-[16px] text-white/45 max-w-md mx-auto leading-relaxed">
            Tell us what you&apos;re working on. The first consultation is always free.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">

          {/* Left -- Form */}
          <div>
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(61,117,243,0.15)', border: '1px solid rgba(61,117,243,0.3)' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l7 7 11-12" stroke="#3D75F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[14px] text-white/50 mb-8 max-w-xs mx-auto">
                  We&apos;ll get back to you within 24 hours with a clear plan of action.
                </p>
                <button onClick={() => setStatus('idle')}
                  className="btn inline-flex items-center px-7 h-[44px] text-[14px] font-semibold text-white">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,122,0,0.1) 0%, rgba(27,43,74,0.1) 100%)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                }}
              >
                {/* Form heading */}
                <h2 className="text-[33px] font-semibold text-white">Send Us a Message</h2>

                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name *"
                    className="w-full bg-transparent text-[24px] text-white placeholder-[#c5c5c5] pb-3 outline-none"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => e.target.style.borderBottomColor = 'rgba(61,117,243,0.5)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent text-[24px] text-white placeholder-[#c5c5c5] pb-3 outline-none"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => e.target.style.borderBottomColor = 'rgba(61,117,243,0.5)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-[24px] text-white placeholder-[#c5c5c5] pb-3 outline-none"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => e.target.style.borderBottomColor = 'rgba(61,117,243,0.5)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* I am a (Role) */}
                <div className="relative">
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full bg-transparent text-[24px] text-white pb-3 outline-none appearance-none cursor-pointer"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: form.role ? '#fff' : '#c5c5c5' }}
                  >
                    <option value="" disabled style={{ color: '#333', background: '#1a1a1a' }}>I am a</option>
                    {ROLE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} style={{ color: '#fff', background: '#1a1a1a' }}>{opt}</option>
                    ))}
                  </select>
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* I am interested in */}
                <div className="relative">
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-transparent text-[24px] text-white pb-3 outline-none appearance-none cursor-pointer"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: form.interest ? '#fff' : '#c5c5c5' }}
                  >
                    <option value="" disabled style={{ color: '#333', background: '#1a1a1a' }}>I am interested in</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} style={{ color: '#fff', background: '#1a1a1a' }}>{opt}</option>
                    ))}
                  </select>
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your need"
                    className="w-full bg-transparent text-[24px] text-white placeholder-[#c5c5c5] pb-3 outline-none resize-none"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => e.target.style.borderBottomColor = 'rgba(61,117,243,0.5)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-[13px] text-red-400">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 h-[44px] text-[15px] font-semibold text-white disabled:opacity-60 transition-all"
                  style={{
                    background: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',
                    borderRadius: '8px',
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right -- Booking card */}
          <div>
            <div className="rounded-2xl p-8" style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}>
              <p className="label mb-4">What You Get</p>
              <h3 className="text-[22px] font-bold text-white mb-6 leading-snug">
                A Free Consultation, A Clear Plan, And A Team That Actually Delivers.
              </h3>
              <ul className="space-y-4 mb-8">
                {CHECKPOINTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(61,117,243,0.15)', border: '1px solid rgba(61,117,243,0.3)' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[14px] text-white/60 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/[0.07] pt-6">
                <p className="text-[12px] text-white/30 uppercase tracking-widest font-semibold mb-3">Or reach us directly</p>
                <a href="mailto:hello@techscapeai.com"
                  className="text-[14px] text-white/60 hover:text-white transition-colors block">
                  hello@techscapeai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
