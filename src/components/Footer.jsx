import { Link } from 'react-router-dom'

// Logo icon
function LogoIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="28" cy="12" r="10" fill="#3D75F3" />
      <circle cx="14" cy="30" r="8" fill="#F5A086" />
      <circle cx="22" cy="22" r="6" fill="#FFFFFF" opacity="0.1" />
      <circle cx="22" cy="22" r="3.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

// SVG social icons
function GithubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const FOOTER_LINKS = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Partners', href: '#partners' },
    { label: 'Careers', href: '/contact' },
  ],
  Services: [
    { label: 'AI Automation', href: '#services' },
    { label: 'Digital Marketing', href: '#services' },
    { label: 'Training & Education', href: '#services' },
    { label: 'Digital Branding', href: '#services' },
  ],
  'AI Agents': [
    { label: 'Sales Automation', href: '#ai-agents' },
    { label: 'Reporting Agents', href: '#ai-agents' },
    { label: 'Support Bots', href: '#ai-agents' },
    { label: 'Custom POCs', href: '#ai-agents' },
  ],
  Contact: [
    { label: 'Book a Consultation', href: '/contact' },
    { label: 'Get in Touch', href: '/contact' },
    { label: 'hello@techscapeai.com', href: '/contact' },
  ],
}

const SOCIALS = [
  { icon: GithubIcon, href: '#', label: 'GitHub' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
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
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">

        {/* Top section */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 py-14 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <LogoIcon size={36} />
              <span className="text-[15px] font-bold text-white leading-tight">
                Tech<br />Scape AI
              </span>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[220px] mb-6">
              AI-powered solutions that move businesses forward — fast, affordable, and ready to deploy.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.06] transition-all"
                  style={{ border: '1px solid #1E1E1E' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-4">{cat}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link to={href} className="text-[13px] text-white/40 hover:text-white transition-colors">
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={(e) => handleAnchor(e, href)}
                        className="text-[13px] text-white/40 hover:text-white transition-colors"
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

        {/* Large brand name — matching Figma footer */}
        <div className="py-10 text-center overflow-hidden">
          <h2
            className="font-black leading-none select-none"
            style={{
              fontSize: 'clamp(48px, 10vw, 130px)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TechScape AI
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 border-t border-white/[0.05]">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} Tech Scape AI. All rights reserved.
          </p>
          <p className="text-[12px] text-white/25">
            Built with React · FastAPI · Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}
