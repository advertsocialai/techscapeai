import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STATS = [
  { value: '50+',    label: 'Clients Served' },
  { value: '2 Wks', label: 'POC Delivery' },
  { value: '3',     label: 'Countries' },
  { value: '100%',  label: 'Custom Built' },
]

const TAGS = [
  { text: '⚡ Performance Marketing', top: '10%',  right: '3%' },
  { text: '💻 Software Development',  top: '40%',  right: '0%' },
  { text: '🤖 AI Solutions',          bottom: '16%', right: '5%' },
]

function Sphere() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(61,117,243,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <svg
        viewBox="0 0 500 500"
        fill="none"
        className="w-full h-full max-w-[480px] float relative z-10"
        style={{ filter: 'drop-shadow(0 0 70px rgba(61,117,243,0.35))' }}
      >
        <defs>
          <radialGradient id="hSphereBase" cx="38%" cy="32%" r="65%">
            <stop offset="0%"   stopColor="#7AA3FF" stopOpacity="0.55" />
            <stop offset="40%"  stopColor="#1B3B8A" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#040A18" stopOpacity="0.97" />
          </radialGradient>
          <radialGradient id="hSphereGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#3D75F3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3D75F3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hCrystal1" cx="40%" cy="35%" r="60%">
            <stop offset="0%"   stopColor="#9B5DE5" stopOpacity="0.95" />
            <stop offset="50%"  stopColor="#3D75F3" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#060D2E" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="hCrystal2" cx="60%" cy="60%" r="50%">
            <stop offset="0%"   stopColor="#F5A086" stopOpacity="0.95" />
            <stop offset="60%"  stopColor="#E879F9" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1a0a1e" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="hCrystal3" cx="50%" cy="30%" r="60%">
            <stop offset="0%"   stopColor="#60A5FA" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="1" />
          </radialGradient>
          <clipPath id="hSphereClip"><circle cx="250" cy="250" r="195" /></clipPath>
          <filter id="hBlur4"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="hBlur2"><feGaussianBlur stdDeviation="2" /></filter>
          <filter id="hBlur8"><feGaussianBlur stdDeviation="8" /></filter>
        </defs>

        {/* Outer glow */}
        <circle cx="250" cy="250" r="222" fill="url(#hSphereGlow)" />

        {/* Sphere base */}
        <circle cx="250" cy="250" r="195" fill="url(#hSphereBase)" />

        {/* Crystal shapes */}
        <g clipPath="url(#hSphereClip)">
          <path
            d="M125 195 Q152 142 186 164 Q214 190 202 238 Q190 278 158 268 Q116 252 125 195Z"
            fill="url(#hCrystal1)" opacity="0.88"
          />
          <path
            d="M130 200 Q155 150 185 170 Q208 196 198 238"
            stroke="rgba(160,190,255,0.5)" strokeWidth="1" fill="none"
          />
          <path
            d="M278 136 Q322 114 354 152 Q376 184 358 220 Q337 247 306 236 Q268 220 278 136Z"
            fill="url(#hCrystal3)" opacity="0.82"
          />
          <path
            d="M218 308 Q244 282 277 294 Q304 310 298 347 Q282 372 250 361 Q213 346 218 308Z"
            fill="url(#hCrystal2)" opacity="0.92"
          />
          {/* Small accent crystals */}
          <path
            d="M308 278 Q324 262 340 270 Q351 282 342 297 Q329 306 314 298Z"
            fill="rgba(100,160,255,0.75)"
          />
          <path
            d="M168 288 Q181 275 193 283 Q200 293 193 304 Q181 310 170 303Z"
            fill="rgba(245,160,134,0.75)"
          />
          {/* Highlight shimmers */}
          <ellipse cx="158" cy="188" rx="22" ry="32" fill="rgba(255,255,255,0.13)"
            transform="rotate(-20 158 188)" filter="url(#hBlur2)" />
          <ellipse cx="304" cy="157" rx="18" ry="26" fill="rgba(255,255,255,0.1)"
            transform="rotate(-10 304 157)" filter="url(#hBlur2)" />
          {/* Inner light refraction */}
          <ellipse cx="200" cy="300" rx="60" ry="20" fill="rgba(245,160,134,0.08)"
            filter="url(#hBlur8)" />
        </g>

        {/* Sphere rim */}
        <circle cx="250" cy="250" r="195" stroke="rgba(150,180,255,0.28)" strokeWidth="1.5" fill="none" />

        {/* Top-left highlight */}
        <ellipse cx="183" cy="168" rx="58" ry="40" fill="rgba(255,255,255,0.08)"
          transform="rotate(-30 183 168)" filter="url(#hBlur4)" />

        {/* Orbital ring */}
        <ellipse cx="250" cy="250" rx="232" ry="60"
          stroke="rgba(61,117,243,0.32)" strokeWidth="1.5" fill="none"
          transform="rotate(-22 250 250)"
          strokeDasharray="6 4"
        />
        {/* Orbital dots */}
        <circle cx="392" cy="186" r="5.5" fill="#3D75F3" opacity="0.9" />
        <circle cx="110" cy="314" r="4.5" fill="#F5A086" opacity="0.9" />

        {/* Secondary thin ring */}
        <ellipse cx="250" cy="250" rx="210" ry="40"
          stroke="rgba(245,160,134,0.15)" strokeWidth="1" fill="none"
          transform="rotate(15 250 250)"
        />
      </svg>

      {/* Floating feature tags — hidden on mobile */}
      {TAGS.map(({ text, ...pos }) => (
        <div
          key={text}
          className="hidden sm:flex absolute items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-medium text-white/85 whitespace-nowrap"
          style={{
            ...pos,
            background: 'rgba(13,13,20,0.88)',
            border: '1px solid rgba(255,255,255,0.13)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          {text}
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center grid-bg">
      {/* Radial blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 75% at 68% 45%, rgba(61,117,243,0.12) 0%, transparent 60%)',
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
      />

      {/*
        Figma frame: 1274×474px, leading: 112px, top: 149px
        → top-[149px] = navbar(48px) + section pt(101px)
        → width 1274px handled by .wrap (max-w + padding: 112px)
        → height 474px = lg:h-[474px] on the grid
      */}
      <div className="wrap w-full pt-[101px] pb-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center lg:h-[474px]">

          {/* Left — Text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-[12px] font-semibold text-white/70"
              style={{ background: 'rgba(61,117,243,0.1)', border: '1px solid rgba(61,117,243,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D75F3] animate-pulse" />
              AI-Powered Solutions
            </div>

            <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5">
              We Build{' '}
              <span className="grad-text">AI Solutions</span>{' '}
              That Move Your Business Forward
            </h1>

            <p className="text-[14px] lg:text-[15px] text-white/50 leading-relaxed max-w-[500px] mb-7">
              TechScape AI is a global AI services company delivering intelligent automation, custom AI agents, digital transformation, and world-class technology training — trusted by businesses across the USA, Canada, and India.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                to="/contact"
                className="btn inline-flex items-center gap-2 px-7 h-[46px] text-[14px] font-semibold text-white"
              >
                Book A Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="#services"
                onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 h-[46px] text-[14px] font-semibold text-white/50 hover:text-white transition-colors rounded-full"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                See What We Build
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/[0.07]">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[20px] sm:text-[24px] font-extrabold grad-text leading-none mb-1">{value}</p>
                  <p className="text-[11px] text-white/35 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Sphere — fills the 474px column height */}
          <div
            className={`relative h-[340px] sm:h-[420px] lg:h-[474px] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Sphere />
          </div>
        </div>
      </div>
    </section>
  )
}
