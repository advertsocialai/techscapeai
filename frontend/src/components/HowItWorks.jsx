const STEPS = [
  {
    icon: '⭐',
    step: '01',
    title: 'POC Scope',
    description: 'We define a clear, focused problem to solve in 2 weeks. No bloated requirements — just a working prototype.',
  },
  {
    icon: '☁️',
    step: '02',
    title: 'AI Build',
    description: 'Our engineers build the agent or solution using the right stack for your environment — cloud-native and secure.',
  },
  {
    icon: '🚀',
    step: '03',
    title: 'Deploy & Scale',
    description: 'We deploy, measure, and iterate. Once value is proven, we scale the solution across your organisation.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-black py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] text-white leading-tight">
            From Idea to Deployed AI<br />
            <span className="gradient-text">in Weeks, Not Months.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 relative">
          {/* Connector */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(33.33%+24px)] right-[calc(33.33%+24px)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(61,117,243,0.5), rgba(245,161,134,0.5))' }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.step}
              className="card-hover rounded-2xl p-8"
              style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10"
                style={{ background: '#111', border: '1px solid #222' }}
              >
                {step.icon}
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[13px] font-bold"
                  style={{ color: 'rgba(255,255,255,0.18)' }}
                >
                  {step.step}
                </span>
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
