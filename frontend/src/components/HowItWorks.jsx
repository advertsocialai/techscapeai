import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STEPS = [
  {
    step: '01',
    title: 'POC Scope & Discovery',
    description:
      'We define a clear, focused problem to solve in 2 weeks. Free consultation, no bloated requirements — just a working prototype plan with defined success criteria.',
    accent: '#F5A086',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="14" r="5" stroke="#F5A086" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M14 4v2M14 22v2M4 14h2M22 14h2" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="#F5A086" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'AI Build & Integration',
    description:
      'Our engineers build the agent or solution using the right stack for your environment — cloud-native, secure, and integrated with your existing tools seamlessly.',
    accent: '#3D75F3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="16" rx="3" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M8 14l3 3 6-6" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12h22" stroke="#3D75F3" strokeWidth="1.2" opacity="0.4" />
        <circle cx="6.5" cy="10" r="1" fill="#3D75F3" opacity="0.6" />
        <circle cx="9.5" cy="10" r="1" fill="#3D75F3" opacity="0.4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Deploy & Scale',
    description:
      'We deploy, measure, and iterate. Once value is proven, we scale the solution across your organisation with full support and ongoing optimisation.',
    accent: '#F5A086',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.8 9h9.2l-7.4 5.4 2.8 9L14 21.6 6.6 26.4l2.8-9L2 12h9.2L14 3z"
          stroke="#F5A086" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
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

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 relative">

          {/* Horizontal connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(245,160,134,0.6) 0%, rgba(61,117,243,0.6) 50%, rgba(245,160,134,0.6) 100%)',
            }}
          >
            {/* Connector dots */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#F5A086]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#F5A086]" />
          </div>

          {STEPS.map((step, i) => (
            <div
              key={step.step}
              className={`card-hover rounded-2xl p-8 relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {/* Step number badge */}
              <div className="flex items-center gap-3 mb-5">
                {/* Numbered icon circle */}
                <div
                  className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center relative z-10 flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${step.accent}18 0%, #0d0d0d 100%)`,
                    border: `1px solid ${step.accent}28`,
                  }}
                >
                  {step.icon}
                </div>

                <span
                  className="text-[40px] font-black leading-none select-none"
                  style={{ color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
                >
                  {step.step}
                </span>
              </div>

              <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">{step.title}</h3>
              <p className="text-[14px] text-white/50 leading-relaxed">{step.description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-[1px] rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${step.accent}40, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
