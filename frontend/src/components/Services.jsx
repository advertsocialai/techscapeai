const SERVICES = [
  {
    id: 1,
    title: 'AI Agents & Automation',
    description: 'We build custom AI agents and automation pipelines that eliminate repetitive work and free your team for high-value tasks.',
    tags: ['Fewer manual hours', 'Faster operations', 'Real ROI'],
    accent: '#3D75F3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="3" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="6" r="2.5" stroke="#3D75F3" strokeWidth="1.5" fill="none" />
        <path d="M9 15h2m4 0h4M9 18h10" stroke="#3D75F3" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Digital Services & Marketing',
    description: 'Data-driven digital campaigns powered by AI — from content generation to ad optimisation and analytics-backed strategy.',
    tags: ['More visibility', 'Better leads', 'Higher conversion'],
    accent: '#F5A086',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20 L8 14 L12 17 L17 9 L24 20" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="8" cy="14" r="1.5" fill="#F5A086" />
        <circle cx="12" cy="17" r="1.5" fill="#F5A086" />
        <circle cx="17" cy="9" r="1.5" fill="#F5A086" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Training & Education',
    description: 'Practical AI and tech training programs designed for professionals, students, and teams who want to stay ahead.',
    tags: ['Job-ready skills', 'Global opportunities', 'Career acceleration'],
    accent: '#3D75F3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 10L14 5L24 10L14 15L4 10Z" stroke="#3D75F3" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M8 12.5V18C8 18 10.5 20 14 20C17.5 20 20 18 20 18V12.5" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M24 10V16" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'CRM & Digital Branding',
    description: 'From brand strategy to CRM implementation — we help businesses communicate their value and manage customer relationships with precision.',
    tags: ['Stronger identity', 'Clear messaging', 'Market presence'],
    accent: '#F5A086',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <path d="M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M20 8l2 2-5 5" stroke="#F5A086" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-20 lg:py-28">
      <div className="wrap">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="label mb-4">What We Build</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.02em] text-white leading-tight">
              What We Build.<br className="hidden lg:block" />
              <span className="grad-text">What We Deliver.</span>
            </h2>
            <p className="text-[15px] text-white/50 max-w-sm leading-relaxed lg:text-right">
              Four core capabilities, one mission — make AI work for your business, fast.
            </p>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((svc) => (
            <div key={svc.id} className="rounded-2xl p-7 lg:p-8 flex flex-col gap-5 card-hover">

              {/* Dark image area with icon */}
              <div className="w-full h-[100px] rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${svc.accent}08 0%, #0a0a0a 100%)`, border: `1px solid ${svc.accent}18` }}>
                {svc.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[18px] font-bold text-white mb-2"
                  style={{ background: `linear-gradient(97.97deg, ${svc.accent} 0%, ${svc.accent === '#3D75F3' ? '#60A5FA' : '#ffb89e'} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {svc.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{svc.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
