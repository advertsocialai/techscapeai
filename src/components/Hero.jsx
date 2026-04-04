import { Link } from 'react-router-dom'
import { ArrowRight, Play, ChevronRight, Sparkles, TrendingUp, Shield } from 'lucide-react'

const BADGES = [
  { icon: Sparkles, label: 'AI-Powered Analysis' },
  { icon: TrendingUp, label: 'Real-Time Insights' },
  { icon: Shield, label: 'Enterprise-Grade Security' },
]

const FLOATING_CARDS = [
  {
    id: 1,
    icon: '📈',
    title: 'Trend Detected',
    subtitle: 'Next.js 15 adoption ↑ 340%',
    color: 'from-purple-500/20 to-transparent',
    position: 'top-[15%] right-[8%]',
    delay: '0s',
  },
  {
    id: 2,
    icon: '🤖',
    title: 'AI Insight',
    subtitle: 'Rust replacing Go in backend',
    color: 'from-cyan-500/20 to-transparent',
    position: 'bottom-[25%] left-[4%]',
    delay: '1.5s',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Analysis Complete',
    subtitle: '47 tools compared',
    color: 'from-emerald-500/20 to-transparent',
    position: 'bottom-[10%] right-[12%]',
    delay: '3s',
  },
]

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Secondary glows */}
        <div className="absolute top-1/3 left-[-10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="absolute top-1/4 right-[-5%] w-[350px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Content */}
          <div className="text-center lg:text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 badge-shimmer mb-8">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">
                Introducing TechScape AI 2.0
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
              <span className="text-white">Navigate the</span>
              <br />
              <span className="gradient-text">Future of Tech</span>
              <br />
              <span className="text-white">with AI</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-[17px] lg:text-lg text-[#9CA3AF] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Discover emerging trends, analyze tools, and generate actionable insights powered by advanced AI. Stay ahead of the technology curve — effortlessly.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#9CA3AF]"
                >
                  <Icon className="w-3.5 h-3.5 text-purple-400" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-white rounded-xl btn-primary shadow-lg shadow-purple-900/30"
              >
                Start for Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[15px] font-semibold text-white rounded-xl border border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['bg-purple-500', 'bg-cyan-500', 'bg-emerald-500', 'bg-pink-500', 'bg-amber-500'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-[#060A14] flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#6B7280] mt-0.5">Trusted by <span className="text-white font-semibold">12,000+</span> tech teams</p>
              </div>
            </div>
          </div>

          {/* Right Column — Visual */}
          <div className="relative hidden lg:block">
            {/* Main Dashboard Card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
                border: '1px solid rgba(124, 58, 237, 0.25)',
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <div className="ml-4 flex-1 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center px-3">
                  <span className="text-[10px] text-[#6B7280]">app.techscapeai.com/dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#6B7280] mb-1">AI Analysis Dashboard</p>
                    <h3 className="text-lg font-bold text-white">Technology Trends</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                    <span className="text-xs font-semibold text-emerald-400">● Live</span>
                  </div>
                </div>

                {/* Charts Area */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'AI/ML Frameworks', value: 94, color: 'from-purple-500 to-purple-400' },
                    { label: 'Cloud Infrastructure', value: 78, color: 'from-cyan-500 to-cyan-400' },
                    { label: 'Web3 & Blockchain', value: 45, color: 'from-emerald-500 to-emerald-400' },
                    { label: 'Developer Tools', value: 87, color: 'from-pink-500 to-pink-400' },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-[#9CA3AF]">{label}</span>
                        <span className="text-xs font-semibold text-white">{value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${color}`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Tools Analyzed', value: '2,847' },
                    { label: 'Trends Found', value: '384' },
                    { label: 'Insights Gen.', value: '12.4K' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.06] text-center">
                      <p className="text-base font-bold gradient-text">{value}</p>
                      <p className="text-[10px] text-[#6B7280] mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {FLOATING_CARDS.map((card) => (
              <div
                key={card.id}
                className={`absolute ${card.position} animate-float`}
                style={{ animationDelay: card.delay }}
              >
                <div
                  className="rounded-xl px-4 py-3 flex items-center gap-3 min-w-[180px]"
                  style={{
                    background: 'rgba(13, 17, 30, 0.9)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}
                >
                  <div className="text-2xl">{card.icon}</div>
                  <div>
                    <p className="text-[11px] font-semibold text-white">{card.title}</p>
                    <p className="text-[10px] text-[#6B7280]">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060A14] to-transparent pointer-events-none" />
    </section>
  )
}
