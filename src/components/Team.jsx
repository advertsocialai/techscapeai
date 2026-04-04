const MEMBERS = [
  {
    name: 'Founder & CEO',
    role: 'AI Strategy & Product',
    location: 'India',
    initials: 'TS',
    color: '#3D75F3',
  },
  {
    name: 'Head of Engineering',
    role: 'AI/ML Architecture',
    location: 'Canada',
    initials: 'HE',
    color: '#F5A086',
  },
  {
    name: 'Lead Designer',
    role: 'UX & Brand Identity',
    location: 'India',
    initials: 'LD',
    color: '#3D75F3',
  },
  {
    name: 'GTM Lead',
    role: 'Growth & Partnerships',
    location: 'USA',
    initials: 'GL',
    color: '#F5A086',
  },
]

export default function Team() {
  return (
    <section id="team" className="relative bg-black py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="section-label mb-4">OUR TEAM</p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] text-white leading-tight">
              Engineers, Educators &amp;<br />
              <span className="gradient-text">Business Builders.</span>
            </h2>
            <div>
              <p className="text-[15px] text-white/50 leading-relaxed mb-4">
                The Tech Scape AI team is not a group of consultants who talk about technology. We are engineers, designers, educators, and business operators who build it every day across India, the USA, and Canada.
              </p>
              <p
                className="text-[14px] leading-relaxed px-5 py-4 rounded-xl"
                style={{ background: '#0D0D0D', border: '1px solid #1A1A1A', color: 'rgba(255,255,255,0.45)' }}
              >
                We are a lean, global, high-output team. Every person here owns their work and every piece of work we deliver reflects that.
              </p>
            </div>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="card-hover rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: '#0D0D0D', border: '1px solid #1A1A1A' }}
            >
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white"
                style={{ background: `${m.color}20`, border: `1.5px solid ${m.color}40` }}
              >
                {m.initials}
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">{m.name}</p>
                <p className="text-[12px] text-white/40 mt-0.5">{m.role}</p>
              </div>
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }} />
                <span className="text-[12px] text-white/35">{m.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
