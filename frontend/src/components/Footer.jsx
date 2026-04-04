import { Link } from 'react-router-dom'
import { Zap, Mail } from 'lucide-react'

// SVG social icons (lucide-react v0.4+ removed Github/Twitter/Linkedin)
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

const LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

const SOCIALS = [
  { icon: GithubIcon, href: '#', label: 'GitHub' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Row */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Zap className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              <span className="text-[17px] font-bold tracking-tight">
                <span className="text-white">TechScape</span>
                <span className="gradient-text"> AI</span>
              </span>
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs mb-6">
              AI-powered platform for navigating the technology landscape. Discover trends, analyze tools, and stay ahead.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link
                        to={href}
                        className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={(e) => handleAnchorClick(e, href)}
                        className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
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

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-[#4B5563]">
            © {new Date().getFullYear()} TechScape AI. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-[#4B5563]">
            <span>Built with</span>
            <span className="text-red-500 mx-0.5">♥</span>
            <span>using React, FastAPI & Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
