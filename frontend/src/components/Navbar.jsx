import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="3" y1="5" x2="17" y2="5"/>
      <line x1="3" y1="10" x2="17" y2="10"/>
      <line x1="3" y1="15" x2="17" y2="15"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="4" y1="4" x2="16" y2="16"/>
      <line x1="16" y1="4" x2="4" y2="16"/>
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'AI Agents',    href: '#ai-agents' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Team',         href: '#team' },
  { label: 'Partners',     href: '#partners' },
]

/* Figma logo — exact two-circle mark in a rounded box + "Tech\nScape AI" */
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      {/* Logo mark — white rounded box with two overlapping circles (matches Figma) */}
      <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
        <svg width="30" height="28" viewBox="0 0 30 28" fill="none">
          {/* Salmon circle — bottom left */}
          <circle cx="10" cy="18" r="10" fill="#F5A086" />
          {/* Blue circle — top right */}
          <circle cx="20" cy="10" r="10" fill="#3D75F3" />
          {/* Overlap blend */}
          <circle cx="15" cy="14" r="4" fill="#fff" opacity="0.15" />
        </svg>
      </div>

      {/* Text — "Tech" line 1, "Scape AI" line 2 — matches Figma exactly */}
      <span className="text-[13px] font-bold text-white leading-[1.25] tracking-tight">
        Tech<br />
        <span>Scape </span>
        <span className="grad-text">AI</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'nav-blur bg-black/70 border-b border-white/[0.09] shadow-[0_1px_30px_rgba(0,0,0,0.6)]'
        : 'bg-black/50 backdrop-blur-xl border-b border-white/[0.06]'
    }`}>
      <div className="wrap">
        {/* Navbar row — 48px height matching Figma */}
        <div className="flex items-center justify-between h-[48px]">

          <Logo />

          {/* Desktop nav links — centered */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={e => navigate(e, href)}
                className="relative text-[13px] text-white/55 hover:text-white transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:grad hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right — hamburger + Contact Us */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* "Contact Us" — matches Figma button label */}
            <Link
              to="/contact"
              className="btn hidden sm:inline-flex items-center px-5 h-[36px] text-[13px] font-semibold text-white rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          open ? 'max-h-[480px] pb-4 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white/[0.07] pt-2 flex flex-col gap-0.5">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={e => navigate(e, href)}
                className="px-3 py-2.5 text-[14px] text-white/55 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200"
                style={{ transitionDelay: `${i * 25}ms` }}
              >
                {label}
              </a>
            ))}
            <Link
              to="/contact"
              className="btn mt-2 inline-flex items-center justify-center py-2.5 text-[14px] font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
