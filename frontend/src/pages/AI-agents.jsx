import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Typewriter'
import WhyItWorks from '../components/WhyItWorks'

const STATS = [
    { value: '4', label: 'Agents Built' },
    { value: '3', label: 'Build In Production' },
    { value: 'Core, Micro, Mass', label: 'Delivery Layers' },
    { value: 'India + CA', label: 'Deployed Markets' },
]

const BUILT_AGENTS = [
    {
        title: 'Travel AI Agent',
        desc: 'Expand your portfolio with our native product. Seamless user client management for travel agencies to build a fast-moving enterprise.',
        icon: '/aiagent6.svg',
    },
    {
        title: 'Finance AI Agent',
        desc: 'Guide your custom automated workflows easily with dedicated bookkeeping automation. Fast, intelligent workflows customized for industry scales.',
        icon: '/aiagent7.svg',
    },
    {
        title: 'Recruitment AI Agent',
        desc: 'Build Techscapes into high-level design systems with customized check ins for your team and position your firm at the forefront of the AI era.',
        icon: '/aiagent8.svg',
    },
    {
        title: 'Logistics AI Agent',
        desc: 'Automate delivery matching, routing protocols, and predictive workflow tracking to maintain optimal load capacity across channels.',
        icon: '/aiagent9.png',
    },
]

const AIRLINE_METRICS = [
    { value: '50%', label: 'Inquiries Handled Instantly' },
    { value: '<1 min', label: 'Average Response Latency' },
    { value: '38%', label: 'Operational Cost Reduction' },
]

const CORE_VALUES = [
    { title: 'Focus', desc: 'One problem, one agent, no scope creep.', img: '/re5.svg' },
    { title: 'Proven', desc: 'You see it working before you scale it.', img: '/re6.svg' },
    { title: 'Fast', desc: 'POC in 2–4 weeks, not 6 months.', img: '/re7.svg' },
    { title: 'Scalable', desc: 'Once it works, we build it into your operations.', img: '/re8.svg' },
]

const CTA_CARDS = [
    {
        kicker: 'Prev Page',
        title: 'Industries',
        desc: "See which industries we've deployed in",
        to: '/industries',
        nav: 'prev',
    },
    {
        kicker: 'Related',
        title: 'Research',
        desc: 'Deep ATS protocol',
        to: '/research',
        nav: 'related',
    },
    {
        kicker: 'Next Page',
        title: 'Solutions',
        desc: 'AI-driven workflows',
        to: '/services',
        nav: 'next',
    },
]

const NAV_ALIGN = {
    prev: { text: 'text-left', row: 'justify-start' },
    related: { text: 'text-center', row: 'justify-center' },
    next: { text: 'text-right', row: 'justify-end' },
}

function Arrow({ dir, size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: dir === 'prev' ? 'rotate(180deg)' : undefined }}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    )
}


function AgentCarousel({ items }) {
    const trackRef = useRef(null)
    const [overflowing, setOverflowing] = useState(false)
    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(false)

    const sync = useCallback(() => {
        const el = trackRef.current
        if (!el) return
        const max = el.scrollWidth - el.clientWidth
        setOverflowing(max > 4)
        setCanPrev(el.scrollLeft > 4)
        setCanNext(el.scrollLeft < max - 4)
    }, [])

    useEffect(() => {
        const el = trackRef.current
        if (!el) return
        sync()
        el.addEventListener('scroll', sync, { passive: true })
        // Re-measure on resize: how many cards fit changes at every breakpoint.
        const ro = new ResizeObserver(sync)
        ro.observe(el)
        if (el.firstElementChild) ro.observe(el.firstElementChild)
        return () => {
            el.removeEventListener('scroll', sync)
            ro.disconnect()
        }
    }, [sync, items])

    const step = (dir) => {
        const el = trackRef.current
        if (!el || !el.firstElementChild) return
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0
        el.scrollBy({ left: dir * (el.firstElementChild.offsetWidth + gap), behavior: 'smooth' })
    }

    return (
        <div className="mt-12 lg:mt-16">
            <div
                ref={trackRef}
                className="no-scrollbar flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-1 px-1 pb-2"
            >
                {items.map((agent) => (
                    <article
                        key={agent.title}
                        className="snap-start shrink-0 w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)] rounded-[28px] p-6 lg:p-8 flex flex-col border border-white/15 transition-all duration-500 hover:border-white/30 hover:-translate-y-1 group"
                        style={{
                            background:
                                'linear-gradient(145deg, rgba(247,191,160,0.3) 0%, rgba(28,109,208,0.1) 100%)',
                        }}
                    >
                        <img
                            src={agent.icon}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="w-20 h-20 lg:w-28 lg:h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                        <h3 className="mt-6">{agent.title}</h3>
                        <p className="mt-3 text-white">{agent.desc}</p>
                    </article>
                ))}
            </div>

            {overflowing && (
                <div className="mt-8 flex items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => step(-1)}
                        disabled={!canPrev}
                        aria-label="Previous agents"
                        className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-white/15"
                    >
                        <Arrow dir="prev" />
                    </button>
                    <button
                        type="button"
                        onClick={() => step(1)}
                        disabled={!canNext}
                        aria-label="Next agents"
                        className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-white/15"
                    >
                        <Arrow dir="next" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default function AiAgent() {
    return (
        <>
            {/* ---------------------------------------------------------------- HERO */}
            <section
                className="relative overflow-hidden py-20 lg:py-28"
                style={{
                    backgroundImage: "url('/aiagentbg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 pointer-events-none select-none bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.75)_75%)]"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-40 z-0 pointer-events-none select-none bg-gradient-to-b from-transparent to-black"
                />

                <div className="wrap relative z-10 text-center">
                    <span className="label">AI Agents</span>

                    <h1 className="mt-5 max-w-4xl mx-auto">
                        Your Operations Are Manual.{' '}
                        <span className="block">
                            <Typewriter words={["Your Competitors Won't Be."]} speed={100} delay={2500} />
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto">
                        Techscape AI builds domain-specific agents — voice, chat, and workflow — trained on how
                        your industry actually works. Not general AI. Industry AI.
                    </p>

                </div>
            </section>



            <section>
                <div className="wrap relative z-10 text-center">

                    <div className="mt-2 lg:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {STATS.map((stat) => (
                            <div
                                key={stat.label}
                                className="px-4 sm:px-6 py-5 rounded-tl-[24px] rounded-br-[24px] rounded-tr-[4px] rounded-bl-[4px] border border-white/[0.08] backdrop-blur-md flex flex-col items-center justify-center text-center transition-colors duration-300 hover:border-white/20"
                                style={{
                                    background:
                                        'linear-gradient(145deg, rgba(247,191,160,0.28) 0%, rgba(28,109,208,0) 100%)',
                                }}
                            >
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-tight">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm sm:text-base text-white/70 leading-snug">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* -------------------------------------------------------- WHAT WE BUILT */}
            <section className="relative py-20 lg:py-28">
                <div className="wrap">
                    <div className="">
                        <span className="label block text-center">Live Agents</span>
                        <h1 className="mt-5 max-w-6xl mx-auto">
                            What we’ve{" "}
                            <span className="inline">
                                <Typewriter words={["Built"]} speed={100} delay={2500} />
                            </span>
                        </h1>
                        <p className="mt-4 text-white">
                            Three agents in production. One in deep research. Every one built domain-first — not
                            retrofitted from a generic model.
                        </p>
                    </div>

                    <AgentCarousel items={BUILT_AGENTS} />
                </div>
            </section>

            {/* ------------------------------------------------------ CUSTOMER SERVICE */}
            <section className="relative py-4 lg:py-10 overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute top-0 right-[-20%] w-[70%] lg:h-[900px] max-w-[700px] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(28,104,250,0.35),transparent_65%)] pointer-events-none z-0"
                />
                <div
                    aria-hidden="true"
                    className="absolute top-[30%] left-[-15%] w-[50%] max-w-[600px] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(245,160,134,0.10),transparent_60%)] pointer-events-none z-0"
                />

                <div className="wrap relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="mt-0 max-w-6xl mx-auto">
                            Deliver a First Class experience with
                            <span className="inline">
                                <Typewriter words={["AI Customer Service agents."]} speed={100} delay={2500} />
                            </span>
                        </h1>
                        <p className="mt-6 max-w-2xl">
                            Resolve high-volume, repetitive inquiries — booking modifications, tracking updates,
                            multi-lingual support — instantly. Cut overhead costs, reduce wait times, and free your
                            teams to focus on what matters.
                        </p>
                        <button type="button" className="btn mt-8">
                            Deploy Agent v1.2
                        </button>
                    </div>

                    <div className="mt-16 lg:mt-24">
                        <h1 className="mt-0 max-w-6xl text-center">
                            Discover how the phillippines’ largest airline transformed its customer experience
                            <span className="block">
                                <Typewriter words={["with Techscape AI"]} speed={100} delay={2500} />
                            </span>
                        </h1>




                        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {CORE_VALUES.map((card) => (
                                <div
                                    key={card.title}
                                    className="rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-1"
                                >
                                    <img
                                        src={card.img}
                                        alt=""
                                        aria-hidden="true"
                                        loading="lazy"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <h1 className="mt-20 max-w-6xl text-center">
                            Build Traveller loyalty with always on
                            <span className="block">
                                <Typewriter words={["AI customer service."]} speed={100} delay={2500} />
                            </span>
                        </h1>

                        <div className="mt-6 rounded-[28px] p-6 sm:p-8 lg:pt-10 lg:pb-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
                            <div>
                                <h1>
                                    Automate
                                    <span className="block">Common Inquiries</span>
                                </h1>
                                <p className="mt-4  max-w-md">
                                    Handle refunds, baggage status, seat selections, and more — reducing costs
                                    and improving traveller satisfaction at scale.
                                </p>
                            </div>

                            <div className="w-full">
                                <div className="w-full h-full">
                                    <img
                                        src="/aiagent10.svg"
                                        alt=""
                                        aria-hidden="true"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 lg:py-2">
                <div className="wrap">
                    <div className="">
                        <span className="label block text-center">Why It Works</span>
                        <h1 className="mt-5 max-w-6xl mx-auto">
                             Built for your industry.
                            <span className="block">
                                <Typewriter words={[" Not adapted to it."]} speed={100} delay={2500} />
                            </span>
                        </h1>
                        <p className="mt-4 text-white">
                           The difference between a generic AI tool and a Techscape AI agent.
                        </p>
                    </div>

                </div>
            </section>

            {/* ----------------------------------------------------------- WHY IT WORKS */}
            <WhyItWorks />

            {/* ------------------------------------------------------------ READY / CTA */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <div className="wrap text-center">
                    <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.06] bg-[#120b08]/60 shadow-[inset_0_1px_12px_rgba(245,160,134,0.06)] mb-8 backdrop-blur-sm">
                        <span className="text-[#F7BFA0] uppercase tracking-[0.22em] text-[20px] font-semibold">
                            Ready to automate
                        </span>
                    </div>

                    <h1 className="mt-0 max-w-6xl text-center">
                        Your Business has a problem

                        <span className="block">
                            <Typewriter words={["an agent can solve. "]} speed={100} delay={2500} />
                        </span>
                    </h1>

                    <p className="mt-4 max-w-3xl mx-auto">
                        Whether you're a business looking to automate, a student ready to upskill, or a partner exploring collaboration  the first conversation is always free. Tell us what you need and we'll tell you exactly how we can help.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button type="button" className="btn">
                            Start the Conversation
                        </button>
                        <button type="button" className="btn-outline">
                            Explore Industries
                        </button>
                    </div>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
                        {CTA_CARDS.map((card) => {
                            const align = NAV_ALIGN[card.nav]
                            return (
                                <Link
                                    key={card.title}
                                    to={card.to}
                                    className={`group relative overflow-hidden rounded-[30px] border border-white/10  px-6 py-7 transition-all duration-300 hover:border-white/25 hover:-translate-y-1 ${align.text}`}
                                    style={{
                                        background:
                                            'linear-gradient(145deg, rgba(247, 191, 160, 0.5) 0%, rgba(28,109,208,0.30) 60%)',
                                    }}
                                >
                                    {/* Warm bloom bleeding in from the top edge */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-[130%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(197,142,117,0.30),transparent_70%)] transition-opacity duration-300 group-hover:opacity-80 opacity-60"
                                    />

                                    <span
                                        className={`relative flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.14em] text-white ${align.row}`}
                                    >
                                        {card.nav === 'prev' && (
                                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                                <Arrow dir="prev" size={14} />
                                            </span>
                                        )}
                                        {card.kicker}
                                        {card.nav === 'next' && (
                                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                <Arrow dir="next" size={14} />
                                            </span>
                                        )}
                                    </span>

                                    <h4 className="relative mt-3 text-[32px]">{card.title}</h4>
                                    <p className="relative mt-1 text-[14px]">{card.desc}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* -------------------------------------------------------------- GET STARTED */}
            <section id="get-started" className="relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto relative z-10">
                    <div
                        className="w-full border border-black/5"
                        style={{
                            backgroundColor: '#050505',
                            backgroundImage: "url('/bg2.svg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="wrap text-center py-16 md:py-24">
                            <h2 className="max-w-4xl mx-auto">
                                "Intelligence scales when it's built with intent."
                            </h2>
                            <p className="mt-8 text-lg md:text-2xl text-white/70">
                                India's growth story needs AI that actually works
                            </p>
                            <button type="button" className="btn mt-10">
                                Request A Demo
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"
                />
                <div
                    aria-hidden="true"
                    className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
                />
            </section>
        </>
    )
}
