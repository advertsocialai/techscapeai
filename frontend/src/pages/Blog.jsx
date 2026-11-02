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
    <div className="min-h-screen overflow-hidden font-sans relative">
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          left: '-11.2%', top: '80px', width: '286px', height: '258px',
          background: '#fad4bf',
          filter: 'blur(266.7px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 1.55,
        }}
      />


      <div className="absolute right-[-15%] top-[10%] w-[600px] h-[800px] bg-[#1C68FA]/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute left-[-20%] top-[40%] w-[500px] h-[700px] bg-[#F7CBB4]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <main className="relative z-10 pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-24">

        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 text-center px-4">
          <div className="flex-1 space-y-4 order-2 md:order-1 w-full">
            <h1 className=" mb-2">
              <Typewriter words={['Borderless AI Blog']} speed={100} delay={2500} />
            </h1>
            <p className=" max-w-xl mx-auto">
              Discover how our values shape our mission and foster a culture of respect and collaboration with our customers and partners.
            </p>
          </div>

          <div className="flex-shrink-0 order-1 md:order-2 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center justify-center mx-auto md:mx-0">
            <img
              src="/blog1.svg"
              alt="Borderless AI Blog Decorative Pattern Asset"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full rounded-3xl border border-white/[0.06] bg-gradient-to-r from-[#AF88721A] to-[#AF88721A]/30 p-6 md:p-0 hover:border-white/10 transition-all duration-300">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-5 aspect-[16/10]  rounded-2xl overflow-hidden border border-white/5">
              <img src="/blog10.png" alt="Featured Post Visual Banner" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="text-[14px] font-mono uppercase tracking-widest text-[#B2B3B5]">
                Featured • April 4, 2026
              </div>
              <h4 className=" text-[#F7C8B4] hover:text-[#1C68FA] transition-colors cursor-pointer">
                Borderless AI Achieves SOC-2 Type II Compliance
              </h4>
              <p className="text-xs md:text-[16px] font-light leading-relaxed line-clamp-3">
                Borderless AI proudly SOC-2 Type II certified and adheres to the world's most stringent data privacy regulations, including GDPR, CCPA, California, and PIPEDA (Canada). Security is treated as a core product competency, not a back-office function, and is embedded into metadata structures seamlessly.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                  <img src="/rakeshimgicon.svg" alt="Author Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#F7C8B4]">Rakesh Chandra</div>
                  <div className="text-[14px]">CEO of NxtWave</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-left">
          <h1 className=" mb-4">
            <Typewriter words={['Editor pickes']} speed={100} delay={2500} />
          </h1>

          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.05]  p-5 flex flex-col justify-between hover:border-white/10 transition-all group"
              style={{
                background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
              }}
            >
              <div className="space-y-4">
                <div className="w-full aspect-[16/9] bg-white/[0.01] rounded-xl overflow-hidden border border-white/5">
                  <img src="/blog11.svg" alt="Editors Choice Visual 1" className="w-full h-full object-cover" />
                </div>
                <div className="text-[14px] font-mono uppercase tracking-widest text-[#B2B3B5]">ARTICLE • April 4, 2026</div>
                <h4 className=" text-[#F7C8B4] hover:text-[#1C68FA] transition-colors cursor-pointer">AI Impact</h4>
                <p className="text-[16px] font-light leading-relaxed line-clamp-2">
                  We govern our products, datacenter infrastructure, and AI assets using responsible pathways to help every person and organization develop algorithms cleanly.
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 mt-4">
                <div>
                  <div className="text-[14px] font-semibold text-[#F7C8B4]">Rakesh Chandra</div>
                  <div className="text-[14px]">CEO of NxtWave</div>
                </div>

                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300">
                  <img
                    src="/play.svg"
                    alt="Play"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-10">
              <div
                className="w-full rounded-xl border border-white/[0.04] flex gap-4 hover:border-white/10 transition-all group overflow-hidden min-h-[300px]"
                style={{
                  background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
                }}
              >
                <div className="w-28 sm:w-36 md:w-44 self-stretch flex-shrink-0 bg-white/[0.02]">
                  <img
                    src="/blog12.svg"
                    alt="Editors Row Thumbnail 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between py-4 pr-4 min-w-0">
                  <div>
                    <div className="text-[14px] font-mono uppercase tracking-widest text-[#B2B3B5]">
                      ARTICLE • April 4, 2026
                    </div>
                    <h4 className=" text-[#F7C8B4] hover:text-[#1C68FA] transition-colors cursor-pointer mt-2">AI Impact</h4>
                    <p className="text-[16px] font-light leading-relaxed line-clamp-2 mt-2">
                      We govern our products, datacenter infrastructure, and AI assets using responsible pathways to help every person and organization develop algorithms cleanly.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/[0.03]">
                    <div>
                      <div className="text-[14px] font-semibold text-[#F7C8B4]">Rakesh Chandra</div>
                      <div className="text-[14px]">CEO of NxtWave</div>
                    </div>

                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300 flex-shrink-0">
                      <img
                        src="/play.svg"
                        alt="Play"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full rounded-xl border border-white/[0.04] flex gap-4 hover:border-white/10 transition-all group overflow-hidden min-h-[300px]"
                style={{
                  background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
                }}
              >
                <div className="w-28 sm:w-36 md:w-44 self-stretch flex-shrink-0 bg-white/[0.02]">
                  <img
                    src="/blog13.svg"
                    alt="Editors Row Thumbnail 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between py-4 pr-4 min-w-0">
                  <div>
                    <div className="text-[14px] font-mono uppercase tracking-widest text-[#B2B3B5]">
                      ARTICLE • April 4, 2026
                    </div>
                    <h4 className=" text-[#F7C8B4] hover:text-[#1C68FA] transition-colors cursor-pointer mt-2">AI Impact</h4>
                    <p className="text-[16px] font-light leading-relaxed line-clamp-2 mt-2">
                      We govern our products, datacenter infrastructure, and AI assets using responsible pathways to help every person and organization develop algorithms cleanly.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/[0.03]">
                    <div>
                      <div className="text-[14px] font-semibold text-[#F7C8B4]">Rakesh Chandra</div>
                      <div className="text-[14px]">CEO of NxtWave</div>
                    </div>

                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300 flex-shrink-0">
                      <img
                        src="/play.svg"
                        alt="Play"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            left: '-11.2%', top: '1500px', width: '386px', height: '358px',
            background: '#004477DB',
            filter: 'blur(306.7px)',
            borderRadius: '254px 343px 129px 3px',
            opacity: 1.55,
          }}
        />
        <div className="space-y-6 text-left">

          <h1 className=" mb-4">
            <Typewriter words={['Recent Articles']} speed={100} delay={2500} />
          </h1>

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
                    <img src="/blog14.svg" alt="Editors Choice Visual 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[14px] font-mono uppercase tracking-widest text-[#B2B3B5]">ARTICLE • April 4, 2026</div>
                  <h4 className=" text-[#F7C8B4] group-hover:text-[#1C68FA] transition-colors">AI Impact</h4>
                  <p className="text-[16px] font-light leading-relaxed line-clamp-2">
                    We govern our products, datacenter infrastructure, and AI assets using responsible pathways to help every person and organization develop algorithms cleanly.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 mt-4">
                  <div>
                      <div className="text-[14px] font-semibold text-[#F7C8B4]">Rakesh Chandra</div>
                      <div className="text-[14px]">CEO of NxtWave</div>
                    </div>

                  <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300">
                    <img
                      src="/play.svg"
                      alt="Play"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {allArticles.length > visibleCount && (
            <div className="w-full flex justify-center pt-6">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="btn btn-sm"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        <div
          className="w-full rounded-3xl border border-white/[0.06] p-8 md:p-12 text-center space-y-6 relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(28,104,250,0.2) 50%, rgba(5,5,5,0.9) 100%), url('/blog5.svg')`
          }}
        >
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Explore our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C68FA] to-[#F7CBB4]">Innovation software solutions</span> tailored for your needs!
            </h3>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button className="btn">
                Contact Us
              </button>
              <button className="btn-outline">
                Explore Our Products
              </button>
              <button className="btn-outline">
                Partner with Us
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-[-20%] w-[300px] h-full bg-[#1C68FA]/20 transform skew-x-12 blur-3xl pointer-events-none z-0" />
        </div>

      </main>


      <section id="get-started" className="relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto relative z-10" ref={ref}
        style={{
              backgroundColor: '#050505',
              backgroundImage: "url('/bg2.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>

          

          <div
            className={`w-full border border-black/5  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            
          >
            

            <div className="w-full bg-transparent text-center py-16 md:py-24 flex flex-col items-center justify-center">

              <h1 className=" mx-auto mb-10">
                Ready To put AI to work ?
              </h1>
              <p className="mb-10  leading-relaxed">

                Your first discovery call is free. Let's find the workflow we can solve together
              </p>

              <button type="button" className="btn">
                Request A Demo
              </button>

            </div>
          </div>
        </div>


        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}