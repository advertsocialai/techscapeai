import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Typewriter from '../components/Typewriter'
import GetStarted from '../components/GetStarted'

// Section logos (Partners marquee)
import partnerNxtwave from '../assets/nxtwave.svg'
import partnerAsg from '../assets/asg.svg'
import mmw from '../assets/mmw.svg'
import goga from '../assets/goga.svg'
import abs from '../assets/abs.svg'
import bidqon_logo from '../assets/bidqon_logo.svg'
import teamCharacter from '../assets/team-character.svg'

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

export default function BreakthroughSection() {
  // Independent scroll-reveal per section (mirrors HomePage pattern)
  const { ref: heroRef, isVisible: heroSeen } = useScrollAnimation()
  const { ref: partnersRef, isVisible: partnersSeen } = useScrollAnimation()
  const { ref: researchRef, isVisible: researchSeen } = useScrollAnimation()
  const { ref: careersRef, isVisible: careersSeen } = useScrollAnimation()

  const researchCards = [
    {
      title: "Travel Workflow Automation Models",
      description: "AI Agents That Handle FAQs, Ticket Routing, And First-Level Customer Interactions 24/7, Without A Team.",
      image: "/about3.svg"
    },
    {
      title: "Morning Signal™ Content Intelligence Methodology",
      description: "AI Agents That Handle FAQs, Ticket Routing, And First-Level Customer Interactions 24/7, Without A Team.",
      image: "/about4.svg"
    },
    {
      title: "Recruitment Screening Accuracy Benchmarks",
      description: "AI Agents That Handle FAQs, Ticket Routing, And First-Level Customer Interactions 24/7, Without A Team.",
      image: "/about5.svg"
    },
    {
      title: "Logistics Exception Handling Agents",
      description: "AI Agents That Handle FAQs, Ticket Routing, And First-Level Customer Interactions 24/7, Without A Team.",
      image: "/about6.svg"
    }
  ];

  const bottomCard = {
    title: "Finance Transaction Categorisation (Kloron Engine)",
    description: "AI Agents That Handle FAQs, Ticket Routing, And First-Level Customer Interactions 24/7, Without A Team.",
    image: "/about7.svg"
  };

  const PARTNER_LOGOS = [
    { key: 'nxt-1', src: partnerNxtwave, alt: 'NXT Wave', w: 234, h: 44 },
    { key: 'asg-1', src: partnerAsg, alt: 'American Software Group', w: 103, h: 54 },
    { key: 'nxt-2', src: mmw, alt: 'NXT Wave', w: 234, h: 44 },
    { key: 'asg-2', src: goga, alt: 'American Software Group', w: 220, h: 54 },
    { key: 'asg-3', src: abs, alt: 'American Software Group', w: 230, h: 54 },
    { key: 'asg-4', src: bidqon_logo, alt: 'American Software Group', w: 230, h: 54 },
  ]
  const PARTNER_MARQUEE = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  // Founders letter — staggered card reveal
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleCards((prev) => [...prev, 0]), 200),
      setTimeout(() => setVisibleCards((prev) => [...prev, 1]), 600),
      setTimeout(() => setVisibleCards((prev) => [...prev, 2]), 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const cardsData = [
    {
      text: "What excites us isn't the technology. It's the moment a travel company stops losing leads at 11pm. The moment a finance team closes month-end in 2 days instead of 2 weeks.",
      extra: "That's what we're building toward. One workflow at a time."
    },
    {
      text: "We're three founders across India, Canada, and the United States.",
      extra: "We've built across time zones, shipped across industries, and learned what it takes to deploy AI that works in the real world not just in a demo."
    },
    {
      text: "When we started Tech Scape AI, we weren't trying to build another IT company.",
      extra: "We wanted to do it differently AI that removes the work your team hates, not the people doing it."
    }
  ];

  // Latest news carousel
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Hardcoded mock data closely matching your reference text and layouts
  const blogs = [
    {
      id: 1,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "Why Indian Logistics needs AI Agents in 2026 - Logistics",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "The Kora Engine — AI Categorisation for Finance - Product",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "Gati, Vaak, Mukti — The Three Layers of AI Agents - Navratna Tunnels",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "Building Scale: Deploying Robust AI Workflows Securely",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360; // Card width + gap size
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  return (
    <>
      <section
        ref={heroRef}
        className={`relative text-white py-20 px-6 sm:px-10 lg:px-[90px] overflow-hidden transition-all duration-700 ${heroSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >

        <div className="absolute top-0 left-0 -translate-x-1/2 w-[800px] h-[400px] bg-[#FAD4BF]/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-purple-900/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1240px] mx-auto flex flex-col items-center text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
            Your Next Breakthrough, <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)' }}>
              <Typewriter words={['Powered By AI']} speed={100} delay={2500} />
            </span>
          </h2>

          <p className="text-[13px] md:text-[14px]  text-white max-w-2xl mt-6 leading-relaxed font-light tracking-wide">
            We are Tech Scape AI — an AI services and agents company built in India, operating globally. <br className="hidden sm:inline" />
            We help businesses in Travel, Logistics, Finance, and Recruitment automate their most <br className="hidden sm:inline" />
            complex workflows using AI.
          </p>

          <div className="flex flex-row items-center justify-center gap-8 mt-8">
            <button className="px-6 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-opacity duration-200 text-white"
              style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}>
              Explore Our Services
            </button>

            <a
              href="#contact"
              className="text-[14px] font-medium text-white/90 underline underline-offset-4 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-16">

            <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden ">
              <img
                src="/about1.svg"
                alt="AI Flow Analytics Mesh"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden ">
              <img
                src="/about2.svg"
                alt="AI Workflow Cubes Engine"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

          </div>

        </div>
      </section>


      <section id="partners" className="relative bg-black py-16 lg:py-20">
        <div className="wrap" ref={partnersRef}>
          <div className={`flex flex-col items-center gap-[44px] transition-all duration-700 ${partnersSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="capitalize text-[32px] font-medium leading-[25px] text-center tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
              Our Partners
            </p>

            {/* Logo marquee */}
            <div className="relative overflow-hidden w-full">
              <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }} />
              <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #000 0%, transparent 100%)' }} />

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


      <section
        ref={researchRef}
        className={`text-white py-24 px-6 sm:px-10 lg:px-[90px] min-h-screen flex flex-col transition-all duration-700 ${researchSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >

        <div className="mb-16 flex flex-col gap-2">

          {/* Center only this */}
          <p className="capitalize text-[32px] font-medium leading-[25px] text-center tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
              Our Research
            </p>

          {/* Left aligned */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-1 text-left">
            We Don't Just{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)",
              }}
            >
              <Typewriter words={['Deploy AI','Study It']} speed={100} delay={2500} />
            </span>
          </h2>

        </div>

        <div className="w-full max-w-[1200px] flex flex-col gap-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCards.map((card, index) => (
              <div
                key={index}
                className="card flex items-center justify-between gap-4 min-h-[280px] group transition-all duration-300"
              >
                <div className="flex flex-col justify-between h-full max-w-[60%] flex-1" style={{ gap: '8px' }}>
                  <h3 className="text-[24px] font-semibold leading-snug tracking-wide text-white">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-white leading-relaxed font-light mt-auto">
                    {card.description}
                  </p>
                </div>

                <div className="w-[45%] h-full flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-2">
            <div
              className="card w-full md:max-w-[85%] flex items-center justify-between gap-6 min-h-[280px] group transition-all duration-300"
            >
              <div className="flex flex-col justify-between h-full max-w-[55%] flex-1" style={{ gap: '8px' }}>
                <h3 className="text-[24px] font-semibold leading-snug tracking-wide text-white">
                  {bottomCard.title}
                </h3>
                <p className="text-[14px] text-white leading-relaxed font-light mt-auto">
                  {bottomCard.description}
                </p>
              </div>

              <div className="w-[40%] max-w-[240px] h-full flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={bottomCard.image}
                  alt={bottomCard.title}
                  className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 w-full flex justify-center">
          <button
            type="button"
            style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
            className="shadow-none border-0 outline-none px-6 py-3 rounded-lg text-[16px] font-medium tracking-wide text-white hover:opacity-95 transition-opacity duration-200"
          >
            Collaborate With Us On Research - hi@techscapeai.in
          </button>
        </div>

      </section>

      <section className="relative min-h-[90vh] text-white overflow-hidden py-24 flex flex-col justify-between">

        {/* Premium Ambient Background Elipse Glow (Right Side) */}
        <div className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/15 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none transform -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Dynamic Heading */}
          <div className="lg:col-span-12 pt-4">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-300 leading-tight uppercase">
              A Letter From Our <br />
              <span className="text-white block mt-1">FOUNDERS</span>
            </h2>
          </div>

          <div className="lg:col-span-12 relative min-h-[700px] w-full md:mt-12 lg:mt-0 flex items-center justify-center">

            {/* Cards Wrapper (Maintains relative placement anchors relative to the center) */}
            <div className="relative w-[830px] h-[540px]">

              {/* Card 1 (Bottom-Left Layer) */}
              <div
                className={`absolute left-[-160px] top-[70px] z-30 w-[400px] h-[400px] rounded-2xl border border-white/[0.06] bg-[#070c18]/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out
      flex flex-col items-center justify-center text-center
      ${visibleCards.includes(0) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              >
                <p className="text-[20px] text-white font-light leading-relaxed mb-4 max-w-[320px]">
                  {cardsData[0].text}
                </p>
                <p className="text-[20px] text-white font-light leading-relaxed max-w-[320px]">
                  {cardsData[0].extra}
                </p>
              </div>

              {/* Card 2 (Middle Layer) */}
              <div
                className={`absolute left-[215px] top-[0px] z-20 w-[400px] h-[540px] rounded-2xl border border-white/[0.08] bg-[#0b1324]/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out
      flex flex-col items-center justify-center text-center
      ${visibleCards.includes(1) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              >
                <p className="text-[20px] text-white font-light leading-relaxed mb-4 max-w-[320px]">
                  {cardsData[1].text}
                </p>
                <p className="text-[20px] text-white font-light leading-relaxed max-w-[320px]">
                  {cardsData[1].extra}
                </p>
              </div>

              {/* Card 3 (Top-Right Layer) */}
              <div
                className={`absolute left-[590px] top-[-140px] z-30 w-[400px] h-[400px] rounded-2xl border border-white/[0.12] bg-[#0f1930]/95 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out
      flex flex-col items-center justify-center text-center
      ${visibleCards.includes(2) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              >
                <p className="text-[20px] text-white font-light leading-relaxed mb-4 max-w-[320px]">
                  {cardsData[2].text}
                </p>
                <p className="text-[20px] text-white font-light leading-relaxed max-w-[320px]">
                  {cardsData[2].extra}
                </p>
              </div>

              {/* Signatures / Attribution */}
              <div className="absolute right-0 -bottom-16 text-right">
                <p className="text-[18px] text-white font-light tracking-wide">
                  - Rakesh · Gowtham · Rahul
                </p>
                <p className="text-[16px] text-white font-light mt-1">
                  Founding Partners, Tech Scape AI.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Text Subheading */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 mt-16 lg:mt-0">
          <p className="text-[27px] md:text-lg lg:text-[24px] text-white font-light tracking-wide">
            The FUTURE we are building is one where your AI is so capable that your CUSTOMERS genuinely...
          </p>
        </div>

      </section>


      <section
        ref={careersRef}
        className={`relative text-white py-20 lg:py-28 px-6 sm:px-10 lg:px-[90px] overflow-hidden transition-all duration-700 ${careersSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="relative max-w-[1200px] mx-auto">

          {/* Eyebrow */}
          <p className="capitalize text-[32px] font-medium leading-[25px] text-center tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
              Careers
            </p>

          {/* Heading row: title (left) + pitch (right) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.05]">
              Build <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)",
                }}
              >
                <Typewriter words={['What Hasn’t']} speed={100} delay={2500} />
              </span><br />
              <span className='text-[27px]'>Been Built</span>
            </h2>

            <p className="text-[14px] md:text-[15px] text-white leading-relaxed font-light max-w-md lg:justify-self-end">
              We&apos;re looking for builders, not employees. If you want to do the best work of your
              career alongside people who care about craft, ownership, and shipping AI that
              actually works — this is where you belong.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative w-full overflow-hidden mt-12 lg:mt-16 aspect-[16/9] md:aspect-[16/7] ">
            {/* Styled fallback (corridor-of-light look) */}
            <div
              aria-hidden="true"
              className="absolute inset-0"

            />
            <img
              src="/about8.svg"
              alt="Join the Tech Scape AI team"
              className="relative w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-4 mt-10 lg:mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 h-[48px] text-[14px] font-medium text-white rounded-lg capitalize whitespace-nowrap"
              style={{
                backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',

              }}
            >
              Join Our Team
            </Link>

            <Link
              to="/contact"
              aria-label="Explore open roles"
              className="w-18 h-12 flex items-center justify-center rounded-[8px] border border-white/15 text-white hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-200"
              style={{
                backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)',

              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      <section
        className="relative min-h-[75vh] text-white py-20 overflow-hidden select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left-Side Ambient Ellipse Glow (Matches the reference image blend) */}
        <div className="absolute top-1/2 -left-[15%] w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/50 via-indigo-600/5 to-transparent rounded-full blur-[110px] pointer-events-none transform -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header Section */}
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-3xl md:text-[42px] font-medium tracking-tight text-[#F7BFA0]">
              The Latest News
            </h2>
            <a
              href="#blog"
              className="text-xs md:text-sm text-slate-400 hover:text-white underline underline-offset-4 tracking-wide transition-colors duration-200"
            >
              See more on the blog
            </a>
          </div>

          {/* Carousel Window */}
          <div className="relative group">

            {/* Left Arrow Button */}
            <button
              onClick={() => handleScroll('left')}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95
              ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
              aria-label="Scroll Left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => handleScroll('right')}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95
              ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
              aria-label="Scroll Right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Draggable/Scrollable Cards Grid Wrapper */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-none snap-x snap-mandatory pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="w-[335px] min-h-[380px] shrink-0 bg-[#D9D9D9] text-slate-900 rounded-[28px] p-6 flex flex-col justify-between snap-start shadow-xl transform transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* Card Top Meta Row */}
                  <div>
                    <div className="flex items-center justify-between text-[14px] font-medium text-slate-600 tracking-tight">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>

                    {/* Card Title Layer */}
                    <h3 className="text-[16px] font-semibold text-[#2C80FF] mt-3 mb-1 tracking-tight leading-snug min-h-[40px] line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Read More link */}
                    <div className="text-right">
                      <span className="text-[16px] font-bold text-slate-800 underline underline-offset-2 cursor-pointer hover:text-black">
                        Read More
                      </span>
                    </div>
                  </div>

                  {/* Card Inner Gray Core Container Box (Matches exactly) */}
                  <div className="mt-4 w-full h-[180px] rounded-[20px] overflow-hidden bg-slate-500/30">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover filter grayscale opacity-90 contrast-125 mix-blend-multiply transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section id="get-started" className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

          {/* --- Header Section --- */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* Premium Capsule Badge (Matches image layout perfectly) */}
            <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.06] bg-[#120b08]/60 shadow-[inset_0_1px_12px_rgba(245,160,134,0.06)] mb-8 backdrop-blur-sm">
              <span className="text-[#F7BFA0] uppercase tracking-[0.22em] text-[22px] font-semibold">
                Get Started
              </span>
            </div>

            {/* Bold Section Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[24px] font-medium text-[#FDFDFD] mb-6 tracking-tight">
              Let's Build Something Together
            </h2>

            {/* Balanced Low-Opacity Description Subtext */}
            <p className="text-white max-w-2xl mx-auto text-[13px] md:text-[16px]  leading-relaxed font-light tracking-wide px-4">
              Whether You're A Business Looking To Automate, <br /> A Student Ready To Upskill, Or A Partner Exploring Collaboration <br className="hidden md:inline" />
              The First Conversation Is Always Free. Tell Us What You Need And We'll Tell You Exactly How We Can Help.
            </p>
          </div>

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
            {/* FIXED: Removed -mt-92 from the grid class list below */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 p-8 md:p-16 lg:p-20 items-start z-20">
              {/* Left: Glassmorphic Contact Form */}
              <div>
                <GetStarted />
              </div>

              {/* Right: Booking Info Section */}
              <div className="lg:pl-6 text-left lg:pt-2">
                <h3 className="text-[33px] md:text-[36px] font-semibold text-white mb-6 leading-tight tracking-tight">
                  Book a Free Consultation Directly
                </h3>
                <p className="text-white mb-10 text-base md:text-lg leading-relaxed max-w-md">
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

              {/* Premium Bold Image-Matched Heading */}
              <h2 className="text-3xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-10">
                Ready To put AI to work ?
              </h2>
              <p className="text-white mb-10 text-base md:text-lg leading-relaxed">

                Your first discovery call is free. Let's find the workflow we can solve together
              </p>

              {/* Dynamic Request A Demo Gradient Button (Matches image_430f2d.png) */}
              <button
                type="button"
                className="px-8 py-3 rounded-xl font-medium text-xs md:text-sm text-white shadow-lg transition-all duration-300 hover:opacity-90 active:scale-[0.98] tracking-wide backdrop-blur-sm border border-white/10"
                style={{ background: 'linear-gradient(90deg, #3D75F3 0%, #7E85D4 55%, #E39994 100%)' }}
              >
                Request A Demo
              </button>

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