import PagePlaceholder from '../components/PagePlaceholder'
import SEO from '../components/SEO'
import Typewriter from '../components/Typewriter'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function FinanceAI() {
  return (
    <>
      <SEO
        title="Finance AI — TechScape AI"
        description="AI agents for finance teams — reconciliation, risk analysis, forecasting, and reporting workflows automated end to end."
        canonical="/finance-ai"
      />
      <section class="min-h-screen text-white flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden font-sans">
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left: '-11.2%', top: '50px', width: '286px', height: '258px',
            background: '#3579CE',
            filter: 'blur(206.7px)',
            borderRadius: '254px 343px 129px 391px',
            opacity: 0.55,
          }}
        />


        <div class="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
          <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3" style={{ color: '#F5A086' }}>
            Building In Progress
          </p>
          <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">

            <Typewriter words={['Finance AI Agents']} speed={100} delay={2500} /><br />
            is on the way.
          </h2>

          <p className="text-[16px] md:text-[20px] mt-6">
            This page is still being built . Leave your email and we'll notify you the moment it's live.
          </p>


          <form onsubmit="event.preventDefault();" class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mb-20 mt-14">
            <input
              type="email"
              placeholder=""
              class="w-full sm:w-80 px-4 py-2.5 rounded-md  border border-gray-300 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm shadow-inner"
              required
            />
            <button
              type="submit"
              class="btn"
            >
              Notify Me
            </button>
          </form>


          <div class="w-full min-w-5xl rounded-xl border border-gray-300 bg-black backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left shadow-2xl">

            <div class="space-y-2">
              <p class="text-xs text-white text-[20px]">
                From Our Partner Company
              </p>

              <div class="flex flex-wrap items-baseline gap-2 sm:gap-3">

                <div class="flex items-center gap-1">
                  <img
                    src="/tractcrypto.svg"
                    alt="tract crypto logo"
                    class="h-12 sm:h-9 object-contain"
                  />

                </div>


                <span class="text-[16px] sm:text-[14px] text-white ">
                  Where AI Meets Accounting - Coming Soon
                </span>
              </div>
            </div>


            <a
              href="#"
              class="btn"
            >
              Join Waitlist
            </a>

          </div>

        </div>
      </section>

    </>
  )
}
