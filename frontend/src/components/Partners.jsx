import { useScrollAnimation } from '../hooks/useScrollAnimation'
import partnerAsg from '../assets/partner-asg.png'
import partnerAbstudioz from '../assets/partner-abstudioz.png'
import partnerNxtwave from '../assets/partner-nxtwave.png'
import partnerMmw from '../assets/partner-mmw.png'
import partnerGogaga from '../assets/partner-gogaga.png'

/* ── Client logos matching Figma Frame 72 ── */
const CLIENTS = [
  { key: 'asg', src: partnerAsg, alt: 'ASG', w: 103, h: 54 },
  { key: 'abstudioz', src: partnerAbstudioz, alt: 'abstudioz', w: 236, h: 56 },
  { key: 'nxtwave', src: partnerNxtwave, alt: 'NXT Wave', w: 235, h: 44 },
  { key: 'mmw', src: partnerMmw, alt: 'MMW', w: 178, h: 42 },
  { key: 'gogaga', src: partnerGogaga, alt: 'GoGaGa', w: 259, h: 52 },
]

/* Duplicate for seamless marquee loop */
const MARQUEE = [...CLIENTS, ...CLIENTS]

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
          {/* Heading — 24px salmon, medium, capitalize */}
          <p className="capitalize text-[24px] font-medium leading-[25px] text-center tracking-[-0.72px]"
            style={{ color: '#f7bfa0' }}>
            In Partnership With
          </p>

          {/* Marquee ticker — 120px gap between logos */}
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(270deg, #000 0%, transparent 100%)' }} />

            <div className="flex items-center gap-[120px] marquee-track" style={{ width: 'max-content' }}>
              {MARQUEE.map(({ key, src, alt, w, h }, i) => (
                <div
                  key={`${key}-${i}`}
                  className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
                  style={{ minHeight: '56px' }}
                >
                  <img
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    className="object-contain"
                    style={{ width: `${w}px`, height: `${h}px` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tagline pill — gradient bg (rgba(255,122,0,0.1) → rgba(27,43,74,0.1)), rounded-999, p-24 */}
          <div
            className="inline-flex items-center justify-center rounded-full p-6"
            style={{
              background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
            }}
          >
            <p className="text-[16px] font-medium text-[#e5e7eb] leading-[25px] tracking-[-0.48px] whitespace-nowrap">
              This is not the future. This is happening now and Tech Scape AI is leading it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
