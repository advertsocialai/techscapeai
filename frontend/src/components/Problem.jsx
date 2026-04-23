import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Figma Frame 99 (138:950) — 1216×184 — 2-column header only, no cards. */

export default function Problem() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        <div className="border-t border-white/[0.07] pt-16">

          <div
            className={`flex flex-col lg:flex-row gap-10 lg:gap-14 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Left — Figma 137:904: 470×154 */}
            <div className="lg:w-[470px] shrink-0">
              <h2 className="text-[48px] sm:text-[64px] lg:text-[80px] font-semibold tracking-[-2.4px] text-white leading-[77px]">
                The Problem{' '}
                <span
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #07f 0%, #fad4bf 66.351%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  We Solve
                </span>
              </h2>
            </div>

            {/* Right — Figma Frame 88 (137:907): 696×184, 3 stacked paragraphs */}
            <div className="lg:w-[696px] flex flex-col gap-[17px]">
              <p className="text-[16px] text-[#888] font-medium leading-[25px] tracking-[-0.48px] capitalize">
                Most businesses know AI can help them. Very few know where to start. Fewer still can afford a six-month enterprise implementation.
              </p>
              <p className="text-[16px] text-[#888] font-medium leading-[25px] tracking-[-0.48px] capitalize">
                We built a different model.
              </p>
              <p className="text-[16px] text-[#888] font-medium leading-[25px] tracking-[-0.48px] capitalize lg:w-[640px]">
                We identify one high-impact problem in your business, build a focused AI agent around it, prove it works — and then scale it. No bloated projects. No wasted budgets. Just results you can see.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
