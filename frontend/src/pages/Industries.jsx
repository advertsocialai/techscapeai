import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import Typewriter from '../components/Typewriter';
import GetStarted from '../components/GetStarted';
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SEO from '../components/SEO';

// Section logos (Partners marquee)
import partnerNxtwave from '/in5.png'
import partnerAsg from '/in6.svg'
import mmw from '/in7.svg'
import goga from '/in8.svg'
import abs from '/in9.svg'
import bidqon_logo from '/in10.svg'




const MESSAGES = [
  { id: 1, from: 'user', text: 'Hi! Booked a Manali package. Can I get my itinerary? 🏔️' },
  { id: 2, from: 'bot', text: 'Sure! Your Manali Winter Escape is confirmed for Dec 20–24 (5N/6D).' },
  { id: 3, from: 'bot', text: 'Shall I send the full itinerary to your WhatsApp?' },
  { id: 4, from: 'user', text: 'Yes, please.' },
  { id: 5, from: 'bot', text: 'Done ✅ Sent to your WhatsApp. Balance due: ₹2,380.' },
  { id: 6, from: 'user', text: 'Can I pay now?' },
  { id: 7, from: 'bot', text: 'Absolutely — here is a secure payment link 💳' },
]

const SUGGESTIONS = ['Pay now', 'View itinerary', 'Add airport cab']

const WAVES = [
  { amp: 38, freq: 0.008, speed: 0.012, color: 'rgba(59,143,232,0.22)', phase: 0 },
  { amp: 28, freq: 0.012, speed: 0.018, color: 'rgba(247,169,124,0.12)', phase: 1.2 },
  { amp: 20, freq: 0.006, speed: 0.008, color: 'rgba(139,92,246,0.10)', phase: 2.5 },
  { amp: 15, freq: 0.018, speed: 0.025, color: 'rgba(52,211,153,0.08)', phase: 0.8 },
]

function KlaraIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 167 134" fill="none">
      <path d="M166 32C166 49 152 63 134 63C117 63 103 49 103 32C103 14 117 0 134 0C152 0 166 14 166 32Z" fill="#2D7DD2" />
      <path d="M134 70C152 70 166 85 166 102C166 119 153 133 136 134H70C65 134 62 128 66 124L112 80C117 74 126 70 134 70Z" fill="rgba(255,255,255,0.95)" />
      <path d="M0 102C0 85 14 70 32 70C49 70 63 85 63 102C63 120 49 134 32 134C14 134 0 120 0 102Z" fill="#F7A97C" />
      <path d="M32 63C14 63 0 49 0 32C0 15 13 1 30 0H96C101 0 104 6 100 10L55 54C49 60 41 63 32 63Z" fill="rgba(255,255,255,0.95)" />
    </svg>
  )
}

function WaveCanvas() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const draw = () => {
      const { width: W, height: H } = canvas
      ctx.clearRect(0, 0, W, H)
      t++
      WAVES.forEach(w => {
        ctx.beginPath()
        for (let x = 0; x <= W; x += 2) {
          const y = H * 0.5
            + Math.sin(x * w.freq + t * w.speed + w.phase) * w.amp
            + Math.sin(x * w.freq * 1.7 + t * w.speed * 0.6 + w.phase) * (w.amp * 0.4)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = w.color
        ctx.lineWidth = 1.5
        ctx.stroke()
      })
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />
}

function UserGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
    </svg>
  )
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-1.5" style={{ animation: 'msgIn 0.3s ease' }}>
      <div className="w-6 h-6 rounded-full bg-white/20 border border-white/25 flex items-center justify-center shrink-0">
        <KlaraIcon />
      </div>
      <div className="flex items-center gap-1 px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-white/15 border border-white/15">
        {[0, 1, 2].map(i => (
          <span key={i} className="block w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: `${i * 0.18}s`, animationDuration: '1s' }} />
        ))}
      </div>
    </div>
  )
}

function MessageRow({ msg }) {
  const isBot = msg.from === 'bot'
  return (
    <div className={`flex items-end gap-1.5 ${isBot ? 'flex-row' : 'flex-row-reverse'}`} style={{ animation: 'msgIn 0.3s ease' }}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isBot ? 'bg-white/20 border border-white/25' : 'bg-white/25 border border-white/30'}`}>
        {isBot ? <KlaraIcon /> : <UserGlyph />}
      </div>
      <div className={isBot ? 'max-w-[80%]' : 'max-w-[80%] flex flex-col items-end'}>
        <div className={`px-3 py-2 text-[12px] leading-relaxed ${isBot
          ? 'rounded-2xl rounded-bl-md bg-white/15 border border-white/15 backdrop-blur-sm text-white'
          : 'rounded-2xl rounded-br-md bg-[#1E5AC0] text-white shadow-sm'
          }`}>
          {msg.text}
        </div>
      </div>
    </div>
  )
}

export default function IndustrySolutionsSection() {
  const [messages, setMessages] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const chatBodyRef = useRef(null)
  const phoneChatRef = useRef(null)
  const timerRef = useRef(null)
  const stepRef = useRef(0)

  useEffect(() => {
    for (const el of [chatBodyRef.current, phoneChatRef.current]) {
      if (el) el.scrollTop = el.scrollHeight
    }
  }, [messages, isTyping])

  const typeInInput = useCallback((text, cb) => {
    let i = 0
    setInputVal('')
    const iv = setInterval(() => {
      setInputVal(prev => prev + text[i])
      i++
      if (i >= text.length) { clearInterval(iv); timerRef.current = setTimeout(cb, 380) }
    }, 46)
    return () => clearInterval(iv)
  }, [])

  const next = useCallback(() => {
    const step = stepRef.current
    const msg = MESSAGES[step]
    if (!msg) return
    if (msg.from === 'user') {
      setSuggestions([])
      typeInInput(msg.text, () => {
        setInputVal('')
        setMessages(prev => [...prev, msg])
        stepRef.current++
        timerRef.current = setTimeout(next, 600)
      })
    } else {
      setIsTyping(true)
      timerRef.current = setTimeout(() => {
        setIsTyping(false)
        setMessages(prev => [...prev, msg])
        stepRef.current++
        const isLast = stepRef.current >= MESSAGES.length
        if (isLast) {
          setSuggestions(SUGGESTIONS)
          timerRef.current = setTimeout(() => {
            setMessages([]); setSuggestions([]); stepRef.current = 0
            timerRef.current = setTimeout(next, 800)
          }, 5200)
        } else {
          timerRef.current = setTimeout(next, 700)
        }
      }, 1400 + Math.random() * 900)
    }
  }, [typeInInput])

  useEffect(() => {
    timerRef.current = setTimeout(next, 1200)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [next])


  const CHECK_ITEMS = [
    'No Commitment Required',
    'Response Within 24 Hours',
    'Tailored To Your Goals',
  ]

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#3D75F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.5 3.5L5.25 9.75L2.5 7" />
    </svg>
  )

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  const { ref: partnersRef, isVisible: partnersSeen } = useScrollAnimation()

  const coreStats = [
    { value: "5", label: "Industries" },
    { value: "1", label: "Live Deployments" },
    { value: "2", label: "Research Phases" },
    { value: "India + CA", label: "Operating Markets" }
  ];

  const integrationLogos = [
    { name: "Slack", url: "/in5.png" },
    { name: "Claude", url: "/in6.svg" },
    { name: "Voiceflow", url: "/in7.svg" },
    { name: "Vapi", url: "/in8.svg" },
    { name: "Nation", url: "/in9.svg" },
    { name: "Asana", url: "/in10.svg" },
    { name: "Mistral", url: "/in11.svg" }
  ];

  const doubleLogosList = [...integrationLogos, ...integrationLogos];

  const industryCards = [
    {
      badge: "Live",
      badgeClass: "text-emerald-400 bg-gradient-to-br from-[#F7BFA0]/25 to-[#1C6DD0]/25 border border-white/20",
      title: "Travel",
      desc: "AI agents for franchise-led travel bureaus. Last-mile automation, customer onboarding, and lead qualification at scale.",
      anchor: "Anchor case: Gogaga-Unilink",
      img: "in1.svg"
    },
    {
      badge: "Research Phase",
      badgeClass: "text-amber-400 bg-gradient-to-br from-[#F7BFA0]/25 to-[#1C6DD0]/25 border border-white/20",
      title: "Recruitment",
      desc: "Automated screening, candidate ranking, and workflow intelligence for staffing firms handling high-volume hiring pipelines.",
      anchor: "Anchor case: ASG",
      img: "in2.svg"
    },
    {
      badge: "Research Phase",
      badgeClass: "text-amber-400 bg-gradient-to-br from-[#F7BFA0]/25 to-[#1C6DD0]/25 border border-white/20",
      title: "Finance",
      desc: "AI-native accounting and bookkeeping automation for fractional intelligence, transaction categorization, and CFO-ready reporting.",
      anchor: "Anchor case: Tractbook",
      img: "in3.svg"
    }
  ];

  const workflowTabs = ["Travel", "Finance", "Recruitment"];

  const whyCards = [
    {
      title: "Domain-trained Intelligence",
      desc: "Agents grounded in your industry's language, workflows, and edge cases not a generic chatbot bolted onto your process."
    },
    {
      title: "Integrated, not isolated",
      desc: "Plugged directly into the tools your team already lives in. No copy-paste, no context switching, no parallel systems."
    },
    {
      title: "Measurable Outcomes",
      desc: "Every deployment ships with metrics. You see the hours saved, leads qualified, and tickets resolved in real numbers."
    }
  ];

  const PARTNER_LOGOS = [
    { key: 'nxt-1', src: partnerNxtwave, alt: 'NXT Wave', w: 234, h: 44 },
    { key: 'asg-1', src: partnerAsg, alt: 'American Software Group', w: 103, h: 54 },
    { key: 'nxt-2', src: mmw, alt: 'NXT Wave', w: 234, h: 44 },
    { key: 'asg-2', src: goga, alt: 'American Software Group', w: 220, h: 54 },
    { key: 'asg-3', src: abs, alt: 'American Software Group', w: 230, h: 54 },
    { key: 'asg-4', src: bidqon_logo, alt: 'American Software Group', w: 230, h: 54 },
  ]
  const PARTNER_MARQUEE = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <>
      <section className="w-full  text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center">

        <div className="absolute right-[-20%] top-[15%] w-[500px] h-[1000px] bg-[#1C68FA]/35 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute left-[-10%] bottom-[15%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center space-y-24 4k:max-w-[2400px]">

          <div className="w-full max-w-5xl mx-auto text-center space-y-6">
            <span className="text-xs lg:text-[24px] font-mono tracking-[0.25em] text-[#F7BFA0] uppercase block">
              INDUSTRIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[115%]">
              <Typewriter words={['Every Industry has a Problem. ']} speed={100} delay={2500} /><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C80FF] via-blue-400 to-[#2C80FF]">
                <Typewriter words={["we've already started Solving Yours."]} speed={100} delay={2500} />
              </span>
            </h2>
            <p className="text-white text-sm lg:text-[24px] sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Techscape AI builds domain-specific AI agents and automation systems for high-friction industries starting where the pain is loudest.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto pt-2">
            {coreStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-white/[0.1]  text-center space-y-1 backdrop-blur-sm"
                style={{
                  background: "linear-gradient(145deg, rgba(247, 191, 160, 0.5) 0%, rgba(28, 109, 208, 0) 100%)"
                }}
              >
                <div className="text-2xl sm:text-3xl  tracking-tight text-white">{stat.value}</div>
                <div className="text-[11px]  uppercase tracking-wider text-white">{stat.label}</div>
              </div>
            ))}
          </div>

          <section id="partners" className="relative  py-16 lg:py-20">
            <div className="wrap" ref={partnersRef}>
              <div className={`flex flex-col items-center gap-[44px] transition-all duration-700 ${partnersSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="capitalize text-[32px] font-medium leading-[25px] text-center tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
                  Our Integrations
                </p>

                {/* Logo marquee */}
                <div className="relative overflow-hidden w-full">
                  <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }} />
                  <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #004477DB 0%, transparent 0%)' }} />

                  <div className="flex items-center gap-[120px] marquee-track" style={{ width: 'max-content' }}>
                    {PARTNER_MARQUEE.map(({ key, src, alt, w, h }, i) => (
                      <div key={`${key}-${i}`} className="flex items-center justify-center shrink-0" style={{ minHeight: '56px' }}>
                        <img
                          src={src}
                          alt={alt}
                          width={w}
                          height={h}
                          className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                          style={{ width: `${w}px`, height: `${h}px` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full max-w-6xl space-y-16 pt-12 ">
            <div className="w-full max-w-3xl  text-start space-y-4">
              <span className="text-xs lg:text-[32px]  text-[#F7BFA0] block">
                Where We Work
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[70px] font-bold tracking-tight">
                Pick your <span className="text-[#1C68FA]"> <Typewriter words={['Industry']} speed={100} delay={2500} /></span>
              </h3>
              <p className="text-white text-xs sm:text-sm lg:text-[20px]">
                Three Industries live and running. Two in deep research, click through to see what we've built and what's coming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {industryCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-4xl border border-white/[0.05] p-6 flex flex-col justify-between space-y-6 transition-all duration-500 hover:border-white/10 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(145deg, rgba(247, 191, 160, 0.5) 0%,rgba(28, 109, 208, 0.2) 30%, rgba(28, 109, 208, 0) 100%)"
                  }}
                >
                  <div className="space-y-5 flex flex-col items-center text-center w-full">

                    {/* Badge - Top Center */}
                    <span className={`px-2.5 py-0.5 rounded-md text-[14px] tracking-wide backdrop-blur-md ${card.badgeClass}`}>
                      {card.badge}
                    </span>

                    {/* Image */}
                    <div className="w-[90%] aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-900">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex flex-col items-center">
                      <h4 className="text-xl sm:text-2xl lg:text-[24px] font-bold tracking-tight text-white/95">
                        {card.title}
                      </h4>
                      <p className="text-white text-xs sm:text-[16px] font-light leading-relaxed min-h-[72px] max-w-[400px]">
                        {card.desc}
                      </p>
                    </div>

                  </div>

                  <div className="space-y-4 pt-2 flex flex-col items-center text-center">

                    {/* Text */}
                    <div className="text-[14px] text-[#888888] tracking-wide">
                      {card.anchor}
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className="w-[70%] py-2.5 rounded-sm text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-1"
                      style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
                    >
                      <span>Explore</span>
                    </button>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== AGENT WORKFLOW IN ACTION ===== */}
          <div className="w-full max-w-6xl  space-y-14 pt-12">
            <div className="w-full max-w-5xl mx-start text-start space-y-4">
              <span className="text-[11px] lg:text-[24px] text-[#F7BFA0] block">
                HOW AGENTS RUN YOUR INDUSTRY
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[70px] font-bold tracking-tight leading-[115%]">
                See the Agent <br />
                <span className="text-[#2C80FF]">
                  <Typewriter words={['Workflow in Action']} speed={100} delay={2500} />

                </span>
              </h3>
              <p className="text-white text-xs sm:text-[18px] max-w-xl leading-relaxed">
                Each industry runs on its own agent. Drop it into a workflow, watch it read the context, and route the outcome. Select an industry to see it live.
              </p>
            </div>

            {/* Phone mockup stage */}
            <div className="w-full max-w-6xl mx-auto 
  bg-[url('/industrybg.png')] bg-cover bg-center 
  rounded-xl py-20 px-6">

              <section className="relative flex items-center justify-center overflow-hidden">

                <WaveCanvas />

                {/* Glows */}
                <div className="absolute -top-24 -right-20 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none bg-[radial-gradient(circle,rgba(59,143,232,0.18)_0%,transparent_70%)]" />
                <div className="absolute -bottom-20 -left-16 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none bg-[radial-gradient(circle,rgba(247,169,124,0.12)_0%,transparent_70%)]" />

                {/* Content */}
                <div className="relative z-10 flex w-full gap-50">

                  {/* LEFT */}
                  <div className="flex-1 flex flex-col justify-center gap-20   p-8 rounded-2xl  bg-white/0 backdrop-blur-sm border border-white/10 ">

                    <h2 className="text-white text-[40px] font-semibold">Travel</h2>
                    <h2 className="text-white text-[40px] font-semibold">Finance</h2>
                    <h2 className="text-white text-[40px] font-semibold">Recruitment</h2>

                  </div>

                  {/* RIGHT — phone mockup */}
                  <div className="shrink-0 relative mx-auto">
                    {/* Device frame */}
                    <div className="relative w-[300px] h-[600px] rounded-[46px] bg-[#080808] p-[9px] border border-white/10 shadow-[0_40px_90px_rgba(0,0,0,0.55),inset_0_0_0_2px_rgba(255,255,255,0.04)]">
                      {/* Side buttons */}
                      <span className="absolute -left-[2px] top-[120px] w-[3px] h-9 rounded-l bg-[#1a1a1a]" />
                      <span className="absolute -left-[2px] top-[170px] w-[3px] h-14 rounded-l bg-[#1a1a1a]" />
                      <span className="absolute -right-[2px] top-[150px] w-[3px] h-16 rounded-r bg-[#1a1a1a]" />

                      {/* Screen */}
                      <div className="relative w-full h-full rounded-[38px] overflow-hidden flex flex-col bg-gradient-to-b from-[#0A2F6E] via-[#2C80FF] to-[#F4D3C4]">

                        {/* Notch */}
                        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[22px] bg-black rounded-full z-30" />

                        {/* Status bar */}
                        <div className="flex items-center justify-between px-6 pt-2.5 pb-1 text-white text-[11px] font-semibold shrink-0 z-20">
                          <span>9:41</span>
                          <div className="flex items-center gap-1.5">
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
                              <rect x="0" y="7" width="3" height="4" rx="1" /><rect x="4.7" y="5" width="3" height="6" rx="1" /><rect x="9.3" y="2.5" width="3" height="8.5" rx="1" /><rect x="14" y="0" width="3" height="11" rx="1" />
                            </svg>
                            <svg width="6" height="12" viewBox="0 0 16 12" fill="currentColor">
                              <path d="M8 2.6c2.3 0 4.4.9 6 2.4l-1.5 1.6A6.5 6.5 0 0 0 8 4.7 6.5 6.5 0 0 0 3.5 6.6L2 5C3.6 3.5 5.7 2.6 8 2.6zM8 6.4c1.2 0 2.3.5 3.1 1.3L8 11 4.9 7.7A4.4 4.4 0 0 1 8 6.4z" />
                            </svg>
                            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                              <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.5" />
                              <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" />
                              <rect x="22.5" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" />
                            </svg>
                          </div>
                        </div>

                        {/* Header */}
                        <div className="flex items-center gap-2.5 px-3.5 py-2.5 border-b border-white/10 shrink-0 z-20">
                          <button className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 18 9 12 15 6" />
                            </svg>
                          </button>
                          <div className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                            <KlaraIcon />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[13.5px] font-bold text-white leading-tight truncate">Gogaga AI Assistant</div>
                            <div className="flex items-center gap-1.5 text-[10.5px] text-white/60 leading-tight">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                              Online · Your Trip Assistant
                            </div>
                          </div>
                          <button className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white transition-colors shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="5" cy="12" r="1.9" /><circle cx="12" cy="12" r="1.9" /><circle cx="19" cy="12" r="1.9" />
                            </svg>
                          </button>
                        </div>

                        {/* Messages — live typing animation */}
                        <div ref={phoneChatRef} className="flex-1 overflow-y-auto px-3 py-3.5 flex flex-col gap-3" style={{ scrollbarWidth: 'none' }}>

                          {/* Day divider */}
                          <div className="flex justify-center">
                            <span className="px-3 py-0.5 rounded-full bg-black/15 text-white text-[9.5px] font-medium tracking-wide">Today</span>
                          </div>

                          {messages.map((msg, i) => <MessageRow key={`${msg.id}-${i}`} msg={msg} />)}
                          {isTyping && <TypingIndicator />}
                        </div>

                        {/* Suggestions */}
                        {suggestions.length > 0 && (
                          <div className="flex gap-1.5 px-3 py-1.5 overflow-x-auto shrink-0" style={{ scrollbarWidth: 'none' }}>
                            {suggestions.map((s, i) => (
                              <button key={i} className="shrink-0 px-3 py-1.5 rounded-full text-[10.5px] font-semibold bg-[#E8926F] border border-white text-white whitespace-nowrap" style={{ animation: 'chipIn 0.25s ease both', animationDelay: `${i * 0.12}s` }}>
                                {s}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Input */}
                        <div className="flex items-center gap-2 px-3 py-2.5 border-t border-white bg-white/10 backdrop-blur-sm shrink-0">
                          <button className="text-white hover:text-white transition-colors shrink-0">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                            </svg>
                          </button>
                          <div className="flex-1 flex items-center bg-white/12 border border-white rounded-full px-2 h-9">
                            <input
                              type="text"
                              value={inputVal}
                              readOnly
                              placeholder="Type a message…"
                              className="flex-1 bg-transparent border-none outline-none text-[12px] text-black placeholder-white"
                            />
                            <button className="text-white hover:text-white transition-colors shrink-0">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a2 2 0 0 1 2 2v7a2 2 0 0 1-4 0V4a2 2 0 0 1 2-2z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                              </svg>
                            </button>
                          </div>
                          <button className="w-9 h-9 rounded-full shrink-0 bg-white text-[#2C80FF] flex items-center justify-center hover:opacity-90 transition-opacity">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </button>
                        </div>

                        {/* Home indicator */}
                        <div className="flex justify-center py-1.5 shrink-0">
                          <span className="w-28 h-1 rounded-full bg-black" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            </div>
            <p className="text-center text-[18px] text-[#F7C8B4] tracking-wide">
              Anchor client . Gogaga Holidays . 180 + franchise network
            </p>
          </div>

          {/* ===== WHY INDUSTRY-SPECIFIC ===== */}
          <div className="w-full max-w-6xl space-y-14 pt-12 ">
            <div className="w-full max-w-5xl mx-start text-start space-y-4">
              <span className="text-xs lg:text-[24px] text-[#F5A086]">
                Why Industry-Specific
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[70px] font-bold ">
                Generic AI <span className="text-[#2C80FF]"> <Typewriter words={["doesn't understand"]} speed={100} delay={2500} /></span> your business.
              </h3>
              <p className="text-white text-xs sm:text-[18px] font-light max-w-2xl">
                Bolt-on chatbots break the moment your domain gets specific. Our agents are built for it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {whyCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl min-h-[300px] border border-white/[0.05] p-7 
             flex flex-col items-center justify-center text-center
             space-y-4 transition-all duration-500 hover:border-white/10 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(145deg, rgba(247, 191, 160, 0.2) 0%, rgba(28, 109, 208, 0) 100%)"
                  }}
                >
                  <h4 className="text-lg sm:text-xl lg:text-[24px] text-[#FAD4BF]">
                    {card.title}
                  </h4>

                  <p className="text-white text-xs sm:text-[16px] font-light leading-relaxed max-w-[400px]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-6xl space-y-14 pt-12 ">
            <div className="w-full max-w-5xl mx-start text-start space-y-4">
              <span className="text-xs lg:text-[24px] text-[#F5A086]">
                READY TO START
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[70px] font-bold ">
                Your industry has a problem <br />
                <span className="text-[#2C80FF]"> <Typewriter words={['AI can solve. ']} speed={100} delay={2500} /></span>
              </h3>
              <p className="text-white text-xs sm:text-[18px] font-light max-w-2xl">
                Let’s find it together.
                whether you’re in a live industry or a research phase we want to hear from you.
              </p>
            </div>
            <div className='flex gap-6'>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 h-[40px] text-[13px] sm:text-[14px] font-medium text-white rounded-[4px] capitalize whitespace-nowrap"
                style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
              >
                Start The conversation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 h-[40px] text-[13px] sm:text-[14px] font-medium text-white rounded-[4px] capitalize whitespace-nowrap border border-white"

              >
                View our AI agents
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section id="get-started" className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

          {/* --- Main Content Wrapper with Background Image --- */}
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

            <div className="w-full bg-transparent py-16 md:pb-60 flex items-center justify-center">

              {/* Container */}
              <div className="w-full max-w-6xl px-4 flex justify-center">

                <div
                  className="w-full rounded-[32px] border border-white/[0.06] 
                 p-10 sm:p-16 
                 flex flex-col items-center justify-center text-center
                 space-y-6 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(140deg, rgba(247, 191, 160, 0.5) 0%, rgba(28, 109, 208, 0.3)"
                  }}
                >

                  {/* Heading */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold] max-w-3xl">
                    Free Your team. <br />
                    Build your {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C68FA] via-blue-400 to-purple-400">
                      first AI agent {" "}
                    </span>
                    today !
                  </h3>

                  {/* Description */}
                  <p className="text-white text-xs sm:text-[18px] font-light max-w-2xl leading-relaxed">
                    If you’re exploring relevance AI for the first time or discovering new features, we’ll quickly guide you to start great work immediately.
                  </p>

                  {/* Button */}
                  <div className='flex gap-6'>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-4 h-[40px] text-[13px] sm:text-[14px] font-medium text-white rounded-[4px] capitalize whitespace-nowrap"
                      style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
                    >
                      Try for Free
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-4 h-[40px] text-[13px] sm:text-[14px] font-medium text-white rounded-[4px] capitalize whitespace-nowrap border border-white"

                    >
                      Get A demo
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Subtle Bottom Glows */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>


    </>
  );
}