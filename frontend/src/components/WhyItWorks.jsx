import { useEffect, useRef, useState } from 'react'
import Typewriter from '../components/Typewriter'

const BOXES = [
  { text: 'Domain First Training', radius: '60% 40% 35% 65% / 55% 45% 55% 45%' },
  { text: 'Fits your existing stack', radius: '42% 58% 63% 37% / 48% 42% 58% 52%' },
  { text: 'Measured by outcomes', radius: '60% 40% 35% 65% / 55% 45% 55% 45%' },
]

const SCENES = {
  desktop: {
    w: 2000,
    h: 1080,
    start: { x: 700, y: 190 },
    end: { x: 720, y: 1000 },
    boxes: [
      { cx: 1200, cy: 250, w: 700, h: 400, rotate: 0 },
      { cx: 100, cy: 600, w: 700, h: 400, rotate: 0 },
      { cx: 1200, cy: 1000, w: 700, h: 400, rotate: 0 },
    ],
  },

  tablet: {
    w: 980,
    h: 980,
    start: { x: 490, y: 150 },
    end: { x: 490, y: 880 },
    boxes: [
      { cx: 700, cy: 220, w: 600, h: 300, rotate: -4 },
      { cx: 50, cy: 450, w: 600, h: 300, rotate: 3 },
      { cx: 580, cy: 750, w: 600, h: 300, rotate: -3 },
    ],
  },
  mobile: {
    w: 380,
    h: 620,
    start: { x: 190, y: 150 },
    end: { x: 190, y: 660 },
    boxes: [
      { cx: 215, cy: 110, w: 300, h: 150, rotate: -6 },
      { cx: 165, cy: 300, w: 300, h: 150, rotate: 2 },
      { cx: 215, cy: 500, w: 300, h: 150, rotate: -3 },
    ],
  },
}

const TAU = Math.PI * 2

const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y)
const lerp = (a, b, t) => a + (b - a) * t

function pointAt(box, angle) {
  const rot = (box.rotate * Math.PI) / 180
  const lx = (box.w / 2) * Math.cos(angle)
  const ly = (box.h / 2) * Math.sin(angle)
  return {
    x: box.cx + lx * Math.cos(rot) - ly * Math.sin(rot),
    y: box.cy + lx * Math.sin(rot) + ly * Math.cos(rot),
  }
}

function angleAt(box, p) {
  const rot = (box.rotate * Math.PI) / 180
  const dx = p.x - box.cx
  const dy = p.y - box.cy
  const lx = dx * Math.cos(-rot) - dy * Math.sin(-rot)
  const ly = dx * Math.sin(-rot) + dy * Math.cos(-rot)
  return Math.atan2(ly / (box.h / 2), lx / (box.w / 2))
}

function buildPath(scene) {
  const segs = []
  let cur = scene.start

  scene.boxes.forEach((box, i) => {
    const entryA = angleAt(box, cur)
    const entryP = pointAt(box, entryA)
    segs.push({ type: 'travel', a: cur, b: entryP, len: dist(cur, entryP) })

    const next = i < scene.boxes.length - 1 ? scene.boxes[i + 1] : scene.end
    const target = next.cx !== undefined ? { x: next.cx, y: next.cy } : next
    const exitA = angleAt(box, target)

    let d = ((exitA - entryA + Math.PI) % TAU + TAU) % TAU - Math.PI
    if (Math.abs(d) < Math.PI) d -= Math.sign(d || 1) * TAU

    const r = (box.w + box.h) / 4
    segs.push({ type: 'trace', box: i, entryA, d, len: Math.abs(d) * r })
    cur = pointAt(box, entryA + d)
  })

  segs.push({ type: 'travel', a: cur, b: scene.end, len: dist(cur, scene.end) })

  const total = segs.reduce((s, seg) => s + seg.len, 0)
  let acc = 0
  segs.forEach((seg) => {
    seg.start = acc / total
    acc += seg.len
    seg.end = acc / total
  })
  return segs
}

const PATHS = {
  desktop: buildPath(SCENES.desktop),
  tablet: buildPath(SCENES.tablet),
  mobile: buildPath(SCENES.mobile),
}

function ballAt(scene, segs, p) {
  const seg = segs.find((s) => p <= s.end) || segs[segs.length - 1]
  const t = seg.end === seg.start ? 0 : (p - seg.start) / (seg.end - seg.start)
  if (seg.type === 'travel') {
    return { x: lerp(seg.a.x, seg.b.x, t), y: lerp(seg.a.y, seg.b.y, t) }
  }
  return pointAt(scene.boxes[seg.box], seg.entryA + seg.d * t)
}

// Viewport-aware scale ceiling. Previously this was a flat 1.6 for every
// screen size, so a 1440p and a 3840px (4K) monitor rendered the exact same
// physical box/text size. Now large/4K screens are allowed to scale further.
function maxScaleFor(variant) {
  const w = window.innerWidth
  if (variant === 'desktop') {
    if (w >= 2560) return 2.6 // 4K / ultra-wide
    if (w >= 1920) return 2.1 // large desktop
    return 1.6 // standard laptop
  }
  if (variant === 'tablet') return 1.3
  return 1.15 // mobile: keep close to native size
}

export default function WhyItWorks() {
  const wrapRef = useRef(null)
  const stageRef = useRef(null)
  const rafRef = useRef(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)

  const [variant, setVariant] = useState('desktop')
  const [scale, setScale] = useState(1)
  const [progress, setProgress] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    // Three-tier breakpoints instead of just mobile/desktop:
    // <640 mobile, 640-1023 tablet, >=1024 desktop.
    const mqMobile = window.matchMedia('(max-width: 639px)')
    const mqTablet = window.matchMedia('(min-width: 640px) and (max-width: 1440px)')
    const sync = () => {
      setReduced(mqReduce.matches)
      setVariant(mqMobile.matches ? 'mobile' : mqTablet.matches ? 'tablet' : 'desktop')
    }
    sync()
    mqReduce.addEventListener('change', sync)
    mqMobile.addEventListener('change', sync)
    mqTablet.addEventListener('change', sync)
    return () => {
      mqReduce.removeEventListener('change', sync)
      mqMobile.removeEventListener('change', sync)
      mqTablet.removeEventListener('change', sync)
    }
  }, [])

  const scene = SCENES[variant]
  const segs = PATHS[variant]

  useEffect(() => {
    const el = stageRef.current
    if (!el || reduced) return
    const update = () =>
      setScale(
        Math.min(
          maxScaleFor(variant),
          el.clientWidth / scene.w,
          el.clientHeight / scene.h
        )
      )
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [scene, variant, reduced])

  useEffect(() => {
    if (reduced) return
    const loop = () => {
      const wrap = wrapRef.current
      if (wrap) {
        const rect = wrap.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        if (total > 0) {
          targetRef.current = Math.min(1, Math.max(0, -rect.top / total))
        }
      }
      const next = currentRef.current + (targetRef.current - currentRef.current) * 0.11
      if (Math.abs(next - currentRef.current) > 0.00005) {
        currentRef.current = next
        setProgress(next)
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [reduced])

  if (reduced) {
    return (
      <section className="relative py-20 lg:py-0">
        <div className="wrap">
          <div className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-5 lg:gap-6">
            {BOXES.map((b) => (
              <div key={b.text} className="card-hover flex items-center justify-center text-center">
                <h3 className='text-[32px]'>{b.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const ball = ballAt(scene, segs, progress)
  const ballOpacity = Math.min(1, progress / 0.06, Math.max(0, (1 - progress) / 0.06))

  return (
    <section ref={wrapRef} className="relative h-[320vh] md:h-[360vh] 2xl:h-[420vh]">
      <div className="sticky top-0 h-screen w-full">
        <div
          ref={stageRef}
          className="w-full h-full max-w-[1300px] 2xl:max-w-[1600px] mx-auto px-5 pt-10 pb-8 flex items-start justify-center"
        >
          <div
            className="relative"
            style={{
              width: scene.w,
              height: scene.h,
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
            }}
          >
            {scene.boxes.map((box, i) => {
              const seg = segs.find((s) => s.type === 'trace' && s.box === i)
              const active = progress >= seg.start
              const shape = BOXES[i]

              return (
                <div
                  key={shape.text}
                  className="wiw-box absolute"
                  style={{
                    left: box.cx - box.w / 2,
                    top: box.cy - box.h / 2,
                    width: box.w,
                    height: box.h,
                    borderRadius: shape.radius,
                    transform: `rotate(${box.rotate}deg)`,
                    padding: active ? 2 : 0,
                    background: active
                      ? 'linear-gradient(135deg, #0050fe 0%, #af90af 55%, #ffd0c0 100%)'
                      : 'transparent',
                  }}
                >
                  <div
                    className="wiw-box-inner flex h-full w-full items-center justify-center px-6 text-center"
                    style={{
                      borderRadius: shape.radius,
                      background: active ? 'transparent' : '#f4f2ef',
                      color: active ? '#ffffff' : '#0a0a0a',
                    }}
                  >
                    <span className="text-[16px] md:text-[18px] lg:text-[36px] font-medium leading-snug">
                      {shape.text}
                    </span>
                  </div>
                </div>
              )
            })}

            <div
              className="wiw-ball absolute"
              style={{
                left: ball.x,
                top: ball.y,
                opacity: ballOpacity,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}