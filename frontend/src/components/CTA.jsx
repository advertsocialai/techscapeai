import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STATS = [
  { value: 'Free',    label: 'Consultation' },
  { value: '2 Weeks', label: 'POC Delivery' },
  { value: 'Global',  label: 'Coverage' },
  { value: '100%',    label: 'Custom Built' },
]

const CHECKLIST = [
  'Custom-built AI agents tailored to your workflow',
  'POC delivered in as little as 2 weeks',
  'Ongoing support and iterative improvement',
  'Transparent pricing — no hidden fees, ever',
]

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="get-started" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        <div
          className={`flex flex-col lg:flex-row gap-0 rounded-[20px] overflow-hidden transition-all duration-700 ${
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

            {/* Bottom: stats 2×2 */}
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
            className="flex-1 rounded-b-[16px] lg:rounded-b-none lg:rounded-r-[16px] p-10 lg:p-12 flex flex-col justify-center gap-8"
            style={{ background: '#080810' }}
          >
            {/* Subtitle */}
            <div>
              <p className="label mb-4">Why TechScape AI</p>
              <p className="text-[15px] text-white/45 leading-relaxed max-w-md">
                Whether you&apos;re a business looking to automate, a student ready to upskill, or a partner exploring collaboration — the first conversation is always free.
              </p>
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-4">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(61,117,243,0.15)', border: '1px solid rgba(61,117,243,0.35)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#3D75F3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-white/60 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Outline button */}
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 h-[52px] text-[15px] font-semibold text-white/70 hover:text-white transition-colors rounded-full"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                See What We Can Build →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
