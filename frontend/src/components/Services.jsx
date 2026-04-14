import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICES = [
  {
    id: 1,
    title: 'AI Agents & Automation',
    description:
      'We build custom AI agents and automation pipelines that eliminate repetitive work and free your team for high-value tasks — delivering real ROI from day one.',
    tags: ['Fewer manual hours', 'Faster operations', 'Real ROI'],
    accent: '#3D75F3',
    accentEnd: '#60A5FA',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="9" width="24" height="17" rx="4" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="7" r="3" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M10 18h2.5M15.5 18h6M10 22h12" stroke="#3D75F3" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="11" cy="18" r="0.8" fill="#3D75F3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Digital Services & Marketing',
    description:
      'Data-driven digital campaigns powered by AI — from content generation to ad optimisation and analytics-backed strategy that converts.',
    tags: ['More visibility', 'Better leads', 'Higher conversion'],
    accent: '#F5A086',
    accentEnd: '#ffb89e',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 22L8 15L13 18.5L18 10L27 22" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="8" cy="15" r="2" fill="#F5A086" />
        <circle cx="13" cy="18.5" r="2" fill="#F5A086" />
        <circle cx="18" cy="10" r="2" fill="#F5A086" />
        <path d="M22 8l3 1-1 3" stroke="#F5A086" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Training & Education',
    description:
      'Practical AI and tech training programs designed for professionals, students, and teams who want to stay ahead of the curve and land real opportunities.',
    tags: ['Job-ready skills', 'Global opportunities', 'Career acceleration'],
    accent: '#3D75F3',
    accentEnd: '#60A5FA',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 12L16 6L28 12L16 18L4 12Z" stroke="#3D75F3" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M9 14.5V21C9 21 11.8 24 16 24C20.2 24 23 21 23 21V14.5" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M28 12V19" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="21" r="1.5" fill="#3D75F3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'CRM & Digital Branding',
    description:
      'From brand strategy to CRM implementation — we help businesses communicate their value and manage customer relationships with precision and clarity.',
    tags: ['Stronger identity', 'Clear messaging', 'Market presence'],
    accent: '#F5A086',
    accentEnd: '#ffb89e',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <path d="M6 27c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M22 9.5l2.5 2.5-6 6" stroke="#F5A086" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function ServiceCard({ svc, delay, isVisible }) {
  return (
    <div
      className={`card-hover rounded-2xl p-7 lg:p-8 flex flex-col gap-5 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon area */}
      <div
        className="w-full h-[100px] rounded-xl flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${svc.accent}10 0%, #080808 100%)`,
          border: `1px solid ${svc.accent}20`,
        }}
      >
        {/* Subtle corner glow */}
        <div
          className="absolute top-0 left-0 w-24 h-24 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${svc.accent}15 0%, transparent 70%)`,
            filter: 'blur(16px)',
          }}
        />
        <div className="relative z-10">{svc.icon}</div>
      </div>

      {/* Content */}
      <div>
        <h3
          className="text-[18px] font-bold mb-2.5 leading-snug"
          style={{
            background: `linear-gradient(97.97deg, ${svc.accent} 0%, ${svc.accentEnd} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {svc.title}
        </h3>
        <p className="text-[14px] text-white/50 leading-relaxed">{svc.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {svc.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        {/* Header */}
        <div className={`mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-4">What We Build</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] text-white leading-tight">
              What We Build.<br className="hidden lg:block" />
              <span className="grad-text">What We Deliver.</span>
            </h2>
            <p className="text-[15px] text-white/45 max-w-sm leading-relaxed lg:text-right">
              Four core capabilities, one mission — make AI work for your business, fast.
            </p>
          </div>
        </div>

        {/* 3-column grid — last card centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.slice(0, 3).map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} delay={i * 90} isVisible={isVisible} />
          ))}
          {/* 4th card: spans middle column on lg */}
          <div className="sm:col-span-2 lg:col-span-1 lg:col-start-2">
            <ServiceCard svc={SERVICES[3]} delay={3 * 90} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}
