import { useScrollAnimation } from '../hooks/useScrollAnimation'
import servicesCard1 from '../assets/services-card1.svg'
import servicesCard2 from '../assets/services-card2.svg'
import servicesCard3 from '../assets/services-card3.svg'
import aboutCard from '../assets/about-card.svg'

const SHOWCASE_CARDS = [
  { src: aboutCard, alt: 'AI Agents & Automation', w: 451, h: 549 },
  { src: servicesCard2, alt: 'Digital Services & Marketing', w: 422, h: 477 },
  { src: servicesCard1, alt: 'Training & Education', w: 443, h: 549 },
]

const SVC4 = {
  title: 'CRM & Digital Branding',
  description:
    'From brand strategy to CRM implementation — we help businesses communicate their value and manage customer relationships with precision and clarity.',
  tags: ['Organised operations', 'Better customer relationships', 'Business clarity'],
  accent: '#F5A086',
  accentEnd: '#ffb89e',
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="11" r="5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
      <path d="M6 27c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M22 9.5l2.5 2.5-6 6" stroke="#F5A086" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="relative bg-black py-20 lg:py-28 overflow-hidden">
      <div className="wrap" ref={ref}>
        {/* Header */}
        <div
          className={`mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
      </div>

      {/* 3-card horizontal showcase using Figma SVG exports */}
      <div className="overflow-visible">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-4 lg:gap-0 px-[5%] lg:px-[7.9%] lg:justify-center">
          {SHOWCASE_CARDS.map((card, i) => (
            <div
              key={card.alt}
              className={`flex-shrink-0 transition-all duration-700 ${
                i === 0 ? 'lg:ml-[-55px]' : ''
              } ${i === 2 ? 'lg:mr-[-55px]' : ''} ${
                i === 1 ? 'lg:mt-[-9px]' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img
                src={card.src}
                alt={card.alt}
                className="w-full lg:w-auto lg:h-[477px] object-contain"
                style={{ maxWidth: `${card.w}px` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4th service: full-width featured strip */}
      <div className="wrap mt-10">
        <div
          className={`rounded-[24px] p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transitionDelay: '270ms',
            background: 'rgba(175,136,114,0.07)',
            border: '1px solid rgba(175,136,114,0.15)',
          }}
        >
          {/* Icon */}
          <div
            className="w-[72px] h-[72px] rounded-2xl flex-shrink-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${SVC4.accent}15 0%, #080808 100%)`,
              border: `1px solid ${SVC4.accent}20`,
            }}
          >
            {SVC4.icon}
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3
              className="text-[20px] font-bold mb-2 leading-snug"
              style={{
                background: `linear-gradient(97.97deg, ${SVC4.accent} 0%, ${SVC4.accentEnd} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {SVC4.title}
            </h3>
            <p className="text-[14px] text-white/50 leading-relaxed max-w-2xl">{SVC4.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {SVC4.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
