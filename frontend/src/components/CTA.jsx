import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STATS = [
  { value: 'Free',    label: 'Consultation' },
  { value: '2 Weeks', label: 'POC Delivery' },
  { value: 'Global',  label: 'Coverage' },
  { value: '100%',    label: 'Custom Built' },
]

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="get-started" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        {/* Gradient-border CTA card */}
        <div
          className={`grad-border relative rounded-[20px] p-10 lg:p-16 text-center overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background: 'linear-gradient(135deg, #0a0c1a 0%, #08080f 100%)',
          }}
        >
          {/* Blue radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(61,117,243,0.1) 0%, transparent 65%)',
            }}
          />
          {/* Shimmer layer */}
          <div className="absolute inset-0 shimmer pointer-events-none opacity-60" />

          <div className="relative z-10">
            <p className="label mb-5">Get Started</p>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-extrabold tracking-[-0.025em] text-white leading-[1.1] mb-5 max-w-2xl mx-auto">
              Every hour your team spends on manual work is an hour your competitor&apos;s AI is doing it faster.
            </h2>

            <p className="text-[15px] text-white/45 leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you&apos;re a business looking to automate, a student ready to upskill, or a partner exploring collaboration — the first conversation is always free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn inline-flex items-center gap-2 px-8 h-[52px] text-[15px] font-semibold text-white"
              >
                Book A Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 h-[52px] text-[15px] font-semibold text-white/55 hover:text-white transition-colors rounded-full"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                See What We Can Build →
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-xl mx-auto">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-[20px] sm:text-[22px] font-extrabold grad-text leading-none mb-1">{value}</p>
                  <p className="text-[11px] text-white/30 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
