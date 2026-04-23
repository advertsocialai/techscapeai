import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma 204:497 (eyebrow) + 204:499 (heading) + 204:498 (body)
   + Frame 131 (206:504) + Frame 132 (208:507) + Frame 133 (208:510) */

const PARTNERS = [
  {
    name: 'NxtWave Accounting & Finance',
    body: 'In collaboration with NxtWave, Tech Scape AI brings structured financial systems, accounting intelligence, and finance-aligned technology solutions — bridging the gap between business operations and smart financial management.',
    accent: '#3D75F3',
  },
  {
    name: 'ASG Recruitment & Automation',
    body: 'Partnering with ASG, Tech Scape AI powers intelligent recruitment workflows and hiring automation — helping businesses find, screen, and onboard talent faster with AI-driven processes.',
    accent: '#F5A086',
  },
  {
    name: 'Bhorx AI — Quantum AI',
    body: 'In partnership with Bhorx AI, Tech Scape AI is at the frontier of Quantum AI research and development — bringing next-generation computing intelligence into real-world business applications.',
    accent: '#a78bfa',
  },
]

export default function PartnersDetailed() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="partners-detailed" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>

        {/* Header — Figma 204:497 / 499 / 498 */}
        <div
          className={`text-center max-w-[900px] mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="label mb-4">Partners</p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-1.32px] text-white leading-[1.2] mb-6">
            Backed by the Right Partners.<br className="hidden sm:block" />
            <span className="grad-text">Connected to the Right Markets.</span>
          </h2>
          <p className="text-[15px] lg:text-[16px] text-white/55 leading-[25px] tracking-[-0.48px] max-w-[813px] mx-auto">
            Tech Scape AI operates at the intersection of global technology ecosystems. Our partnerships give our clients and students access to world-class networks, validated technology, and market-ready opportunities.
          </p>
        </div>

        {/* 3 partner cards */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className="card-hover rounded-[20px] p-7 lg:p-8 flex flex-col"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Accent corner */}
              <div
                className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${p.accent}22 0%, rgba(255,255,255,0.02) 100%)`,
                  border: `1px solid ${p.accent}33`,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17l5-5 5 5M7 12l5-5 5 5" stroke={p.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-[20px] lg:text-[22px] font-bold text-white leading-[1.3] mb-4">
                {p.name}
              </h3>

              <p className="text-[14px] lg:text-[15px] text-white/55 leading-[25px] tracking-[-0.42px]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
