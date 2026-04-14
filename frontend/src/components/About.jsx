import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section id="about" className="relative bg-black py-20 lg:py-28">
      {/* Subtle dark section bg */}
      <div className="absolute inset-0" style={{ background: 'rgba(8,8,15,0.6)' }} />

      <div className="wrap relative" ref={ref}>
        {/* Orange label + belief text — centered */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-3">About</p>
          <p className="text-[15px] text-white/45 max-w-md mx-auto leading-relaxed">
            Tech Scape AI Was Built With One Belief — That Artificial Intelligence Should Work For People, Not Replace Them.
          </p>
        </div>

        {/* Main about copy */}
        <div className={`text-center max-w-2xl mx-auto mb-16 space-y-5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[16px] lg:text-[17px] text-white/80 leading-relaxed">
            <span className="font-semibold text-white">We are a global AI services and training company,</span>{' '}
            founded by technologists, business builders, and educators who have worked across the USA, Canada, and India.
            We don't sell software. We solve problems with AI, with automation, and with the right people behind every solution.
          </p>
          <p className="text-[15px] text-white/45 leading-relaxed">
            From building intelligent AI agents for small businesses to training the next generation of engineers and analysts,
            everything we do is designed to create real, measurable impact.
          </p>
        </div>

        {/* "We Are Not Just Another Tech Company" */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-extrabold text-center tracking-[-0.02em] text-white mb-12">
          We Are Not Just Another<br />Tech Company
        </h2>

        {/* 3 value prop cards — slightly angled / fan layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0 lg:items-stretch">

          {/* Card 1 — left, slightly rotated ccw */}
          <div className="card rounded-2xl p-7 max-w-[280px] w-full lg:rotate-[-3deg] lg:translate-y-4 lg:translate-x-4 z-10"
            style={{ background: '#111', border: '1px solid #222' }}>
            <p className="text-[17px] font-semibold text-white leading-snug">
              We build solutions that reduce manual work and unlock human potential
            </p>
          </div>

          {/* Card 2 — center, elevated */}
          <div className="card rounded-2xl p-7 max-w-[280px] w-full z-20 lg:scale-[1.04]"
            style={{ background: '#151515', border: '1px solid #2a2a2a' }}>
            <p className="text-[17px] font-semibold text-white leading-snug">
              We train talent that is job-ready from day one
            </p>
          </div>

          {/* Card 3 — right, rotated cw, blue gradient bg */}
          <div className="rounded-2xl p-7 max-w-[280px] w-full lg:rotate-[3deg] lg:translate-y-4 lg:-translate-x-4 z-10"
            style={{ background: 'linear-gradient(135deg, #1a2f6e 0%, #0a1a40 60%, #1a0a30 100%)', border: '1px solid rgba(61,117,243,0.3)' }}>
            <p className="text-[17px] font-semibold text-white leading-snug">
              We partner with businesses to make AI adoption simple, fast, and affordable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
