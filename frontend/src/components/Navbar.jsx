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

const NAV_LINKS = [
  {
    label: 'Home',
    to: '/',
    desc: 'A global AI services and training company, built on one belief — that Artificial Intelligence should work for people, not replace them.',
  },
  {
    label: 'About',
    to: '/about',
    desc: 'A global AI services and training company, built on one belief — that Artificial Intelligence should work for people, not replace them.',
  },
  {
    label: 'Brand',
    to: '/brand',
    desc: 'Four core capabilities — AI agents, digital transformation, technology training, and CRM/SaaS — brought to every business we work with.',
  },
  {
    label: 'Blog',
    to: '/blog',
    desc: 'Small, powerful, purpose-built AI agents and proof-of-concept solutions that solve specific business problems — fast, affordable, ready to deploy.',
  },
  {
    label: 'Careers ',
    to: '/careers',
    desc: 'A simple path from idea to impact — a discovery call, a working POC in 2–4 weeks, then deploy and scale into your operations.',
  },
  {
    label: 'Research',
    to: '/research',
    desc: 'Engineers, designers, educators, and business operators who build it every day across India, the USA, and Canada.',
  },
  {
    label: 'Partners',
    to: '/partners',
    desc: 'Backed by the right partners and connected to the right markets — world-class networks, validated technology, and real opportunities.',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll + close on Escape while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      {/* ---------------------------------------------------------------- *
       * Top bar — logo (left) + Contact Us & hamburger (right)
       * ---------------------------------------------------------------- */}
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 pb-3 ${scrolled
          ? 'nav-blur bg-black/70 border-b border-white/[0.09] shadow-[0_1px_30px_rgba(0,0,0,0.6)]'
          : 'bg-black/50 backdrop-blur-xl border-b border-white/[0.06]'
        }`}>
        <div className="wrap">
          <div className="flex items-center justify-between h-[48px]">

            <Link to="/" aria-label="Tech Scape AI — home">
              <img src="/logotechscapeai.svg" alt="Tech Scape AI" width={170} height={32} fetchpriority="high" decoding="async" className="h-8 w-auto" />
            </Link>

            <div className="flex items-center gap-3 sm:gap-4">
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

      {/* ---------------------------------------------------------------- *
       * Full-screen overlay menu
       *   left  → sliding sidebar with nav items (full width on mobile)
       *   right → live description panel (hidden on mobile)
       * ---------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-[60] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        // When closed, `inert` removes the whole drawer subtree from the tab order
        // AND the accessibility tree — so its links/buttons are never focusable inside
        // a hidden container. CSS transforms/opacity still animate the close.
        inert={!open ? true : undefined}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute inset-0 flex">
          {/* ---- Left sidebar ---- */}
          <aside
            className={`relative h-full w-full md:w-[420px] lg:w-[480px] bg-[#0A0A0A] border-r border-white/10 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'translate-x-0' : '-translate-x-full'}`}
          >
            {/* Sidebar header */}
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

            {/* Nav items */}
            <nav className="flex-1 flex flex-col justify-center px-8 md:px-10 gap-1 overflow-y-auto py-8">
              {NAV_LINKS.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  className="group flex items-baseline gap-4 py-3 transition-all duration-500 ease-out"
                  style={{
                    transitionDelay: `${open ? i * 55 + 150 : 0}ms`,
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateX(0)' : 'translateX(-16px)',
                  }}
                >
                  <span className={`text-[12px] font-medium tabular-nums transition-colors duration-300 ${activeIdx === i ? 'grad-text' : 'text-white/25'}`}>
                    0{i + 1}
                  </span>
                  <span className={`text-[26px] md:text-[30px] font-semibold leading-tight tracking-[-0.5px] transition-colors duration-300 ${activeIdx === i ? 'text-white' : 'text-white/40 group-hover:text-white/75'}`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Sidebar footer CTA */}
            <div className="px-8 md:px-10 pb-8 pt-4 border-t border-white/[0.07]">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full h-[50px] text-[15px] font-semibold text-white rounded-xl transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
              >
                Book a Free Consultation
              </Link>
            </div>
          </aside>

          {/* ---- Right description panel (tablet / desktop only) ---- */}
          <div
            onClick={() => setOpen(false)}
            className={`relative flex-1 h-full hidden md:flex flex-col justify-center px-14 lg:px-24 transition-opacity duration-700 delay-150 ${open ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Decorative glow */}
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

            {/* Crossfading content keyed to the hovered item */}
            <div className="relative max-w-[620px]">
              {NAV_LINKS.map((item, i) => (
                <div
                  key={item.label}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${
                    activeIdx === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
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
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors w-fit"
                  >
                    Visit {item.label} page
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
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
