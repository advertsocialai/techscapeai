import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import heroSphere from '../assets/hero-sphere.png'
import heroTagIcon from '../assets/hero-tag-icon.png'
import heroTagIcon2 from '../assets/hero-tag-icon2.png'

/* Figma Frame 28988 (228:418) — 1274×474 at (112, 149).
   Right panel Group 218 (205:500) is 546×474.
   Inside the right panel:
     - performance marketing (163:486)  → left 49, top  32  (9.0%, 6.75%)
     - Software development  (163:493)  → left 409, top 66  (74.9%, 13.92%)
     - Ai Solutions          (159:481)  → left 346, top 409 (63.4%, 86.29%) */

const TAGS = [
  { key: 'perf',  lines: ['performance', 'marketing'],  icon: heroTagIcon2, style: { top: '6.75%',  left: '9%'   } },
  { key: 'soft',  lines: ['Software',    'development'], icon: heroTagIcon,  style: { top: '13.92%', left: '74.9%' } },
  { key: 'ai',    lines: ['Ai Solutions'],               icon: heroTagIcon,  style: { top: '86.29%', left: '63.4%' } },
]

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="relative bg-black overflow-hidden flex items-center">
      {/* Subtle bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
      />

      <div className="wrap w-full pt-[149px] pb-20" ref={ref}>
        {/* Figma 228:418: 1274 wide, 474 tall on desktop */}
        <div className="grid lg:grid-cols-[667px_546px] gap-10 lg:gap-[61px] items-center lg:h-[474px] max-w-[1274px] mx-auto">

          {/* Left column — Figma Frame 104 (150:422), 667×291 */}
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

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-[218px] h-[44px] text-[14px] font-medium text-white rounded-[8px] capitalize"
              style={{
                backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',
                boxShadow: '0 4px 4px 0 rgba(78,157,255,0.22)',
              }}
            >
              Book a Free consultation
            </Link>
          </div>

          {/* Right column — Group 218 (205:500) 546×474 with sphere + 3 floating tags */}
          <div
            className={`relative w-full aspect-[546/474] lg:w-[546px] lg:h-[474px] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img src="/globe.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
