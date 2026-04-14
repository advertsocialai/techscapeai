import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PARTNERS = [
  {
    key: 'nxtwave-1',
    logo: (
      <div className="flex items-center gap-2.5">
        <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
          <path d="M2 22 C7 6 11 2 17 14 C23 26 27 21 32 8"
            stroke="#3D75F3" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M2 15 C7 1 11 -2 17 9 C23 19 27 15 32 4"
            stroke="#F5A086" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.55" />
        </svg>
        <span className="text-[17px] font-bold text-white tracking-tight">
          nxt <span className="text-white/45 font-normal">wave</span>
        </span>
      </div>
    ),
  },
  {
    key: 'asg-1',
    logo: (
      <div className="flex items-center gap-2.5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #3D75F3, #1a3a8a)',
            border: '1px solid rgba(61,117,243,0.35)',
          }}
        >
          <span className="text-[14px] font-black text-white">A</span>
        </div>
        <span className="text-[17px] font-bold text-white tracking-tight">ASG</span>
      </div>
    ),
  },
  {
    key: 'nxtwave-2',
    logo: (
      <div className="flex items-center gap-2.5">
        <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
          <path d="M2 22 C7 6 11 2 17 14 C23 26 27 21 32 8"
            stroke="#F5A086" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M2 15 C7 1 11 -2 17 9 C23 19 27 15 32 4"
            stroke="#3D75F3" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.55" />
        </svg>
        <span className="text-[17px] font-bold text-white tracking-tight">
          nxt <span className="text-white/45 font-normal">wave</span>
        </span>
      </div>
    ),
  },
  {
    key: 'asg-2',
    logo: (
      <div className="flex items-center gap-2.5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #F5A086, #c0624a)',
            border: '1px solid rgba(245,160,134,0.35)',
          }}
        >
          <span className="text-[14px] font-black text-white">A</span>
        </div>
        <span className="text-[17px] font-bold text-white tracking-tight">ASG</span>
      </div>
    ),
  },
]

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="partners" className="relative bg-black py-16 lg:py-20">
      <div className="wrap" ref={ref}>
        <div
          className={`rounded-2xl py-12 px-8 lg:px-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: '#080808', border: '1px solid #181818' }}
        >
          <p className="label mb-3">In Partnership With</p>
          <p className="text-[14px] text-white/35 mb-10">
            Trusted by leading organizations across education, technology and business.
          </p>

          {/* Partner logos */}
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 mb-12">
            {PARTNERS.map(({ key, logo }) => (
              <div
                key={key}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Tagline pill */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-medium text-white/45 leading-relaxed"
            style={{ background: '#101010', border: '1px solid #1E1E1E' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #3D75F3, #F5A086)' }}
            />
            This is not the future. This is happening now — and TechScape AI is leading it.
          </div>
        </div>
      </div>
    </section>
  )
}
