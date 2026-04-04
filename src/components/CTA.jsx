import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="relative bg-black py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* Left — Main CTA */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center"
            style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
          >
            <p className="section-label mb-6">GET STARTED</p>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-white tracking-[-0.02em] leading-snug mb-4">
              Every hour your team spends on manual work is an hour your competitor's AI is doing it faster.
            </h2>
            <p className="text-[14px] text-white/50 leading-relaxed mb-8">
              Whether you're a business looking to automate, a student ready to upskill, or a partner exploring collaboration — the first conversation is always free.
            </p>
            <Link
              to="/contact"
              className="gradient-btn btn-transition inline-flex items-center gap-2 px-7 h-[44px] rounded-[4px] text-[14px] font-semibold text-white mb-4"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-[12px] text-white/30">See What We Can Build For You →</p>
          </div>

          {/* Right — "Got a project" card */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-2xl p-8 flex flex-col items-center text-center card-hover"
              style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
            >
              <h3 className="text-[26px] font-bold text-white mb-6">Got a project in mind?</h3>
              <Link
                to="/contact"
                className="gradient-btn btn-transition inline-flex items-center gap-2 px-6 h-[44px] rounded-[4px] text-[14px] font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust signals */}
            <div
              className="rounded-2xl p-6 grid grid-cols-2 gap-4"
              style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
            >
              {[
                { value: 'Free', label: 'First Consultation' },
                { value: '2 Weeks', label: 'POC Delivery' },
                { value: 'Global', label: 'Team Coverage' },
                { value: '100%', label: 'Custom Solutions' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-3 rounded-xl" style={{ background: '#111', border: '1px solid #1E1E1E' }}>
                  <p className="text-[20px] font-bold gradient-text">{value}</p>
                  <p className="text-[11px] text-white/35 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
