import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg width="40" height="34" viewBox="0 0 40 34" fill="none">
        <circle cx="11" cy="21" r="11" fill="#F5A086" />
        <circle cx="27" cy="13" r="11" fill="#3D75F3" />
        <circle cx="19" cy="17" r="5" fill="#fff" opacity="0.12" />
      </svg>
      <span className="text-[14px] font-bold text-white leading-tight tracking-tight">
        TechScape <span className="grad-text">AI</span>
      </span>
    </Link>
  )
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const FOOTER_LINKS = {
  Platform: [
    { label: 'AI Agents',    href: '#ai-agents' },
    { label: 'Automation',   href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  Solutions: [
    { label: 'For Businesses',    href: '#services' },
    { label: 'For Students',      href: '#services' },
    { label: 'Custom POCs',       href: '#ai-agents' },
    { label: 'Training Programs', href: '#services' },
  ],
  Company: [
    { label: 'About',    href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Partners', href: '#partners' },
    { label: 'Careers',  href: '/contact' },
  ],
  Contact: [
    { label: 'Book Consultation',        href: '/contact' },
    { label: 'Get in Touch',             href: '/contact' },
    { label: 'hello@techscapeai.com',    href: '/contact' },
  ],
}

const SOCIALS = [
  { Icon: TwitterIcon,   label: 'Twitter' },
  { Icon: LinkedinIcon,  label: 'LinkedIn' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

export default function Footer() {
  const handleAnchor = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-black border-t border-white/[0.06]">
      <div className="wrap">

        {/* Top grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 py-14 border-b border-white/[0.06]">

          {/* Brand col */}
          <div className="col-span-2">
            <Logo />
            <p className="text-[13px] text-white/38 leading-relaxed max-w-[220px] mt-5 mb-6">
              AI-powered solutions that move businesses forward — fast, affordable, and ready to deploy.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                  style={{ border: '1px solid #1E1E1E' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-4">
                {cat}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link to={href} className="text-[13px] text-white/38 hover:text-white transition-colors duration-200">
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={e => handleAnchor(e, href)}
                        className="text-[13px] text-white/38 hover:text-white transition-colors duration-200"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Large ghost wordmark */}
        <div className="py-8 text-center overflow-hidden select-none">
          <p
            className="font-black leading-none"
            style={{
              fontSize: 'clamp(44px, 10vw, 130px)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TechScape AI
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 border-t border-white/[0.05]">
          <p className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} TechScape AI. All rights reserved.
          </p>
          <p className="text-[12px] text-white/25">
            Built with React &middot; FastAPI &middot; Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}
