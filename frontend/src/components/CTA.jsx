import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section id="get-started" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        {/* Dark rounded CTA card */}
        <div className={`rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #0a0a12 100%)', border: '1px solid #1a1a2e' }}>

          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(61,117,243,0.08) 0%, transparent 70%)' }} />

          <div className="relative">
            <p className="label mb-6">Get Started</p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.02em] text-white leading-snug mb-5 max-w-2xl mx-auto">
              Every hour your team spends on manual work is an hour your competitor&apos;s AI is doing it faster.
            </h2>
            <p className="text-[15px] text-white/45 leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you&apos;re a business looking to automate, a student ready to upskill, or a partner exploring collaboration — the first conversation is always free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact"
                className="btn inline-flex items-center gap-2 px-8 h-[50px] text-[15px] font-semibold text-white">
                Book A Free Consultation
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 h-[50px] text-[15px] font-semibold text-white/50 hover:text-white transition-colors rounded-full"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                See What We Can Build →
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
              {[
                { value: 'Free', label: 'First Consultation' },
                { value: '2 Weeks', label: 'POC Delivery' },
                { value: 'Global', label: 'Team Coverage' },
                { value: '100%', label: 'Custom Solutions' },
              ].map(({ value, label }) => (
                <div key={label} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-[20px] font-extrabold grad-text">{value}</p>
                  <p className="text-[11px] text-white/30 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
