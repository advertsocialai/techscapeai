import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AGENTS = [
  {
    title: 'Customer Support Agent',
    description: 'Intelligent bots trained on your knowledge base that handle queries 24/7, resolve issues instantly, and escalate complex cases to your team.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M10 16v2a2 2 0 004 0v-2" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M22 16v2a2 2 0 01-4 0v-2" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    color: '#3D75F3',
  },
  {
    title: 'Data & Reporting Agent',
    description: 'Pull from multiple sources, auto-generate reports, and surface insights on demand — no more manual Excel grind or waiting on the analytics team.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="18" width="4" height="8" rx="1" fill="#F5A086" opacity="0.8" />
        <rect x="14" y="12" width="4" height="14" rx="1" fill="#F5A086" />
        <rect x="22" y="6" width="4" height="20" rx="1" fill="#F5A086" opacity="0.6" />
        <path d="M8 14L14 10L22 6" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#F5A086',
  },
  {
    title: 'Outreach & Follow-Up Agent',
    description: 'Automated lead nurturing via email and WhatsApp — personalised messages, timely follow-ups, and CRM sync, all without lifting a finger.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 8h20a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M4 10l12 8 12-8" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#3D75F3',
  },
  {
    title: 'Operations & Workflow Agent',
    description: 'End-to-end process automation connecting your tools — Slack, Notion, Sheets, HubSpot. Eliminate manual handoffs and keep work moving 24/7.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="8" r="3" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="8" r="3" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="24" r="3" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="3" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <path d="M11 8h10M8 11v10M24 11v10M11 24h10" stroke="#F5A086" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" fill="#F5A086" opacity="0.5" />
      </svg>
    ),
    color: '#F5A086',
  },
]

export default function AIAgents() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section id="ai-agents" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>

        {/* Header */}
        <div className={`mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-4">AI Agents & POCs</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.02em] text-white leading-tight">
              Stop Reading About AI.<br />
              <span className="blue-text">Start Using It.</span>
            </h2>
            <p className="text-[15px] text-white/50 max-w-sm leading-relaxed lg:text-right">
              Purpose-built agents that solve specific problems fast — affordable, and ready to deploy in weeks.
            </p>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {AGENTS.map((agent, i) => (
            <div key={agent.title}
              className={`card-hover rounded-2xl p-7 lg:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              {/* 3D-style icon area */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `linear-gradient(135deg, ${agent.color}15 0%, #0a0a0a 100%)`, border: `1px solid ${agent.color}25` }}>
                {agent.icon}
              </div>
              <h3 className="text-[18px] font-bold text-white mb-3">{agent.title}</h3>
              <p className="text-[14px] text-white/50 leading-relaxed">{agent.description}</p>

              {/* Accent dot */}
              <div className="mt-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: agent.color }} />
                <span className="text-[12px] text-white/30">Deployable in 2–4 weeks</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
