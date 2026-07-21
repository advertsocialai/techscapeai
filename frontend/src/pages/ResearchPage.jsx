import { useEffect, useRef, useState } from "react";
import Typewriter from '../components/Typewriter'

const STAGE_W = 920;
const STAGE_H = 600;

const IMAGES = [
  { src: "/re1.svg", size: 104, name: "Air Freight" },
  { src: "/re2.svg", size: 84, name: "Ocean Freight" },
  { src: "/re3.svg", size: 116, name: "Warehousing" },
  { src: "/re4.svg", size: 90, name: "Last Mile Delivery" },
  { src: "/re1.svg", size: 100, name: "Fleet Management" },
  { src: "/re2.svg", size: 80, name: "Customs Clearance" },
  { src: "/re3.svg", size: 118, name: "Cold Chain" },
  { src: "/re4.svg", size: 88, name: "Rail Freight" },
  { src: "/re1.svg", size: 108, name: "Cargo Tracking" },
  { src: "/re2.svg", size: 82, name: "Route Optimization" },
  { src: "/re3.svg", size: 112, name: "Inventory Management" },
  { src: "/re4.svg", size: 94, name: "Supply Chain Analytics" },
];

const ORBIT_MS = 18000;
const MIN_SCALE = 0.55;
const MAX_SCALE = 1.25;
const MIN_OPACITY = 0.55;
const MAX_OPACITY = 1;
const HOVER_BOOST = 1.2;

export default function Hero() {
  const stageWrapRef = useRef(null);
  const cardRefs = useRef([]);
  const [scale, setScale] = useState(1);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const hoveredIdxRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const boostRef = useRef([]);

  const isPausedRef = useRef(false);
  const pausedElapsedRef = useRef(0);
  const pauseStartedAtRef = useRef(null);

  useEffect(() => {
    hoveredIdxRef.current = hoveredIdx;
  }, [hoveredIdx]);

  useEffect(() => {
    const el = stageWrapRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / STAGE_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const centerX = STAGE_W / 2;
    const centerY = STAGE_H / 2;
    const radiusX = STAGE_W * 0.4;
    const radiusY = STAGE_H * 0.4;

    boostRef.current = IMAGES.map(() => 0);

    const tick = (ts) => {
      if (startRef.current === null) startRef.current = ts;

      let elapsed;
      if (isPausedRef.current) {
        elapsed = pausedElapsedRef.current;
      } else {
        elapsed = ts - startRef.current;
      }

      IMAGES.forEach((img, i) => {
        const node = cardRefs.current[i];
        if (!node) return;

        const offset = (i / IMAGES.length) * ORBIT_MS;
        const progress = ((elapsed + offset) % ORBIT_MS) / ORBIT_MS;
        const angle = progress * Math.PI * 2;

        const x = centerX + radiusX * Math.sin(angle);
        const y = centerY - radiusY * Math.cos(angle);

        const depth = (1 - Math.cos(angle)) / 2;
        let depthScale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * depth;
        const opacity = MIN_OPACITY + (MAX_OPACITY - MIN_OPACITY) * depth;

        const targetBoost = hoveredIdxRef.current === i ? HOVER_BOOST - 1 : 0;
        boostRef.current[i] += (targetBoost - boostRef.current[i]) * 0.15;
        depthScale += boostRef.current[i];

        const z = hoveredIdxRef.current === i
          ? 999
          : Math.round(depth * 100);

        node.style.transform =
          `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${depthScale})`;
        node.style.zIndex = z;
        node.style.opacity = opacity;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleStageMouseEnter = () => {
    if (isPausedRef.current) return;
    isPausedRef.current = true;
    pauseStartedAtRef.current = performance.now();
    pausedElapsedRef.current = pauseStartedAtRef.current - (startRef.current ?? pauseStartedAtRef.current);
  };

  const handleStageMouseLeave = () => {
    if (!isPausedRef.current) return;
    isPausedRef.current = false;

    const now = performance.now();
    startRef.current = now - pausedElapsedRef.current;
  };

  const hoveredName = hoveredIdx !== null ? IMAGES[hoveredIdx].name : null;

  const workflowSteps = [
    {
      title: "Discover Call",
      desc: "We Understand Your Business, Your Pain Points, And Where AI Makes The Fastest Impact."
    },
    {
      title: "POC Build",
      desc: "Working Proof-Of-Concept In 2-4 Weeks. You See It Working Before Committing To Anything Bigger."
    },
    {
      title: "Deploy & Scale",
      desc: "Once Proven, We Deploy, Integrate, And Scale The Solution Into Your Operations."
    }
  ];

  const coreValues = [
    { title: "Focus", desc: "one problem, one agent, no scope creep.", img: "/re5.svg" },
    { title: "Proven", desc: "You see it working before you scale it.", img: "/re6.svg" },
    { title: "Fast", desc: "POC in 2-4 weeks, not 6 months.", img: "/re7.svg" },
    { title: "Scalable", desc: "Once it works we built in your operations.", img: "/re8.svg" }
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Publications', 'Milestone', 'Release'];

  const researchCards = [
    {
      badge: "Release",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      date: "May 2026",
      title: "Travel AI Agent now Live",
      desc: "Our first fully deployed conversational AI agent for the travel and hospitality industry. Handles bookings, FAQs, and customer follow-ups end-to-end.",
      category: "AI Agents - Travel",
      tag: "Release"
    },
    {
      badge: "Upcoming Release",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      date: "May 2026",
      title: "Finance AI Agent in development",
      desc: "A dedicated agent for financial services businesses. Handling queries, report generation, and client communications seamlessly.",
      category: "AI Agents - Finance",
      tag: "Release"
    },
    {
      badge: "Milestone",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      date: "May 2026",
      title: "4,500+ community members in Tech Scape Labs",
      desc: "Our open science community reached 4,500 members across India and Canada, collaborating on applied ML research and agent development.",
      category: "Labs Community",
      tag: "Milestone"
    },
    {
      badge: "Publication",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      date: "May 2026",
      title: "CaaS, VaaS, WaaS: a framework for AI agent layers",
      desc: "Our foundational paper introducing the three-layer agentic architecture governing Tech Scape AI's product suite.",
      category: "Research, Agents",
      tag: "Publications"
    },
    {
      badge: "Upcoming Release",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      date: "May 2026",
      title: "Logistics AI Agent on the way",
      desc: "Built for supply chain and logistics businesses tracking, communication, and operational workflow automation in one agent.",
      category: "AI Agents - Logistics",
      tag: "Release"
    },
    {
      badge: "Publication",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      date: "May 2026",
      title: "100+ research papers from Tech Scape Labs",
      desc: "A summary of the applied ML research published by our Labs community since 2022, covering NLP, agent design, and business automation.",
      category: "Labs, Research",
      tag: "Publications"
    }
  ];

  const filteredCards = activeFilter === 'All'
    ? researchCards
    : researchCards.filter(card => card.tag === activeFilter);

  return (
    <>
      <div
        className="relative min-h-screen overflow-x-hidden px-5 sm:px-12 lg:px-0 pt-8 sm:pt-14 pb-16 min-[2000px]:pb-0"
      >
        <header className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-4">
          <p className="capitalize text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-snug tracking-[-0.72px] mb-8 sm:mb-12" style={{ color: '#f7bfa0' }}>
            Research & Development
          </p>

          <h2 className="font-bold tracking-tight leading-[100%] text-[36px] sm:text-[60px] md:text-[80px] mb-8 sm:mb-12">
            The difference between AI
            <br />
            and{" "}
            <Typewriter words={['useful AI ']} speed={100} delay={2500} />
            is research.
          </h2>

          <p className="mb-7 max-w-md text-sm lg:text-[18px] leading-relaxed mx-auto">
            We don&apos;t pitch AI. We prove it first. Every agent we deploy starts
            as a problem we&apos;ve already solved.
          </p>

          <div className="flex flex-wrap justify-center gap-3 w-full">
            {["POC in 2–4 weeks", "Purpose built agents", "India & Canada"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-[#120b08]/60 px-[18px] py-[9px] text-[13px] lg:text-[18px] font-medium shadow-[inset_0_1px_0_rgba(255,210,165,0.07),0_1px_2px_rgba(0,0,0,0.4)]"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-12 flex justify-center sm:mt-24 min-[2000px]:mt-6">
          <div
            ref={stageWrapRef}
            className="w-full max-w-[920px]"
            style={{ height: STAGE_H * scale }}
          >
            <div
              className="aih-stage relative origin-top-left"
              style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
              onMouseEnter={handleStageMouseEnter}
              onMouseLeave={handleStageMouseLeave}
            >
              {IMAGES.map((img, i) => (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="aih-card group absolute left-0 top-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10
                       bg-neutral-900 shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition-[box-shadow,border-color] duration-300
                       hover:border-[#5b8cff]/60
                       hover:shadow-[0_18px_50px_rgba(0,0,0,0.6),0_0_22px_rgba(91,140,255,0.25)]"
                  style={{ width: img.size, height: img.size }}
                >
                  <img
                    src={img.src}
                    alt={img.name}
                    loading="lazy"
                    draggable="false"
                    className="block h-full w-full object-cover transition-[filter] duration-300
                         [filter:saturate(0.95)_brightness(0.92)] group-hover:[filter:saturate(1.05)_brightness(1.05)]"
                  />
                </div>
              ))}

              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[540px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 text-center">
                {hoveredName ? (
                  <p className="m-0 text-[50px] font-normal leading-[1.08] tracking-[-0.02em] text-zinc-100 max-[560px]:text-[9.6vw]">
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)' }}
                    >
                      {hoveredName}
                    </span>
                  </p>
                ) : (
                  <>
                    <p className="m-0 text-[50px] font-normal leading-[1.08] tracking-[-0.02em] text-zinc-100 max-[560px]:text-[9.6vw]">
                      Artificial Intelligence
                    </p>
                    <p className="m-0 text-[50px] font-normal leading-[1.08] tracking-[-0.02em] text-zinc-100 max-[560px]:text-[9.6vw]">
                      Real{" "}
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)' }}
                      >
                        Logistics
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full py-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-[2000px]:-mt-20">
        <div className="max-w-6xl mx-auto space-y-20 min-[2000px]:space-y-10">

          <div className="flex flex-wrap gap-3">
            {["POC Built ", "Agent Development"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-[18px] py-[9px] text-[13px] lg:text-[18px] font-medium shadow-[inset_0_1px_0_rgba(255,210,165,0.07),0_1px_2px_rgba(0,0,0,0.4)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-7 space-y-6">
              <p className="capitalize text-[32px] font-medium leading-[25px] text-start tracking-[-0.72px] mb-12" style={{ color: '#f7bfa0' }}>
                Proof of concept
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[115%] max-w-xl text-white/95">
                One problem. Two to four weeks. Working proof before you commit.
              </h2>
              <p className="text-sm sm:text-base lg:text-[18px] font-light leading-relaxed max-w-lg pt-2">
                We Identify One High-Impact Problem In Your Business, Build A Focused Proof-Of-Concept Around It, And Put It In Front Of You While It's Still Small Enough To Pivot. No Six-Month Implementations. No Bloated Budgets.
              </p>
              <div className="pt-4">
                <button className="btn">
                  Start A POC Conversation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 w-full">
              {workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/[0.05] space-y-2 group hover:border-white/10 transition-all duration-300"
                  style={{ background: "linear-gradient(45deg, rgba(200,147,114,0.2) 0%, rgba(6,6,8,1) 100%)" }}
                >
                  <h3 className="text-base lg:text-[22px] font-semibold tracking-wide text-[#FAD4BF] group-hover:text-[#1C68FA] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs lg:text-[16px] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 min-[2000px]:pt-4">
            {coreValues.map((card, idx) => (
              <div
                key={idx}
                className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative group p-0 flex flex-col justify-end transition-all duration-500 hover:scale-[1.01]"
              >
                <img src={card.img} alt="" />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute right-[-10%] top-[25%] w-[450px] h-[450px] bg-[#1C68FA]/30 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute left-[-5%] bottom-[20%] w-[500px] h-[500px] bg-[#F7CBB4]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-28">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <p className="capitalize text-[32px] font-medium leading-[25px] text-start tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
                  Our Partners
                </p>

                <h2 className="lg:text-[64px] sm:text-[46px] font-bold tracking-tight leading-[110%]">
                  Four Rounds. <span className="font-bold tracking-tight leading-[100%] text-[44px] sm:text-[60px] md:text-[64px] mb-12 text-center md:text-left">
                    <Typewriter words={['One Direction.']} speed={100} delay={2500} />
                  </span> Always Forward.
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-12 rounded-2xl border border-white/[0.05]  
                  min-h-[300px] flex flex-col justify-center items-center text-center"style={{ background: "linear-gradient(45deg, rgba(200,147,114,0.2) 0%, rgba(6,6,8,1) 100%)" }}>
                  <div className="text-5xl font-bold tracking-tight">
                    4 <span className="text-[#2C80FF]">+</span>
                  </div>
                  <p className="text-xs lg:text-[18px] font-light leading-snug">
                    Funding rounds secured between 2021-2024
                  </p>
                </div>

                <div className="p-12 rounded-2xl border border-white/[0.05] 
                  min-h-[300px] flex flex-col justify-center items-center text-center" style={{ background: "linear-gradient(45deg, rgba(200,147,114,0.2) 0%, rgba(6,6,8,1) 100%)" }}>
                  <div className="text-5xl font-bold tracking-tight">
                    <span className="text-[#2C80FF]">$</span>1B
                  </div>
                  <p className="text-xs lg:text-[18px] font-light leading-snug">
                    Raised to scale teams and build cutting edge models
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 text-sm sm:text-base lg:text-[18px] font-light leading-relaxed space-y-4 lg:pt-12">
              <p>
                Between 2021 and 2024, we secured four major funding rounds Series A through D raising nearly $1 billion. This support enabled us to scale our teams, expand globally, and continually develop cutting-edge models that power practical AI applications for the world's leading enterprises.
              </p>
              <p className="text-sm lg:text-[18px]">
                Every round was a vote of confidence not just in our technology but in the belief that AI built with intent and rigour is the only AI worth building.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <p className="capitalize text-[32px] font-medium leading-[25px] text-start tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
                  RESEARCH FOCUS
                </p>

                <h2 className="lg:text-[64px] sm:text-[46px] font-bold tracking-tight leading-[110%]">
                  Open science for  <span className="font-bold tracking-tight leading-[100%] text-[44px] sm:text-[60px] md:text-[64px] mb-12 text-center md:text-left">
                    <Typewriter words={['real problems.']} speed={100} delay={2500} />
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-12 rounded-2xl border border-white/[0.05]  
                  min-h-[300px] flex flex-col justify-center items-center text-center"style={{ background: "linear-gradient(45deg, rgba(200,147,114,0.2) 0%, rgba(6,6,8,1) 100%)" }}>
                  <div className="text-5xl font-bold tracking-tight">
                    4,500 <span className="text-[#2C80FF]">+</span>
                  </div>
                  <p className="text-xs lg:text-[18px] font-light leading-snug">
                    Community members in Tech Scape Labs
                  </p>
                </div>

                <div className="p-12 rounded-2xl border border-white/[0.05] 
                  min-h-[300px] flex flex-col justify-center items-center text-center" style={{ background: "linear-gradient(45deg, rgba(200,147,114,0.2) 0%, rgba(6,6,8,1) 100%)" }}>
                  <div className="text-5xl font-bold tracking-tight">100
                    <span className="text-[#2C80FF]">+</span>
                  </div>
                  <p className="text-xs lg:text-[18px] font-light leading-snug">
                    Research papers published since 2022
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 text-sm sm:text-base lg:text-[18px] font-light leading-relaxed space-y-4 lg:pt-12">
              <p>
                In 2022, we launched Tech Scape Labs — our open science initiative for solving complex machine learning problems. Today, it has grown to over 4,500 community members and has published more than 100 research papers.
                Our research isn't academic for the sake of it. Every paper, every experiment, every model we test feeds directly back into the agents we build and the businesses we serve.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute right-[-15%] top-[-10%] w-[500px] h-[500px] bg-[#1C68FA]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12">

          <div className="space-y-6">
            <h2 className="font-bold tracking-tight leading-[100%] text-[44px] sm:text-[60px] md:text-[80px] mb-12 text-center md:text-left">
              <Typewriter words={['Research ']} speed={100} delay={2500} />
            </h2>

            <div className="flex flex-wrap gap-3 items-center pt-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-10 py-4 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${activeFilter === tab
                    ? 'bg-[#120b08]/90 border-white/20 text-white shadow-lg text-[16px]'
                    : 'bg-[#120b08]/90 border-white/[0.04] text-white hover:text-white/80 hover:border-white/10 text-[16px]'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.05] p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:scale-[1.01] min-h-[340px] relative group"
                style={{ background: "linear-gradient(45deg, rgba(200,147,114,0.2) 0%, rgba(6,6,8,1) 100%)" }}
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-center text-[11px] font-mono tracking-wider">
                    <span className={`px-2.5 py-0.5 rounded-md border text-[14px] font-medium tracking-normal ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <span className="text-[14px]">{card.date}</span>
                  </div>

                  <div className="space-y-3">
                    <h2 className=" font-bold tracking-tight leading-[120%] text-[44px] sm:text-[24px] md:text-[28px] mb-12 text-center md:text-left bg-clip-text text-transparent"
                      style={{ backgroundImage: 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)' }}>
                      {card.title}
                    </h2>
                    <p className="text-white/90 text-xs sm:text-[16px] font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-white flex justify-between items-center mt-6">
                  <span className="text-[14px] font-mono tracking-wide">
                    {card.category}
                  </span>

                  <div className="text-white group-hover:text-white/80 transition-colors duration-300">
                    <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="get-started" className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div
            className={`w-full border border-black/5  transition-all duration-1000 delay-300`}
            style={{
              backgroundColor: '#050505',
              backgroundImage: "url('/bg2.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="w-full bg-transparent text-center py-16 md:py-24 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-6xl lg:text-[70px] font-bold tracking-tight leading-[1.15] max-w-5xl mx-auto mb-10">
                "Intelligence scales when it's built with intent."
              </h2>
              <p className="mb-10 text-base md:text-[32px] leading-relaxed">
                India's growth story needs AI that actually works
              </p>

              <button type="button" className="btn">
                Request A Demo
              </button>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </>
  );
}