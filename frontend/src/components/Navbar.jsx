import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

const NAV_LINKS = [
  {
    label: 'Home',
    to: '/',
    desc: 'A global AI services and training company, built on one belief — that Artificial Intelligence should work for people, not replace them.',
  },
  {
    label: 'About us',
    to: '/about',
    desc: 'A global AI services and training company, built on one belief — that Artificial Intelligence should work for people, not replace them.',
  },
  {
    label: 'Research',
    to: '/research',
    desc: 'Engineers, designers, educators, and business operators who build it every day across India, the USA, and Canada.',
  },
  {
    label: 'Solutions',
    desc: 'Small, powerful, purpose-built AI agents and industry solutions that solve specific business problems — fast, affordable, ready to deploy.',
    children: [
      { label: 'AI Agent', to: '/ai-agent' },
      { label: 'Ad Tech Marketing', to: '/ad-tech-marketing' },
      { label: 'Travel AI', to: '/travel' },
      { label: 'Finance AI', to: '/finance-ai' },
      { label: 'Recruitment AI', to: '/recruitment-ai' },
    ],
  },
  {
    label: 'Insights',
    to: '/blog',
    desc: 'Field notes, research write-ups, and practical lessons from building and deploying AI systems in production.',
  },
  {
    label: 'Partners',
    to: '/partners',
    desc: 'Backed by the right partners and connected to the right markets — world-class networks, validated technology, and real opportunities.',
<<<<<<< Updated upstream
=======
  },
  {
    label: 'Brand',
    to: '/brand',
    desc: 'Four core capabilities — AI agents, digital transformation, technology training, and CRM/SaaS — brought to every business we work with.',
  },
  {
    label: 'Careers',
    to: '/careers',
    desc: 'A simple path from idea to impact — a discovery call, a working POC in 2–4 weeks, then deploy and scale into your operations.',
  },
  {
    label: 'Contact us',
    to: '/contact',
    desc: 'Tell us what you are trying to solve. We will come back with a clear, practical path — not a sales pitch.',
>>>>>>> Stashed changes
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    if (!open) setExpanded(null)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 pb-3 ${scrolled
        ? 'nav-blur bg-black/70 border-b border-white/[0.09] shadow-[0_1px_30px_rgba(0,0,0,0.6)]'
        : 'bg-black/50 backdrop-blur-xl border-b border-white/[0.06]'
        }`}>
        <div className="wrap">
          <div className="flex items-center justify-between h-[48px]">

            <Link to="/" aria-label="Tech Scape AI — home">
              <img src="/logotechscapeai.svg" alt="Tech Scape AI" width={170} height={32} fetchPriority="high" decoding="async" className="h-8 w-auto" />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 h-[40px] text-[13px] sm:text-[14px] font-medium text-white rounded-[4px] capitalize whitespace-nowrap"
                style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
              >
                Contact us
              </Link>


              <button
                onClick={() => setOpen(true)}
                className="w-[42px] h-[42px] flex items-center justify-center rounded-[8px] border border-white/10 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        // When closed, `inert` removes the whole drawer subtree from the tab order
        // AND the accessibility tree — so its links/buttons are never focusable inside
        // a hidden container. CSS transforms/opacity still animate the close.
        inert={!open ? true : undefined}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute inset-0 flex">
          <aside
            className={`relative h-full w-full md:w-[420px] lg:w-[480px] bg-[#0A0A0A] border-r border-white/10 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="flex items-center justify-between px-8 md:px-10 pt-6 pb-4 border-b border-white/[0.07]">
              <img src="/logotechscapeai.svg" alt="Tech Scape AI" width={170} height={28} decoding="async" className="h-7 w-auto" />
              <button
                onClick={() => setOpen(false)}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* my-auto on the inner wrapper centers the list when it fits but
                collapses when it overflows — unlike justify-center, which pushes
                the top items out of the scroll area and makes them unreachable
                (clipped 01 on phones / hidden top items when a submenu expands). */}
            <nav className="flex-1 flex flex-col px-8 md:px-10 overflow-y-auto py-8">
              <div className="w-full my-auto">
              {NAV_LINKS.map((item, i) => {
                const itemStyle = {
                  transitionDelay: `${open ? i * 55 + 150 : 0}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateX(0)' : 'translateX(-16px)',
                }
                const numClass = `text-[12px] font-medium tabular-nums transition-colors duration-300 ${activeIdx === i ? 'grad-text' : 'text-white/25'}`
                const labelClass = `text-[22px] md:text-[26px] font-semibold leading-tight tracking-[-0.5px] transition-colors duration-300 ${activeIdx === i ? 'text-white' : 'text-white/40 group-hover:text-white/75'}`

                if (item.children) {
                  const isExpanded = expanded === i
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => { setActiveIdx(i); setExpanded(isExpanded ? null : i) }}
                        onMouseEnter={() => setActiveIdx(i)}
                        onFocus={() => setActiveIdx(i)}
                        aria-expanded={isExpanded}
                        className="group w-full flex items-baseline gap-4 py-2.5 text-left transition-all duration-500 ease-out"
                        style={itemStyle}
                      >
                        <span className={numClass}>0{i + 1}</span>
                        <span className={labelClass}>{item.label}</span>
                        <span className={`chev ml-auto self-center text-white/40 ${isExpanded ? 'open' : ''}`}>
                          <ChevronIcon />
                        </span>
                      </button>

                      <div className={`overflow-hidden transition-all duration-400 ease-out ${isExpanded ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col pl-9 border-l border-white/10 ml-1 my-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              onClick={closeMenu}
                              className="py-2 text-[15px] md:text-[16px] font-medium text-white/45 hover:text-white transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    className="group flex items-baseline gap-4 py-2.5 transition-all duration-500 ease-out"
                    style={itemStyle}
                  >
                    <span className={numClass}>0{i + 1}</span>
                    <span className={labelClass}>{item.label}</span>
                  </Link>
                )
              })}
              </div>
            </nav>

            <div className="px-8 md:px-10 pb-8 pt-4 border-t border-white/[0.07]">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn w-full"
              >
                Book a Free Consultation
              </Link>
            </div>
          </aside>

          <div
            onClick={() => setOpen(false)}
            className={`relative flex-1 h-full hidden md:flex flex-col justify-center px-14 lg:px-24 transition-opacity duration-700 delay-150 ${open ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                right: '8%', top: '20%', width: '460px', height: '460px',
                background: 'rgba(53,121,206,0.18)',
                filter: 'blur(150px)',
                borderRadius: '100%',
              }}
            />

            <div className="relative max-w-[620px]">
              {NAV_LINKS.map((item, i) => (
                <div
                  key={item.label}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${activeIdx === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                >
                  <p className="text-[#C58E75] uppercase tracking-[0.25em] text-[13px] font-bold mb-5">
                    0{i + 1} — Explore
                  </p>
                  <h2 className="grad-text text-[44px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-1.5px] mb-6">
                    {item.label}
                  </h2>
                  <p className="text-white/55 text-[16px] lg:text-[18px] leading-relaxed font-light mb-8">
                    {item.desc}
                  </p>
                  {item.children ? (
                    <div className="flex flex-wrap gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={closeMenu}
                          className="px-4 py-2 rounded-full border border-white/15 text-[14px] font-medium text-white/70 hover:text-white hover:border-white/35 hover:bg-white/[0.04] transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors w-fit"
                    >
                      Visit {item.label} page
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}

              {/* Invisible spacer gives the absolutely-positioned panels a height */}
              <div className="invisible flex flex-col justify-center" aria-hidden="true">
                <p className="uppercase tracking-[0.25em] text-[13px] font-bold mb-5">00 — Explore</p>
                <h2 className="text-[44px] lg:text-[64px] font-extrabold leading-[1.05] mb-6">Placeholder</h2>
                <p className="text-[16px] lg:text-[18px] leading-relaxed mb-8">{NAV_LINKS[activeIdx].desc}</p>
                <span className="text-[14px]">Go to section</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
