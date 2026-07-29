import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

import Typewriter from '../components/Typewriter';
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_VISUAL = '/travel1.svg'
const SMALL_ICON = '/smallicon.svg'


const CATEGORIES = [
  { label: 'Mountains', icon: '/travel2.svg', top: '1%', left: '-10%' },
  { label: 'Beach', icon: '/travel3.svg', top: '10%', left: '60%' },
  { label: 'Wildlife', icon: '/travel4.svg', top: '51%', left: '-3%' },
  { label: 'Wellness', icon: '/travel5.svg', top: '41%', left: '81%' },
  { label: 'Fine Dine', icon: '/travel5.svg', top: '90%', left: '64%' },
]

const STATS = [
  { value: '70%', label: 'Visitors lost without AI' },
  { value: '24/7', label: 'Always available' },
  { value: '3x', label: 'More bookings converted' },
]

const DROP_STEP = 150
const FLOAT_START = CATEGORIES.length * DROP_STEP + 550

const iconStroke = '#F5A086'
const KLARA_FEATURES = [
  {
    title: 'Plan Personalized Itineraries',
    desc: 'Chat naturally about destinations, budgets, dates and vibes. Klara builds a full day by day itinerary in seconds not hours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4.5" width="18" height="16" rx="3" stroke={iconStroke} strokeWidth="1.6" />
        <path d="M3 9h18M8 2.5v4M16 2.5v4" stroke={iconStroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Book Hotels, Packages & Flights',
    desc: 'From itinerary to confirmed booking in one flow. Klara surfaces the right packages, handles queries and closes the booking.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M7 10.5v9H4.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1H7z" stroke={iconStroke} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 10.5l4-7a2 2 0 0 1 2.8 2.5L12.5 9H19a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 18 19H7" stroke={iconStroke} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Support Answer Every Call',
    desc: 'When your team is offline, Klara picks up. Changes, cancellations, Confirmations handled 24/7 with no wait time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 3.5h3.2l1.4 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.4V19a1.5 1.5 0 0 1-1.6 1.5C9.9 20.1 3.9 14.1 3.5 5.1A1.5 1.5 0 0 1 5 3.5z" stroke={iconStroke} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const KLARA_DECK = ['/travel7.svg', '/travel8.svg', '/travel9.svg', '/travel10.svg']

const DECK_LAYOUT = [
  { x: 0, y: 0, z: 10, scale: 1, drop: 150 },
  { x: 22, y: -20, z: 20, scale: 0.97, drop: 200 },
  { x: 44, y: -40, z: 30, scale: 0.94, drop: 250 },
  { x: 66, y: -60, z: 40, scale: 0.91, drop: 300 },
]

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

function KlaraDeck() {
  const ref = useRef(null)
  const rafRef = useRef(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const [progress, setProgress] = useState(0)

  const measure = useCallback(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || 800
    const start = vh * 0.95
    const end = vh * 0.2
    const p = (start - rect.top) / (start - end)
    targetRef.current = Math.min(1, Math.max(0, p))
  }, [])

  useEffect(() => {
    measure()
    currentRef.current = targetRef.current
    setProgress(targetRef.current)

    const onScroll = () => measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const loop = () => {
      const next = currentRef.current + (targetRef.current - currentRef.current) * 0.055
      if (Math.abs(next - currentRef.current) > 0.0004) {
        currentRef.current = next
        setProgress(next)
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [measure])

  return (
    <div ref={ref} className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px]">
      {KLARA_DECK.map((src, i) => {
        const raw = Math.min(1, Math.max(0, (progress - i * 0.18) / 0.5))
        const e = easeOutCubic(raw)
        const { x, y, z, scale, drop } = DECK_LAYOUT[i]
        const ty = y - drop * (1 - e)
        const s = scale * (0.9 + 0.1 * e)
        return (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute right-0 top-1/2 w-[80%] max-w-[380px] object-contain"
            style={{
              zIndex: z,
              opacity: e,
              transform: `translate(${x}px, calc(-50% + ${ty}px)) scale(${s})`,
              willChange: 'transform, opacity',
            }}
          />
        )
      })}
    </div>
  )
}

function CategoryPill({ item, index }) {
  return (
    <div className="pill-drop" style={{ animationDelay: `${index * DROP_STEP}ms` }}>
      <div className="pill-float" style={{ animationDelay: `${FLOAT_START + index * DROP_STEP}ms` }}>
        <span className="travel-pill text-[16px] md:text-[38px]">
          {item.label}
          {item.icon.startsWith('/') ? (
            <img src={item.icon} alt="" width={20} height={20} className="w-5 h-5 object-contain" />
          ) : (
            <span aria-hidden="true" className="text-[18px] leading-none">{item.icon}</span>
          )}
        </span>
      </div>
    </div>
  )
}

function HeroSection() {

  const whyCards = [
    {
      title: "Visitors leave without enquiring ",
      per: "73%",
      desc: "They browse packages, get overwhelmed by choices, and leave.No conversation ever starts.No booking ever happens."
    },
    {
      title: "Average agency response time",
      per: "18hrs",
      desc: "By the time an agent replies, the traveller has already booked on a competitor’s platform. Speed is the booking."
    },
    {
      title: "To build one custom itinerary",
      per: "4hrs",
      desc: "Agents spend hours  manually crafting itineraries . Klara does it in 8 seconds, personalized to budget, dates, and vibe."
    }
  ];
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left: '-11.2%', top: '80px', width: '286px', height: '258px',
            background: '#fad4bf',
            filter: 'blur(266.7px)',
            borderRadius: '254px 343px 129px 391px',
            opacity: 0.55,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            right: '-6%', top: '140px', width: '340px', height: '300px',
            background: '#3579CE',
            filter: 'blur(240px)',
            borderRadius: '254px 343px 129px 391px',
            opacity: 0.5,
          }}
        />

        <div className="wrap w-full pt-[88px] pb-20">
          <div className="grid lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] gap-12 lg:gap-[61px] items-center">

            <div className='lg:space-y-14 space-y-6'>
              <span className="text-[26px] lg:text-[32px] text-[#F5A086]">
                Travel AI Agent · Powered by Klara
              </span>

              <h1 className="text-[36px] sm:text-[46px] lg:text-[62px] font-bold ">
                From <Typewriter words={["Dreaming"]} speed={100} delay={2500} />
                {" "}To Booking In One Conversation
              </h1>

              <p className="text-[16px] lg:text-[20px] font-light leading-[28px] text-[#e5e7eb] lg:tracking-[-0.48px] max-w-[540px] mb-10">
                Most travel agencies lose 70% of visitors before a single conversation happens. Klara is Gogago's always-on AI travel agent — personalizing itineraries, answering queries, and converting browsers into confirmed bookings, 24/7.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn capitalize">
                  Experience Klara
                </Link>
                <Link to="/contact" className="btn-outline capitalize">
                  Deploy For Your Agency
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h9M8.5 4.5L12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative w-full aspect-[546/474] lg:h-[520px]">
              <img
                src={HERO_VISUAL}
                alt=""
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-contain"
              />

              <div className="absolute inset-0 pointer-events-none">
                {CATEGORIES.map((item, i) => (
                  <div key={item.label} className="absolute" style={{ top: item.top, left: item.left }}>
                    <CategoryPill item={item} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 lg:gap-[62px] mt-14 lg:mt-18">
            {STATS.map((stat) => (
              <div key={stat.value} className="travel-stat">
                <p className="text-[22px] lg:text-[26px] font-semibold leading-tight tracking-[-0.5px]">{stat.value}</p>
                <p className="text-[12px] lg:text-[13px] font-light leading-tight text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="w-full max-w-6xl mx-auto space-y-14 pt-16 ">
            <div className="w-full  mx-center text-center space-y-4">
              <span className="text-[26px] lg:text-[32px] text-[#F5A086]">
                The Problem
              </span>
              <h1 className="text-[36px] sm:text-[46px] lg:text-[62px] font-bold ">
                Why Travel Agencies <Typewriter words={["Are Bleeding Bookings"]} speed={100} delay={2500} />
              </h1>
              <p className="text-[16px] md:text-[20px] font-light ">
                Before Klara, every travel website had the same fatal gap interest with no conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {whyCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl min-h-[300px] border border-white/[0.05] p-7 
                     flex flex-col items-center justify-center
                     space-y-4 transition-all duration-500 hover:border-white/10 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(145deg, rgba(247, 191, 160, 0.2) 0%, rgba(28, 109, 208, 0) 100%)"
                  }}
                >
                  <h4 className="text-[28px] sm:text-xl lg:text-[36px] text-[#FAD4BF]  text-center">
                    {card.per}
                  </h4>
                  <h4 className="text-[20px] sm:text-xl lg:text-[24px] text-[#FAD4BF]">
                    {card.title}
                  </h4>

                  <p className="text-[16px] sm:text-[18px] font-light leading-relaxed max-w-[400px]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>


          <div className="w-full max-w-6xl mx-auto space-y-14 pt-16 ">
            <div className="w-full  mx-center text-center space-y-4">
              <span className="text-[26px] lg:text-[32px] text-[#F5A086]">
                Meet Klara
              </span>
              <h1 className="text-[36px] sm:text-[46px] lg:text-[62px] font-bold ">
                One Agent. <br />
                <Typewriter words={["Three Superpowers. "]} speed={100} delay={2500} />
              </h1>
              <p className="text-[16px] md:text-[20px] font-light ">
                Klara handles the full traveller journey from the first curious click to a confirmed booking, and every question in between.
              </p>
            </div>

          </div>

        </div>
      </section>
      <section className="relative overflow-hidden  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bgtravel2.svg')",
        }}>


        <div className="wrap w-full pt-[88px] pb-20">


          <div className="w-full max-w-6xl mx-auto space-y-14 pt-0 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center  bg-cover bg-center bg-no-repeat">
              <div className="space-y-5">
                {KLARA_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-4 rounded-3xl border border-white/[0.06] p-5 lg:p-6 transition-all duration-300 hover:border-white/12"
                    style={{ background: 'linear-gradient(145deg, rgba(247,191,160,0.14) 0%, rgba(28,109,208,0) 100%)' }}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/[0.04]">
                      {f.icon}
                    </div>
                    <div className="space-y-1.5 text-left">
                      <h4 className="text-[18px] lg:text-[22px] font-medium text-[#FAD4BF]">{f.title}</h4>
                      <p className="text-[14px] lg:text-[15px] font-light leading-relaxed text-white/70">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <KlaraDeck />
            </div>


          </div>

        </div>
      </section>
      <section className="relative overflow-hidden">


        <div className="wrap w-full pt-[8px] pb-20">


          <div className="w-full max-w-6xl mx-auto space-y-14 pt-6 ">

            <div
              className="rounded-[28px] border border-white/[6] px-6 py-8 lg:py-10 text-center"
              style={{ background: 'linear-gradient(180deg, rgba(12,22,38,0.9) 0%, rgba(5,8,15,0.95) 100%)' }}
            >
              <p className="text-[16px] lg:text-[20px] text-white">Klara suggests for you</p>
              <h3 className="text-[26px] lg:text-[36px] font-bold text-[#FAD4BF] mt-1.5">Based on your ₹80k Budget</h3>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="travel-pill">Bali 5D/4N · ₹76,500</span>
                <span className="travel-pill">Goa Alternative</span>
              </div>
            </div>

          </div>




          <div className="w-full max-w-6xl mx-auto space-y-14 pt-16 ">
            <div className="w-full  mx-center text-center space-y-4">
              <span className="text-[26px] lg:text-[32px] text-[#F5A086]">
                Meet Klara
              </span>
              <h1 className="text-[36px] sm:text-[46px] lg:text-[62px] font-bold ">
                Dreaming to Booking in  <br />
                <Typewriter words={[" 4 Simple Steps"]} speed={100} delay={2500} />
              </h1>

            </div>


          </div>

        </div>
      </section>
    </>
  )
}

const LEAF_PATH =
  'M160 2 L215 2 A80 80 0 0 1 215 162 L160 162 C110 162 50 140 4 100 C45 50 110 2 160 2 Z'

const CARD_W = 300
const CARD_H = 165
const TIP = { x: 4, y: 100 }
const FLOW_LABELS = ['Land & Chat', 'Share Preferences', 'Get the Itinerary', 'Confirm & Book']

const FLOW_SCENES = {
  desktop: {
    w: 880,
    h: 860,
    entryDx: 40,
    exitDx: -70,
    cards: FLOW_LABELS.map((label, i) => ({ label, x: 625 - i * 200, y: 100 + i * 200 })),
  },
  mobile: {
    w: 360,
    h: 880,
    entryDx: 0,
    exitDx: 0,
    cards: FLOW_LABELS.map((label, i) => ({ label, x: (360 - CARD_W) / 2, y: 20 + i * 212 })),
  },
}

function buildFlow(scene) {
  const first = scene.cards[0]
  const last = scene.cards[scene.cards.length - 1]
  const points = [
    { x: first.x + TIP.x + scene.entryDx, y: -140 },
    ...scene.cards.map((c) => ({ x: c.x + TIP.x, y: c.y + TIP.y })),
    { x: last.x + TIP.x + scene.exitDx, y: scene.h + 140 },
  ]
  const lens = points.slice(1).map((p, i) => Math.hypot(p.x - points[i].x, p.y - points[i].y))
  const total = lens.reduce((s, l) => s + l, 0)
  let acc = 0
  const stops = [0, ...lens.map((l) => (acc += l) / total)]
  return { points, stops }
}

const FLOW_DATA = {
  desktop: buildFlow(FLOW_SCENES.desktop),
  mobile: buildFlow(FLOW_SCENES.mobile),
}

function flowBallAt(flow, p) {
  const { points, stops } = flow
  let i = 1
  while (i < stops.length - 1 && p > stops[i]) i++
  const t0 = stops[i - 1]
  const t1 = stops[i]
  const k = t1 === t0 ? 0 : Math.min(1, Math.max(0, (p - t0) / (t1 - t0)))
  const a = points[i - 1]
  const b = points[i]
  return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k }
}

function FlowCard({ label, index, active }) {
  const gradientId = `flow-grad-${index}`
  return (
    <>
      <svg
        viewBox={`0 0 ${CARD_W} ${CARD_H}`}
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0050fe" />
            <stop offset="55%" stopColor="#af90af" />
            <stop offset="100%" stopColor="#ffd0c0" />
          </linearGradient>
        </defs>
        <path
          d={LEAF_PATH}
          fill={active ? 'transparent' : '#ffffff'}
          stroke={active ? `url(#${gradientId})` : 'rgba(255,255,255,0)'}
          strokeWidth="2.5"
          strokeLinejoin="round"
          style={{ transition: 'fill 0.45s ease, stroke 0.45s ease' }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center gap-4 pl-[21%] pr-[6%]">
        <span
          className="shrink-0 grid place-items-center rounded-full text-[16px] font-medium"
          style={{
            width: 40,
            height: 40,
            background: active ? '#2b2b2e' : '#e7e4e0',
            color: active ? '#ffffff' : '#141416',
            transition: 'background 0.45s ease, color 0.45s ease',
          }}
        >
          {index + 1}.
        </span>
        <span
          className="text-[22px] font-medium leading-snug"
          style={{ color: active ? '#ffffff' : '#0a0a0a', transition: 'color 0.45s ease' }}
        >
          {label}
        </span>
      </div>
    </>
  )
}

function JourneyFlow() {
  const wrapRef = useRef(null)
  const stageRef = useRef(null)
  const rafRef = useRef(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)

  const [scale, setScale] = useState(1)
  const [progress, setProgress] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [variant, setVariant] = useState('desktop')

  const scene = FLOW_SCENES[variant]
  const flow = FLOW_DATA[variant]

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqMobile = window.matchMedia('(max-width: 640px)')
    const sync = () => {
      setReduced(mqReduce.matches)
      setVariant(mqMobile.matches ? 'mobile' : 'desktop')
    }
    sync()
    mqReduce.addEventListener('change', sync)
    mqMobile.addEventListener('change', sync)
    return () => {
      mqReduce.removeEventListener('change', sync)
      mqMobile.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    const el = stageRef.current
    if (!el || reduced) return
    const update = () =>
      setScale(Math.min(1.35, el.clientWidth / scene.w, el.clientHeight / scene.h))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [reduced, scene])

  useEffect(() => {
    if (reduced) return
    const loop = () => {
      const wrap = wrapRef.current
      if (wrap) {
        const rect = wrap.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        if (total > 0) targetRef.current = Math.min(1, Math.max(0, -rect.top / total))
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
      <section className="wrap py-16 flex flex-col items-center gap-6 overflow-hidden">
        {FLOW_LABELS.map((label, i) => (
          <div
            key={label}
            className="relative"
            style={{ width: CARD_W, height: CARD_H, maxWidth: '100%' }}
          >
            <FlowCard label={label} index={i} active />
          </div>
        ))}
      </section>
    )
  }

  const ball = flowBallAt(flow, progress)
  const ballOpacity = Math.min(1, progress / 0.05, Math.max(0, (1 - progress) / 0.05))

  return (
    <section ref={wrapRef} className="relative h-[280vh] md:h-[320vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden pb-2">
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left: '-8%', top: '38%', width: '280px', height: '120px',
            background: '#1c6dd0',
            filter: 'blur(160px)',
            borderRadius: '254px 343px 129px 391px',
            opacity: 35,
          }}
        />

        <div ref={stageRef} className="w-full h-full px-5 py-10 flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: scene.w,
              height: scene.h,
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            {scene.cards.map((card, i) => (
              <div
                key={card.label}
                className="absolute"
                style={{
                  left: card.x,
                  top: card.y,
                  width: CARD_W,
                  height: CARD_H,
                }}
              >
                <FlowCard label={card.label} index={i} active={progress >= flow.stops[i + 1]} />
              </div>
            ))}

            <div
              className="absolute rounded-full"
              style={{
                left: ball.x,
                top: ball.y,
                width: 64,
                height: 64,
                opacity: ballOpacity,
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle at 32% 30%, #ffd0c0 0%, #af90af 45%, #0050fe 100%)',
                boxShadow: '0 0 40px rgba(91,140,255,0.5), 0 0 80px rgba(175,144,175,0.25)',
                zIndex: 20,
              }}
            />
          </div>
        </div>
      </div>



    </section>
  )
}


const ORBIT_IMAGES = [
  { src: '/travel11.svg', label: 'Resorts' },
  { src: '/travel12.svg', label: 'Beach' },
  { src: '/travel13.svg', label: 'Mountains' },
  { src: '/travel14.svg', label: 'Temples' },
  { src: '/travel15.svg', label: 'Historical Tours' },
  { src: '/travel16.svg', label: 'Water Sports' },
  { src: '/travel17.svg', label: 'Wildlife' },
]

const ORBIT_TAGS = ['Spa/Wellness', 'Backpacking', 'Cycling', 'Theatre', 'Fine Dining']

function OrbitRing({ dur, reverse = false, radius, items, renderItem, zIndex = 0 }) {
  const ringSpin = reverse ? 'orbit-spin-ccw' : 'orbit-spin-cw'
  const counterSpin = reverse ? 'orbit-spin-cw' : 'orbit-spin-ccw'
  return (
    <div
      className={`absolute inset-0 ${ringSpin}`}
      style={{ '--dur': dur, zIndex }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * ${radius} * var(--ring)))`,
            }}
          >
            <div style={{ transform: `rotate(${-angle}deg)` }}>
              <div className={counterSpin} style={{ '--dur': dur }}>
                {renderItem(item, i)}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function PersonalizationEngine() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '100%',
          transform: 'translate(-50%, -50%)',
          width: '420px',
          height: '360px',
          background: '#1c6dd0',
          filter: 'blur(240px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 0.5,
        }}
      />

      <div className="wrap w-full pt-10 pb-24" ref={ref}>
        <div
          className={`max-w-[1220px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3" style={{ color: '#F5A086' }}>
            Personalization Engine
          </p>

          <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] font-bold tracking-tight mt-1 text-left">
            Klara Learns{" "}
            <Typewriter words={['What You Love']} speed={100} delay={2500} />
          </h2>

          <p className="text-[16px] md:text-[20px] font-light text-white mt-5 max-w-[1020px]">
            Tell Klara what excites you and she matches every recommendation to your exact travel personality.
          </p>
        </div>

        <div className="orbit-ring orbit-stage relative mx-auto mt-4 lg:mt-16">
          <div className="relative w-full h-full">

            <OrbitRing
              dur="60s"
              reverse
              radius="var(--r-inner)"
              zIndex={50}
              items={ORBIT_TAGS}
              renderItem={(tag) => (
                <span className="travel-pill !py-1.5 !px-3 !text-[11px] whitespace-nowrap">{tag}</span>
              )}
            />

            <OrbitRing
              dur="46s"
              radius="var(--r-outer)"
              zIndex={10}
              items={ORBIT_IMAGES}
              renderItem={(item) => (
                <div className="relative" style={{ width: 'var(--img)' }}>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/10 shadow-[0_14px_36px_rgba(0,0,0,0.5)]"
                  />
                  <span className="travel-pill !py-1 !px-2.5 !text-[10px] absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


const VOICE_CARDS = [
  {
    title: 'Handles Inbound Calls 24/7',
    desc: 'Klara picks up when no agent is available, customers get instant answers no hold music, no missed calls, no lost bookings.',
  },
  {
    title: 'Booking Confirmations & Changes',
    desc: 'Date changes, cancellations, payment reminders Klara handles it all conversationally and logs every interaction.',
  },
  {
    title: 'On Journey Voice Support',
    desc: 'Travelers can call Klara mid trip for real time help flight queries, local recommendations, hotel check-in details.',
  },
]

function PhoneStatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-white/60">
      <span>10:30</span>
      <span className="flex items-center gap-1">
        <span className="inline-block w-3 h-2 rounded-[2px] border border-white/40" />
        <span className="inline-block w-4 h-2 rounded-[2px] bg-white/40" />
      </span>
    </div>
  )
}

function PhoneHeader() {
  return (
    <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/[0.06]">
      <span className="w-8 h-8 rounded-full grid place-items-center bg-gradient-to-br from-[#3D75F3] to-[#F5A086]"><img src={SMALL_ICON} alt="" className="w-4.5 h-4.5 object-contain" /></span>
      <div className="leading-tight">
        <p className="text-[12px] font-semibold">Klara</p>
        <p className="text-[9px] text-white/45">Online · Your Trip Assistant</p>
      </div>
      <span className="ml-auto text-white/40 text-[14px]">⋯</span>
    </div>
  )
}

function AiBubble({ children }) {
  return (
    <div className="flex gap-2 max-w-[85%]">
      <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center bg-gradient-to-br from-[#3D75F3] to-[#F5A086]"><img src={SMALL_ICON} alt="" className="w-3 h-3 object-contain" /></span>
      <div className="rounded-2xl rounded-tl-sm px-3 py-2 text-[10px] leading-relaxed text-white/85 bg-[rgba(61,117,243,0.14)] border border-white/[0.06]">
        {children}
      </div>
    </div>
  )
}

function UserBubble({ children }) {
  return (
    <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm px-3 py-2 text-[10px] leading-relaxed text-white/90 bg-white/[0.08] border border-white/[0.06]">
      {children}
    </div>
  )
}

function PhoneComposer() {
  return (
    <div className="mt-auto flex items-center gap-2 px-3 py-3 border-t border-white/[0.06]">
      <span className="w-6 h-6 rounded-full grid place-items-center bg-white/[0.06] text-white/60 text-[13px]">+</span>
      <div className="flex-1 h-7 rounded-full bg-white/[0.05] border border-white/[0.06]" />
      <span className="w-6 h-6 rounded-full grid place-items-center bg-white/[0.06] text-white/60 text-[11px]">🎤</span>
      <span className="w-6 h-6 rounded-full grid place-items-center bg-[#3D75F3] text-[10px]">i</span>
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex gap-2 max-w-[85%]" style={{ animation: 'pill-drop 0.3s ease' }}>
      <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center bg-gradient-to-br from-[#3D75F3] to-[#F5A086]"><img src={SMALL_ICON} alt="" className="w-3 h-3 object-contain" /></span>
      <div className="rounded-2xl rounded-tl-sm px-3 py-2.5 bg-[rgba(61,117,243,0.14)] border border-white/[0.06] flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: `${i * 0.18}s`, animationDuration: '1s' }} />
        ))}
      </div>
    </div>
  )
}

function ItineraryCard() {
  return (
    <div className="max-w-[88%] rounded-2xl overflow-hidden bg-white/[0.05] border border-white/[0.06]" style={{ animation: 'pill-drop 0.35s ease' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06]">
        <span className="text-[10px] font-semibold">Bali, Indonesia</span>
        <span className="text-[11px]">❤ 🔖</span>
      </div>
      <div className="px-3 py-2 space-y-1 text-[9.5px] text-white/75">
        <p>Day 1 — Ubud rice terraces</p>
        <p>Day 2 — Seminyak beach + Sunset Cruise</p>
        <p>Day 3 — Nusa Penida Island</p>
      </div>
      <div className="flex gap-2 px-3 pb-3">
        <span className="flex-1 text-center text-[9px] rounded-lg py-1.5 bg-[#3D75F3]">Customize Trip</span>
        <span className="flex-1 text-center text-[9px] rounded-lg py-1.5 bg-white/[0.08] border border-white/[0.06]">＋ Save</span>
      </div>
    </div>
  )
}

function useAutoChat(script, active) {
  const [shown, setShown] = useState([])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    if (!active) {
      setShown([])
      setTyping(false)
      return
    }
    let step = 0
    const timers = []
    const at = (fn, ms) => timers.push(setTimeout(fn, ms))

    const run = () => {
      if (step >= script.length) {
        at(() => { setShown([]); step = 0; at(run, 700) }, 3600)
        return
      }
      const msg = script[step]
      if (msg.from === 'user') {
        at(() => { setShown((p) => [...p, msg]); step++; at(run, 900) }, 650)
      } else {
        setTyping(true)
        at(() => {
          setTyping(false)
          setShown((p) => [...p, msg])
          step++
          at(run, 650)
        }, 1150)
      }
    }
    at(run, 500)
    return () => timers.forEach(clearTimeout)
  }, [script, active])

  return { shown, typing }
}

function ChatBody({ shown, typing }) {
  const scrollRef = useRef(null)
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [shown, typing])

  return (
    <div ref={scrollRef} className="flex-1 flex flex-col gap-2.5 px-3 py-3 overflow-y-auto no-scrollbar">
      <span className="mx-auto text-[9px] text-white/40 bg-white/[0.05] rounded-full px-2.5 py-0.5">Today</span>
      {shown.map((m, i) =>
        m.type === 'card' ? (
          <ItineraryCard key={i} />
        ) : m.from === 'bot' ? (
          <AiBubble key={i}>{m.text}</AiBubble>
        ) : (
          <UserBubble key={i}>{m.text}</UserBubble>
        )
      )}
      {typing && <TypingDots />}
    </div>
  )
}

const CHAT_SCRIPT = [
  { from: 'user', text: 'Hi! I want a Bali trip for two under ₹80k' },
  { from: 'bot', text: "Great choice! Here's a 5-day Bali plan 🌴" },
  { from: 'bot', text: 'Day 1 — Ubud temples & rice terraces' },
  { from: 'bot', text: 'Day 2 — Seminyak beach + sunset cruise' },
  { from: 'bot', text: 'Total ₹76,500 · hotels + flights included' },
  { from: 'user', text: 'Book it!' },
  { from: 'bot', text: 'Booked ✅ Payment link sent to your WhatsApp.' },
]

function ChatScreen({ active }) {
  const { shown, typing } = useAutoChat(CHAT_SCRIPT, active)
  return (
    <div className="flex flex-col h-full">
      <PhoneHeader />
      <ChatBody shown={shown} typing={typing} />
      <PhoneComposer />
    </div>
  )
}

function speak(text) {
  try {
    const synth = window.speechSynthesis
    if (!synth) return
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.rate = 1
    u.pitch = 1.05
    u.lang = 'en-US'
    synth.speak(u)
  } catch {
    void 0
  }
}

const VOICE_LINES = [
  'Hi, this is Klara. How can I help with your trip today?',
  'Your Bali trip is confirmed for December 20th to 25th.',
  "I've sent the full itinerary to your WhatsApp.",
  "Is there anything else you'd like me to change?",
]

function VoiceScreen({ active }) {
  const [typed, setTyped] = useState('')
  const bars = [10, 16, 8, 20, 12, 18, 9, 15]

  useEffect(() => {
    if (!active) {
      setTyped('')
      try { window.speechSynthesis?.cancel() } catch { void 0 }
      return
    }
    let line = 0
    let charTimer
    let lineTimer

    const playLine = () => {
      const full = VOICE_LINES[line % VOICE_LINES.length]
      setTyped('')
      let c = 0
      charTimer = setInterval(() => {
        c++
        setTyped(full.slice(0, c))
        if (c >= full.length) clearInterval(charTimer)
      }, 45)
      speak(full)
      const dur = Math.max(3200, full.length * 75) + 900
      lineTimer = setTimeout(() => { line++; playLine() }, dur)
    }
    playLine()

    return () => {
      clearInterval(charTimer)
      clearTimeout(lineTimer)
      try { window.speechSynthesis?.cancel() } catch { void 0 }
    }
  }, [active])

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center px-5 pt-8">
        <h4 className="text-[16px] font-semibold text-white mb-8">Voice Call in progress</h4>

        <div className="flex items-start justify-center gap-8 mb-8">
          {[
            { img: SMALL_ICON, grad: true },
            { icon: '👤', grad: false },
          ].map((a, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <span
                className={`w-16 h-16 rounded-full grid place-items-center text-[20px] ${a.grad ? 'bg-gradient-to-br from-[#3D75F3] to-[#F5A086]' : 'bg-white/[0.08] border border-white/10'
                  }`}
              >
                {a.img ? <img src={a.img} alt="" className="w-8 h-8 object-contain" /> : a.icon}
              </span>
              <div className="flex items-end gap-[3px] h-5">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="voice-bar"
                    style={{
                      height: h + 6,
                      animationDelay: `${(i % 4) * 0.12}s`,
                      animationPlayState: active ? 'running' : 'paused',
                      opacity: a.grad ? 1 : 0.4,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full rounded-2xl px-4 py-3 mb-8 bg-white/[0.04] border border-white/[0.06] min-h-[74px]">
          <p className="text-[8px] tracking-[0.15em] text-white/40 mb-1">LIVE TRANSCRIPT</p>
          <p className="text-[11px] font-semibold text-white mb-1">KLARA</p>
          <p className="text-[10px] leading-relaxed text-white/70">
            {typed}
            <span className="inline-block w-[5px] h-[11px] align-middle ml-0.5 bg-white/60 animate-pulse" />
          </p>
        </div>

        <span className="w-12 h-12 rounded-full grid place-items-center bg-[#ef4444] text-[18px] shadow-[0_10px_30px_rgba(239,68,68,0.4)]">
          ☎
        </span>
      </div>
      <PhoneComposer />
    </div>
  )
}

const ITINERARY_SCRIPT = [
  { from: 'bot', text: "Here's a great plan for Bali, Indonesia" },
  { type: 'card' },
  { from: 'user', text: 'Can we make it more relaxing?' },
  { from: 'bot', text: 'Sure! Adding spa mornings and free afternoons 🧘' },
  { from: 'bot', text: 'Updated itinerary ready — want me to save it?' },
  { from: 'user', text: 'Yes, save it.' },
  { from: 'bot', text: 'Saved ⭐ Edit anytime from your trips.' },
]

function ItineraryScreen({ active }) {
  const { shown, typing } = useAutoChat(ITINERARY_SCRIPT, active)
  return (
    <div className="flex flex-col h-full">
      <PhoneHeader />
      <ChatBody shown={shown} typing={typing} />
      <PhoneComposer />
    </div>
  )
}

const VOICE_SCREENS = [ChatScreen, VoiceScreen, ItineraryScreen]

function VoiceAgent() {
  const wrapRef = useRef(null)
  const rafRef = useRef(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)

  const [active, setActive] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mqDesk = window.matchMedia('(min-width: 1024px)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      setIsDesktop(mqDesk.matches)
      setReduced(mqReduce.matches)
    }
    sync()
    mqDesk.addEventListener('change', sync)
    mqReduce.addEventListener('change', sync)
    return () => {
      mqDesk.removeEventListener('change', sync)
      mqReduce.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!isDesktop || reduced) return
    const loop = () => {
      const wrap = wrapRef.current
      if (wrap) {
        const rect = wrap.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        if (total > 0) targetRef.current = Math.min(1, Math.max(0, -rect.top / total))
      }
      const next = currentRef.current + (targetRef.current - currentRef.current) * 0.12
      currentRef.current = next
      const idx = next < 0.36 ? 0 : next < 0.7 ? 1 : 2
      setActive((prev) => (prev === idx ? prev : idx))
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isDesktop, reduced])

  useEffect(() => {
    if (isDesktop && !reduced) return
    const id = setInterval(() => setActive((p) => (p + 1) % VOICE_SCREENS.length), 3000)
    return () => clearInterval(id)
  }, [isDesktop, reduced])

  const heading = (
    <div className="max-w-[520px]">
      <p className="text-[22px] lg:text-[30px] text-start font-medium capitalize tracking-[-0.72px] mb-2" style={{ color: '#F5A086' }}>
        Voice Agent
      </p>
      <h2 className="text-[34px] md:text-[42px] lg:text-[52px] font-bold tracking-tight mt-1 text-left leading-[1.08]">
         Klara Answers <br />
        <Typewriter words={['Every Call']} speed={100} delay={2500} />
      </h2>
      <p className="text-[15px] md:text-[17px] font-light text-white/80 mt-4">
        When your Gogaga team is offline, Klara picks up answering booking queries, confirming itineraries, and handling changes with zero wait time.
      </p>
    </div>
  )

  const cards = (
    <div className="space-y-3 mt-6">
      {VOICE_CARDS.map((card, i) => {
        const on = i === active
        return (
          <div
            key={card.title}
            className="rounded-2xl p-[1px] transition-all duration-500"
            style={{
              background: on
                ? 'linear-gradient(135deg, rgba(61,117,243,0.6), rgba(245,160,134,0.4))'
                : 'rgba(255,255,255,0.06)',
            }}
          >
            <div
              className="rounded-2xl px-5 py-3.5 transition-all duration-500"
              style={{
                background: on
                  ? 'linear-gradient(120deg, rgba(46,34,28,0.9) 0%, rgba(10,10,12,0.95) 60%)'
                  : 'rgba(10,10,12,0.6)',
              }}
            >
              <h4 className={`text-[18px] lg:text-[21px] font-medium mb-0.5 transition-colors ${on ? 'text-[#FAD4BF]' : 'text-white/70'}`}>
                {card.title}
              </h4>
              <p className={`text-[13px] lg:text-[14px] font-light leading-relaxed transition-colors ${on ? 'text-white/70' : 'text-white/40'}`}>
                {card.desc}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )

  const phone = (
    <div
      className="relative mx-auto w-[300px] max-w-full h-[600px] rounded-[42px] border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
      style={{ background: 'linear-gradient(180deg, #0d1526 0%, #05070d 100%)' }}
    >
      <PhoneStatusBar />
      <div className="relative h-[calc(100%-28px)]">
        {VOICE_SCREENS.map((Screen, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-500"
            style={{
              opacity: i === active ? 1 : 0,
              transform: `translateY(${i === active ? 0 : i < active ? -18 : 18}px)`,
              pointerEvents: i === active ? 'auto' : 'none',
            }}
          >
            <Screen active={i === active} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {VOICE_SCREENS.map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{ background: i === active ? '#3D75F3' : 'rgba(255,255,255,0.2)' }}
          />
        ))}
      </div>
    </div>
  )

  if (!isDesktop || reduced) {
    return (
      <section className="relative overflow-hidden">
        <div className="wrap w-full pt-16 pb-32">
          {heading}
          {cards}
          <div className="mt-16 flex justify-center">{phone}</div>
        </div>
      </section>
    )
  }

  return (
    <section ref={wrapRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden py-8">
        <div className="wrap w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {heading}
              {cards}
            </div>
            <div>{phone}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GetStartedSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (

    <section id="get-started" className="relative overflow-hidden lg:pt-14">
      <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

        <div
          className={`text-center mb-0 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.06] bg-[#120b08]/60 shadow-[inset_0_1px_12px_rgba(245,160,134,0.06)] mb-8 backdrop-blur-sm">
            <span className="text-[#F7BFA0] uppercase lg:tracking-[0.22em] text-[22px] font-semibold">
              Get Started
            </span>
          </div>

          <h2 className="text-[26px] md:text-4xl lg:text-[24px] font-medium text-[#FDFDFD] mb-6 tracking-tight">
            Let's Build Something Together
          </h2>

          <p className="max-w-2xl mx-auto text-[16px] md:text-[20px]  leading-relaxed font-light tracking-wide px-4">
            Whether You're A Business Looking To Automate, A Student Ready To Upskill, Or A Partner Exploring Collaboration
            The First Conversation Is Always Free. Tell Us What You Need And We'll Tell You Exactly How We Can Help.
          </p>
        </div>

        <div
          className={`w-full border border-black/5  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          style={{
            backgroundColor: '#050505',
            backgroundImage: "url('/bg2.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >


          <div className="w-full bg-transparent text-center py-16 md:py-24 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.15] max-w-4xl mx-auto mb-10">
              Ready To put AI to work ?
            </h2>
            <p className="mb-10 text-base md:text-lg leading-relaxed">
              Your first discovery call is free. Let's find the workflow we can solve together
            </p>

            <Link to="/researh" className="btn capitalize">
              Request A Demo
            </Link>

          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>

  )
}

export default function Travel() {
  return (
    <>
      <SEO
        title="Travel AI Agent — TechScape AI"
        description="Klara is an always-on AI travel agent that personalizes itineraries, answers queries, and converts browsers into confirmed bookings, 24/7."
        canonical="/travel"
      />
      <HeroSection />
      <JourneyFlow />
      <PersonalizationEngine />
      <VoiceAgent />
      <GetStartedSection />
    </>
  )
}
