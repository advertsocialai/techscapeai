import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FAN_CARDS = [
  {
    text: 'We build solutions that reduce manual work and unlock human potential across every industry.',
    bg: '#111',
    border: '#222',
    rotate: '-3deg',
    translate: { y: '16px', x: '12px' },
    z: 10,
  },
  {
    text: 'We train talent that is job-ready from day one — practical skills for a real world shaped by AI.',
    bg: '#161616',
    border: '#2e2e2e',
    rotate: '0deg',
    translate: { y: '0', x: '0' },
    z: 20,
    scale: '1.04',
  },
  {
    text: 'We partner with businesses to make AI adoption simple, fast, and genuinely affordable.',
    bg: 'linear-gradient(135deg, #1a2f6e 0%, #0a1a40 60%, #1a0a30 100%)',
    border: 'rgba(61,117,243,0.32)',
    rotate: '3deg',
    translate: { y: '16px', x: '-12px' },
    z: 10,
  },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative bg-black py-20 lg:py-28 overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(6,6,12,0.65)' }} />

      <div className="wrap relative" ref={ref}>

        {/* Label */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-4">About</p>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] text-white leading-tight">
            We Are Not Just<br />
            <span className="grad-text">Another Tech Company</span>
          </h2>
        </div>

        {/* About copy */}
        <div className={`text-center max-w-2xl mx-auto mb-14 space-y-5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[16px] lg:text-[17px] text-white/78 leading-relaxed">
            <span className="font-semibold text-white">We are a global AI services and training company,</span>{' '}
            founded by technologists, business builders, and educators who have worked across the USA, Canada, and India.
            We don't sell software. We solve problems with AI, with automation, and with the right people behind every solution.
          </p>
          <p className="text-[15px] text-white/42 leading-relaxed">
            From building intelligent AI agents for small businesses to training the next generation of engineers and analysts,
            everything we do is designed to create real, measurable impact — not just demos.
          </p>
        </div>

        {/* Fan-layout cards */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0 lg:items-stretch transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {FAN_CARDS.map(({ text, bg, border, rotate, translate, z, scale }, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 max-w-[290px] w-full"
              style={{
                background: bg,
                border: `1px solid ${border}`,
                zIndex: z,
                transform: `rotate(${rotate}) translateY(${translate.y}) translateX(${translate.x}) ${scale ? `scale(${scale})` : ''}`,
                transition: 'transform 0.3s ease',
              }}
            >
              <p className="text-[16px] font-semibold text-white leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
