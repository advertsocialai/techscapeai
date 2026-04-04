import { Search, Cpu, FileText, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    icon: Search,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    title: 'Define Your Focus',
    description:
      'Tell TechScape AI what technology domains, tools, or trends you want to monitor. Set your team goals and stack preferences for personalized analysis.',
    points: ['Natural language input', 'Domain customization', 'Stack-aware recommendations'],
  },
  {
    step: '02',
    icon: Cpu,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    title: 'AI Analyzes & Processes',
    description:
      'Our AI engine crawls 200+ sources — GitHub, arxiv, Hacker News, Dev.to, and more — aggregating and reasoning over fresh data in real time.',
    points: ['200+ live sources', 'Semantic understanding', 'Trend correlation'],
  },
  {
    step: '03',
    icon: FileText,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    title: 'Receive Actionable Reports',
    description:
      'Get structured, human-readable insights delivered to your dashboard and inbox. Export to PDF or CSV for sharing with your team or stakeholders.',
    points: ['Auto-generated reports', 'PDF/CSV export', 'Slack & email delivery'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-5">
            <span className="text-xs font-semibold text-cyan-300 tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
            From setup to insights in
            <br />
            <span className="gradient-text">under 5 minutes</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            TechScape AI is designed to be plug-and-play. No complex configuration, no data pipelines to maintain.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.5), rgba(6,182,212,0.5))' }}
          />

          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative">
                {/* Card */}
                <div
                  className="rounded-2xl p-7 h-full card-hover"
                  style={{
                    background: 'rgba(17, 24, 39, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                  }}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center flex-shrink-0 relative z-10 border border-white/[0.06]`}>
                      <Icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                    <span
                      className="text-5xl font-black leading-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">{step.description}</p>

                  {/* Points */}
                  <ul className="space-y-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow between steps (mobile) */}
                {index < STEPS.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-5 h-5 text-[#374151] rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
