import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma Frame 77 (509:780) + 129:467 + 129:468 + 129:667 + fan cards 68/74/75 */

const FAN_CARDS = [
  {
    text: 'We build solutions that reduce manual work and unlock human potential',
    bg: '#0F0F0F',
    border: '#1E1E1E',
    rotate: '-4deg',
    translate: { y: '24px', x: '14px' },
    z: 10,
  },
  {
    text: 'We train talent that is job-ready from day one',
    bg: '#141414',
    border: '#2a2a2a',
    rotate: '0deg',
    translate: { y: '0', x: '0' },
    z: 20,
    scale: '1.04',
  },
  {
    text: 'We partner with businesses to make AI adoption simple, fast, and affordable',
    bg: 'linear-gradient(135deg, #1a2f6e 0%, #0a1a40 60%, #1a0a30 100%)',
    border: 'rgba(61,117,243,0.32)',
    rotate: '4deg',
    translate: { y: '24px', x: '-14px' },
    z: 10,
  },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative bg-black py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'rgba(6,6,12,0.65)' }} />

      <div className="wrap relative" ref={ref}>

        {/* Figma Frame 77: "About" eyebrow + belief statement (422×87 block) */}
        <div
          className={`text-center max-w-[422px] mx-auto mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[24px] font-medium capitalize tracking-[-0.72px] mb-3" style={{ color: '#F5A086' }}>
            About
          </p>
          <p className="text-[16px] font-medium leading-[25px] tracking-[-0.48px] text-white/70">
            Tech Scape AI was built with one belief — that Artificial Intelligence should work for people, not replace them.
          </p>
        </div>

        {/* Figma 129:467 — 1054×180, 24–32px, first clause white, rest muted */}
        <div
          className={`text-center max-w-[1054px] mx-auto mb-6 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[22px] sm:text-[28px] lg:text-[32px] tracking-[-0.96px] leading-[45px]">
            <span className="text-white">We are a global AI services and training company, </span>
            <span style={{ color: '#5b5b5b' }}>
              founded by technologists, business builders, and educators who have worked across the USA, Canada, and India. We don&apos;t sell software. We solve problems with AI, with automation, and with the right people behind every solution.
            </span>
          </p>
        </div>

        {/* Figma 129:468 — 932×135 second paragraph */}
        <div
          className={`text-center max-w-[932px] mx-auto mb-14 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[18px] sm:text-[22px] lg:text-[24px] tracking-[-0.72px] leading-[38px]" style={{ color: '#8a8a8a' }}>
            From building intelligent AI agents for small businesses to training the next generation of engineers and analysts, everything we do is designed to create real, measurable impact.
          </p>
        </div>

        {/* Figma 129:667 — 932×156 big heading */}
        <div
          className={`text-center mb-14 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.2] tracking-[-3.84px]" style={{ color: '#888' }}>
            We Are Not Just Another<br />
            Tech Company
          </h2>
        </div>

        {/* Fan-layout cards — Figma Frames 68 / 74 / 75 */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0 lg:items-stretch transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {FAN_CARDS.map(({ text, bg, border, rotate, translate, z, scale }, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 max-w-[308px] w-full min-h-[200px] flex items-center"
              style={{
                background: bg,
                border: `1px solid ${border}`,
                zIndex: z,
                transform: `rotate(${rotate}) translateY(${translate.y}) translateX(${translate.x}) ${scale ? `scale(${scale})` : ''}`,
                transition: 'transform 0.3s ease',
              }}
            >
              <p className="text-[18px] font-semibold text-white leading-[28px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
