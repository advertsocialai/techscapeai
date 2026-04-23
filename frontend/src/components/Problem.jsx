import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PROBLEMS = [
  {
    number: '01',
    title: 'Manual Work Killing Productivity',
    body: 'Every hour your team spends on repetitive tasks is an hour your competitors spend innovating. AI changes that equation permanently.',
  },
  {
    number: '02',
    title: 'Technology Without Strategy',
    body: `Most businesses adopt technology reactively. We build solutions that align with your actual goals — not just what's trending.`,
  },
  {
    number: '03',
    title: 'Skills Gap Slowing Growth',
    body: 'The AI talent gap is real. We close it through training programs that upskill your team and purpose-built tools that empower them.',
  },
]

export default function Problem() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        <div className="border-t border-white/[0.07] pt-16">

          {/* 2-column header */}
          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-14 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Left — big heading */}
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

            {/* Right — explanation (Figma 137:907: 696px, #888, medium 16, leading 25, tracking -0.48, capitalize, gap 17) */}
            <div className="lg:w-[696px] flex flex-col gap-[17px]">
              <p className="text-[16px] text-[#888] font-medium leading-[25px] tracking-[-0.48px] capitalize">
                Most businesses know AI can help them. Very few know where to start. Fewer still can afford a six-month enterprise implementation.
              </p>
              <p className="text-[16px] text-[#888] font-medium leading-[25px] tracking-[-0.48px] capitalize">
                We built a different model.
              </p>
              <div className="text-[16px] text-[#888] font-medium leading-[25px] tracking-[-0.48px] capitalize lg:w-[640px]">
                <p>We identify one high-impact problem in your business, build a focused AI agent around it, prove it works and then scale it. No bloated projects. No wasted budgets.</p>
                <p>Just results you can see.</p>
              </div>
            </div>
          </div>

          {/* Problem cards */}
          <div className={`grid lg:grid-cols-3 gap-5 lg:gap-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {PROBLEMS.map(({ number, title, body }, i) => (
              <div
                key={number}
                className="card-hover rounded-2xl p-7"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p className="text-[40px] font-black leading-none mb-5"
                  style={{ background: 'linear-gradient(135deg, #2a2a2a, #444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {number}
                </p>
                <h3 className="text-[17px] font-bold text-white mb-3">{title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
