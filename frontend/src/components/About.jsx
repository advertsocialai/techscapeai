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
          <p className="text-[24px] text-[#F5A086] tracking-[-0.72px] mb-4">About</p>
        </div>

        {/* About copy — Figma 129:467: 32px, tracking -0.96, leading 45, first clause white, rest #5b5b5b */}
        <div className={`text-center max-w-[1054px] mx-auto mb-14 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[22px] sm:text-[28px] lg:text-[32px] tracking-[-0.96px]" style={{ lineHeight: '45px' }}>
            <span className="text-white">We are a global AI services and training company, </span>
            <span style={{ color: '#5b5b5b' }}>founded by technologists, business builders, and educators who have worked across the USA, Canada, and India. We don&apos;t sell software. We solve problems with AI, with automation, and with the right people behind every solution.</span>
          </p>
        </div>

        {/* "We Are Not Just Another Tech Company" heading */}
        <div className={`text-center mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold text-[#888] leading-[1.2] tracking-[-3.84px]">
            We Are Not Just Another<br />
            Tech Company
          </h2>
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

        {/* Description */}
        <div className={`text-center max-w-3xl mx-auto mt-14 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[15px] text-white/45 leading-relaxed">
            From intelligent automation to digital growth — Tech Scape AI brings four core capabilities to every business we work with.
          </p>
        </div>
      </div>
    </section>
  )
}
