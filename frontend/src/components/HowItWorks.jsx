import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STEPS = [
  {
    step: '01',
    title: 'POC Scope & Discovery',
    description: 'We define a clear, focused problem to solve in 2 weeks. Free consultation, no bloated requirements — just a working prototype plan.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <polygon points="15,3 28,27 2,27" stroke="#F5A086" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M15 12v6M15 21v1" stroke="#F5A086" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accent: '#F5A086',
  },
  {
    step: '02',
    title: 'AI Build & Integration',
    description: 'Our engineers build the agent or solution using the right stack for your environment — cloud-native, secure, and integrated with your existing tools.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M5 15C5 9.477 9.477 5 15 5s10 4.477 10 10-4.477 10-10 10S5 20.523 5 15z" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M15 5v4M15 21v4M5 15H9M21 15h4" stroke="#3D75F3" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="15" cy="15" r="3" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    accent: '#3D75F3',
  },
  {
    step: '03',
    title: 'Deploy & Scale',
    description: 'We deploy, measure, and iterate. Once value is proven, we scale the solution across your organisation with full support.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M15 4l2.5 8H25l-6.5 4.7 2.5 8L15 20.2 8 24.7l2.5-8L4 12h7.5L15 4z" stroke="#F5A086" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    accent: '#F5A086',
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
          <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.02em] text-white leading-tight">
            From Idea to Deployed AI<br />
            <span className="grad-text">in Weeks, Not Months.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[54px] left-[calc(33.33%+12px)] right-[calc(33.33%+12px)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(245,160,134,0.5), rgba(61,117,243,0.5), rgba(245,160,134,0.5))' }} />

          {STEPS.map((step, i) => (
            <div key={step.step}
              className={`card-hover rounded-2xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{ background: `linear-gradient(135deg, ${step.accent}15 0%, #0d0d0d 100%)`, border: `1px solid ${step.accent}25` }}>
                {step.icon}
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[13px] font-bold" style={{ color: 'rgba(255,255,255,0.18)' }}>{step.step}</span>
                <h3 className="text-[18px] font-bold text-white">{step.title}</h3>
              </div>

              <p className="text-[14px] text-white/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
