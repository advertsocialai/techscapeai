import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STATS = [
  { value: 'Free',    label: 'Consultation' },
  { value: '2 Weeks', label: 'POC Delivery' },
  { value: 'Global',  label: 'Coverage' },
  { value: '100%',    label: 'Custom Built' },
]

const CHECKLIST_RIGHT = [
  {
    text: '30-Minute Discovery Call',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#3D75F3" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: 'No Commitment Required',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="#3D75F3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    text: 'Get A Clear Action Plan On The Call',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="#3D75F3" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="get-started" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>

        {/* ── Top banner card (Figma Frame 122) ── */}
        <div
          className={`flex flex-col items-center justify-center gap-[32px] rounded-[24px] px-[24px] py-[48px] text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background: 'linear-gradient(to right, rgba(255,122,0,0.1) 0%, rgba(27,43,74,0.1) 100%)',
          }}
        >
          <p className="text-[16px] font-medium text-[#e5e7eb] leading-[25px] tracking-[-0.48px]">
            Every hour your team spends on manual work is an hour your competitor&apos;s AI is doing it faster. Let&apos;s fix that.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 h-[44px] text-[14px] font-medium text-white rounded-[8px] capitalize"
            style={{
              backgroundImage: 'linear-gradient(104.54deg, #3D75F3 58.744%, #F5A186 117.01%)',
              boxShadow: '0px 4px 4px 0px rgba(78,157,255,0.22)',
            }}
          >
            Book a Free consultation
          </Link>
          <p className="text-[16px] font-medium text-[#e5e7eb] leading-[25px] tracking-[-0.48px]">
            See What We Can Build For You
          </p>
        </div>

        {/* ── Two panels ── */}
        <div
          className={`flex flex-col lg:flex-row gap-0 rounded-[20px] overflow-hidden transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* ── Left panel ── */}
          <div
            className="flex-shrink-0 w-full lg:w-[592px] min-h-0 lg:min-h-[822px] rounded-t-[16px] lg:rounded-t-none lg:rounded-l-[16px] p-10 lg:p-12 flex flex-col justify-between gap-8"
            style={{
              background: 'linear-gradient(90deg, #FF7A00 0%, #1B2B4A 100%)',
            }}
          >
            {/* Top: label + headline */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white/70 mb-5">
                Get Started
              </p>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-[-0.025em] text-white leading-[1.1] mb-8">
                Every hour your team spends on manual work is an hour your competitor&apos;s AI is doing it faster.
              </h2>
              <Link
                to="/contact"
                className="btn inline-flex items-center gap-2 px-8 h-[52px] text-[15px] font-semibold text-white"
              >
                Book A Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Bottom: stats 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <p className="text-[22px] font-extrabold text-white leading-none mb-1">{value}</p>
                  <p className="text-[11px] text-white/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right panel ── */}
          <div
            className="flex-1 rounded-b-[16px] lg:rounded-b-none lg:rounded-r-[16px] p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden"
            style={{ background: '#080810' }}
          >
            {/* Gradient glow background (Hero 6 style) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(61,117,243,0.08) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <p className="label mb-4">Why TechScape AI</p>
              <p className="text-[15px] text-white/45 leading-relaxed max-w-md mb-10">
                Whether you&apos;re a business looking to automate, a student ready to upskill, or a partner exploring collaboration — the first conversation is always free.
              </p>

              {/* Checklist items with 41px gap */}
              <div className="flex flex-col gap-[41px]">
                {CHECKLIST_RIGHT.map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="text-[16px] text-[#888]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Got A Project In Mind ── */}
        <div
          className={`mt-10 rounded-[20px] p-10 lg:p-12 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}
        >
          <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-white tracking-[-0.025em] leading-tight mb-6">
            Got A Project In Mind
          </h3>
          <Link
            to="/contact"
            className="btn inline-flex items-center gap-2 px-8 h-[48px] text-[14px] font-semibold text-white rounded-[8px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
