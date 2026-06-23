import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Typewriter from '../components/Typewriter'
import ContactForm from '../components/GetStarted'

// Section logos (Partners marquee)
import partnerNxtwave from '../assets/nxtwave.svg'
import partnerAsg from '../assets/asg.svg'
import mmw from '../assets/mmw.svg'
import goga from '../assets/goga.svg'
import abs from '../assets/abs.svg'
import bidqon_logo from '../assets/bidqon_logo.svg'
import teamCharacter from '../assets/team-character.svg'

/* ------------------------------------------------------------------ *
 * Section data
 * ------------------------------------------------------------------ */

const PARTNER_LOGOS = [
  { key: 'nxt-1', src: partnerNxtwave, alt: 'NXT Wave', w: 234, h: 44 },
  { key: 'asg-1', src: partnerAsg, alt: 'American Software Group', w: 103, h: 54 },
  { key: 'nxt-2', src: mmw, alt: 'NXT Wave', w: 234, h: 44 },
  { key: 'asg-2', src: goga, alt: 'American Software Group', w: 220, h: 54 },
  { key: 'asg-3', src: abs, alt: 'American Software Group', w: 230, h: 54 },
  { key: 'asg-4', src: bidqon_logo, alt: 'American Software Group', w: 230, h: 54 },
]
const PARTNER_MARQUEE = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

const SERVICES = [
  {
    title: 'AI Agents & Intelligent Automation',
    subtitle: 'For businesses that want to work smarter',
    body: "We design and deploy custom AI agents that handle repetitive workflows, automate operations, and free your team to focus on what matters. From customer interactions to back-office automation — if it's manual, we can make it intelligent.",
    tags: ['Fewer manual hours', 'Faster operations', 'Real ROI.'],
    accent: '#3D75F3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="6" stroke="#3D75F3" strokeWidth="1.5" />
        <circle cx="12" cy="14" r="1.5" fill="#3D75F3" />
        <circle cx="20" cy="14" r="1.5" fill="#3D75F3" />
        <path d="M12 20c1.2 1.2 2.8 2 4 2s2.8-.8 4-2" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Digital Services & Transformation',
    subtitle: 'For businesses ready to grow online',
    body: 'We deliver end-to-end digital solutions — web, content, SEO, social media, and marketing automation — built for businesses that want a strong digital presence and a system that keeps working.',
    tags: ['More visibility', 'More leads', 'More revenue'],
    accent: '#F5A086',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 20l6-6 5 5 8-8 5 5" stroke="#F5A086" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="20" r="1.5" fill="#F5A086" />
        <circle cx="28" cy="16" r="1.5" fill="#F5A086" />
      </svg>
    ),
  },
  {
    title: 'Technology Training & EdTech',
    subtitle: 'For students and professionals ready to future-proof their careers',
    body: 'We build and deliver industry-grade courses in Full Stack Development, AI & ML Engineering, Business Data Analytics, and Workflow Automation. Trained by practitioners. Designed for the real world.',
    tags: ['Job-ready skills', 'Global opportunities', 'Career acceleration'],
    accent: '#3D75F3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 12l12-6 12 6-12 6L4 12z" stroke="#3D75F3" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 15v5c0 2.2 3.1 4 7 4s7-1.8 7-4v-5" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 13v7" stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'CRM & SaaS for Small Business',
    subtitle: 'For small businesses that need enterprise tools at startup prices',
    body: 'We adapt and deploy ready-built CRM and business software solutions — customised for your workflow, priced for your budget. No bloat. No complexity. Just tools that work.',
    tags: ['Organised operations', 'Better customer relationships', 'Business clarity'],
    accent: '#F5A086',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="5" stroke="#F5A086" strokeWidth="1.5" fill="none" />
        <path d="M6 27c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
]

const AGENTS = [
  {
    title: 'Customer Support Agent',
    description:
      'Intelligent bots trained on your knowledge base that handle queries 24/7, resolve issues instantly, and escalate complex cases to your team — no downtime, no wait time.',
    icon: '/Ai1.svg',
  },
  {
    title: 'Data & Reporting Agent',
    description:
      'Pull from multiple sources, auto-generate reports, and surface insights on demand — no more manual Excel grind or waiting on the analytics team for weekly numbers.',
    icon: '/Ai2.svg',
  },
  {
    title: 'Outreach & Follow-Up Agent',
    description:
      'Automated lead nurturing via email and WhatsApp — personalised messages, timely follow-ups, and CRM sync, all without lifting a finger or losing a prospect.',
    icon: '/Ai13.svg',
  },
  {
    title: 'Operations & Workflow Agent',
    description:
      'End-to-end process automation connecting your tools — Slack, Notion, Sheets, HubSpot. Eliminate manual handoffs and keep work moving 24/7 across departments.',
    icon: '/Ai4.svg',
  },
]

const TEAM_ACCORDION = [
  {
    title: 'Founders & Leadership',
    content: 'A cross-functional founding team with deep expertise across AI engineering, business development, digital marketing, and technology education. Our founders have built products, run agencies, trained talent, and delivered solutions for clients globally.',
  },
  { title: 'Design & Creative', content: 'Designers who blend brand identity with user experience to create visually stunning and highly functional digital products.' },
  { title: 'Development & Engineering', content: 'Full-stack engineers and AI/ML specialists focused on building scalable, high-performance automation and software solutions.' },
  { title: 'Marketing & Growth', content: 'Growth operators who combine data, content, and strategy to scale digital presence and drive business results.' },
  { title: 'Research & Education', content: 'Educators and researchers developing the next generation of AI-literate talent and cutting-edge tech curricula.' },
]

const DETAILED_PARTNERS = [
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

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */

function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })
  const typewriterWords = ['AI Solutions', 'Automation', 'Smart Agents', 'Future Tech']

  return (
    <section className="relative bg-black overflow-hidden flex items-center">
      {/* Subtle peach glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          left: '-11.2%', top: '80px', width: '286px', height: '258px',
          background: '#fad4bf',
          filter: 'blur(266.7px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 0.55,
        }}
      />

      <div className="wrap w-full pt-[88px] pb-20" ref={ref}>
        <div className="grid lg:grid-cols-[667px_546px] gap-10 lg:gap-[61px] items-center lg:h-[474px] max-w-[1274px] mx-auto">

          {/* Left column — headline + copy + CTA */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="capitalize text-[36px] sm:text-[46px] lg:text-[52px] font-semibold tracking-[-1.56px] leading-[1.1] mb-5 max-w-[667px] text-white">
              We Build{' '}
              <span
                className="bg-clip-text text-transparent font-bold inline-block min-w-[280px]"
                style={{ backgroundImage: 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)' }}
              >
                <Typewriter words={typewriterWords} speed={100} delay={2500} />
              </span>
              {/* Keep "That…" on its own line so the headline shape stays stable
                  while the typewriter cycles through words of varying length. */}
              <br />
              That Move Your Business Forward
            </h1>

            <p className="text-[16px] font-light leading-[25px] text-[#e5e7eb] tracking-[-0.48px] max-w-[619px] mb-10">
              Tech Scape AI is a global AI services company delivering intelligent automation, custom AI agents, digital transformation, and world-class technology training trusted by businesses across the USA, Canada, and India.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-[218px] h-[44px] text-[14px] font-medium text-white rounded-[8px] capitalize"
              style={{
                backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',
                boxShadow: '0 4px 4px 0 rgba(78,157,255,0.22)',
              }}
            >
              Book a Free consultation
            </Link>
          </div>

          {/* Right column — floating globe */}
          <div
            className={`relative w-full aspect-[546/474] lg:w-[546px] lg:h-[474px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <img src="/globe.svg" alt="" className="animate-float" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * About
 * ------------------------------------------------------------------ */

function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()
  const typewriterWords = [' We Are Not Just Another Tech Company']

  return (
    <section id="about" className="relative bg-black py-20 lg:py-28 overflow-hidden">
      {/* Decorative blur blobs */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: '-11.2%', top: '80px', width: '286px', height: '258px',
          background: '#3579CE',
          filter: 'blur(266.7px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 0.55,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: '-9%', top: '743px', width: '286px', height: '258px',
          background: '#3579ce',
          filter: 'blur(206px)',
          borderRadius: '254px 343px 254px 391px',
          opacity: 0.6,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: '-4px', top: '1545px', width: '1478px', height: '740px',
          maxWidth: '103%',
          background:
            'radial-gradient(ellipse 60% 35% at 50% 55%, rgba(61,117,243,0.55) 0%, rgba(61,117,243,0.2) 35%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0.75,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{ height: '308px', background: 'linear-gradient(to top, #000 35.307%, rgba(0,0,0,0) 100%)' }}
      />

      <div className="wrap relative" ref={ref}>
        {/* Eyebrow + belief statement */}
        <div className={`text-center max-w-[422px] mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[32px] font-medium capitalize tracking-[-0.72px] mb-3" style={{ color: '#F5A086' }}>
            About
          </p>
          <p className="text-[22px] font-medium leading-[25px] tracking-[-0.48px] text-white/70">
            Tech Scape AI was built with one belief — that Artificial Intelligence should work for people, not replace them.
          </p>
        </div>

        {/* Lead paragraph */}
        <div className={`text-center max-w-[1054px] mx-auto mb-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[16px] sm:text-[22px] lg:text-[32px] tracking-[-0.96px] leading-[45px]">
            <span className="text-white">We are a global AI services and training company, </span>
            <span style={{ color: '#5b5b5b' }}>
              founded by technologists, business builders, and educators who have worked across the USA, Canada, and India. We don&apos;t sell software. We solve problems with AI, with automation, and with the right people behind every solution.
            </span>
          </p>
        </div>

        {/* Secondary paragraph */}
        <div className={`text-center max-w-[932px] mx-auto mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[16px] sm:text-[22px] lg:text-[24px] tracking-[-0.72px] leading-[38px]" style={{ color: '#8a8a8a' }}>
            From building intelligent AI agents for small businesses to training the next generation of engineers and analysts, everything we do is designed to create real, measurable impact.
          </p>
        </div>

        {/* Big animated heading */}
        <div className={`text-center max-w-[932px] mx-auto mb-10 md:mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-1px] lg:tracking-[-1.72px] lg:leading-[75px] font-bold" style={{ color: '#888888' }}>
            <Typewriter words={typewriterWords} speed={100} delay={2500} />
          </h2>
        </div>
      </div>

      {/* Three illustration frames */}
      <div className="flex flex-row items-stretch justify-center transition-all duration-700 delay-300 bg-[url('/bgframes.svg')] bg-no-repeat bg-center bg-cover w-full max-w-[1440px] mx-auto pt-8 pb-8 lg:pt-16 lg:pb-16">
        <div className="flex-1 min-w-0 h-[200px] sm:h-[400px] lg:h-[580px]">
          <img src="/frame1.svg" className="w-full h-full object-contain" alt="Frame 1" />
        </div>
        <div className="flex-1 min-w-0 h-[200px] sm:h-[400px] lg:h-[580px]">
          <img src="/frame2.svg" className="w-full h-full object-contain" alt="Frame 2" />
        </div>
        <div className="flex-1 min-w-0 h-[200px] sm:h-[400px] lg:h-[580px]">
          <img src="/frame3.svg" className="w-full h-full object-contain" alt="Frame 3" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * Partners (marquee)
 * ------------------------------------------------------------------ */

function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="partners" className="relative bg-black py-16 lg:py-20">
      <div className="wrap" ref={ref}>
        <div className={`flex flex-col items-center gap-[44px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="capitalize text-[32px] font-medium leading-[25px] text-center tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
            In Partnership With
          </p>

          {/* Logo marquee */}
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #000 0%, transparent 100%)' }} />

            <div className="flex items-center gap-[120px] marquee-track" style={{ width: 'max-content' }}>
              {PARTNER_MARQUEE.map(({ key, src, alt, w, h }, i) => (
                <div key={`${key}-${i}`} className="flex items-center justify-center shrink-0" style={{ minHeight: '56px' }}>
                  <img
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ width: `${w}px`, height: `${h}px` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tagline pill */}
          <div
            className="inline-flex items-center justify-center rounded-full max-w-[600px]"
            style={{
              width: '900px',
              maxWidth: '100%',
              minHeight: '73px',
              padding: '24px',
              background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
            }}
          >
            <p className="text-[24px] font-medium text-[#e5e7eb] leading-[25px] tracking-[-0.48px] text-center">
              This is not the future. This is happening now and Tech Scape AI is leading it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * Services
 * ------------------------------------------------------------------ */

function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()
  const typewriterWords = ['What We Deliver.']

  return (
    <section id="services" className="relative bg-black py-20 lg:py-28 overflow-hidden">
      <div className="wrap" ref={ref}>
        <div className={`text-center max-w-[900px] mx-auto mb-14 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] text-white leading-tight mb-5">
            What We Build. <span className="grad-text"><Typewriter words={typewriterWords} speed={100} delay={2500} /></span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-white leading-[26px] tracking-[-0.48px] max-w-[493px] mx-auto">
            From intelligent automation to digital growth — Tech Scape AI brings four core capabilities to every business we work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-8 max-w-[1216px] mx-auto">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`card flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                className="w-[56px] h-[56px] rounded-[14px] flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${svc.accent}1a 0%, rgba(255,255,255,0.02) 100%)`,
                  border: `1px solid ${svc.accent}33`,
                }}
              >
                {svc.icon}
              </div>

              <h3 className="text-[22px] lg:text-[28px] font-bold text-white leading-[1.25] mb-2">{svc.title}</h3>
              <p className="text-[14px] lg:text-[16px] font-medium mb-5" style={{ color: svc.accent }}>{svc.subtitle}</p>
              <p className="text-[14px] lg:text-[16px] text-white leading-[25px] tracking-[-0.42px] flex-1">{svc.body}</p>

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

/* ------------------------------------------------------------------ *
 * AI Agents
 * ------------------------------------------------------------------ */

function AIAgentsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const headlineWords = ['AI That Actually Does the Work']
  const problemWords = ['We Solve']
  const buildWords = ['We Build']

  return (
    <section id="ai-agents" className="relative py-20 lg:py-16 overflow-hidden bg-black">
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-5%', top: '10%', width: '500px', height: '500px',
          background: 'rgba(53, 121, 206, 0.2)',
          filter: 'blur(150px)',
          borderRadius: '100%',
          zIndex: 0,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#C58E75] uppercase tracking-[0.2em] text-sm lg:text-[20px] font-bold mb-4">AI Agents &amp; POCs</p>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-semibold text-white leading-tight mb-8 tracking-tight">
            <Typewriter words={headlineWords} speed={100} delay={2500} />
          </h2>
          <p className="text-white max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Stop reading about AI. Start using it. Tech Scape AI builds small, powerful, purpose-built AI agents and proof-of-concept solutions that solve specific business problems — fast, affordable, and ready to deploy.
          </p>
        </div>

        {/* The Problem */}
        <div className="pt-20 mb-32">
          <div className={`flex flex-col lg:flex-row justify-between items-start gap-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="lg:w-1/2">
              <h3 className="text-[44px] md:text-[64px] lg:text-[72px] font-semibold text-white leading-[0.9] tracking-tighter">
                The Problem <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D75F3] to-[#F5A086]">
                  <Typewriter words={problemWords} speed={100} delay={2500} />
                </span>
              </h3>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="text-lg text-white leading-relaxed">
                "Most businesses know AI can help them. Very few know where to start. Fewer still can afford a six-month enterprise implementation."
              </p>
              <p className="text-lg text-white leading-relaxed font-medium">We built a different model.</p>
              <p className="text-lg text-white leading-relaxed">
                We identify one high-impact problem in your business, build a focused AI agent around it, prove it works — and then scale it. No bloated projects. No wasted budgets. Just results you can see.
              </p>
            </div>
          </div>
        </div>

        {/* Feature grid header */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D75F3] via-[#A396FF] to-[#F5A086]"><Typewriter words={buildWords} speed={100} delay={2500} /></span>
          </h3>
          <p className="text-xl md:text-2xl text-white font-medium tracking-tight">Purpose-built automation for every department</p>
        </div>

        {/* Agent cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {AGENTS.map((agent, i) => (
            <div
              key={agent.title}
              className={`card group flex flex-col sm:flex-row items-center gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex-1 order-2 sm:order-1 text-center sm:text-left">
                <h4 className="text-[22px] lg:text-[20px] font-semibold text-[#fad4bf] mb-4 tracking-tight group-hover:text-white transition-colors">
                  {agent.title}
                </h4>
                <p className="text-sm lg:text-base text-white leading-relaxed font-light">{agent.description}</p>
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

/* ------------------------------------------------------------------ *
 * How It Works
 * ------------------------------------------------------------------ */

function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation()
  const typewriterWords = ['How It Works']

  return (
    <section id="how-it-works" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        <div className={`mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-semibold tracking-[-2.4px] text-white leading-[77px]">
            <Typewriter words={typewriterWords} speed={100} delay={2500} />
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 relative">
          <img src="/Safer.svg" alt="" />
          <img src="/Faster.svg" alt="" />
          <img src="/On-cloud.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * CTA Band
 * ------------------------------------------------------------------ */

function CTABandSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-black py-14 lg:py-20">
      <div className="wrap" ref={ref}>
        <div
          className={`card max-w-[1079px] flex flex-col items-center justify-center gap-8 py-12 text-center mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-[16px] lg:text-[32px] font-medium line-h-[20px] text-[#e5e7eb] leading-[35px] tracking-[-0.48px] max-w-[768px]">
            Every hour your team spends on manual work is an hour your competitor&apos;s  AI is doing it faster.<br /> Let&apos;s fix that.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 h-[44px] text-[14px] font-medium text-white rounded-[8px] capitalize whitespace-nowrap"
            style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
          >
            Book a Free consultation
          </Link>

          <p className="text-[24px] font-medium leading-[25px] tracking-[-0.48px]" style={{ color: '#fad4bf' }}>
            See What We Can Build For You
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * Team
 * ------------------------------------------------------------------ */

function AccordionItem({ title, content, open, onToggle }) {
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button className="w-full flex items-center justify-between gap-[18px] py-6 text-left group" onClick={onToggle}>
        <span className={`text-[18px] lg:text-[20px] font-medium transition-colors ${open ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-white transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-[14px] text-white leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

function TeamSection() {
  const [openIdx, setOpenIdx] = useState(0)
  const { ref, isVisible } = useScrollAnimation()
  const typewriterWords = ['Built By Builders. Led By Practitioners.']

  return (
    <section id="team" className="relative bg-black py-20 lg:py-32 text-white overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-30%', top: '20%', width: '700px', height: '700px',
          background: '#3579CE',
          filter: 'blur(200px)',
          borderRadius: '50%',
          opacity: 0.15,
          zIndex: 0,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#C58E75] uppercase tracking-[0.2em] text-[24px] font-bold mb-4">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            <Typewriter words={typewriterWords} speed={100} delay={2500} />
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4 pt-4">
            <p className="text-white text-lg leading-relaxed font-light">
              The Tech Scape AI Team Is Not A Group Of Consultants Who Talk About Technology.
              We Are Engineers, Designers, Educators, And Business Operators Who Build It
              Every Day Across India, The USA, And Canada.
            </p>
          </div>

          <div className="lg:col-span-2 flex justify-center py-10 lg:py-0">
            <img
              src={teamCharacter}
              alt="Team icon"
              className="w-32 md:w-40 h-auto object-contain animate-bounce"
              style={{ animationDuration: '3s' }}
            />
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-2">
              {TEAM_ACCORDION.map((item, i) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card h-auto min-h-0 text-center max-w-4xl">
            <p className="text-white text-sm md:text-[24px] leading-relaxed">
              "We are a lean, global, high-output team. Every person here owns their work and
              every piece of work we deliver reflects that."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * Partners (detailed)
 * ------------------------------------------------------------------ */

function PartnersDetailedSection() {
  const { ref, isVisible } = useScrollAnimation()
  const typewriterWords = ['Connected to the Right Markets.']

  return (
    <section id="partners-detailed" className="relative bg-black py-20 lg:py-10">
      <div className="wrap" ref={ref}>
        <div className={`text-center max-w-[900px] mx-auto mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-4 lg:text-[32px]">Partners</p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-1.32px] text-white leading-[1.2] mb-6">
            Backed by the Right Partners.<br className="hidden sm:block" />
            <span className="grad-text"><Typewriter words={typewriterWords} speed={100} delay={2500} /></span>
          </h2>
          <p className="text-[15px] lg:text-[18px] text-white leading-[25px] tracking-[-0.48px] max-w-[813px] mx-auto">
            Tech Scape AI operates at the intersection of global technology ecosystems. Our partnerships give our clients and students access to world-class networks, validated technology, and market-ready opportunities.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {DETAILED_PARTNERS.map((p, i) => (
            <div key={p.name} className="card flex flex-col" style={{ transitionDelay: `${i * 90}ms` }}>
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

              <h3 className="text-[20px] lg:text-[22px] font-bold text-white leading-[1.3] mb-4">{p.name}</h3>
              <p className="text-[14px] lg:text-[15px] text-white leading-[25px] tracking-[-0.42px]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const CHECK_ITEMS = [
  'No commitment, no pressure',
  '30-minute discovery call',
  'Tailored AI roadmap for your business',
  'Response within 24 hours',
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A086" strokeWidth="2.5">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GetStartedSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (

    <section id="get-started" className="relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

        {/* --- Header Section --- */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Premium Capsule Badge (Matches image layout perfectly) */}
          <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.06] bg-[#120b08]/60 shadow-[inset_0_1px_12px_rgba(245,160,134,0.06)] mb-8 backdrop-blur-sm">
            <span className="text-[#F7BFA0] uppercase tracking-[0.22em] text-[22px] font-semibold">
              Get Started
            </span>
          </div>

          {/* Bold Section Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[24px] font-medium text-[#FDFDFD] mb-6 tracking-tight">
            Let's Build Something Together
          </h2>

          {/* Balanced Low-Opacity Description Subtext */}
          <p className="text-white max-w-2xl mx-auto text-[13px] md:text-[16px]  leading-relaxed font-light tracking-wide px-4">
            Whether You're A Business Looking To Automate, <br /> A Student Ready To Upskill, Or A Partner Exploring Collaboration <br className="hidden md:inline" />
            The First Conversation Is Always Free. Tell Us What You Need And We'll Tell You Exactly How We Can Help.
          </p>
        </div>

        {/* --- Main Content Wrapper with Background Image --- */}
        <div
          className={`w-full border border-black/5  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          style={{
            backgroundColor: '#050505',
            backgroundImage: "url('/bg2.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* FIXED: Removed -mt-92 from the grid class list below */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 p-8 md:p-16 lg:p-20 items-start z-20">
            {/* Left: Glassmorphic Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Booking Info Section */}
            <div className="lg:pl-6 text-left lg:pt-2">
              <h3 className="text-[33px] md:text-[36px] font-semibold text-white mb-6 leading-tight tracking-tight">
                Book a Free Consultation Directly
              </h3>
              <p className="text-white mb-10 text-base md:text-lg leading-relaxed max-w-md">
                Skip the form. Pick a time that works for you and get on a call with our team within 24 hours.
              </p>

              <ul className="space-y-5">
                {CHECK_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-4 group">
                    <span className="flex-shrink-0 p-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                      <CheckIcon />
                    </span>
                    <span className="text-white/70 group-hover:text-white transition-colors text-xs md:text-sm font-semibold uppercase tracking-widest">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="w-full bg-transparent text-center py-16 md:py-24 flex flex-col items-center justify-center">

            {/* Premium Bold Image-Matched Heading */}
            <h2 className="text-3xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-10">
              Ready To put AI to work ?
            </h2>
            <p className="text-white mb-10 text-base md:text-lg leading-relaxed">

              Your first discovery call is free. Let's find the workflow we can solve together
            </p>

            {/* Dynamic Request A Demo Gradient Button (Matches image_430f2d.png) */}
            <button
              type="button"
              className="px-8 py-3 rounded-xl font-medium text-xs md:text-sm text-white shadow-lg transition-all duration-300 hover:opacity-90 active:scale-[0.98] tracking-wide backdrop-blur-sm border border-white/10"
              style={{ background: 'linear-gradient(90deg, #3D75F3 0%, #7E85D4 55%, #E39994 100%)' }}
            >
              Request A Demo
            </button>

          </div>
        </div>
      </div>


      {/* Subtle Bottom Glows */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>

  )
}

/* ------------------------------------------------------------------ *
 * Home page — composes every inlined section. Navbar + Footer live in
 * MainLayout; GetStarted stays its own component (form logic + API).
 * ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <AIAgentsSection />
      <HowItWorksSection />
      <CTABandSection />
      <TeamSection />
      <PartnersDetailedSection />
      <GetStartedSection />
    </>
  )
}
