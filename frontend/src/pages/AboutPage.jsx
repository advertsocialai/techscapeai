import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Typewriter from '../components/Typewriter'
import GetStarted from '../components/GetStarted'
import partnerNxtwave from '../assets/nxtwave.svg'
import partnerAsg from '../assets/asg.svg'
import mmw from '../assets/mmw.svg'
import goga from '../assets/goga.svg'
import abs from '../assets/abs.svg'
import bidqon_logo from '../assets/bidqon_logo.svg'
import SEO from '../components/SEO'

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
    // { key: 'asg-2', src: goga, alt: 'American Software Group', w: 220, h: 54 },
    { key: 'asg-3', src: abs, alt: 'American Software Group', w: 230, h: 54 },
    // { key: 'asg-4', src: bidqon_logo, alt: 'American Software Group', w: 230, h: 54 },
  ]
  const PARTNER_MARQUEE = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

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

  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const blogs = [
    {
      id: 1,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "Morning Signal™ — Why Reactive Content Wins - Marketing",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "Anthropic CPN — What It Means to Be a Certified Partner - Company",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "How We Built a WhatsApp Travel Agent in 3 Weeks - Case Study. ",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "Why Indian Logistics Needs AI Agents in 2026 - Logistics",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      author: "TechScape AI Team",
      date: "May 14, 2026",
      title: "The Kloron Engine — AI Categorisation for Finance - Product ",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    },
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  return (
    <>
      <SEO
        title="About Us — TechScape AI"
        description="Learn about TechScape AI — our mission, team, and vision to make AI work for people across India, USA, and Canada."
        canonical="/about"
      />

      <section
        ref={heroRef}
        className={`relative py-20 lg:py-28 overflow-hidden transition-all duration-700 ${heroSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >

        <div className="absolute top-0 left-0 -translate-x-1/2 w-[800px] h-[400px] bg-[#FAD4BF]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-60 right-0 w-[400px] h-[300px] bg-[#3579CE]/55 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative wrap flex flex-col items-center text-center">

          <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] font-bold tracking-tight max-w-3xl leading-tight">
            Your Next Breakthrough, <br />
            <Typewriter words={['Powered By AI']} speed={100} delay={2500} />
          </h2>

          <p className="text-[16px] md:text-[20px] max-w-3xl mt-6 leading-relaxed font-light tracking-wide">
            We are Tech Scape AI — an AI services and agents company built in India, operating globally.
            We help businesses in Travel, Logistics, Finance, and Recruitment automate their most
            complex workflows using AI.
          </p>

          <div className="flex flex-row items-center justify-center gap-8 mt-8">
            <Link to="/contact" className="btn capitalize">
              Explore Our Services
            </Link>

            <a
              href="/contact"
              className="text-[16px]  text-white underline underline-offset-4 hover:text-white transition-colors duration-200"
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

      <section id="partners" className="relative  py-1 lg:py-20">
        <div className="wrap" ref={partnersRef}>
          <div className={`flex flex-col items-center gap-[44px] transition-all duration-700 ${partnersSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[26px] lg:text-[36px] font-medium capitalize tracking-[-0.72px] mb-3" style={{ color: '#F5A086' }}>
              Our Partners
            </p>


            <div className="relative overflow-hidden w-full">
              <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }} />
              <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #000 0%, transparent 100%)' }} />

              <div className="flex items-center gap-[48px] sm:gap-[72px] lg:gap-[120px] marquee-track" style={{ width: 'max-content' }}>
                {PARTNER_MARQUEE.map(({ key, src, alt, w, h }, i) => (
                  <div key={`${key}-${i}`} className="flex items-center justify-center shrink-0 min-h-[36px] lg:min-h-[56px]">
                    <img
                      src={src}
                      alt={alt}
                      width={w}
                      height={h}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 w-[calc(var(--logo-w)*0.6)] h-[calc(var(--logo-h)*0.6)] sm:w-[calc(var(--logo-w)*0.8)] sm:h-[calc(var(--logo-h)*0.8)] lg:w-[var(--logo-w)] lg:h-[var(--logo-h)]"
                      style={{ '--logo-w': `${w}px`, '--logo-h': `${h}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="inline-flex items-center justify-center rounded-full max-w-[600px]"
              style={{
                width: '900px',
                maxWidth: '100%',
                minHeight: '73px',
                padding: '24px',
                background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
              }}
            >
              <p className="lg:text-[24px] text-[16px]  font-medium text-[#e5e7eb] leading-[25px] tracking-[-0.48px] text-center">
                This is not the future. This is happening now and Tech Scape AI is leading it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={researchRef}
        className={`py-20 lg:py-28 transition-all duration-700 w-full ${researchSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >

        <div className="wrap">

          <div className="mb-16 flex flex-col gap-2">
            <p className="text-[26px] lg:text-[36px] text-center font-medium capitalize tracking-[-0.72px] mb-3" style={{ color: '#F5A086' }}>
              Our Research
            </p>

            <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] font-bold tracking-tight mt-1 text-left">
              We Don't Just{" "}
              <Typewriter words={['Deploy AI', 'Study It']} speed={100} delay={2500} />
            </h2>

          </div>

          <div className="w-full flex flex-col gap-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchCards.map((card, index) => (
                <div
                  key={index}
                  className="card flex flex-col md:flex-row items-center justify-between gap-4 min-h-[280px] group transition-all duration-300"
                >
                  <div className="w-full md:w-[45%] h-full flex items-center justify-center overflow-hidden rounded-lg order-1 md:order-2">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full w-full md:max-w-[60%] flex-1 order-2 md:order-1" style={{ gap: '8px' }}>
                    <h3 className="text-[24px] font-semibold leading-snug tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed font-light mt-auto">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-center mt-2">
              <div
                className="card w-full md:max-w-[85%] flex flex-col md:flex-row items-center justify-between gap-6 min-h-[280px] group transition-all duration-300"
              >
                <div className="w-full md:w-[40%] md:max-w-[240px] h-full flex items-center justify-center overflow-hidden rounded-xl order-1 md:order-2">
                  <img
                    src={bottomCard.image}
                    alt={bottomCard.title}
                    className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                <div className="flex flex-col justify-between h-full w-full md:max-w-[55%] flex-1 order-2 md:order-1" style={{ gap: '8px' }}>
                  <h3 className="text-[24px] font-semibold leading-snug tracking-wide">
                    {bottomCard.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed font-light mt-auto">
                    {bottomCard.description}
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 w-full flex justify-center px-4">
            <button
              type="button"
              className="btn btn-lg tracking-wide 
    w-full sm:w-auto 
    text-sm sm:text-base md:text-lg 
    px-4 sm:px-6 md:px-8 
    py-3 sm:py-4 
    text-center whitespace-normal break-words"
            >
              <span className="hidden sm:inline">
                Collaborate With Us On Research -
              </span>{" "}
              info@techscapeai.in
            </button>
          </div>
        </div>

      </section>

      <section className="relative overflow-hidden py-2 lg:py-28">
        <div className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/75 via-blue-500/35 to-transparent rounded-full blur-[140px] pointer-events-none transform -translate-y-1/2" />
        <div className="wrap w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-12 pt-4">
            <h2 className="text-[36px] md:text-[46px] lg:text-[62px] font-bold tracking-tight text-slate-300 leading-tight uppercase">
              A Letter From Our <br />
              <span className="text-slate-300 block mt-1">FOUNDERS</span>
            </h2>
          </div>

          <div className="lg:col-span-12 relative min-h-auto lg:min-h-[700px] w-full md:mt-12 lg:mt-0 flex items-center justify-center px-4 sm:px-6">

            <div className="relative w-full max-w-[400px] lg:max-w-none lg:w-[830px] h-auto lg:h-[540px] flex flex-col lg:block gap-6 py-8 lg:py-0">

              <div
                className={`relative lg:absolute lg:left-[-160px] lg:top-[70px] z-30 w-full lg:w-[400px] h-auto lg:h-[400px] rounded-2xl border border-white/[0.06] bg-[#0f1930]/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out
      flex flex-col items-center justify-center text-center min-h-[250px] lg:min-h-0
      ${visibleCards.includes(0) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              >
                <p className="text-[18px] lg:text-[20px] font-light leading-relaxed mb-4 max-w-[320px]">
                  {cardsData[0].text}
                </p>
                <p className="text-[18px] lg:text-[20px] font-light leading-relaxed max-w-[320px]">
                  {cardsData[0].extra}
                </p>
              </div>

              <div
                className={`relative lg:absolute lg:left-[215px] lg:top-[0px] z-20 w-full lg:w-[400px] h-auto lg:h-[540px] rounded-2xl border border-white/[0.08] bg-[#0f1930]/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out
      flex flex-col items-center justify-center text-center min-h-[300px] lg:min-h-0
      ${visibleCards.includes(1) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              >
                <p className="text-[18px] lg:text-[20px] font-light leading-relaxed mb-4 max-w-[320px]">
                  {cardsData[1].text}
                </p>
                <p className="text-[18px] lg:text-[20px] font-light leading-relaxed max-w-[320px]">
                  {cardsData[1].extra}
                </p>
              </div>

              <div
                className={`relative lg:absolute lg:left-[590px] lg:top-[-140px] z-30 w-full lg:w-[400px] h-auto lg:h-[400px] rounded-2xl border border-white/[0.12] bg-[#0f1930]/95 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out
      flex flex-col items-center justify-center text-center min-h-[250px] lg:min-h-0
      ${visibleCards.includes(2) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              >
                <p className="text-[18px] lg:text-[20px] font-light leading-relaxed mb-4 max-w-[320px]">
                  {cardsData[2].text}
                </p>
                <p className="text-[18px] lg:text-[20px] font-light leading-relaxed max-w-[320px]">
                  {cardsData[2].extra}
                </p>
              </div>

              <div className="relative lg:absolute lg:right-[-100px] lg:-bottom-16 text-center lg:text-right mt-6 lg:mt-0 w-full lg:w-auto">
                <p className="text-[16px] lg:text-[18px] font-light tracking-wide">
                  - Rakesh · Gowtham · Rahul
                </p>
                <p className="text-[14px] lg:text-[16px] font-light mt-1">
                  Founding Partners, Tech Scape AI.
                </p>
              </div>

            </div>

          </div>
        </div>

        <div className="wrap w-full relative z-10 mt-16 lg:mt-0 2xl:mt-0">
          <p className="text-[20px] md:text-lg lg:text-[24px] font-light tracking-wide">
            The FUTURE we are building is one where your AI is so capable that your CUSTOMERS genuinely...
          </p>
        </div>

      </section>

      <section
        ref={careersRef}
        className={`relative py-20 lg:py-28 overflow-hidden transition-all duration-700 ${careersSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="relative wrap">

          <p className="capitalize text-[26px] lg:text-[36px]  font-medium leading-[25px] text-center tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
            Careers
          </p>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end mt-4">
            <h2 className="text-[36px]  md:text-[46px] lg:text-[62px] font-bold tracking-tight leading-[1.05]">
              Build <Typewriter words={['What Hasn’t']} speed={100} delay={2500} /><br />
              <span className='text-[36px]  md:text-[46px] lg:text-[62px]'>Been Built</span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            <h2></h2>

            <p className="text-[14px] md:text-[15px] leading-relaxed font-light max-w-md lg:justify-self-end self-end border border-white/20 backdrop-blur-md  rounded-full p-5 px-12"
              style={{
                background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
              }}>

              We&apos;re a small team doing big things. If you want to work at the edge of AI agents, digital marketing, and global product building, this is where you belong.

            </p>

          </div>

          <div className="relative w-full overflow-hidden mt-12 lg:mt-16 aspect-[16/9] md:aspect-[16/7] ">
            <div
              aria-hidden="true"
              className="absolute inset-0"

            />
            <img
              src="/about8.svg"
              alt="Join the Tech Scape AI team"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="relative w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-10 lg:mt-12">
            <Link to="/contact" className="btn capitalize whitespace-nowrap">
              Join Our Team
            </Link>

            <Link
              to="/contact"
              aria-label="Explore open roles"
              className="w-18 h-12 flex items-center justify-center rounded-[8px] border border-white/15 text-white hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-200"
              style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
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
        className="relative py-20 lg:py-28 overflow-hidden select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-1/2 -left-[15%] w-[550px] h-[300px] bg-gradient-to-tr from-blue-600/90 via-blue-600/90 to-transparent rounded-full blur-[110px] pointer-events-none transform -translate-y-1/2" />

        <div className="wrap relative z-10">

          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-3xl md:text-[42px] font-medium tracking-tight text-[#F7BFA0]">
              The Latest News
            </h2>
            <a
              href="/blog"
              className="text-xs md:text-[18px] text-white hover:text-white underline underline-offset-4 tracking-wide transition-colors duration-200"
            >
              See more on the blog
            </a>
          </div>

          <div className="relative group">

            <button
              onClick={() => handleScroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-2/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95
              ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
              aria-label="Scroll Left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={() => handleScroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-2/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95
              ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
              aria-label="Scroll Right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-10 overflow-x-auto overflow-y-hidden scrollbar-none snap-x snap-mandatory pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="w-[345px] min-h-[380px] shrink-0 bg-[#01121F] border border-white text-slate-900 rounded-[28px] p-6 flex flex-col justify-between snap-start shadow-xl transform transition-transform duration-300 hover:scale-[1.01]"
                >
                  <div>
                    <div className="flex items-center justify-between text-[14px] font-medium tracking-tight">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-[16px] font-semibold text-[#F7C8B4] mt-3 mb-1 tracking-tight leading-snug min-h-[40px] line-clamp-2">
                      {blog.title}
                    </h3>

                    <div className="text-right">
                      <span className="text-[16px] font-bold text-white underline underline-offset-2 cursor-pointer hover:text-black">
                        Read More
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 w-full h-[180px] rounded-[20px] overflow-hidden bg-slate-500/30">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover  transition-transform duration-500 hover:scale-105"
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

          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >

            <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.2] mb-8"
              style={{
                background: 'linear-gradient(to right, rgba(255,122,0,0.1), rgba(27,43,74,0.1))',
              }}>
              <span className="text-[#F7BFA0] uppercase lg:tracking-[0.22em] text-[22px] lg:text-[32px] font-semibold">
                Get Started
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[24px] font-medium text-[#FDFDFD] mb-6 tracking-tight">
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
                <GetStarted />
              </div>

              <div className="lg:pl-6 text-left lg:pt-2">
                <h3 className="text-[33px] md:text-[36px] font-semibold mb-6 leading-tight tracking-tight">
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

              <Link to="/contact" className="btn capitalize">
                Request A Demo
              </Link>

            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

    </>
  );
}