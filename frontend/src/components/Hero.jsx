import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import heroSphere from '../assets/hero-sphere.png'
import heroTagIcon from '../assets/hero-tag-icon.png'
import heroTagIcon2 from '../assets/hero-tag-icon2.png'

const TAGS = [
  { lines: ['performance', 'marketing'], icon: heroTagIcon2, top: '7%',  left: '9%'  },
  { lines: ['Software',    'development'], icon: heroTagIcon,  top: '14%', right: '2%' },
  { lines: ['Ai Solutions'],              icon: heroTagIcon,  bottom: '14%', right: '14%' },
]

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

      <div className="wrap w-full pt-[101px] pb-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center lg:h-[474px]">

          {/* Left — Text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <h1 className="capitalize text-[36px] sm:text-[46px] lg:text-[52px] font-semibold tracking-[-1.56px] leading-[1.1] mb-5 max-w-[667px]">
              We Build{' '}
              <span
                className="bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)',
                }}
              >
                AI Solutions
              </span>{' '}
              That Move Your Business Forward
            </h1>

            <p className="text-[16px] font-light leading-[25px] text-[#e5e7eb] tracking-[-0.48px] max-w-[619px] mb-10">
              Tech Scape AI is a global AI services company delivering intelligent automation, custom AI agents, digital transformation, and world-class technology training trusted by businesses across the USA, Canada, and India.
            </p>

            <div className="flex items-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 h-[44px] text-[14px] font-medium text-white rounded-[8px] capitalize"
                style={{
                  backgroundImage:
                    'linear-gradient(104.54deg, #3D75F3 58.744%, #F5A186 117.01%)',
                  boxShadow: '0px 4px 4px 0px rgba(78,157,255,0.22)',
                }}
              >
                Book a Free consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Hero sphere image with floating tags */}
          <div
            className={`relative h-[340px] sm:h-[420px] lg:h-[474px] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(61,117,243,0.2) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />

              <img
                src={heroSphere}
                alt="AI sphere illustration"
                className="relative z-10 w-full max-w-[516px] h-auto object-contain float"
                style={{ filter: 'drop-shadow(0 0 70px rgba(61,117,243,0.35))' }}
              />

              {/* Floating feature tags — hidden on mobile */}
              {TAGS.map(({ lines, icon, ...pos }, i) => (
                <div
                  key={i}
                  className="hidden sm:flex absolute items-center gap-2 rounded-[56px] p-2 capitalize text-[14px] font-medium text-[#fad4bf] z-20"
                  style={{
                    ...pos,
                    background:
                      'linear-gradient(103.93deg, rgba(250,212,191,0.2) 1.126%, rgba(255,255,255,0.2) 98.874%)',
                    border: '1px solid rgba(255,255,255,0.13)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    letterSpacing: '-0.42px',
                  }}
                >
                  <img src={icon} alt="" className="w-[28px] h-[27px] flex-shrink-0" />
                  <span className="leading-[14px] whitespace-nowrap">
                    {lines.map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
