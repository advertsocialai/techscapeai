import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Typewriter from '../components/Typewriter'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ContactForm from '../components/GetStarted'

const EYEBROW =
  'block text-[12px] lg:text-[13px] min-[1920px]:text-[15px] font-medium uppercase tracking-[0.22em] text-[#F5A086]'
const HEADING =
  'text-[32px] sm:text-[44px] lg:text-[56px] min-[1920px]:text-[68px] min-[2560px]:text-[80px] font-semibold tracking-[-1.5px] leading-[1.08]'
const PARA =
  'text-[15px] lg:text-[18px] min-[1920px]:text-[20px] min-[2560px]:text-[24px] font-light leading-[1.6] text-[#c9cdd6]'
const CARD =
  'rounded-2xl border border-white/[0.06] bg-[linear-gradient(160deg,#F7BFA080_0%,#1C6DD000_10%,#1C6DD000_100%)]'

const CHANNEL_PILLS = [
  { title: 'RTB', sub: 'Real Time Bidding' },
  { title: 'oRTB', sub: 'Open RTB frame' },
  { title: 'MultiTag', sub: 'AI format optimizer' },
  { title: 'CPA . CPC', sub: 'Performance Models' },
]

const PUBLISHER_ITEMS = [
  { k: 'One MultiTag snippet', v: 'Paste once, AI decides which format to run for each visitor.' },
  { k: 'Popunder , push , interstitial', v: 'Three high-conversion formats, auto-selected per user.' },
  { k: 'RTM maximization', v: 'AI picks the highest-earning ad format for every impression.' },
  { k: 'Clean ads guaranteed', v: 'No malware, no redirects, no broken creatives.' },
  { k: 'Real-time dashboard', v: 'Impressions, clicks, revenue, eCPM tracked live.' },
]

const ADVERTISER_ITEMS = [
  { k: 'CPA/CPC campaigns', v: 'Pay only for real conversions or clicks, not impressions.' },
  { k: 'Audience targeting', v: 'Country, device, OS, browser precise segmentation at scale.' },
  { k: 'Multiple formats', v: 'eCommerce, Gaming, Finance, Dating and more.' },
  { k: 'Budget control', v: 'Daily caps, bid floors, frequency limits full control.' },
  { k: 'ROAS attribution', v: 'Every conversion tracked back to placement and spend.' },
]

const NETWORK_COLUMNS = [
  {
    label: 'For Publisher',
    pill: 'Monetize your traffic',
    items: PUBLISHER_ITEMS,
    accent: '#a78bfa',
    textGrad: 'linear-gradient(92deg, #8b7bff 0%, #c4b5fd 100%)',
    border: 'linear-gradient(135deg, rgba(167,139,250,0.7) 0%, rgba(167,139,250,0.08) 55%)',
    inner: 'linear-gradient(160deg, rgba(38,28,58,0.6) 0%, rgba(8,8,12,0.96) 62%)',
  },
  {
    label: 'For Advertisers',
    pill: 'Buy targeted performance',
    items: ADVERTISER_ITEMS,
    accent: '#3D75F3',
    textGrad: 'linear-gradient(92deg, #3D75F3 0%, #7fa8ff 100%)',
    border: 'linear-gradient(135deg, rgba(61,117,243,0.7) 0%, rgba(61,117,243,0.08) 55%)',
    inner: 'linear-gradient(160deg, rgba(20,34,66,0.6) 0%, rgba(8,8,12,0.96) 62%)',
  },
]

const cardEaseOutCubic = (t) => 1 - Math.pow(1 - t, 3)

function NetworkCards() {
  const ref = useRef(null)
  const rafRef = useRef(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const measure = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 800
      const start = vh * 0.9
      const end = vh * 0.35
      const p = (start - rect.top) / (start - end)
      targetRef.current = Math.min(1, Math.max(0, p))
    }
    measure()
    currentRef.current = targetRef.current
    setProgress(targetRef.current)

    const onScroll = () => measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const loop = () => {
      const next = currentRef.current + (targetRef.current - currentRef.current) * 0.09
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
  }, [])

  const ArrowIcon = ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
      <path d="M5 12h12M12.5 6.5 18 12l-5.5 5.5" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (

    <div ref={ref} className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {NETWORK_COLUMNS.map((col, i) => {
        const raw = Math.min(1, Math.max(0, (progress - i * 0.45) / 0.5))
        const e = cardEaseOutCubic(raw)
        return (
          <div
            key={col.label}
            className="rounded-[28px] p-[1.5px]"
            style={{
              background: col.border,
              opacity: e,
              transform: `translateY(${(1 - e) * -140}px)`,
              willChange: 'transform, opacity',
            }}
          >
            <div
              className="rounded-[27px] h-full p-6 lg:p-9"
              style={{ background: col.inner }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-11 h-11 rounded-full grid place-items-center shrink-0"
                  style={{ background: `${col.accent}22`, border: `1px solid ${col.accent}55` }}
                >
                  <span className="w-4 h-4 rounded-full" style={{ background: col.accent }} />
                </span>
                <h3
                  className="text-[24px] lg:text-[30px] min-[1920px]:text-[34px] font-bold"
                  style={{
                    background: col.textGrad,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {col.label}
                </h3>
              </div>

              <span
                className="inline-block mt-3 text-[11px] font-medium tracking-wide rounded-full px-3 py-1"
                style={{ color: col.accent, background: `${col.accent}18`, border: `1px solid ${col.accent}33` }}
              >
                {col.pill}
              </span>

              <ul className="mt-7 space-y-5">
                {col.items.map((it) => (
                  <li key={it.k} className="flex gap-3">
                    <ArrowIcon color={col.accent} />
                    <p className="text-[14px] lg:text-[15px] min-[1920px]:text-[17px] leading-relaxed">
                      <span className="font-semibold text-white">{it.k}</span>
                      <span className="text-white/55"> — {it.v}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const MULTITAG_FORMATS = [
  {
    title: 'Popunder',
    desc: 'Opens a full page behind the current browser tab. High visibility, non-intrusive, strong conversion for performance verticals.',
    badge: 'High CPM',
    icon: '/aiagen4.svg'
  },
  {
    title: 'Push Notification',
    desc: 'Browser-level push alerts that follow the user even after they leave the site. High engagement and click-through rates.',
    badge: 'High CTR',
    icon: '/aiagen3.svg'
  },
  {
    title: 'Vignette/Interstitial',
    desc: 'Full-screen ad shown between page loads. Maximum attention capture with controlled frequency to prevent fatigue.',
    badge: 'Non intrusive',
    icon: '/aiagen2.svg'
  },
]

const REVENUE_CARDS = [
  {
    big: '-15%',
    title: 'Take rate on every auction',
    desc: 'Advertiser pays $1.00 per click, publisher receives $0.85. Techscape keeps $0.15 as the take rate on every single transaction.',
  },
  {
    big: 'CPA . CPC',
    title: 'Performance based billing',
    desc: 'Revenue scales with performance. Advertisers pay for outcomes, and the network earns a cut of every billed action.',
  },
  {
    big: 'Managed',
    title: 'Agency retainer model',
    desc: 'Beyond the network, Techscape AI manages programmatic campaigns for brands on a monthly retainer, end to end.',
  },
  {
    big: 'eCPM',
    title: 'The Universal Currency',
    desc: 'eCPM = (earnings / impressions) × 1000. A common benchmark to compare every format and optimize continuously.',
  },
]

function LeafShape() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto lg:ml-auto lg:mr-0">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(150deg, #f6c9a4 0%, #3d75f3 55%, #1740b0 100%)',
          borderRadius: '0% 100% 100% 100% / 100% 100% 0% 0%',
          filter: 'blur(0.5px)',
          opacity: 0.9,
        }}
      />
    </div>
  )
}

function SolutionHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: '-11.2%', top: '0px', width: '286px', height: '258px',
          background: '#fad4bf',
          filter: 'blur(206.7px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 0.55,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: '-6%', top: '540px', width: '340px', height: '300px',
          background: '#3579CE',
          filter: 'blur(180px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 0.5,
        }}
      />

      <div className="wrap w-full pt-[100px] pb-16 relative">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3" style={{ color: '#F5A086' }}>
            Solutions Ad Tech
          </p>
          <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">
            Your Ad spend is leaking.  <br />
            <Typewriter words={['Programmatic AI stops it.']} speed={100} delay={2500} />
          </h2>

          <p className="text-[16px] md:text-[20px] mt-6">
            Techscape AI brings performance-driven programmatic advertising to your business powered by
            real-time bidding, AI yield optimization, and the MultiTag engine.
          </p>

          <div className="mt-8 mx-auto max-w-[560px] flex items-center gap-3 rounded-full border border-white/10  px-5 py-3"
            style={{
              background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
            }}>
            <span className="text-[16px] lg:text-[20px] text-center mx-auto">
              Tech alliance partner . AdvertSocial AI . advertsocial.ai
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {CHANNEL_PILLS.map((p) => (
            <div
              key={p.title}
              className={`travel-stat px-6 py-4 min-w-[150px] text-center`}
            >
              <p className="text-[16px] lg:text-[24px] font-semibold text-[#F7C8B4]">{p.title}</p>
              <p className="text-[14px] lg:text-[18px] text-white mt-1">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap w-full pt-10 pb-24">
        <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3 text-center" style={{ color: '#F5A086' }}>
          Two Sides One Network
        </p>
        <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">
          Publisher side. Advertiser side.  <br />
          <Typewriter words={['We Run Both.']} speed={100} delay={2500} />
        </h2>

        <p className="text-[16px] md:text-[20px] mt-6 max-w-3xl">
          The programmatic ad network connects two audiences publishers who have traffic and advertisers
          who want it. Tech Scape AI sits in the middle, optimizing for both.
        </p>


        <section class="min-h-screen  text-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
          <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 relative">

            <div class="relative group rounded-3xl p-[1px] bg-transparent lg:[clip-path:polygon(0_0,_100%_0,_88%_100%,_0_100%)]">
              <div class="backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border-2 border-blue-500/60  lg:pr-16">


                <div class="text-center mb-8">
                  <div class="flex justify-center items-center gap-3 mb-2">
        
                    <img src="/aiagen9.svg" alt="Publisher Icon" class="w-10 h-10 object-contain" />
                    <h2 class="text-2xl sm:text-3xl font-bold tracking-wide text-white">For Publisher</h2>
                  </div>
       
                  <span class="inline-block text-[16px] font-medium px-4 py-1 rounded-full text-[#4B4EFC] border border-blue-500/30 backdrop-blur-md"
                  style={{
              background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
            }}>
                    Monetize your traffic
                  </span>
                </div>


                <ul class="space-y-6">

                  <li class="flex items-start gap-4">
                    <img src="/aiagen7.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">One MultiTag snippet</strong> - paste once, AI decides which format earns the most per visitor.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen7.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">Popunder, Push, Interstitial</strong> - Three high conversion formats, auto selected per user.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen7.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">RPM maximization</strong> - AI picks the highest paying ad for every single impression.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen7.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">Clean ads guaranteed</strong> - no malware, no redirects, no brand damage.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen7.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">Real-time dashboard</strong> - impressions, clicks, revenue, eCPM tracked live.
                    </p>
                  </li>

                </ul>
              </div>
            </div>


            <div class="relative group rounded-3xl p-[1px] bg-gradient-to-b from-blue-400/30 via-slate-800/40 to-blue-600/30 lg:-ml-12 lg:[clip-path:polygon(12%_0,_100%_0,_100%_100%,_0_100%)]">
              <div class="bg-[#111625]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-blue-400/20 lg:pl-16">

                <div class="text-center mb-8">
                  <div class="flex justify-center items-center gap-3 mb-2">
            
                    <img src="/aiagen8.svg" alt="Advertisers Icon" class="w-10 h-10 object-contain" />
                    <h2 class="text-2xl sm:text-3xl font-bold tracking-wide text-white">For Advertisers</h2>
                  </div>

                  <span class="inline-block text-[16px] font-medium px-4 py-1 rounded-full  text-[#4B4EFC] border border-blue-500/30 backdrop-blur-md"
                      style={{
              background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
            }}>
                    Buy targeted performance
                  </span>
                </div>

                <ul class="space-y-6">

                  <li class="flex items-start gap-4">
                    <img src="/aiagen6.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">CPA/CPC campaigns</strong> - pay only for real conversions or clicks, not impressions.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen6.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">Audience targeting</strong> - Country, device, OS, browser precise segmentation at auction.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen6.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">Verticals we serve</strong> - eCommerce, iGaming, Finance, Dating, Lead gen.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen6.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">Budget control</strong> - Daily caps, bid floors, frequency limits full campaign control.
                    </p>
                  </li>

                  <li class="flex items-start gap-4">
                    <img src="/aiagen6.svg" alt="bullet" class="w-6 h-6 mt-1 flex-shrink-0" />
                    <p class="text-sm sm:text-base text-gray-300">
                      <strong class="text-white font-semibold">ROAS attribution</strong> - Every conversion traced back to the exact impression that drove it.
                    </p>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  )
}

function RtbAndMultitag() {
  return (
    <section className="relative overflow-hidden">
      <div className="wrap w-full py-20">
        <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3 text-center" style={{ color: '#F5A086' }}>
          How RTB Works
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>

            <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">
              100 milliseconds. <br />
              One {" "}
              <Typewriter words={['auction.']} speed={100} delay={2500} /> <br />
              One {" "}
              <Typewriter words={['winner.']} speed={100} delay={2500} /> <br />
            </h2>

            <p className="text-[16px] md:text-[20px] mt-6 max-w-3xl">
              Every time a user loads a page on a publisher site, an entire auction runs in the
              background faster than a blink.
            </p>

            <Link to="/contact" className="btn-outline mt-8">
              Ask Our AI Assistant
            </Link>
          </div>
          <img src="/travel1.svg" alt="" />
        </div>
      </div>

      <div className="wrap w-full pb-24">
        <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3 text-center" style={{ color: '#F5A086' }}>
          The MultiTag Engine
        </p>
        <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">
          One Tag. Three formats. <br />
          <Typewriter words={['AI decides.']} speed={100} delay={2500} /> <br />
        </h2>


        <p className="text-[16px] md:text-[20px] mt-6 max-w-3xl">
          Publishers paste one JavaScript snippet. The MultiTag AI picks the highest-earning format for
          every unique visitor in real time.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {MULTITAG_FORMATS.map((f) => (
            <div key={f.title} className={`card p-6 lg:p-7 flex flex-col text-center mx-auto gap-4`}>
              <img src={f.icon} alt="" className='h-[210px]' />
              <h3 className="text-[19px] lg:text-[26px] font-semibold text-[#FAD4BF]">{f.title}</h3>
              <p className="text-[16px] lg:text-[18px] font-light leading-relaxed text-white mt-2 flex-1">
                {f.desc}
              </p>
              <span className="mt-5 self-center text-[16px] font-medium uppercase tracking-wide text-[#F5A086]  border border-[#F5A086]/25 rounded-full px-3 py-1"
                style={{
                  background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
                }}>
                {f.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RevenueAndCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="wrap w-full py-20 text-center mx-auto">
        <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3 text-center" style={{ color: '#F5A086' }}>
          The Recurring Revenue Model
        </p>
        <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">
          How the money flows-
          <Typewriter words={['24/7/365']} speed={100} delay={2500} /> <br />
        </h2>


        <p className="text-[16px] md:text-[20px] mt-6 max-w-3xl text-center mx-auto">
          Programmatic is a take-rate business. Once both sides are live, revenue runs automatically on
          every single auction.
        </p>


        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1300px] mx-auto">
          {REVENUE_CARDS.map((c) => (
            <div key={c.big} className={`card p-7 lg:p-16 text-start`}>
              <p className="text-[28px] lg:text-[36px] min-[1920px]:text-[40px] font-semibold text-white">
                {c.big}
              </p>
              <h3 className="text-[20px] lg:text-[26px] font-semibold mt-3 text-[#FAD4BF]">{c.title}</h3>
              <p className="text-[16px] lg:text-[16px] font-light leading-relaxed text-white mt-2">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <div className={`card mt-6 p-7 lg:p-16 max-w-[1300px] mx-auto text-start`}>

          <img src="/aiagen5.svg" alt="" />
          <p className="text-[20px] lg:text-[26px] text-[#FAD4BF] font-semibold">Where we are right now</p>

          <p className="text-[16px] lg:text-[16px] font-light leading-relaxed text-white max-w-[760px]">
            The network is in its foundation phase current, deployed, and active with early partners.
            We are scaling infrastructure and onboarding both publishers and advertisers as demand grows.
          </p>
        </div>
      </div>

      <div className="wrap w-full pb-28 text-center">
        <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3 text-center" style={{ color: '#F5A086' }}>
          Join The Network
        </p>
        <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] ">
          Publisher or Advertiser <br />
          <Typewriter words={['Lets talk numbers.']} speed={100} delay={2500} /> <br />
        </h2>


        <p className="text-[16px] md:text-[20px] mt-6 max-w-3xl text-center mx-auto">
          Whether your traffic to monetize or budgets to deploy we want to hear from you first.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn">For Publisher</Link>
          <Link to="/contact" className="btn-outline">For Advertiser</Link>
        </div>
      </div>
    </section>
  )
}


const CHECK_ITEMS = [
  'No commitment, no pressure',
  '30-minute discovery call',
  'Tailored AI roadmap for your business',
  'Response within 24 hours',
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A086" strokeWidth="2.5">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 p-8 md:p-16 lg:p-20 items-start z-20">
            <div>
              <ContactForm />
            </div>

            <div className="lg:pl-6 text-left lg:pt-2">
              <h3 className="text-[32px] md:text-[46px] font-semibold mb-6 leading-tight tracking-tight">
                Book a Free Consultation Directly
              </h3>
              <p className="mb-10 text-base md:text-lg leading-relaxed max-w-md">
                Skip the form. Pick a time that works for you and get on a call with our team within 24 hours.
              </p>

              <ul className="space-y-5">
                {CHECK_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-4 group">
                    <span className="flex-shrink-0 p-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                      <CheckIcon />
                    </span>
                    <span className="text-white/70 group-hover:text-white transition-colors text-xs md:text-sm font-semibold uppercase tracking-widest">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

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

export default function AdTechMarketing() {
  return (
    <>
      <SEO
        title="Ad Tech Marketing AI — TechScape AI"
        description="AI-powered ad tech and marketing solutions — programmatic advertising, real-time bidding, and the MultiTag engine built for measurable growth."
        canonical="/ad-tech-marketing"
      />
      <SolutionHero />
      <RtbAndMultitag />
      <RevenueAndCta />
      <GetStartedSection />
    </>
  )
}
