import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma Frame 77 (509:780) + 129:467 + 129:468 + 129:667
   Fan cards: Frame 68 (-55,1707, 505×548) / Frame 74 (509,1617, 421×477) / Frame 75 (1502,1707, 505×548)
   Decorative bg: Rectangle 12 (129:419) peach blur, Rectangle 13 (129:421) blue blur,
   Rectangle 14 (187:418) bottom gradient, ChatGPT aurora (186:1062) mid-section glow. */

const FAN_CARDS = [
  {
    text: 'We build solutions that reduce manual work and unlock human potential',
    bg: '#0F0F0F',
    border: '#1E1E1E',
    w: 505,
    h: 548,
    rotate: '-4deg',
    translate: { y: '46px', x: '32px' },
    z: 10,
  },
  {
    text: 'We train talent that is job-ready from day one',
    bg: '#141414',
    border: '#2a2a2a',
    w: 421,
    h: 477,
    rotate: '0deg',
    translate: { y: '0', x: '0' },
    z: 20,
  },
  {
    text: 'We partner with businesses to make AI adoption simple, fast, and affordable',
    bg: 'linear-gradient(135deg, #1a2f6e 0%, #0a1a40 60%, #1a0a30 100%)',
    border: 'rgba(61,117,243,0.32)',
    w: 505,
    h: 548,
    rotate: '4deg',
    translate: { y: '46px', x: '-32px' },
    z: 10,
  },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative bg-black py-20 lg:py-28 overflow-hidden">

      {/* Figma 129:419 Rectangle 12 — peach blur blob top-left (-161,80, 286×258) */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: '-11.2%', top: '80px', width: '286px', height: '258px',
          background: '#fad4bf',
          filter: 'blur(266.7px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 0.55,
        }}
      />
      {/* Figma 129:421 Rectangle 13 — blue blur blob mid-right (1310,743, 286×258) */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: '-9%', top: '743px', width: '286px', height: '258px',
          background: '#3579ce',
          filter: 'blur(206px)',
          borderRadius: '254px 343px 254px 391px',
          opacity: 0.6,
        }}
      />
      {/* Figma 186:1062 — aurora glow behind fan cards (CSS simulation of ChatGPT image fill) */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: '-4px', top: '1545px', width: '1478px', height: '740px',
          maxWidth: '103%',
          background:
            'radial-gradient(ellipse 60% 35% at 50% 55%, rgba(61,117,243,0.55) 0%, rgba(61,117,243,0.2) 35%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0.75,
        }}
      />
      {/* Figma 187:418 Rectangle 14 — bottom black→transparent fade (−3,2095, 1462×308) */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{
          height: '308px',
          background: 'linear-gradient(to top, #000 35.307%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="wrap relative" ref={ref}>

        {/* Figma Frame 77 (509:780) — eyebrow + belief statement, 422×87 */}
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

        {/* Figma 129:467 — 1054×180, first clause white, rest muted */}
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

        {/* Figma 129:667 — 932×156 big heading, 64px */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[78px] tracking-[-3.84px]" style={{ color: '#888' }}>
            We Are Not Just Another<br />
            Tech Company
          </h2>
        </div>

        {/* Fan-layout cards — Figma Frames 68 / 74 / 75 */}
        <div
          className={`relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ minHeight: '548px' }}
        >
          {FAN_CARDS.map(({ text, bg, border, w, h, rotate, translate, z }, i) => (
            <div
              key={i}
              className="rounded-[32px] p-10 flex items-end shrink-0"
              style={{
                width: `min(${w}px, 92vw)`,
                height: `${h}px`,
                background: bg,
                border: `1px solid ${border}`,
                zIndex: z,
                transform: `rotate(${rotate}) translateY(${translate.y}) translateX(${translate.x})`,
                transition: 'transform 0.3s ease',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <p className={`font-semibold text-white tracking-[-0.72px] ${i === 1 ? 'text-[22px] lg:text-[26px] leading-[34px]' : 'text-[22px] lg:text-[28px] leading-[38px]'}`}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
