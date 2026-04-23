import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma 137:932 + 189:426 / 189:428 / 189:432 / 189:444
   Exact agent copy, 2×2 grid of Frame 79/120/121 cards with gradient bg.
   Image placeholders use a gradient box with Gemini-style blue→peach glow.      */

const AGENTS = [
  {
    title: 'Customer Support Agents',
    body:
      'AI agents that handle FAQs, ticket routing, and first-level customer interactions 24/7, without a team.',
    glow: 'radial-gradient(circle at 30% 30%, #6EB2FF 0%, #3D75F3 35%, #0A1F5C 75%, #000 100%)',
  },
  {
    title: 'Data & Reporting Agents',
    body:
      'Agents that pull data from multiple sources, generate reports, and surface insights automatically — no manual Excel work.',
    glow: 'radial-gradient(circle at 60% 40%, #FAD4BF 0%, #F5A086 40%, #6A2F22 80%, #000 100%)',
  },
  {
    title: 'Outreach & Follow-Up Agents',
    body:
      'Intelligent agents that manage lead outreach, email follow-ups, and CRM updates so your sales team focuses only on closing.',
    glow: 'radial-gradient(circle at 40% 50%, #A3B8FF 0%, #3D75F3 35%, #152B66 75%, #000 100%)',
  },
  {
    title: 'Operations & Workflow Agents',
    body:
      'Custom automation agents that connect your tools, eliminate handoffs, and keep your business moving without manual intervention.',
    glow: 'radial-gradient(circle at 50% 50%, #FFC7A8 0%, #F5A086 30%, #3D75F3 65%, #0A1A40 100%)',
  },
]

export default function AIAgents() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="ai-agents" className="relative bg-black py-20 lg:py-28">
      <div className="wrap relative" ref={ref}>
        {/* Header — Figma Frame 93 (137:932) */}
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[40px] sm:text-[60px] lg:text-[80px] font-semibold tracking-[-2.4px] leading-[77px]">
            <span className="text-white">What </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'conic-gradient(from 90deg, #077afd 0%, #0e7ffb 4.48%, #2385f6 8.95%, #408fee 17.91%, #5c9ae7 26.86%, #79a4e0 35.82%, #b1b9d1 53.73%, #eacec2 71.64%, #b1b9d1 78.73%, #79a4e0 85.82%, #5c9ae7 89.36%, #408fee 92.91%, #2385f6 96.45%, #0e7ffb 98.23%, #077afd 100%)',
              }}
            >
              We Build
            </span>
          </p>
          <p
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold tracking-[-0.96px] mt-2"
            style={{ color: '#e8e8e8', lineHeight: '77px' }}
          >
            Design System with AI
          </p>
        </div>

        {/* 2×2 grid — Figma Frame 79/120/121: gradient bg, rounded-16, p-24 */}
        <div className="grid sm:grid-cols-2 gap-[30px]">
          {AGENTS.map((agent, i) => (
            <div
              key={agent.title}
              className={`flex items-center justify-center gap-4 rounded-[16px] p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                background:
                  'linear-gradient(to right, rgba(255,122,0,0.1) 0%, rgba(27,43,74,0.1) 100%)',
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {/* Text column — Figma 316–344px text block, capitalize, tracking -0.72 */}
              <div className="flex-1 min-w-0 capitalize tracking-[-0.72px]">
                <p
                  className="text-[20px] lg:text-[24px] font-medium leading-[25px] mb-2"
                  style={{ color: '#fad4bf' }}
                >
                  {agent.title}
                </p>
                <p className="text-[14px] lg:text-[16px] font-medium leading-[25px] text-white">
                  {agent.body}
                </p>
              </div>

              {/* Image placeholder — Gemini-style gradient sphere (Figma 132–208px) */}
              <div
                className="shrink-0 w-[120px] h-[120px] lg:w-[154px] lg:h-[140px] rounded-[18px]"
                style={{
                  background: agent.glow,
                  boxShadow:
                    '0 10px 30px rgba(61,117,243,0.25), inset 0 0 40px rgba(0,0,0,0.4)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
