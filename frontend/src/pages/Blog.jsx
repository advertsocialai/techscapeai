import React, { useState } from 'react';
import Typewriter from '../components/Typewriter';
import GetStarted from '../components/GetStarted';
import { useScrollAnimation } from '../hooks/useScrollAnimation'
const CHECK_ITEMS = [
  'No Commitment Required',
  'Response Within 24 Hours',
  'Tailored To Your Goals',
]

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#3D75F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.5 3.5L5.25 9.75L2.5 7" />
  </svg>
)
export default function Blog() {
  const allArticles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [visibleCount, setVisibleCount] = useState(6);
  const displayedArticles = allArticles.slice(0, visibleCount);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  return (
    <div className="min-h-screen  text-white overflow-hidden font-sans relative">
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          left: '-11.2%', top: '80px', width: '286px', height: '258px',
          background: '#fad4bf',
          filter: 'blur(266.7px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 0.55,
        }}
      />


      {/* Ambient background ellipse glow mimicking the template layout */}
      <div className="absolute right-[-15%] top-[10%] w-[600px] h-[800px] bg-[#1C68FA]/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute left-[-20%] top-[40%] w-[500px] h-[700px] bg-[#F7CBB4]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <main className="relative z-10 pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-24">

        {/* =========================================================================
            1. HERO TITLE & HEADLINE TRACK 
           ========================================================================= */}
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 text-center px-4">
          <div className="flex-1 space-y-4 order-2 md:order-1 w-full">
            <h2
              className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
              }}
            >
              <Typewriter words={['Borderless AI Blog']} speed={100} delay={2500} />
            </h2>
            <p className="text-white text-sm md:text-[20px] font-light leading-relaxed max-w-xl mx-auto">
              Discover how our values shape our mission and foster a culture of respect and collaboration with our customers and partners.
            </p>
          </div>

          <div className="flex-shrink-0 order-1 md:order-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mx-auto md:mx-0">
            <img
              src="/blog1.svg"
              alt="Borderless AI Blog Decorative Pattern Asset"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* =========================================================================
            2. TOP BANNER FEATURED POST FRAME 
           ========================================================================= */}
        <div className="w-full rounded-3xl border border-white/[0.06] bg-gradient-to-r from-[#AF88721A] to-[#AF88721A]/30 p-6 md:p-0 hover:border-white/10 transition-all duration-300">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-5 aspect-[16/10]  rounded-2xl overflow-hidden border border-white/5">
              <img src="/blog1.svg" alt="Featured Post Visual Banner" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#B2B3B5]">
                Featured • April 4, 2026
              </div>
              <h2 className="text-xl md:text-[24px] font-bold tracking-tight text-[#F7C8B4] hover:text-[#1C68FA] transition-colors cursor-pointer">
                Borderless AI Achieves SOC-2 Type II Compliance
              </h2>
              <p className="text-white text-xs md:text-[15px] font-light leading-relaxed line-clamp-3">
                Borderless AI proudly SOC-2 Type II certified and adheres to the world's most stringent data privacy regulations, including GDPR, CCPA, California, and PIPEDA (Canada). Security is treated as a core product competency, not a back-office function, and is embedded into metadata structures seamlessly.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                  <img src="" alt="Author Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#F7C8B4]">Rakesh Chandra</div>
                  <div className="text-[14px] text-white">CEO of NxtWave</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. EDITORS' PICKS HIGHLIGHT LAYER
           ========================================================================= */}
        <div className="space-y-6 text-left">
          <h3
            className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
            }}
          >
            <Typewriter words={['Editor pickes']} speed={100} delay={2500} />
          </h3>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Large Column Block */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.05]  p-5 flex flex-col justify-between hover:border-white/10 transition-all group"
              style={{
                background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
              }}
            >
              <div className="space-y-4">
                <div className="w-full aspect-[16/9] bg-white/[0.01] rounded-xl overflow-hidden border border-white/5">
                  <img src="" alt="Editors Choice Visual 1" className="w-full h-full object-cover" />
                </div>
                <div className="text-[14px] font-mono uppercase tracking-wider text-[#7A7A7A]">ARTICLE • April 4, 2026</div>
                <h4 className="text-lg lg:text-[28px] font-bold tracking-tight text-[#F7C8B4] group-hover:text-[#1C68FA] transition-colors">AI Impact</h4>
                <p className="text-white text-[16px] font-light leading-relaxed line-clamp-2">
                  We govern our products, datacenter infrastructure, and AI assets using responsible pathways to help every person and organization develop algorithms cleanly.
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 mt-4">
                <span className="text-[15px] font-medium text-white">
                  Rakesh Chandra <span className="text-[14px] text-white/50 block font-light">CEO of NxtWave</span>
                </span>

                {/* Pure native color wrapper without filter interference */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300">
                  <img
                    src="/play.svg"
                    alt="Play"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Split Rows Column Block */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              {/* Row Post 1 */}
              <div
                className="w-full rounded-xl border border-white/[0.04] flex gap-4 hover:border-white/10 transition-all group overflow-hidden min-h-[300px]"
                style={{
                  background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
                }}
              >
                {/* Left Side: Thumbnail matching full height of card parent container with min-h rule */}
                <div className="w-28 sm:w-36 md:w-44 self-stretch flex-shrink-0 bg-white/[0.02]">
                  <img
                    src="/brand1.svg"
                    alt="Editors Row Thumbnail 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side: Content Area tightly spaced to remove empty layout gap */}
                <div className="flex-1 flex flex-col justify-between py-4 pr-4 min-w-0">
                  <div>
                    <div className="text-[12px] font-mono text-white/50 uppercase tracking-wider">
                      ARTICLE • April 4, 2026
                    </div>
                    <h5 className="text-sm lg:text-[22px] font-bold text-[#F7C8B4] group-hover:text-[#1C68FA] transition-colors mt-1 line-clamp-2 leading-tight">
                      AI impact
                    </h5>
                    <p className="text-white/70 text-[14px] font-light line-clamp-3 mt-2 leading-relaxed">
                      We govern assets using responsible system mechanics across clusters.
                    </p>
                  </div>

                  {/* Bottom Footer block structured natively beneath the content summary */}
                  <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/[0.03]">
                    <span className="text-[13px] font-medium text-white leading-tight">
                      Rakesh Chandra
                      <span className="text-[12px] text-white/40 block font-light mt-0.5">CEO of NxtWave</span>
                    </span>

                    <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300 flex-shrink-0">
                      <img
                        src="/play.svg"
                        alt="Play"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Row Post 2 */}
              <div
                className="w-full rounded-xl border border-white/[0.04] flex gap-4 hover:border-white/10 transition-all group overflow-hidden min-h-[300px]"
                style={{
                  background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
                }}
              >
                {/* Left Side: Thumbnail matching full height of card parent container with min-h rule */}
                <div className="w-28 sm:w-36 md:w-44 self-stretch flex-shrink-0 bg-white/[0.02]">
                  <img
                    src="/brand1.svg"
                    alt="Editors Row Thumbnail 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side: Content Area tightly spaced to remove empty layout gap */}
                <div className="flex-1 flex flex-col justify-between py-4 pr-4 min-w-0">
                  <div>
                    <div className="text-[12px] font-mono text-white/50 uppercase tracking-wider">
                      ARTICLE • April 4, 2026
                    </div>
                    <h5 className="text-sm lg:text-[22px] font-bold text-[#F7C8B4] group-hover:text-[#1C68FA] transition-colors mt-1 line-clamp-2 leading-tight">
                      AI impact
                    </h5>
                    <p className="text-white/70 text-[14px] font-light line-clamp-3 mt-2 leading-relaxed">
                      We govern assets using responsible system mechanics across clusters.
                    </p>
                  </div>

                  {/* Bottom Footer block structured natively beneath the content summary */}
                  <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/[0.03]">
                    <span className="text-[13px] font-medium text-white leading-tight">
                      Rakesh Chandra
                      <span className="text-[12px] text-white/40 block font-light mt-0.5">CEO of NxtWave</span>
                    </span>

                    <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300 flex-shrink-0">
                      <img
                        src="/play.svg"
                        alt="Play"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. RECENT ARTICLES GRID PATTERN
           ========================================================================= */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            left: '-11.2%', top: '1500px', width: '386px', height: '358px',
            background: '#004477DB',
            filter: 'blur(306.7px)',
            borderRadius: '254px 343px 129px 3px',
            opacity: 0.55,
          }}
        />
        <div className="space-y-6 text-left">

          <h3
            className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
            }}
          >
            <Typewriter words={['Recent Articles']} speed={100} delay={2500} />
          </h3>

          {/* Structured grid constraint tracking exact 3 cards per row rule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.05] p-5 flex flex-col justify-between hover:border-white/10 transition-all group"
                style={{
                  background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
                }}
              >
                <div className="space-y-4">
                  <div className="w-full aspect-[16/9] bg-white/[0.01] rounded-xl overflow-hidden border border-white/5">
                    <img src="" alt="Editors Choice Visual 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[14px] font-mono uppercase tracking-wider text-[#7A7A7A]">ARTICLE • April 4, 2026</div>
                  <h4 className="text-lg lg:text-[28px] font-bold tracking-tight text-[#F7C8B4] group-hover:text-[#1C68FA] transition-colors">AI Impact</h4>
                  <p className="text-white text-[16px] font-light leading-relaxed line-clamp-2">
                    We govern our products, datacenter infrastructure, and AI assets using responsible pathways to help every person and organization develop algorithms cleanly.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 mt-4">
                  <span className="text-[15px] font-medium text-white">
                    Rakesh Chandra <span className="text-[14px] text-white/50 block font-light">CEO of NxtWave</span>
                  </span>

                  <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300">
                    <img
                      src="/play.svg"
                      alt="Play"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conditional rendering logic: Shows button ONLY if array count exceeds total active target list */}
          {allArticles.length > visibleCount && (
            <div className="w-full flex justify-center pt-6">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-6 py-2 rounded-lg bg-[#1C68FA] text-white text-[18px] font-medium tracking-wide hover:bg-[#1C68FA]/90 transition-colors shadow-lg shadow-[#1C68FA]/10"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* =========================================================================
            5. INNOVATION MID-PAGE CTA BANNER
           ========================================================================= */}
        <div
          className="w-full rounded-3xl border border-white/[0.06] p-8 md:p-12 text-center space-y-6 relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(28,104,250,0.2) 50%, rgba(5,5,5,0.9) 100%), url('/blog5.svg')`
          }}
        >
          {/* Inner Dynamic Content Track */}
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Explore our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C68FA] to-[#F7CBB4]">Innovation software solutions</span> tailored for your needs!
            </h3>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button className="px-5 py-2 rounded-lg bg-[#1C68FA] text-white text-[18px] font-medium hover:bg-[#1C68FA]/90 transition-colors">
                Contact Us
              </button>
              <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-[18px] font-medium hover:bg-white/10 transition-colors">
                Explore Our Products
              </button>
              <button className="px-5 py-2 rounded-lg bg-transparent border border-white/10 text-white text-[18px] font-medium hover:text-white hover:border-white/20 transition-colors">
                Partner with Us
              </button>
            </div>
          </div>

          {/* Ambient Overlay Glow effect */}
          <div className="absolute top-0 right-[-20%] w-[300px] h-full bg-[#1C68FA]/20 transform skew-x-12 blur-3xl pointer-events-none z-0" />
        </div>

      </main>


      <section id="get-started" className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

          {/* --- Header Section --- */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* Premium Capsule Badge (Matches image layout perfectly) */}
            <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.06] bg-[#120b08]/60 shadow-[inset_0_1px_12px_rgba(245,160,134,0.06)] mb-8 backdrop-blur-sm">
              <span className="text-[#F7BFA0] uppercase tracking-[0.22em] text-[22px] font-semibold">
                Get Started
              </span>
            </div>

            {/* Bold Section Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[24px] font-medium text-[#FDFDFD] mb-6 tracking-tight">
              Let's Build Something Together
            </h2>

            {/* Balanced Low-Opacity Description Subtext */}
            <p className="text-white/45 max-w-2xl mx-auto text-[13px] md:text-[14px] leading-relaxed font-light tracking-wide px-4">
              Whether You're A Business Looking To Automate, A Student Ready To Upskill, Or A Partner Exploring Collaboration <br className="hidden md:inline" />
              The First Conversation Is Always Free. Tell Us What You Need And We'll Tell You Exactly How We Can Help.
            </p>
          </div>

          {/* --- Main Content Wrapper with Background Image --- */}
          <div
            className={`w-full border border-black/5  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{
              backgroundColor: '#050505',
              backgroundImage: "url('/bg2.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* FIXED: Removed -mt-92 from the grid class list below */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 p-8 md:p-16 lg:p-20 items-start z-20">
              {/* Left: Glassmorphic Contact Form */}
              <div>
                <GetStarted />
              </div>

              {/* Right: Booking Info Section */}
              <div className="lg:pl-6 text-left lg:pt-2">
                <h3 className="text-[33px] md:text-[36px] font-semibold text-white mb-6 leading-tight tracking-tight">
                  Book a Free Consultation Directly
                </h3>
                <p className="text-white/40 mb-10 text-base md:text-lg leading-relaxed max-w-md">
                  Skip the form. Pick a time that works for you and get on a call with our team within 24 hours.
                </p>

                <ul className="space-y-5">
                  {CHECK_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-4 group">
                      <span className="flex-shrink-0 p-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <CheckIcon />
                      </span>
                      <span className="text-white/70 group-hover:text-white transition-colors text-xs md:text-sm font-semibold uppercase tracking-widest">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="w-full bg-transparent text-center py-16 md:py-24 flex flex-col items-center justify-center">

              {/* Premium Bold Image-Matched Heading */}
              <h2 className="text-3xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-10">
                Ready To put AI to work ?
              </h2>
              <p className="text-white mb-10 text-base md:text-lg leading-relaxed">

                Your first discovery call is free. Let's find the workflow we can solve together
              </p>

              {/* Dynamic Request A Demo Gradient Button (Matches image_430f2d.png) */}
              <button
                type="button"
                className="px-8 py-3 rounded-xl font-medium text-xs md:text-sm text-white shadow-lg transition-all duration-300 hover:opacity-90 active:scale-[0.98] tracking-wide backdrop-blur-sm border border-white/10"
                style={{ background: 'linear-gradient(90deg, #3D75F3 0%, #7E85D4 55%, #E39994 100%)' }}
              >
                Request A Demo
              </button>

            </div>
          </div>
        </div>


        {/* Subtle Bottom Glows */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}