// "The Problem We Solve" section from Figma
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
  return (
    <section className="relative bg-black py-20 lg:py-28">
      {/* Top border line */}
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">
        <div className="border-t border-white/[0.07] pt-16">

          {/* Header */}
          <div className="mb-12">
            <p className="section-label mb-4">The Problem We Solve</p>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold tracking-[-0.02em] text-white leading-tight max-w-2xl">
              Every hour your team spends on manual work is an hour your competitor's AI is doing it faster.{' '}
              <span className="gradient-text">Let's fix that.</span>
            </h2>
          </div>

          {/* Problem cards */}
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {PROBLEMS.map(({ number, title, body }) => (
              <div
                key={number}
                className="card-hover rounded-2xl p-7"
                style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
              >
                <p
                  className="text-[40px] font-black leading-none mb-5"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a, #333)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
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
