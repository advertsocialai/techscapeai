import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// Logo icon: two coloured circles + gear shape, matching Figma
function LogoIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue circle top-right */}
      <circle cx="28" cy="12" r="10" fill="#3D75F3" />
      {/* Pink/salmon circle bottom-left */}
      <circle cx="14" cy="30" r="8" fill="#F5A086" />
      {/* Gear / cog shape in center */}
      <circle cx="22" cy="22" r="6" fill="#FFFFFF" opacity="0.15" />
      <circle cx="22" cy="22" r="3.5" fill="#FFFFFF" opacity="0.9" />
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
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur bg-black/80 border-b border-white/[0.05]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-4">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <LogoIcon />
            <span className="text-[15px] font-bold leading-tight text-white">
              Tech<br />Scape AI
            </span>
          </Link>

          {/* Desktop nav — hidden in Figma but included for usability */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: hamburger + CTA */}
          <div className="flex items-center gap-8">
            {/* Hamburger icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/70 transition-colors"
              aria-label="Menu"
            >
              {isOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />
              }
            </button>

            {/* Contact Us button */}
            <Link
              to="/contact"
              className="gradient-btn btn-transition inline-flex items-center justify-center px-[16px] h-[40px] rounded-[4px] text-[14px] font-medium text-white whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[400px] pb-6' : 'max-h-0'
          }`}
        >
          <div className="border-t border-white/[0.06] pt-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="px-3 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="mt-3 gradient-btn inline-flex items-center justify-center py-3 px-4 rounded-[4px] text-sm font-medium text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
