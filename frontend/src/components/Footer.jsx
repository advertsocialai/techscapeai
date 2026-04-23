import { Link } from 'react-router-dom'
import socialTwitter from '../assets/social-twitter.png'
import socialLinkedin from '../assets/social-linkedin.png'
import socialGithub from '../assets/social-github.png'
import footerWordmark from '../assets/footer-wordmark.svg'
import logoIcon from '../assets/logo-icon.svg'

const FOOTER_LINKS = {
  Platform: [
    { label: 'TechScape AI Platform', href: '#' },
    { label: 'AI Engine',             href: '#ai-agents' },
    { label: 'SEO + GEO Intelligence', href: '#services' },
    { label: 'Creative Intelligence',  href: '#services' },
    { label: 'Content Intelligence',   href: '#services' },
  ],
  Solutions: [
    { label: 'AI Agents',              href: '#ai-agents' },
    { label: 'AI Copilots',            href: '#services' },
    { label: 'Enterprise Automation',  href: '#services' },
    { label: 'AI-native Platforms',    href: '#services' },
  ],
  Company: [
    { label: 'About Us',     href: '#about' },
    { label: 'Leadership',   href: '#team' },
    { label: 'Partnerships',  href: '#partners' },
    { label: 'Careers',      href: '/contact' },
    { label: 'Contact',      href: '/contact' },
  ],
  Resources: [
    { label: 'Insights',     href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog',         href: '#' },
    { label: 'Research',     href: '#' },
  ],
}

const SOCIALS = [
  { src: socialTwitter,  label: 'Twitter' },
  { src: socialLinkedin, label: 'LinkedIn' },
  { src: socialGithub,   label: 'GitHub' },
]

export default function Footer() {
  const handleAnchor = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/[0.06]" style={{ background: '#020101' }}>
      <div className="px-6 sm:px-10 lg:px-[90px] mx-auto max-w-[1440px]">

        {/* Top grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 py-14 border-b border-white/[0.06]">

          {/* Brand col */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logoIcon} alt="TechScape AI" className="h-[40px] w-auto" />
              <span className="text-[20px] font-semibold text-white leading-tight tracking-tight">
                TechScape <span className="grad-text">AI</span>
              </span>
            </Link>
            <p className="text-[14px] text-[#99a1af] leading-relaxed max-w-[260px] mb-6">
              Building the operating system for intelligent enterprises.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ src, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[40px] h-[40px] rounded-[10px] bg-[#1e2939] flex items-center justify-center hover:bg-[#2a3a4f] transition-colors duration-200"
                >
                  <img src={src} alt={label} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-[14px] font-semibold text-white mb-5">
                {cat}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link to={href} className="text-[14px] text-[#99a1af] hover:text-white transition-colors duration-200">
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={e => handleAnchor(e, href)}
                        className="text-[14px] text-[#99a1af] hover:text-white transition-colors duration-200"
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

        {/* Ghost wordmark */}
        <div className="py-8 overflow-hidden select-none">
          <img
            src={footerWordmark}
            alt=""
            className="w-full max-w-[800px] mx-auto object-contain opacity-60"
            draggable="false"
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-[#1e2939]">
          <p className="text-[14px] text-[#99a1af]">
            &copy; 2026 TechScape AI. All rights reserved.
          </p>
          <div className="flex items-center gap-[24px]">
            <a href="#" className="text-[14px] text-[#99a1af] hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px] text-[#99a1af] hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
            <a href="#" className="text-[14px] text-[#99a1af] hover:text-white transition-colors duration-200">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
