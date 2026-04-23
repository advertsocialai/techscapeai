import { useScrollAnimation } from '../hooks/useScrollAnimation'
import partnerNxtwave from '../assets/partner-nxtwave.png'
import partnerAsg from '../assets/partner-asg.png'

/* Figma Frame 80 (129:834) — "In Partnership With" + Frame 72 (129:575) logo row + tagline.
   Frame 72 has exactly 4 logo slots with 120px gaps:
     Group (129:497)  — NXT Wave   234×44
     Group 2 (129:545) — ASG        103×54
     Group (129:634)  — NXT Wave   234×44
     Group 3 (129:576) — ASG        103×54
   Frame 79 (129:833) — 591×73 tagline pill. */

const LOGOS = [
  { key: 'nxt-1', src: partnerNxtwave, alt: 'NXT Wave',              w: 234, h: 44 },
  { key: 'asg-1', src: partnerAsg,     alt: 'American Software Group', w: 103, h: 54 },
  { key: 'nxt-2', src: partnerNxtwave, alt: 'NXT Wave',              w: 234, h: 44 },
  { key: 'asg-2', src: partnerAsg,     alt: 'American Software Group', w: 103, h: 54 },
]

const MARQUEE = [...LOGOS, ...LOGOS]

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="partners" className="relative bg-black py-16 lg:py-20">
      <div className="wrap" ref={ref}>
        <div
          className={`flex flex-col items-center gap-[44px] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Figma 129:448 — 24px salmon label */}
          <p className="capitalize text-[24px] font-medium leading-[25px] text-center tracking-[-0.72px]"
            style={{ color: '#f7bfa0' }}>
            In Partnership With
          </p>

          {/* Figma Frame 72 (129:575) — 1216×56, 4 logos, 120px gaps */}
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(270deg, #000 0%, transparent 100%)' }} />

            <div className="flex items-center gap-[120px] marquee-track" style={{ width: 'max-content' }}>
              {MARQUEE.map(({ key, src, alt, w, h }, i) => (
                <div
                  key={`${key}-${i}`}
                  className="flex items-center justify-center shrink-0"
                  style={{ minHeight: '56px' }}
                >
                  <img
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ width: `${w}px`, height: `${h}px` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Figma Frame 79 (129:833) — 591×73 tagline pill */}
          <div
            className="inline-flex items-center justify-center rounded-full max-w-[591px]"
            style={{
              width: '591px',
              maxWidth: '100%',
              minHeight: '73px',
              padding: '24px',
              background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
            }}
          >
            <p className="text-[16px] font-medium text-[#e5e7eb] leading-[25px] tracking-[-0.48px] text-center">
              This is not the future. This is happening now and Tech Scape AI is leading it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
