import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AGENTS = [
  {
    title: 'Customer Support Agent',
    description:
      'Intelligent bots trained on your knowledge base that handle queries 24/7, resolve issues instantly, and escalate complex cases to your team — no downtime, no wait time.',
    color: '#3D75F3',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="11" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M10.5 17c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M10.5 17v2.2a2.2 2.2 0 004.4 0V17" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M23.5 17v2.2a2.2 2.2 0 01-4.4 0V17" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="17" cy="26" r="1.2" fill="#3D75F3" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Data & Reporting Agent',
    description:
      'Pull from multiple sources, auto-generate reports, and surface insights on demand — no more manual Excel grind or waiting on the analytics team for weekly numbers.',
    color: '#F5A086',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="5" y="20" width="5" height="9" rx="1.5" fill="#F5A086" opacity="0.7" />
        <rect x="14" y="13" width="5" height="16" rx="1.5" fill="#F5A086" />
        <rect x="23" y="7" width="5" height="22" rx="1.5" fill="#F5A086" opacity="0.55" />
        <path d="M7.5 16L16.5 11L25.5 6" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7.5" cy="16" r="2" fill="#F5A086" />
        <circle cx="16.5" cy="11" r="2" fill="#F5A086" />
        <circle cx="25.5" cy="6" r="2" fill="#F5A086" />
      </svg>
    ),
  },
  {
    title: 'Outreach & Follow-Up Agent',
    description:
      'Automated lead nurturing via email and WhatsApp — personalised messages, timely follow-ups, and CRM sync, all without lifting a finger or losing a prospect.',
    color: '#3D75F3',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="4" y="8" width="26" height="18" rx="3" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M4 11l13 9 13-9" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 22l3-3M25 22l-3-3" stroke="#3D75F3" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Operations & Workflow Agent',
    description:
      'End-to-end process automation connecting your tools — Slack, Notion, Sheets, HubSpot. Eliminate manual handoffs and keep work moving 24/7 across departments.',
    color: '#F5A086',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="8" cy="8" r="3.5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <circle cx="26" cy="8" r="3.5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="26" r="3.5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <circle cx="26" cy="26" r="3.5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <path d="M11.5 8h11M8 11.5v11M26 11.5v11M11.5 26h11" stroke="#F5A086" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="17" cy="17" r="2.5" fill="#F5A086" opacity="0.45" />
        <circle cx="17" cy="17" r="1" fill="#F5A086" />
      </svg>
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
          <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-semibold tracking-[-2.4px] text-white leading-[1.1]">
            What{' '}
            <span className="grad-text">We Build</span>
          </h2>
          <p className="text-[20px] sm:text-[26px] lg:text-[32px] tracking-[-0.96px] mt-2" style={{ color: '#e8e8e8' }}>
            Design System with AI
          </p>
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
