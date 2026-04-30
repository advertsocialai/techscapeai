import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Typewriter from './Typewriter';
const AGENTS = [
  {
    title: 'Customer Support Agent',
    description:
      'Intelligent bots trained on your knowledge base that handle queries 24/7, resolve issues instantly, and escalate complex cases to your team — no downtime, no wait time.',
    icon: "/Ai1.svg",
  },
  {
    title: 'Data & Reporting Agent',
    description:
      'Pull from multiple sources, auto-generate reports, and surface insights on demand — no more manual Excel grind or waiting on the analytics team for weekly numbers.',
    icon: "/Ai2.svg",
  },
  {
    title: 'Outreach & Follow-Up Agent',
    description:
      'Automated lead nurturing via email and WhatsApp — personalised messages, timely follow-ups, and CRM sync, all without lifting a finger or losing a prospect.',
    icon: "/Ai13.svg",
  },
  {
    title: 'Operations & Workflow Agent',
    description:
      'End-to-end process automation connecting your tools — Slack, Notion, Sheets, HubSpot. Eliminate manual handoffs and keep work moving 24/7 across departments.',
    icon: "/Ai4.svg",
  },
]

export default function AIAgents() {
  const { ref, isVisible } = useScrollAnimation()
 const typewriterWords = ["AI That Actually Does the Work"];
 const typewriterWords2 = ["We Solve"];
 const typewriterWords3 = ["We Build"];

  return (
    <section id="ai-agents" className="relative py-20 lg:py-32 overflow-hidden bg-black">
      {/* Background Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-5%',
          top: '10%',
          width: '500px',
          height: '500px',
          background: 'rgba(53, 121, 206, 0.2)',
          filter: 'blur(150px)',
          borderRadius: '100%',
          zIndex: 0,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10" ref={ref}>
        
        {/* --- Header Section --- */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#C58E75] uppercase tracking-[0.2em] text-sm font-bold mb-4">AI Agents &amp; POCs</p>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-semibold text-white leading-tight mb-8 tracking-tight">
            <Typewriter words={typewriterWords} speed={100} delay={2500} />
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Stop reading about AI. Start using it. Tech Scape AI builds small, powerful, purpose-built AI agents and proof-of-concept solutions that solve specific business problems — fast, affordable, and ready to deploy.
          </p>
        </div>

        {/* --- The Problem Section --- */}
        <div className=" pt-20 mb-32">
          <div className={`flex flex-col lg:flex-row justify-between items-start gap-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="lg:w-1/2">
              <h3 className="text-[44px] md:text-[64px] lg:text-[72px] font-semibold text-white leading-[0.9] tracking-tighter">
                The Problem <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D75F3] to-[#F5A086]">
                   <Typewriter words={typewriterWords2} speed={100} delay={2500} />
                </span>
              </h3>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-lg text-white/60 leading-relaxed">
                "Most businesses know AI can help them. Very few know where to start. Fewer still can afford a six-month enterprise implementation."
              </p>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                We built a different model.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                We identify one high-impact problem in your business, build a focused AI agent around it, prove it works — and then scale it. No bloated projects. No wasted budgets. Just results you can see.
              </p>
            </div>
          </div>
        </div>

        {/* --- Feature Grid Header --- */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D75F3] via-[#A396FF] to-[#F5A086]"> <Typewriter words={typewriterWords3} speed={100} delay={2500} /></span>
          </h3>
          <p className="text-xl md:text-2xl text-white/40 font-medium tracking-tight">
            Purpose-built automation for every department
          </p>
        </div>

        {/* --- Agents Cards Grid --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {AGENTS.map((agent, i) => (
            <div
              key={agent.title}
              className={`group flex flex-col sm:flex-row items-center gap-8 rounded-[10px] p-8 md:p-10 border border-white/5 transition-all duration-700 hover:border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                 background: 'linear-gradient(45deg, rgba(200,147,114,0.2) 0%, rgba(6,6,8,1) 100%)',
                transitionDelay: `${i * 150}ms`
              }}
            >
              <div className="flex-1 order-2 sm:order-1 text-center sm:text-left">
                <h4 className="text-[22px] lg:text-[20px] font-semibold text-[#fad4bf] mb-4 tracking-tight group-hover:text-white transition-colors">
                  {agent.title}
                </h4>
                <p className="text-sm lg:text-base text-white/60 leading-relaxed font-light">
                  {agent.description}
                </p>
              </div>

              <div className="shrink-0 order-1 sm:order-2 flex items-center justify-center transition-transform duration-500">
                <img src={agent.icon} alt={agent.title} className="w-2/2 h-2/2 object-contain" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}