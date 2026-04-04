import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// 3D-style globe SVG matching the Figma hero illustration
function GlobeIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(61,117,243,0.18) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Globe SVG */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[480px] max-h-[480px] animate-float relative z-10"
      >
        <defs>
          <radialGradient id="globeGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#3D75F3" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#1a3a8a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#050510" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3D75F3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3D75F3" stopOpacity="0" />
          </radialGradient>
          <clipPath id="globeClip">
            <circle cx="200" cy="200" r="170" />
          </clipPath>
        </defs>

        {/* Outer glow ring */}
        <circle cx="200" cy="200" r="185" fill="url(#glowGrad)" />

        {/* Globe base */}
        <circle cx="200" cy="200" r="170" fill="url(#globeGrad)" />

        {/* Grid lines — latitude */}
        <g clipPath="url(#globeClip)" stroke="rgba(100,150,255,0.25)" strokeWidth="0.8" fill="none">
          {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((y) => (
            <ellipse key={y} cx="200" cy={y} rx="170" ry={Math.abs(y - 200) * 0.4 + 10} />
          ))}
          {/* Grid lines — longitude */}
          {[-120, -80, -40, 0, 40, 80, 120].map((offset) => (
            <ellipse key={offset} cx="200" cy="200" rx={Math.abs(offset) * 0.6 + 20} ry="170" />
          ))}
        </g>

        {/* Continents / land masses */}
        <g clipPath="url(#globeClip)" fill="rgba(61,117,243,0.5)" stroke="rgba(100,160,255,0.4)" strokeWidth="0.5">
          <path d="M120 160 Q140 140 170 145 Q190 150 200 165 Q185 180 165 175 Q140 180 120 160Z" />
          <path d="M210 140 Q235 130 260 140 Q275 155 265 170 Q245 175 225 165 Q208 155 210 140Z" />
          <path d="M155 195 Q175 185 195 190 Q210 200 205 215 Q185 222 165 215 Q150 207 155 195Z" />
          <path d="M240 185 Q258 178 275 188 Q285 200 278 212 Q260 218 244 210 Q232 200 240 185Z" />
          <path d="M130 225 Q155 215 175 225 Q185 238 175 250 Q155 255 135 245 Q122 235 130 225Z" />
        </g>

        {/* Highlight shimmer */}
        <ellipse cx="155" cy="145" rx="55" ry="35" fill="rgba(255,255,255,0.06)" />

        {/* Ring / orbit */}
        <ellipse
          cx="200" cy="200" rx="220" ry="55"
          stroke="rgba(61,117,243,0.35)" strokeWidth="1.5" fill="none"
          transform="rotate(-20 200 200)"
        />
        {/* Dot on ring */}
        <circle cx="340" cy="175" r="5" fill="#F5A086" opacity="0.9" />
        <circle cx="62" cy="225" r="4" fill="#3D75F3" opacity="0.9" />

        {/* Border glow */}
        <circle cx="200" cy="200" r="170" stroke="rgba(61,117,243,0.4)" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Floating info cards */}
      <div
        className="absolute top-[8%] right-[2%] rounded-xl px-3 py-2.5 text-left"
        style={{ background: 'rgba(13,13,20,0.88)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
      >
        <p className="text-[10px] font-semibold text-white">AI Automation</p>
        <p className="text-[9px] text-white/50 mt-0.5">↑ 98% efficiency</p>
      </div>
      <div
        className="absolute bottom-[18%] left-[0%] rounded-xl px-3 py-2.5 text-left"
        style={{ background: 'rgba(13,13,20,0.88)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
      >
        <p className="text-[10px] font-semibold text-white">Global Reach</p>
        <p className="text-[9px] text-white/50 mt-0.5">India · USA · Canada</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Subtle background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 65% 50%, rgba(61,117,243,0.09) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-96px)]">

          {/* Left — Text */}
          <div>
            {/* Section label */}
            <p className="section-label mb-6">About</p>

            {/* Main headline */}
            <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              We Build AI Tools<br />
              That Move Your<br />
              <span className="gradient-text">Business Forward</span>
            </h1>

            {/* Sub text */}
            <p className="text-[16px] lg:text-[17px] text-white/55 leading-relaxed max-w-[480px] mb-10">
              Tech Scape AI was built with one belief — that Artificial Intelligence should work for people, not replace them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="gradient-btn btn-transition inline-flex items-center justify-center gap-2 px-7 h-[48px] rounded-[4px] text-[15px] font-semibold text-white"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-transition inline-flex items-center justify-center gap-2 px-7 h-[48px] rounded-[4px] text-[15px] font-semibold text-white/70 border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/[0.03]"
              >
                See What We Build
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/[0.07]">
              {[
                { value: '50+', label: 'AI Projects Delivered' },
                { value: '3', label: 'Countries — India, USA, Canada' },
                { value: '100%', label: 'Purpose-built Solutions' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[26px] font-bold gradient-text leading-none">{value}</p>
                  <p className="text-[12px] text-white/45 mt-1 max-w-[120px] leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Globe Illustration */}
          <div className="relative w-full h-[480px] lg:h-[560px] flex items-center justify-center">
            <GlobeIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
