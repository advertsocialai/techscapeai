// "What We Build. What We Deliver." — 4 core service cards from Figma
const SERVICES = [
  {
    id: 1,
    emoji: '🤖',
    title: 'AI Automation',
    subtitle: 'Fewer manual hours · Faster operations · Real ROI.',
    description:
      'We build custom AI agents and automation pipelines that eliminate repetitive work and free your team for high-value tasks.',
    tags: ['Fewer manual hours', 'Faster operations', 'Real ROI.'],
  },
  {
    id: 2,
    emoji: '📈',
    title: 'Digital Marketing',
    subtitle: 'More visibility · Better leads · Higher conversion.',
    description:
      'Data-driven digital campaigns powered by AI — from content generation to ad optimisation and analytics-backed strategy.',
    tags: ['More visibility', 'Better leads', 'Higher conversion'],
  },
  {
    id: 3,
    emoji: '🎓',
    title: 'Training & Education',
    subtitle: 'Job-ready skills · Global opportunities · Career acceleration.',
    description:
      'Practical AI and tech training programs designed for professionals, students, and teams who want to stay ahead.',
    tags: ['Job-ready skills', 'Global opportunities', 'Career acceleration'],
  },
  {
    id: 4,
    emoji: '✦',
    title: 'Digital Branding',
    subtitle: 'Stronger identity · Clear messaging · Market presence.',
    description:
      'From brand strategy to visual identity — we help businesses communicate their value with precision and impact.',
    tags: ['Stronger identity', 'Clear messaging', 'Market presence'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="section-label mb-4">What We Build</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] text-white leading-tight">
              What We Build.<br className="hidden lg:block" /> What We Deliver.
            </h2>
            <p className="text-[15px] text-white/50 max-w-sm leading-relaxed">
              From intelligent automation to digital growth — Tech Scape AI brings four core capabilities to every business we work with.
            </p>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="card-hover rounded-2xl p-7 lg:p-8 flex flex-col gap-4"
              style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: '#111', border: '1px solid #222' }}
              >
                {svc.emoji}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[18px] font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{svc.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] font-semibold rounded-lg"
                    style={{ background: '#111', border: '1px solid #222', color: '#666' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
