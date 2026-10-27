import { useEffect, useRef, useState } from 'react'

/**
 * One-year anniversary celebration overlay.
 * Renders a canvas firecracker/fireworks burst on first visit of a session,
 * followed by a congratulatory message. Homepage-only (mounted there).
 *
 * - Shows once per browser session (sessionStorage guard) so it doesn't
 *   replay on every in-app navigation back to home.
 * - Auto-dismisses after a few seconds; user can also skip.
 * - Respects prefers-reduced-motion (skips the animation, keeps the message).
 */

const SESSION_KEY = 'tsai_anniversary_2026_seen'
const BRAND_COLORS = ['#F5A086', '#3D75F3', '#FAD4BF', '#FFD700', '#FF7A00', '#8FB8FF', '#FFFFFF']
const AUTO_DISMISS_MS = 9000

export default function AnniversaryCelebration() {
  const [show, setShow] = useState(false)
  const [closing, setClosing] = useState(false)
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  // Decide whether to show (once per session).
  useEffect(() => {
    let alreadySeen = false
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === '1'
    } catch {
      // sessionStorage unavailable (private mode / SSR guard) — show anyway.
    }
    if (!alreadySeen) {
      setShow(true)
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
    }
  }, [])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => setShow(false), 600)
  }

  // Fireworks animation + auto-dismiss timer.
  useEffect(() => {
    if (!show) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const dismissTimer = setTimeout(handleClose, AUTO_DISMISS_MS)

    const canvas = canvasRef.current
    if (!canvas || prefersReduced) return () => clearTimeout(dismissTimer)

    const ctx = canvas.getContext('2d')
    let width, height
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const GRAVITY = 0.028
    const particles = []
    const rockets = []

    // Deterministic-ish PRNG not needed; visuals only.
    const rand = (min, max) => min + Math.random() * (max - min)
    const pick = (arr) => arr[(Math.random() * arr.length) | 0]

    const launchRocket = () => {
      rockets.push({
        x: rand(width * 0.15, width * 0.85),
        y: height,
        targetY: rand(height * 0.15, height * 0.45),
        vy: rand(-9, -7),
        color: pick(BRAND_COLORS),
      })
    }

    const explode = (x, y, color) => {
      const count = 46 + ((Math.random() * 26) | 0)
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + rand(-0.12, 0.12)
        const speed = rand(1.6, 5.2)
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: rand(0.008, 0.02),
          color: Math.random() < 0.7 ? color : pick(BRAND_COLORS),
          size: rand(1.5, 3),
        })
      }
    }

    // Kick off an initial celebratory burst, then keep launching.
    for (let i = 0; i < 4; i++) {
      setTimeout(launchRocket, i * 120)
    }
    const launchInterval = setInterval(launchRocket, 550)

    const tick = () => {
      // Trailing fade for light streaks.
      ctx.fillStyle = 'rgba(3, 5, 12, 0.22)'
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i]
        r.x += 0
        r.y += r.vy
        ctx.beginPath()
        ctx.fillStyle = r.color
        ctx.arc(r.x, r.y, 2.4, 0, Math.PI * 2)
        ctx.fill()
        if (r.y <= r.targetY) {
          explode(r.x, r.y, r.color)
          rockets.splice(i, 1)
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.vy += GRAVITY
        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay
        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }
        ctx.globalAlpha = Math.max(p.alpha, 0)
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      clearTimeout(dismissTimer)
      clearInterval(launchInterval)
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-label="One year anniversary celebration"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(6,10,24,0.82) 0%, rgba(2,3,8,0.94) 100%)',
        opacity: closing ? 0 : 1,
        transition: 'opacity 600ms ease',
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <button
        type="button"
        onClick={handleClose}
        aria-label="Close celebration"
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div
        className="relative z-10 text-center px-6 anniv-pop"
        style={{ maxWidth: '640px' }}
      >
        {/* <p
          className="uppercase tracking-[0.32em] text-[13px] lg:text-[15px] font-semibold mb-5"
          style={{ color: '#F7BFA0' }}
        >
          🎉 Happy Anniversary 🎉
        </p> */}

        <h2 className="text-[44px] sm:text-[64px] lg:text-[84px] font-bold leading-[0.98] tracking-tight mb-6">
          <span
            style={{
              background: 'linear-gradient(97deg, #3D75F3 0%, #F5A086 60%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            1 Year
          </span>
        </h2>

        <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-medium text-white leading-snug mb-4">
          Tech Scape AI just completed one year! 🚀
        </p>

        <p className="text-[15px] sm:text-[17px] font-light text-white/70 leading-relaxed max-w-[520px] mx-auto mb-9">
          Thank you for being part of our journey. Here&apos;s to building the future of AI —
          faster, smarter, and together.
        </p>

        <button
          type="button"
          onClick={handleClose}
          className="btn capitalize"
        >
          Continue To Site
        </button>
      </div>

      <style>{`
        @keyframes annivPop {
          0%   { opacity: 0; transform: translateY(24px) scale(0.92); }
          60%  { opacity: 1; transform: translateY(0) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .anniv-pop { animation: annivPop 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .anniv-pop { animation: none; }
        }
      `}</style>
    </div>
  )
}
