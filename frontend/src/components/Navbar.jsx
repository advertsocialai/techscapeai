import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// How long the cursor must linger on a nav item before we auto-navigate.
// Short enough to feel "automatic"; long enough to avoid firing on every
// mouse pass across the navbar.
const HOVER_INTENT_MS = 250

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
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'AI Agents', href: '#ai-agents' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Team', href: '#team' },
  { label: 'Partners', href: '#partners' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  // Single shared timer — only the most recent hover counts. Hovering a new
  // link cancels the previous pending nav.
  const hoverTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (hoverTimer.current) clearTimeout(hoverTimer.current)
    }
  }, [])

  // Resolves a nav link's target — anchor scroll or route push.
  const goTo = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
    }
    setOpen(false)
  }

  const handleClick = (e, href) => {
    // Cancel any pending hover-nav so we don't double-fire.
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    if (href.startsWith('#')) e.preventDefault()
    goTo(href)
  }

  const handleMouseEnter = (href) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => goTo(href), HOVER_INTENT_MS)
  }

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current)
      hoverTimer.current = null
    }
  }

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 pb-3 ${scrolled
        ? 'nav-blur bg-black/70 border-b border-white/[0.09] shadow-[0_1px_30px_rgba(0,0,0,0.6)]'
        : 'bg-black/50 backdrop-blur-xl border-b border-white/[0.06]'
      }`}>
      <div className="wrap">
        <div className="flex items-center justify-between h-[48px]">
          
          <img src="/logotechscapeai.svg" alt="Tech Scape AI" />

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={e => handleClick(e, href)}
                onMouseEnter={() => handleMouseEnter(href)}
                onMouseLeave={handleMouseLeave}
                className="relative text-[13px] text-white/55 hover:text-white transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:grad hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              onMouseEnter={() => handleMouseEnter('/contact')}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:inline-flex items-center justify-center px-4 w-[107px] h-[40px] text-[14px] font-medium text-white rounded-[4px] capitalize whitespace-nowrap"
              style={{
                backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',
              }}
            >
              Contact us
            </Link>

            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden w-[24px] h-[24px] flex items-center justify-center text-white/70 hover:text-white transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${open ? 'max-h-[500px] mt-4 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-white/[0.07] pt-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={e => handleClick(e, href)}
                className="px-3 py-3 text-[15px] text-white/55 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {label}
              </a>
            ))}
            
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center w-full h-[48px] text-[15px] font-semibold text-white rounded-xl"
              style={{
                backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}