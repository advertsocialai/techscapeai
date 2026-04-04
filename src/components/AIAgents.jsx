// "AI AGENTS & POCs" section from Figma
const AGENTS = [
  {
    icon: '⚡',
    title: 'Sales & Lead Automation',
    description:
      'Agents that qualify leads, follow up via email/WhatsApp, and keep your CRM updated — without lifting a finger.',
    color: '#3D75F3',
  },
  {
    icon: '📊',
    title: 'Data & Reporting Agents',
    description:
      'Agents that pull data from multiple sources, generate reports, and surface insights automatically — no manual Excel work.',
    color: '#F5A086',
  },
  {
    icon: '🛎️',
    title: 'Customer Support Bots',
    description:
      'Intelligent chatbots trained on your knowledge base that handle common queries 24/7 and escalate when needed.',
    color: '#3D75F3',
  },
  {
    icon: '🔄',
    title: 'Workflow Orchestration',
    description:
      'End-to-end business process automation connecting your existing tools — Slack, Notion, Sheets, HubSpot and more.',
    color: '#F5A086',
  },
  {
    icon: '🎯',
    title: 'Marketing AI Agents',
    description:
      'Content generation, A/B testing, audience segmentation, and campaign optimisation — all automated and data-driven.',
    color: '#3D75F3',
  },
  {
    icon: '🧠',
    title: 'Custom POC Builds',
    description:
      'Proof-of-concept solutions scoped in 2 weeks, deployed in 4. We prove value before you commit to full scale.',
    color: '#F5A086',
  },
]

export default function AIAgents() {
  return (
    <section id="ai-agents" className="relative bg-black py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">

        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className="section-label mb-4">AI AGENTS &amp; POCs</p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] text-white leading-tight mb-4">
            Stop Reading About AI.<br />
            <span className="gradient-text">Start Using It.</span>
          </h2>
          <p className="text-[15px] text-white/50 max-w-2xl mx-auto leading-relaxed">
            Tech Scape AI builds small, powerful, purpose-built AI agents and proof-of-concept solutions that solve specific business problems fast — affordable, and ready to deploy.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {AGENTS.map((agent) => (
            <div
              key={agent.title}
              className="card-hover rounded-2xl p-7"
              style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
            >
              {/* Icon with colored dot border */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}30` }}
                >
                  {agent.icon}
                </div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: agent.color }}
                />
              </div>

              <h3 className="text-[16px] font-bold text-white mb-2.5">{agent.title}</h3>
              <p className="text-[13px] text-white/50 leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
