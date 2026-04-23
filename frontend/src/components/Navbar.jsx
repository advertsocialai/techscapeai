import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import navbarBrand from '../assets/navbar-brand.svg'

function MenuIcon() {
  // Figma 129:333 — 24×24 menu icon next to "Contact us"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="7"  x2="20" y2="7"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="17" x2="20" y2="17"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18"/>
      <line x1="18" y1="6" x2="6" y2="18"/>
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

          <img src="/logotechscapeai.svg" alt="" />

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

          {/* Right — hamburger + Contact us (Figma: no desktop links, all go in drawer) */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setOpen(v => !v)}
              className="w-[24px] h-[24px] flex items-center justify-center text-white/70 hover:text-white transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* "Contact us" — Figma button primary (129:328): 107×40, radius 4px */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 w-[107px] h-[40px] text-[14px] font-medium text-white rounded-[4px] capitalize whitespace-nowrap"
              style={{
                backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',
              }}
            >
              Contact us
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
