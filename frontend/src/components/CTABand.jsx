import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma Frame 122 (200:446) — 1079×254
   "Every hour..." body + "Book a Free consultation" pill + "See What We Can Build For You" */

export default function CTABand() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-black py-14 lg:py-20">
      <div className="wrap" ref={ref}>
        <div
          className={`flex flex-col items-center justify-center gap-[32px] rounded-[24px] px-[24px] py-[48px] text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background:
              'linear-gradient(to right, rgba(255,122,0,0.1) 0%, rgba(27,43,74,0.1) 100%)',
          }}
        >
          <p className="text-[16px] lg:text-[17px] font-medium text-[#e5e7eb] leading-[25px] tracking-[-0.48px] max-w-[768px]">
            Every hour your team spends on manual work is an hour your competitor&apos;s AI is doing it faster. Let&apos;s fix that.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 h-[44px] text-[14px] font-medium text-white rounded-[8px] capitalize whitespace-nowrap"
            style={{
              backgroundImage: 'linear-gradient(104.54deg, #3D75F3 58.744%, #F5A186 117.01%)',
              boxShadow: '0px 4px 4px 0px rgba(78,157,255,0.22)',
            }}
          >
            Book a Free consultation
          </Link>

          <p className="text-[16px] font-medium leading-[25px] tracking-[-0.48px]" style={{ color: '#fad4bf' }}>
            See What We Can Build For You
          </p>
        </div>
      </div>
    </section>
  )
}
