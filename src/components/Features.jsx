import { TrendingUp, Cpu, Zap, BarChart3, Globe, Shield } from 'lucide-react'

const FEATURES = [
  {
    icon: TrendingUp,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    title: 'Trend Discovery',
    description:
      'Identify and track emerging technologies across all domains in real time. Never miss a breakthrough technology shift again.',
    tags: ['Real-time', 'Multi-domain'],
  },
  {
    icon: BarChart3,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    title: 'Tool Analysis',
    description:
      'Deep-dive comparisons of frameworks, libraries, and platforms with AI-generated performance and usability scores.',
    tags: ['Comparison', 'Benchmarks'],
  },
  {
    icon: Cpu,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    title: 'AI-Powered Insights',
    description:
      'Contextual recommendations tailored to your stack and goals using advanced AI reasoning across thousands of data points.',
    tags: ['Personalized', 'Claude AI'],
  },
  {
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    title: 'Real-Time Updates',
    description:
      'Stay current with live feeds from GitHub, arxiv, HackerNews, and 200+ other sources, processed and summarized instantly.',
    tags: ['Live feed', '200+ sources'],
  },
  {
    icon: Globe,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    title: 'Custom Reports',
    description:
      'Generate tailored PDF/CSV reports for your team or stakeholders — ready to present with charts, trends, and recommendations.',
    tags: ['PDF/CSV', 'Team-ready'],
  },
  {
    icon: Shield,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    title: 'Enterprise Security',
    description:
      'SOC 2 compliant infrastructure with end-to-end encryption, SSO, row-level access control, and audit logging.',
    tags: ['SOC 2', 'SSO/RBAC'],
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-5">
            <span className="text-xs font-semibold text-purple-300 tracking-widest uppercase">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
            Everything you need to stay
            <br />
            <span className="gradient-text">ahead of the curve</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            TechScape AI combines real-time data aggregation with advanced AI reasoning to give
            you unparalleled clarity on the technology landscape.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl p-6 lg:p-7 card-hover cursor-default"
                style={{
                  background: 'rgba(17, 24, 39, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-[17px] font-bold text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">{feature.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white/[0.04] border border-white/[0.07] text-[#6B7280]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover gradient line at top */}
                <div
                  className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.6), transparent)' }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
