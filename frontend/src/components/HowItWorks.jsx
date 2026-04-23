import { useScrollAnimation } from '../hooks/useScrollAnimation'
import howitStar from '../assets/howit-icon-star.svg'
import howitCloud from '../assets/howit-icon-cloud.svg'
import howitBolt from '../assets/howit-icon-bolt.svg'

const STEPS = [
  {
    title: 'Discover Call',
    description:
      'We understand your business, your pain points, and where AI can make the fastest impact.',
    borderColor: '#6042ff',
    icon: howitStar,
  },
  {
    title: 'POC Build',
    description:
      'We build a working proof-of-concept in 2\u20134 weeks. You see it working before you commit to anything bigger.',
    borderColor: '#3ec5ff',
    icon: howitCloud,
  },
  {
    title: 'Deploy & Scale',
    description:
      'Once proven, we deploy, integrate, and scale the solution into your operations.',
    borderColor: '#88c4bf',
    icon: howitBolt,
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="how-it-works" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>

        {/* Header */}
        <div className={`mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-4">How It Works</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] text-white leading-tight">
              From Idea to Deployed AI<br />
              <span className="grad-text">in Weeks, Not Months.</span>
            </h2>
            <p className="text-[15px] text-white/45 max-w-sm leading-relaxed lg:text-right">
              A proven 3-step process that gets your AI solution live fast — with no fluff.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[37px]">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`relative w-full lg:w-[379px] h-auto lg:h-[455px] rounded-[37px] border-[1.5px] border-solid flex flex-col items-center justify-between p-8 lg:p-10 overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                borderColor: step.borderColor,
                background: '#0D0D0D',
                transitionDelay: `${i * 110}ms`,
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${step.borderColor}25 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="relative z-10 flex-1 flex items-center justify-center py-8">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] object-contain"
                />
              </div>

              {/* Text */}
              <div className="relative z-10 text-center">
                <h3
                  className="text-[28px] lg:text-[37px] font-bold mb-3 leading-snug"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.35) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
