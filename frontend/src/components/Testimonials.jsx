import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Fintech Ventures',
    avatar: 'SC',
    avatarBg: 'bg-purple-500',
    content:
      "TechScape AI transformed how we evaluate new technologies. What used to take our team a week of research now takes 30 minutes. The AI-generated comparisons are incredibly accurate.",
    stars: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Engineering',
    company: 'ScaleUp Labs',
    avatar: 'MR',
    avatarBg: 'bg-cyan-500',
    content:
      "The trend discovery feature is unreal. We caught the rise of Bun.js six months before it went mainstream. That gave us a massive competitive advantage in our hiring and stack decisions.",
    stars: 5,
  },
  {
    name: 'Priya Nair',
    role: 'VP of Product',
    company: 'DevCloud Inc.',
    avatar: 'PN',
    avatarBg: 'bg-emerald-500',
    content:
      "I use TechScape AI every Monday morning to brief our leadership team on tech trends. The auto-generated reports are professional enough to share directly with the board.",
    stars: 5,
  },
  {
    name: 'Alex Turner',
    role: 'Lead Developer',
    company: 'BuildFast Studio',
    avatar: 'AT',
    avatarBg: 'bg-pink-500',
    content:
      "Finally, a tool that thinks like a senior engineer. The tool comparisons go way beyond surface-level features — they analyze community health, security posture, and long-term viability.",
    stars: 5,
  },
  {
    name: 'Liu Wei',
    role: 'Engineering Manager',
    company: 'GlobalTech Corp',
    avatar: 'LW',
    avatarBg: 'bg-amber-500',
    content:
      "We integrated TechScape AI into our quarterly planning process. It's now a non-negotiable part of how we make architecture decisions. Our teams ship better tech, faster.",
    stars: 5,
  },
  {
    name: 'Emma Larsen',
    role: 'Principal Architect',
    company: 'NordikCloud',
    avatar: 'EL',
    avatarBg: 'bg-blue-500',
    content:
      "The Supabase and pgvector integration means TechScape AI actually remembers our past decisions and factors them into new recommendations. It gets smarter with every report.",
    stars: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-5">
            <span className="text-xs font-semibold text-amber-300 tracking-widest uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
            Loved by engineering
            <br />
            <span className="gradient-text">teams worldwide</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Thousands of engineers, CTOs, and product teams rely on TechScape AI to make better technology decisions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="relative rounded-2xl p-6 card-hover flex flex-col gap-5"
              style={{
                background: 'rgba(17, 24, 39, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-purple-500/30 absolute top-5 right-5" />

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Content */}
              <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1">"{t.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#6B7280]">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
