import { useScrollAnimation } from '../hooks/useScrollAnimation'
import howitStar from '../assets/howit-icon-star.svg'
import howitCloud from '../assets/howit-icon-cloud.svg'
import howitBolt from '../assets/howit-icon-bolt.svg'

/* Figma Cards (163:503):
   - Each card: w-379 h-455, outer rounded-[37px], border 1.553px #232323
   - Inner panel rounded-[23px], bg black, inset shadow glow in accent color
   - Accent colors: Discover #6041ff, POC #3ec5ff, Deploy #88c4bf
   - Title gradient text, Inter Medium 37px, body #d9d9d980 18.6px            */

const STEPS = [
  {
    title: 'Discover Call',
    body: 'We understand your business, your pain points, and where AI can make the fastest impact.',
    accent: '#6041ff',
    icon: howitStar,
  },
  {
    title: 'POC Build',
    body: 'We build a working proof-of-concept in 2–4 weeks. You see it working before you commit to anything bigger.',
    accent: '#3ec5ff',
    icon: howitCloud,
  },
  {
    title: 'Deploy & Scale',
    body: 'Once proven, we deploy, integrate, and scale the solution into your operations.',
    accent: '#88c4bf',
    icon: howitBolt,
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="how-it-works" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-semibold tracking-[-2.4px] text-white leading-[77px]">
            How It Work
          </h2>
        </div>

        {/* Cards — Figma 163:503: gap 37.278px */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[37px] justify-items-center">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`relative w-full max-w-[379px] h-[455px] rounded-[37.278px] p-[18.64px] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1.553px solid #232323',
                transitionDelay: `${i * 110}ms`,
              }}
            >
              {/* Inner rounded panel with inset accent glow (Figma 163:506) */}
              <div
                className="relative w-full h-full rounded-[23.299px] overflow-hidden flex flex-col items-center justify-between py-10 px-6"
                style={{
                  background: '#000',
                  border: `1.553px solid ${step.accent}`,
                  boxShadow: `inset 0 6.213px 37.278px -10.873px ${step.accent}`,
                }}
              >
                {/* Bottom-to-top black gradient (Figma 163:507) */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[23.299px]"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)',
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-[110px] h-[110px] lg:w-[124px] lg:h-[124px] object-contain"
                  />
                </div>

                {/* Title — Figma: Inter Medium 37.278, gradient white→transparent */}
                <div className="relative z-10 text-center">
                  <p
                    className="text-[28px] lg:text-[37px] font-medium leading-normal mb-3"
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom, #fff 43.1%, rgba(255,255,255,0))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-[14px] lg:text-[18.6px] font-normal leading-normal"
                    style={{ color: 'rgba(217,217,217,0.5)' }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
