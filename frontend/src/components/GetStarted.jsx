import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma 209:531 (eyebrow) + 209:533 (heading) + 209:532 (body)
   Left: Frame 120 (189:436) — "Send Us a Message" contact form
   Right: Frame 135 (209:523) + Hero 6 (144:512) — "Book a Free Consultation Directly"
          + 3-item checklist (Frame 147/209:599) + "Book Your Free Consultation" button */

const I_AM_OPTIONS = ['A Business', 'A Student', 'A Partner', 'Other']
const INTEREST_OPTIONS = [
  'AI Agents & Automation',
  'Digital Services & Transformation',
  'Technology Training & EdTech',
  'CRM & SaaS for Small Business',
  'Partnership Opportunity',
  'Other',
]

const CHECK_ITEMS = [
  '30-minute discovery call',
  'No commitment required',
  'Get a clear action plan on the call',
]

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#3D75F3" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-6" stroke="#3D75F3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function GetStarted() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    iAm: '',
    interestedIn: '',
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submission is wired to ContactPage/api.js; this on-page form is a direct shortcut.
    window.location.href = '/contact'
  }

  return (
    <section id="get-started" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>

        {/* Header — Figma 209:531 / 533 / 532 */}
        <div
          className={`text-center max-w-[900px] mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="label mb-4">Get Started</p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-1.32px] text-white leading-[1.2] mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[15px] lg:text-[16px] text-white/55 leading-[25px] tracking-[-0.48px] max-w-[833px] mx-auto">
            Whether you&apos;re a business looking to automate, a student ready to upskill, or a partner exploring collaboration — the first conversation is always free. Tell us what you need and we&apos;ll tell you exactly how we can help.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

          {/* ── Left: Figma Frame 120 (189:436) — contact form, 592×822 ── */}
          <div
            className="rounded-[20px] p-8 lg:p-10"
            style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}
          >
            <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-white leading-[1.2] tracking-[-1.08px] mb-8">
              Send Us a Message
            </h3>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[13px] font-medium text-white/70 mb-2">
                  Full Name <span className="text-[#F5A086]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={update('fullName')}
                  placeholder="Your full name"
                  className="input-line"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white/70 mb-2">
                  Email Address <span className="text-[#F5A086]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.com"
                  className="input-line"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white/70 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+1 555 000 1111"
                  className="input-line"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white/70 mb-2">
                  I am a
                </label>
                <select value={form.iAm} onChange={update('iAm')} className="select-line">
                  <option value="">Select one</option>
                  {I_AM_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white/70 mb-2">
                  I am interested in
                </label>
                <select value={form.interestedIn} onChange={update('interestedIn')} className="select-line">
                  <option value="">Select one</option>
                  {INTEREST_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white/70 mb-2">
                  Tell us about your need
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="A few sentences is enough to get us started."
                  className="input-line resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 h-[44px] text-[14px] font-medium text-white rounded-[8px] mt-2"
                style={{
                  backgroundImage: 'linear-gradient(104.54deg, #3D75F3 58.744%, #F5A186 117.01%)',
                  boxShadow: '0px 4px 4px 0px rgba(78,157,255,0.22)',
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ── Right: Book directly + Hero 6 consultation panel ── */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-[20px] p-8 lg:p-10"
              style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}
            >
              <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-white leading-[1.2] tracking-[-1.08px] mb-4">
                Book a Free Consultation Directly
              </h3>
              <p className="text-[15px] lg:text-[16px] text-white/55 leading-[25px] tracking-[-0.48px] mb-8 max-w-[508px]">
                Skip the form. Pick a time that works for you and get on a call with our team within 24 hours.
              </p>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 h-[44px] text-[14px] font-medium text-white rounded-[8px] mb-8"
                style={{
                  backgroundImage: 'linear-gradient(104.54deg, #3D75F3 58.744%, #F5A186 117.01%)',
                  boxShadow: '0px 4px 4px 0px rgba(78,157,255,0.22)',
                }}
              >
                Book Your Free Consultation
              </Link>
            </div>

            {/* Hero 6 band — gradient with 3-check list (Figma 144:512 + 209:599) */}
            <div
              className="relative rounded-[20px] p-10 overflow-hidden"
              style={{
                background: 'linear-gradient(97.97deg, rgba(61,117,243,0.22) 0%, rgba(245,160,134,0.22) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 50% at 70% 30%, rgba(61,117,243,0.22) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10 flex flex-col gap-[26px]">
                {CHECK_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-[11px]">
                    <CheckIcon />
                    <span className="text-[16px] text-white font-medium leading-[25px] tracking-[-0.48px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
