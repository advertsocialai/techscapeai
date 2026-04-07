import { Link } from 'react-router-dom'

/* 3D glass sphere matching Figma hero illustration */
function Sphere() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(61,117,243,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full max-w-[480px] float relative z-10"
        style={{ filter: 'drop-shadow(0 0 60px rgba(61,117,243,0.3))' }}>
        <defs>
          {/* Glass sphere gradient */}
          <radialGradient id="sphereBase" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#7AA3FF" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#1B3B8A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3D75F3" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3D75F3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="crystal1" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#9B5DE5" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3D75F3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#060D2E" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="crystal2" cx="60%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#F5A086" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#E879F9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1a0a1e" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="crystal3" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="1" />
          </radialGradient>
          <clipPath id="sphereClip"><circle cx="250" cy="250" r="195" /></clipPath>
          <filter id="blur4"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>

        {/* Outer glow ring */}
        <circle cx="250" cy="250" r="215" fill="url(#sphereGlow)" />

        {/* Sphere base */}
        <circle cx="250" cy="250" r="195" fill="url(#sphereBase)" />

        {/* Crystal shapes inside sphere */}
        <g clipPath="url(#sphereClip)">
          {/* Large blue crystal left */}
          <path d="M130 200 Q155 150 185 170 Q210 195 200 240 Q190 280 160 270 Q120 255 130 200Z"
            fill="url(#crystal1)" opacity="0.85" />
          <path d="M135 205 Q158 158 186 176 Q208 199 198 240" stroke="rgba(150,180,255,0.4)" strokeWidth="1" fill="none" />

          {/* Large blue crystal right-top */}
          <path d="M280 140 Q320 120 350 155 Q370 185 355 220 Q335 245 305 235 Q270 220 280 140Z"
            fill="url(#crystal3)" opacity="0.8" />

          {/* Pink/salmon crystal bottom */}
          <path d="M220 310 Q245 285 275 295 Q300 310 295 345 Q280 370 250 360 Q215 345 220 310Z"
            fill="url(#crystal2)" opacity="0.9" />

          {/* Small accent crystals */}
          <path d="M310 280 Q325 265 340 272 Q350 283 342 297 Q330 305 316 298Z"
            fill="rgba(100,160,255,0.7)" />
          <path d="M170 290 Q182 278 192 284 Q198 293 192 303 Q182 308 172 302Z"
            fill="rgba(245,160,134,0.7)" />

          {/* Highlight shimmer on crystals */}
          <ellipse cx="160" cy="190" rx="20" ry="30" fill="rgba(255,255,255,0.12)"
            transform="rotate(-20 160 190)" filter="url(#blur2)" />
          <ellipse cx="305" cy="160" rx="18" ry="25" fill="rgba(255,255,255,0.1)"
            transform="rotate(-10 305 160)" filter="url(#blur2)" />
        </g>

        {/* Glass sphere rim highlight */}
        <circle cx="250" cy="250" r="195" stroke="rgba(150,180,255,0.25)" strokeWidth="1.5" fill="none" />

        {/* Top-left glass highlight */}
        <ellipse cx="185" cy="170" rx="55" ry="38" fill="rgba(255,255,255,0.07)"
          transform="rotate(-30 185 170)" filter="url(#blur4)" />

        {/* Orbital ring */}
        <ellipse cx="250" cy="250" rx="230" ry="58"
          stroke="rgba(61,117,243,0.3)" strokeWidth="1.5" fill="none"
          transform="rotate(-22 250 250)" />
        <circle cx="390" cy="188" r="5" fill="#3D75F3" opacity="0.9" />
        <circle cx="112" cy="312" r="4" fill="#F5A086" opacity="0.9" />
      </svg>

      {/* Floating tags matching Figma */}
      {[
        { label: '⚡ Performance Marketing', top: '12%', right: '2%' },
        { label: '💻 Software Development', top: '38%', right: '-2%' },
        { label: '🤖 AI Solutions', bottom: '18%', right: '4%' },
      ].map(({ label, ...pos }) => (
        <div key={label} className="absolute rounded-full px-3 py-1.5 text-[11px] font-medium text-white/80 whitespace-nowrap"
          style={{ ...pos, background: 'rgba(15,15,20,0.85)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
          {label}
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 65% 45%, rgba(61,117,243,0.09) 0%, transparent 65%)' }} />

      <div className="wrap w-full pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-[calc(100vh-96px)]">

          {/* Left — Text */}
          <div>
            <h1 className="text-[40px] sm:text-[50px] lg:text-[58px] font-extrabold leading-[1.06] tracking-[-0.02em] mb-5">
              We Build{' '}
              <span className="grad-text">AI Solutions</span>{' '}
              That Move Your Business Forward
            </h1>

            <p className="text-[15px] lg:text-[16px] text-white/50 leading-relaxed max-w-[500px] mb-9">
              Tech Scape AI is a global AI services company delivering intelligent automation, custom AI agents, digital transformation, and world-class technology training trusted by businesses across the USA, Canada, and India.
            </p>

            <Link to="/contact"
              className="btn inline-flex items-center gap-2 px-7 h-[46px] text-[14px] font-semibold text-white">
              Book A Free Consultation
            </Link>
          </div>

          {/* Right — Sphere */}
          <div className="relative h-[420px] lg:h-[540px]">
            <Sphere />
          </div>
        </div>
      </div>
    </section>
  )
}
