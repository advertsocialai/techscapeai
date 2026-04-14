import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'AI Agents', href: '#ai-agents' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Team', href: '#team' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#get-started' },
  ]

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur bg-black/80 border-b border-white/[0.06]' : 'bg-black/60 backdrop-blur-md'}`}>
      <div className="wrap">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            {/* Matches Figma: pink + blue circles */}
            <svg width="42" height="36" viewBox="0 0 42 36" fill="none">
              <circle cx="12" cy="22" r="11" fill="#F5A086" />
              <circle cx="28" cy="14" r="11" fill="#3D75F3" />
              <circle cx="20" cy="18" r="5" fill="#fff" opacity="0.15" />
            </svg>
            <span className="text-[14px] font-bold text-white leading-tight">Tech<br />Scape AI</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={e => go(e, l.href)}
                className="text-[13px] text-white/50 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Right: hamburger + Contact Us */}
          <div className="flex items-center gap-5">
            <button onClick={() => setOpen(!open)} className="lg:hidden text-white/70 hover:text-white transition-colors" aria-label="Toggle menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/contact"
              className="btn-nav hidden sm:inline-flex items-center px-4 h-[36px] text-[13px] font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
          <div className="border-t border-white/[0.07] pt-3 flex flex-col gap-0.5">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={e => go(e, l.href)}
                className="px-2 py-2.5 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all">
                {l.label}
              </a>
            ))}
            <Link to="/contact" className="btn mt-2 inline-flex items-center justify-center py-2.5 text-sm font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
