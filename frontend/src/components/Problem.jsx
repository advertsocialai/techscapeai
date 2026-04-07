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
      <div className="wrap">
        <div className="border-t border-white/[0.07] pt-16">

          {/* 2-column header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 mb-14">
            {/* Left — big heading */}
            <div>
              <p className="label mb-4">The Problem We Solve</p>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.02em] text-white leading-tight">
                Every hour your team<br />
                spends on manual work<br />
                is an hour your<br />
                competitor&apos;s AI is<br />
                doing it faster.{' '}
                <span className="grad-text">Let&apos;s fix that.</span>
              </h2>
            </div>

            {/* Right — explanation */}
            <div className="flex flex-col justify-end">
              <p className="text-[15px] text-white/50 leading-relaxed mb-6">
                Most businesses know they need AI — but they don't know where to start. They waste months on pilots that go nowhere, hire consultants who over-complicate, and end up with tools nobody actually uses.
              </p>
              <p className="text-[15px] text-white/50 leading-relaxed">
                Tech Scape AI is different. We scope fast, build lean, and deliver real results — starting with a free consultation and a clear plan of action.
              </p>
            </div>
          </div>

          {/* Problem cards */}
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {PROBLEMS.map(({ number, title, body }) => (
              <div key={number} className="card-hover rounded-2xl p-7">
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
