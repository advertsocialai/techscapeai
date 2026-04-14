import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ── Client logos matching Figma Frame 72 ── */
const CLIENTS = [
  {
    key: 'asg',
    logo: (
      <div className="flex items-center gap-2.5">
        {/* ASG triangle icon */}
        <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
          <polygon points="18,2 34,30 2,30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <polygon points="18,10 28,28 8,28" fill="currentColor" opacity="0.25" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[18px] font-black tracking-tight">ASG</span>
          <span className="text-[8px] tracking-[0.15em] uppercase opacity-60">American Synthesis Group</span>
        </div>
      </div>
    ),
  },
  {
    key: 'abstudioz',
    logo: (
      <div className="flex items-center gap-2.5">
        {/* abstudioz circular icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.6" />
          <circle cx="14" cy="14" r="2.5" fill="currentColor" />
        </svg>
        <span className="text-[17px] font-semibold tracking-tight">
          ab<span className="font-bold">studioz</span>
        </span>
      </div>
    ),
  },
  {
    key: 'nxtwave',
    logo: (
      <div className="flex items-center gap-1.5">
        {/* nxt wave wavy text style */}
        <span className="text-[22px] font-black tracking-[-0.02em]">nxt</span>
        <span className="text-[22px] font-black tracking-[-0.02em] relative">
          w
          <span className="inline-block" style={{ fontStyle: 'italic' }}>a</span>
          ve
        </span>
      </div>
    ),
  },
  {
    key: 'nmw',
    logo: (
      <div className="flex items-center gap-0.5">
        <span className="text-[22px] font-black tracking-[-0.03em]">nmw</span>
        <sup className="text-[10px] font-bold mt-1 opacity-70">®</sup>
      </div>
    ),
  },
  {
    key: 'gogaga',
    logo: (
      <span className="text-[22px] font-black tracking-[-0.02em]">
        go<span className="opacity-70">ga</span>ga
      </span>
    ),
  },
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
          <p className="label mb-2">Our Clients</p>
          <p className="text-[14px] text-white/35 mb-10 px-6">
            Trusted by leading organizations across education, technology and business.
          </p>

          {/* Marquee ticker — matches Figma Frame 72 single-row layout */}
          <div className="relative overflow-hidden mb-10">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #080808 0%, transparent 100%)' }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(270deg, #080808 0%, transparent 100%)' }} />

            <div className="flex items-center marquee-track" style={{ width: 'max-content' }}>
              {MARQUEE.map(({ key, logo }, i) => (
                <div
                  key={`${key}-${i}`}
                  className="flex items-center text-white/40 hover:text-white/90 transition-colors duration-300 cursor-default px-10 lg:px-14 border-r border-white/[0.07] last:border-r-0"
                  style={{ minHeight: '56px' }}
                >
                  {logo}
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
