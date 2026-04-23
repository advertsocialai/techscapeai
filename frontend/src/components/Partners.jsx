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
          className={`rounded-2xl py-12 text-center overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: '#080808', border: '1px solid #181818' }}
        >
          {/* Header */}
          <p className="label mb-2">Partners</p>
          <p className="text-[14px] text-white/35 mb-2 px-6">
            In Partnership With
          </p>
          <p className="text-[14px] text-white/35 mb-10 px-6">
            Tech Scape AI operates at the intersection of global technology ecosystems. Our partnerships give our clients and students access to world-class networks, validated technology, and market-ready opportunities.
          </p>

          {/* Marquee ticker — matches Figma Frame 72 single-row layout */}
          <div className="relative overflow-hidden mb-10">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #080808 0%, transparent 100%)' }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(270deg, #080808 0%, transparent 100%)' }} />

            <div className="flex items-center gap-[120px] marquee-track" style={{ width: 'max-content' }}>
              {MARQUEE.map(({ key, src, alt, w, h }, i) => (
                <div
                  key={`${key}-${i}`}
                  className="flex items-center justify-center shrink-0 opacity-40 hover:opacity-90 transition-opacity duration-300 cursor-default"
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

          {/* Tagline pill */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-medium text-white/45"
            style={{ background: '#101010', border: '1px solid #1E1E1E' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #3D75F3, #F5A086)' }} />
            This is not the future. This is happening now — and TechScape AI is leading it.
          </div>
        </div>
      </div>
    </section>
  )
}
