import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import heroIllustration from '../assets/hero-illustration.svg'
import heroTagIcon from '../assets/hero-tag-icon.png'
import heroTagIcon2 from '../assets/hero-tag-icon2.png'

const TAGS = [
  { text: 'Performance Marketing', icon: heroTagIcon2, top: '8%',  left: '-5%' },
  { text: 'Software Development',  icon: heroTagIcon,  top: '12%', right: '-2%' },
  { text: 'AI Solutions',          icon: heroTagIcon,  bottom: '18%', right: '0%' },
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

            <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.1] tracking-[-1.44px] mb-5">
              We Build{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #0050fe, #af90af, #ffd0c0)' }}
              >
                AI Solutions
              </span>{' '}
              That Move Your Business Forward
            </h1>

            <p className="text-[16px] font-light leading-[25px] text-[#e5e7eb] tracking-[-0.48px] max-w-[520px] mb-7">
              Tech Scape AI is a global AI services company delivering intelligent automation, custom AI agents, digital transformation, and world-class technology training trusted by businesses across the USA, Canada, and India.
            </p>

            <div className="flex items-start">
              <Link
                to="/contact"
                className="btn inline-flex items-center gap-2 px-7 h-[46px] text-[14px] font-semibold text-white rounded-[8px]"
                style={{ boxShadow: '0px 4px 4px 0px rgba(78,157,255,0.22)' }}
              >
                Book a Free Consultation
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
                src={heroIllustration}
                alt="AI sphere illustration"
                className="relative z-10 w-full max-w-[546px] h-auto object-contain float"
                style={{ filter: 'drop-shadow(0 0 70px rgba(61,117,243,0.35))' }}
              />

              {/* Floating feature tags — hidden on mobile */}
              {TAGS.map(({ text, icon, ...pos }) => (
                <div
                  key={text}
                  className="hidden sm:flex absolute items-center gap-2 rounded-[56px] px-4 py-2.5 text-[14px] font-medium text-[#fad4bf] whitespace-nowrap z-20"
                  style={{
                    ...pos,
                    background: 'linear-gradient(135deg, rgba(250,212,191,0.2), rgba(255,255,255,0.2))',
                    border: '1px solid rgba(255,255,255,0.13)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  <img src={icon} alt="" className="w-5 h-5 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
