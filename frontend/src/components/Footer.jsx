import { Link } from 'react-router-dom'
import socialTwitter from '../assets/sociallogo1.svg'
import socialLinkedin from '../assets/sociallogo2.svg'
import socialInstagram from '../assets/social-instagram.svg'
import socialFacebook from '../assets/social-facebook.svg'

const SOCIALS = [
  { src: socialInstagram, label: 'Instagram', href: 'https://www.instagram.com/techscapeai/' },
  { src: socialLinkedin,  label: 'LinkedIn',  href: 'https://in.linkedin.com/company/techscapeai' },
  { src: socialFacebook,  label: 'Facebook',  href: 'https://www.facebook.com/people/Tech-Scape-AI/61582446062330/' },
  { src: socialTwitter,   label: 'Twitter',   href: 'https://x.com/techscapeai' },
]

const LEGAL_LINKS = [
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Security', to: '/trust-center' },
  { label: 'Accessibility', to: '/accessibility' },
]

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/20 overflow-hidden text-white"
      style={{ background: '#000000' }}
    >
      <div className="relative px-6 sm:px-10 lg:px-[90px] mx-auto max-w-[1440px] pt-12 pb-6">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 pb-12">
          
          {/* Left Column: Who Are We & Logo */}
          <div className="flex flex-col justify-between pr-0 md:pr-12">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-12">
              <span className="text-[15px] font-normal tracking-wide text-white whitespace-nowrap min-w-[100px]">
                Who Are We
              </span>
              <p className="text-[14px] text-white/80 leading-relaxed max-w-[380px]">
                Tech Scape AI is an AI consulting and technology solutions company on a
                mission to make intelligent automation accessible and practical for every
                business.
              </p>
            </div>
            
            {/* Logo Icon */}
            <div className="mt-10 md:mt-auto pt-6">
              <img src="/icon2.svg" alt="Tech Scape AI Logo" className="h-20 w-auto object-contain" />
            </div>
          </div>

          {/* Right Column: Follow Us, Newsletter, Links */}
          <div className="md:pl-12 border-t md:border-t-0 md:border-l border-white/50 pt-8 md:pt-0 flex flex-col justify-between">
            
            <div>
              {/* Follow Us Row */}
              <div className="flex justify-between items-center pb-4">
                <span className="text-[14px] font-normal text-white">Follow us</span>
                <div className="flex gap-2">
                  {SOCIALS.map(({ src, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-md border border-white flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <img src={src} alt={label} className="w-4 h-4 object-contain" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/50 w-full my-1"></div>

              {/* Newsletter */}
              <div className="flex justify-between items-center mt-4 mb-3 text-[13px] text-white/60">
                <span>Newsletter</span>
                <span>Stay up to date</span>
              </div>

              {/* Email Input */}
              <div className="border border-white/50 px-4 py-3 flex justify-between items-center w-full mb-8">
                <input
                  type="email"
                  placeholder="Business Email Address*"
                  className="bg-transparent text-[14px] text-white/90 placeholder-white/40 outline-none w-full pr-4"
                />
                <button
                  type="button"
                  className="text-[14px] text-white hover:text-white/70 transition-colors duration-200 font-normal whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/70">
              {LEGAL_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Wordmark */}
        <div className="w-full pt-4 text-center select-none overflow-hidden">
          <img
            src="/techscapeai.svg"
            alt="Tech Scape AI"
            className="w-full h-auto object-contain max-h-[120px] sm:max-h-[180px]"
          />
        </div>

      </div>
    </footer>
  )
}