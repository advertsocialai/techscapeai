import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 12000, suffix: '+', label: 'Active Teams', description: 'Using TechScape daily' },
  { value: 2800, suffix: '+', label: 'Tools Indexed', description: 'Across all categories' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA', description: 'Enterprise reliability' },
  { value: 48, suffix: 'M+', label: 'Insights Generated', description: 'Since launch' },
]

function Counter({ value, suffix, duration = 2000 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = performance.now()
          const isDecimal = value % 1 !== 0

          const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
            const current = eased * value
            setDisplay(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
            if (progress < 1) requestAnimationFrame(tick)
            else setDisplay(value)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className="gradient-text">
      {display.toLocaleString()}{suffix}
    </span>
  )
}

const LOGOS = [
  'Stripe', 'Vercel', 'Figma', 'Linear', 'Notion',
  'Supabase', 'Clerk', 'PlanetScale', 'Resend', 'Posthog',
]

export default function Stats() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-6 text-center"
              style={{
                background: 'rgba(17, 24, 39, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              <div className="text-4xl lg:text-5xl font-extrabold mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-[#6B7280]">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="text-center">
          <p className="text-sm font-medium text-[#6B7280] uppercase tracking-widest mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-[15px] font-bold text-[#374151] hover:text-[#6B7280] transition-colors duration-200 tracking-tight"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  )
}
