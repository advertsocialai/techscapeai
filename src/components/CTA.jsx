import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 lg:py-20 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(6, 182, 212, 0.12) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
          }}
        >
          {/* Background glows inside card */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <div
              className="absolute bottom-[-20%] right-[10%] w-[300px] h-[300px] rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

          <div className="relative">
            {/* Icon */}
            <div className="inline-flex w-16 h-16 rounded-2xl gradient-bg items-center justify-center mb-6 shadow-2xl shadow-purple-900/40 animate-glow">
              <Zap className="w-8 h-8 text-white fill-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
              Ready to navigate the
              <br />
              <span className="gradient-text">future of technology?</span>
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed mb-10">
              Join 12,000+ engineering teams using TechScape AI to make smarter technology decisions, faster. Free to start, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-white rounded-xl btn-primary shadow-xl shadow-purple-900/40"
              >
                Start for Free Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-white rounded-xl border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
              >
                Learn More
              </a>
            </div>

            {/* Guarantee */}
            <p className="text-sm text-[#6B7280] mt-8 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
