import PagePlaceholder from '../components/PagePlaceholder'
import SEO from '../components/SEO'
import Typewriter from '../components/Typewriter'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function RecruitmentAI() {
  return (
    <>
      <SEO
        title="Recruitment AI — TechScape AI"
        description="AI agents for hiring teams — sourcing, screening, scheduling, and candidate engagement handled at scale without losing the human touch."
        canonical="/recruitment-ai"
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

          <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">

            <Typewriter words={['Swipe to meet ']} speed={100} delay={2500} /><br />
            your next founder
          </h2>

          <p className="text-[16px] md:text-[20px] mt-6">
            Match with a role in seconds, not weeks
          </p>


          <form onsubmit="event.preventDefault();" class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mb-20 mt-14">
            <button
              type="submit"
              class="btn"
            >
              Get Started
            </button>
            <button
              type="submit"
              class="btn"
            >
              See How it works
            </button>
          </form>


        </div>
      </section>
    </>
  )
}
