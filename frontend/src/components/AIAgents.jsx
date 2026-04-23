import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AGENTS = [
  {
    title: 'Customer Support Agent',
    description:
      'Intelligent bots trained on your knowledge base that handle queries 24/7, resolve issues instantly, and escalate complex cases to your team — no downtime, no wait time.',
    color: '#3D75F3',
    icon: (
      <img src="Ai1.svg" alt="" />
    ),
  },
  {
    title: 'Data & Reporting Agent',
    description:
      'Pull from multiple sources, auto-generate reports, and surface insights on demand — no more manual Excel grind or waiting on the analytics team for weekly numbers.',
    color: '#F5A086',
    icon: (
       <img src="Ai2.svg" alt="" />
    ),
  },
  {
    title: 'Outreach & Follow-Up Agent',
    description:
      'Automated lead nurturing via email and WhatsApp — personalised messages, timely follow-ups, and CRM sync, all without lifting a finger or losing a prospect.',
    color: '#3D75F3',
    icon: (
       <img src="Ai13.svg" alt="" />
    ),
  },
  {
    title: 'Operations & Workflow Agent',
    description:
      'End-to-end process automation connecting your tools — Slack, Notion, Sheets, HubSpot. Eliminate manual handoffs and keep work moving 24/7 across departments.',
    color: '#F5A086',
    icon: (
       <img src="Ai4.svg" alt="" />
    ),
  },
]

export default function AIAgents() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="ai-agents" className="relative bg-black py-20 lg:py-28">
      {/* Subtle section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(61,117,243,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="wrap relative" ref={ref}>
        {/* Header */}
        <div className={`mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-4">AI Agents & POCs</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] text-white leading-tight">
              Stop Reading About AI.<br />
              <span className="blue-text">Start Using It.</span>
            </h2>
            <p className="text-[15px] text-white/45 max-w-sm leading-relaxed lg:text-right">
              Purpose-built agents that solve specific problems fast — affordable, and ready to deploy in weeks.
            </p>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {AGENTS.map((agent, i) => (
            <div
              key={agent.title}
              className={`card-hover rounded-2xl p-7 lg:p-8 flex flex-col gap-5 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Icon box */}
              <div
                className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center relative overflow-hidden flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${agent.color}18 0%, #090909 100%)`,
                  border: `1px solid ${agent.color}28`,
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${agent.color}20 0%, transparent 65%)`,
                  }}
                />
                <div className="relative z-10">{agent.icon}</div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">{agent.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{agent.description}</p>
              </div>

              {/* Deploy badge */}
              <div className="mt-auto flex items-center gap-2.5 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: agent.color, boxShadow: `0 0 6px ${agent.color}80` }}
                />
                <span className="text-[12px] font-medium" style={{ color: agent.color }}>
                  Deployable in 2–4 weeks
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
