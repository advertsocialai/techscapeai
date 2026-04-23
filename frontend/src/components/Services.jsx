import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma Frames 73 / 105 / 106 / 107 — 4-card 2×2 grid, each 592×437
   with title (369×29), subtitle (369×19), body (524×75), and 3 tags. */

const SERVICES = [
  {
    title: 'AI Agents & Intelligent Automation',
    subtitle: 'For businesses that want to work smarter',
    body: "We design and deploy custom AI agents that handle repetitive workflows, automate operations, and free your team to focus on what matters. From customer interactions to back-office automation — if it's manual, we can make it intelligent.",
    tags: ['Fewer manual hours', 'Faster operations', 'Real ROI.'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="6" stroke="#3D75F3" strokeWidth="1.5" />
        <circle cx="12" cy="14" r="1.5" fill="#3D75F3" />
        <circle cx="20" cy="14" r="1.5" fill="#3D75F3" />
        <path d="M12 20c1.2 1.2 2.8 2 4 2s2.8-.8 4-2" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#3D75F3',
  },
  {
    title: 'Digital Services & Transformation',
    subtitle: 'For businesses ready to grow online',
    body: 'We deliver end-to-end digital solutions — web, content, SEO, social media, and marketing automation — built for businesses that want a strong digital presence and a system that keeps working.',
    tags: ['More visibility', 'More leads', 'More revenue'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 20l6-6 5 5 8-8 5 5" stroke="#F5A086" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="20" r="1.5" fill="#F5A086" />
        <circle cx="28" cy="16" r="1.5" fill="#F5A086" />
      </svg>
    ),
    accent: '#F5A086',
  },
  {
    title: 'Technology Training & EdTech',
    subtitle: 'For students and professionals ready to future-proof their careers',
    body: 'We build and deliver industry-grade courses in Full Stack Development, AI & ML Engineering, Business Data Analytics, and Workflow Automation. Trained by practitioners. Designed for the real world.',
    tags: ['Job-ready skills', 'Global opportunities', 'Career acceleration'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 12l12-6 12 6-12 6L4 12z" stroke="#3D75F3" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 15v5c0 2.2 3.1 4 7 4s7-1.8 7-4v-5" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 13v7" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#3D75F3',
  },
  {
    title: 'CRM & SaaS for Small Business',
    subtitle: 'For small businesses that need enterprise tools at startup prices',
    body: 'We adapt and deploy ready-built CRM and business software solutions — customised for your workflow, priced for your budget. No bloat. No complexity. Just tools that work.',
    tags: ['Organised operations', 'Better customer relationships', 'Business clarity'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <path d="M6 27c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    accent: '#F5A086',
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="relative bg-black py-20 lg:py-28 overflow-hidden">
      <div className="wrap" ref={ref}>

        {/* Header — Figma 129:653 + 129:652 */}
        <div
          className={`text-center max-w-[900px] mx-auto mb-14 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] text-white leading-tight mb-5">
            What We Build. <span className="grad-text">What We Deliver.</span>
          </h2>
          <p className="text-[16px] lg:text-[17px] text-white/55 leading-[26px] tracking-[-0.48px] max-w-[493px] mx-auto">
            From intelligent automation to digital growth — Tech Scape AI brings four core capabilities to every business we work with.
          </p>
        </div>

        {/* 2×2 grid of service cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`card-hover rounded-[20px] p-7 lg:p-9 flex flex-col transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 90}ms`, minHeight: '437px' }}
            >
              {/* Icon + accent glow */}
              <div
                className="w-[56px] h-[56px] rounded-[14px] flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${svc.accent}1a 0%, rgba(255,255,255,0.02) 100%)`,
                  border: `1px solid ${svc.accent}33`,
                }}
              >
                {svc.icon}
              </div>

              {/* Title (369×29 in Figma) */}
              <h3 className="text-[22px] lg:text-[24px] font-bold text-white leading-[1.25] mb-2">
                {svc.title}
              </h3>

              {/* Subtitle (369×19) — salmon color */}
              <p className="text-[14px] lg:text-[15px] font-medium mb-5" style={{ color: svc.accent }}>
                {svc.subtitle}
              </p>

              {/* Body (524×75) */}
              <p className="text-[14px] lg:text-[15px] text-white/55 leading-[25px] tracking-[-0.42px] flex-1">
                {svc.body}
              </p>

              {/* Tag row (Frame 85) */}
              <div className="flex flex-wrap gap-2 mt-6">
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
