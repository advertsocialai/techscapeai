import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',       href: '#about' },
  { label: 'Services',    href: '#services' },
  { label: 'AI Agents',   href: '#ai-agents' },
  { label: 'How It Works',href: '#how-it-works' },
  { label: 'Team',        href: '#team' },
  { label: 'Partners',    href: '#partners' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <svg width="40" height="34" viewBox="0 0 40 34" fill="none" aria-hidden="true">
        <circle cx="11" cy="21" r="11" fill="#F5A086" />
        <circle cx="27" cy="13" r="11" fill="#3D75F3" />
        <circle cx="19" cy="17" r="5" fill="#fff" opacity="0.12" />
      </svg>
      <span className="text-[15px] font-bold text-white leading-tight tracking-tight">
        TechScape <span className="grad-text">AI</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen]       = useState(false)
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
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-blur bg-black/60 border-b border-white/[0.09] shadow-[0_1px_30px_rgba(0,0,0,0.5)]'
          : 'bg-black/40 backdrop-blur-xl border-b border-white/[0.05]'
      }`}
    >
      <div className="wrap">
        <div className="flex items-center justify-between h-[68px]">
          <Logo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={e => navigate(e, href)}
                className="relative text-[13px] text-white/50 hover:text-white transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:grad hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link
              to="/contact"
              className="btn hidden sm:inline-flex items-center px-5 h-[38px] text-[13px] font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile dropdown — slide animation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            open ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/[0.07] pt-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={e => navigate(e, href)}
                className="px-3 py-3 text-[14px] text-white/55 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {label}
              </a>
            ))}
            <Link
              to="/contact"
              className="btn mt-2 inline-flex items-center justify-center py-3 text-[14px] font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
