export default function About() {
  return (
    <section id="about" className="relative bg-black py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">

        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold tracking-[-0.02em] text-white leading-tight">
            We Are Not Just Another<br />Tech Company
          </h2>
        </div>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left card */}
          <div
            className="rounded-2xl p-8 card-hover"
            style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
          >
            <p className="section-label mb-4">About</p>
            <p className="text-[17px] text-white/70 leading-relaxed">
              Tech Scape AI was built with one belief — that Artificial Intelligence should work for people, not replace them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['AI-First', 'People-Driven', 'Global'].map((tag) => (
                <span key={tag} className="pill px-4 py-1.5 rounded-full text-[13px] font-medium">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div
            className="rounded-2xl p-8 card-hover"
            style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
          >
            <p className="text-[17px] text-white/70 leading-relaxed">
              We are engineers, designers, educators, and business operators who build it every day across India, the USA, and Canada.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'India', desc: 'Engineering & Dev' },
                { label: 'USA', desc: 'Strategy & GTM' },
                { label: 'Canada', desc: 'Education & Growth' },
                { label: 'Global', desc: 'AI Deployment' },
              ].map(({ label, desc }) => (
                <div key={label} className="p-3 rounded-xl" style={{ background: '#111', border: '1px solid #222' }}>
                  <p className="text-[14px] font-semibold text-white">{label}</p>
                  <p className="text-[12px] text-white/40 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
