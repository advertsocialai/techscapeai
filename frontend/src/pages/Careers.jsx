import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Typewriter from '../components/Typewriter';
import GetStarted from '../components/GetStarted';
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SEO from '../components/SEO';
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

const financialImg = '/car2.svg';
const health = '/car3.svg';
const Time = '/car4.svg';
const Growth = '/car5.svg';
const Culture = '/car6.svg';
const valleyImage = '/car7.svg';
const hyderabadImg = '/car10.svg';
const st = '/car8.svg';
const how = '/car12.svg';

// ─── Data defined outside components ─────────────────────────────────────────

const steps = [
  {
    title: "Step 1 - Application Review",
    desc: "Send Your resume to hr@techscapeai.in with a one-paragraph note on what you've built or done that you're most proud of. We read every application personally. No automated filters."
  },
  {
    title: "Step 2 - Intro Call (30 mins)",
    desc: "A casual conversation over Google Meet with one of our founders or leads. We want to understand how you think, what you've worked on, and what draws you to this work. You'll have time to ask us anything too — this is a two-way conversation."
  },
  {
    title: "Step 3 - Skill Round (60 mins)",
    desc: "For technical roles: a live working session. We'll give you a real problem (not a Leetcode puzzle) and work through it together. You can look things up — we care about how you think, not what you've memorised. For non-technical roles: a short assignment relevant to the role. Nothing that takes more than 2 hours. We respect your time."
  }
];

// ─── Accordion Item ───────────────────────────────────────────────────────────
const AccordionItemContent = ({ title, points, imgSrc, logoSrc, isOpen, onToggle }) => {
  return (
    <div className="relative py-4 transition-colors duration-300">
      <div
        className="flex justify-between items-center cursor-pointer py-4 group select-none gap-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4 min-w-0">
          <div
            className={`w-11 h-11 md:w-12 md:h-12 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 ${isOpen ? 'border-[#1C68FA]/60' : 'border-white/10'
              }`}
          >
            <img
              src={logoSrc || imgSrc}
              alt={`${title} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-white/90 group-hover:text-white transition-colors truncate">
            {title}
          </h2>
        </div>

        <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 cursor-pointer group-hover:bg-[#1C68FA] group-hover:border-[#1C68FA] transition-all duration-300">
          <svg
            className={`w-4 h-4 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2 pb-6">
              <ul className="space-y-4 pr-2">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70 text-base md:text-[18px] font-light tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1C68FA] to-[#F7CBB4] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0e] shadow-2xl relative">
                <img src={imgSrc} alt={title} className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* gradient bottom border */}
      <div
        className="absolute bottom-0 left-0 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, #1C68FA 0%, #af90af 60%, #F7CBB4 100%)',
          opacity: isOpen ? 1 : 0.45,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
};


const CareerPage = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  const [openBenefit, setOpenBenefit] = useState(0)
  const styles = {
    section: {
      backgroundColor: '#000', display: 'flex',
      alignItems: 'center', padding: '5%', color: 'white',
      position: 'relative', overflow: 'hidden'
    },
    leftGlow: {
      position: 'absolute', width: '300px', height: '258px', top: '80px', left: '-150px',
      background: 'linear-gradient(135deg, #FAD4BF 0%, #efc297 70%)',
      borderRadius: '50%', filter: 'blur(120px)', opacity: 0.6, zIndex: 0, pointerEvents: 'none'
    },
    leftGlows: {
      position: 'absolute', width: '300px', height: '258px', top: '2400px', left: '-150px',
      background: 'linear-gradient(135deg, #FAD4BF 0%, #efc297 70%)',
      borderRadius: '50%', filter: 'blur(120px)', opacity: 0.6, zIndex: 0, pointerEvents: 'none'
    },
    rightGlow: {
      position: 'absolute', width: '286px', height: '380px', top: '450px', right: '-50px',
      background: '#3579CE', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.6,
      zIndex: 0, pointerEvents: 'none'
    },
    container: {
      maxWidth: '1200px', margin: '0 auto', display: 'flex',
      alignItems: 'center', gap: '60px', width: '100%', flexWrap: 'wrap',
      zIndex: 1, position: 'relative'
    },
    left: { flex: '1', minWidth: '320px' },
    right: { flex: '1', minWidth: '320px' },
    h1: { fontSize: 'clamp(2.2rem, 5vw, 2.5rem)', fontWeight: '600', lineHeight: '1.1', marginBottom: '24px' },
    p: { color: '#a0a0a0', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '400px' },
    button: {
      width: '207px', height: '42px', borderRadius: '8px', border: 'none',
      background: 'linear-gradient(90deg, #0050fe 0%, #af90af 66%, #F5A186 100%)',
      color: 'white', fontWeight: '600', cursor: 'pointer'
    },
    imageCard: { position: 'relative', borderRadius: '20px', width: '100%', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' },
    image: { width: '100%', display: 'block', borderRadius: '20px' },
    gradientHeading: {
      background: 'linear-gradient(90deg, #3b82f6, #FAD4BF)',
      WebkitBackgroundClip: 'text', backgroundClip: 'text',
      WebkitTextFillColor: 'transparent', fontWeight: 'bold',
      fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '60px', display: 'inline-block'
    },
    formButton: {
      width: '100%', padding: '15px',
      background: 'linear-gradient(90deg, #3b82f6, #FAD4BF)',
      border: 'none', borderRadius: '8px', color: '#000', fontWeight: 'bold', cursor: 'pointer'
    },
    gradientText: {
      background: 'linear-gradient(90deg, #3b82f6, #FAD4BF)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
    }
  };

  // ── Data ──────────────────────────────────────────────────────────────────
  const roles = [
    { title: 'Junior AI Engineer', dept: 'AI & Engineering', type: 'Full-time | Remote' },
    { title: 'Social Media Manager', dept: 'Design & Content', type: 'Full-time | Remote' },
    { title: 'Full Stack Developer', dept: 'AI & Engineering', type: 'Full-time | Remote' },
    { title: 'Performance Marketing', dept: 'Marketing', type: 'Full-time | Remote' },
    { title: 'UI/UX Designer', dept: 'Design & Content', type: 'Full-time | Remote' },
    { title: 'Operations Associate', dept: 'Operations', type: 'Full-time | Remote' },
    { title: 'Executive Marketing', dept: 'Marketing', type: 'Full-time | Remote' },
  ];

  const whatItTakesData = [
    {
      title: 'Think like a Founder',
      desc: "Own your work end to end. No waiting for permission, no passing the buck. You identify the problem, design the solution, ship it, and stand behind it.\n\nThat's how we operate.",
      cardBg: 'linear-gradient(135deg,rgba(251,205,181,0.17) 0%, #a47a7a17 100%)',
      textGradient: 'linear-gradient(90deg, #FAD4BF, #3b82f6)',
    },
    {
      title: 'Client Obsessed',
      desc: "Our clients' problems keep us up at night in the best way. We study their industries, feel their pain points, and build AI that solves real problems — not demos that impress in a boardroom and fail in production.",
      cardBg: 'linear-gradient(135deg, rgba(196,189,189,0.23) 0%, #8d95ec1c 100%)',
      textGradient: 'linear-gradient(90deg, #FAD4BF, #3b82f6)',
    },
    {
      title: 'AI First By Default',
      desc: "We don't add AI to things. We build things with AI at the core.\n\nEvery system we design assumes intelligence as a given — not a feature.",
      cardBg: 'linear-gradient(135deg,rgba(251,205,181,0.17) 0%, #a47a7a17 100%)',
      textGradient: 'linear-gradient(90deg, #FAD4BF, #3b82f6)',
    },
  ];

  const benefitsData = [
    {
      title: 'Financial',
      points: ['◎ Competitive pay', '◎ Annual review', '◎ Performance Bonus', '◎ EPFO / PF', '◎ Probation Bonus'],
      imgSrc: financialImg
    },
    {
      title: 'Health',
      points: ['◎ Group health', '◎ Insurance', '◎ Mental Health', '◎ Support', '◎ Wellness Allowance'],
      imgSrc: health
    },
    {
      title: 'Time off',
      points: ['◎ 24 Paid days/year', '◎ All public holidays', '◎ Birthday Leave', '◎ Parental Leave', '◎ (as per statute)'],
      imgSrc: Time
    },
    {
      title: 'Growth',
      points: ['◎ 5k learning', '◎ Budget', '◎ Anthropic CPN', '◎ Academy Access', '◎ Real AI Products', '◎ Fast Track', '◎ Promotion'],
      imgSrc: Growth
    },
    {
      title: 'Culture',
      points: ['◎ 100% remote', '◎ Flexible Hours', '◎ Flat hierarchy', '◎ Direct Founder', '◎ Access', '◎ Annual Offsite'],
      imgSrc: Culture
    },
  ];

  const cities = [
    { name: 'Hyderabad', img: hyderabadImg },
    { name: 'St. Louis', img: st },
    { name: 'Toronto', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e' },
    { name: 'Gurgaon', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07' },
  ];

  const citiesRow2 = [
    { name: 'Bengaluru', img: '/car10.svg' },
    { name: 'San Francisco', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29' },
    { name: 'New York', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9' },
    { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7' },
  ];

  const glassCard = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
    backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px', padding: '40px 0',
    display: 'flex', flexDirection: 'column',
    gap: '28px', marginBottom: '80px',
    position: 'relative', overflow: 'hidden',
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <SEO
        title="Careers — TechScape AI"
        description="Join TechScape AI — we're building the future of AI with engineers, designers, and business operators across India, USA, and Canada."
        canonical="/careers"
      />
      {/* ── 1. Hero Section ─────────────────────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.leftGlow} />
        <div style={styles.rightGlow} />
        <div style={styles.container}>
          <div style={styles.left}>
            <h2
              className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
              }}
            >
              <Typewriter
                words={['Build What the World Hasn\'t Seen Yet']}
                speed={100}
                delay={2500}
              />
            </h2>
            <p className="text-[14px] lg:text-[18px] text-white leading-relaxed font-light pb-6">
              At Tech Scape AI, we're not maintaining systems we're inventing them. Join a team obsessed with AI agents, autonomous workflows, and technology that makes entire industries smarter. This is where your best work happens.
            </p>
            <button
              style={styles.button}
              onClick={() =>
                document
                  .getElementById('open-positions')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Open Roles
            </button>
          </div>
          <div style={styles.right}>
            <div style={styles.imageCard}>
              <img
                src="/car1.svg"
                alt="Team"
                style={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What It Takes ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 text-center text-white">
        <div className="wrap">
          <h2
            className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
            }}
          >
            <Typewriter words={['What It Takes']} speed={100} delay={2500} />
          </h2>
          <p className="text-[14px] lg:text-[28px] text-white leading-relaxed font-light pb-6">

            Visionary teams build legendary companies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {whatItTakesData.map((item, index) => (
              <div key={index} style={{
                background: item.cardBg, padding: '40px', minHeight: '380px',
                borderRadius: '30px', border: '1px solid #333', textAlign: 'left'
              }}>
                <h3 style={{
                  fontSize: '1.8rem', marginBottom: '20px',
                  background: item.textGradient,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                }}>
                  {item.title}
                </h3>
                <p style={{ lineHeight: '1.7', fontSize: '18px', whiteSpace: 'pre-line' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Filter Buttons ───────────────────────────────────────── */}
      <section id="open-positions" className="py-20 lg:py-28 text-center text-white">
        <div className="wrap">
          <p className="capitalize text-[32px] font-medium leading-[25px] text-center tracking-[-0.72px]" style={{ color: '#f7bfa0' }}>
            Open Positions
          </p>
          <h2
            className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
            }}
          >
            <Typewriter words={['Featured Roles']} speed={100} delay={2500} />
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', paddingTop: '10px' }}>
            {['AI & Engineering', 'Design & Content', 'Marketing', 'Operations'].map((role, index) => (
              <button key={index} style={{
                padding: '16px 32px', minHeight: '50px', borderRadius: '50px',
                fontSize: '1.1rem', color: '#fff', cursor: 'pointer',
                border: '1px solid #36504d84',
                background: 'linear-gradient(90deg, #ff7b001f, #1b2b4a44)',
                transition: 'transform 0.3s ease'
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Roles List ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-2 relative overflow-hidden text-white">
        <div className="wrap">
          <h2 style={{ fontSize: '23px', marginBottom: '40px' }}>Feature Roles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))', gap: '20px' }}>
            {roles.map((role, index) => (
              <div key={index} style={{
                backgroundColor: '#2563eb', padding: '25px', borderRadius: '16px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: '400' }}>{role.title} — {role.dept}</h3>
                  <p style={{ margin: 0, fontSize: '20px' }}>{role.type}</p>
                </div>
                <div style={{
                  backgroundColor: 'white', borderRadius: '8px',
                  padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <span style={{ color: '#2563eb' }}>&gt;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Life At TechScape (Accordion) ───────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden text-white">
        <div style={styles.leftGlows}></div>
        <div className="wrap">
          <h2
            className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
            }}
          >
            <Typewriter words={['Life at']} speed={100} delay={2500} />
            <br />
            <Typewriter words={['Tech Scape AI']} speed={100} delay={2500} />
          </h2>

          <p style={{ color: 'white', fontSize: '32px', marginBottom: '40px' }}>
            We take care of the people who take care of our clients.
          </p>
          {benefitsData.map((item, index) => (
            <AccordionItemContent
              key={index}
              title={item.title}
              points={item.points}
              imgSrc={item.imgSrc}
              logoSrc={item.logoSrc}
              isOpen={openBenefit === index}
              onToggle={() => setOpenBenefit(openBenefit === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* ── 6. Vision / Cities Section ──────────────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden text-white" style={{ backgroundColor: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
            }}
          >
            <span style={{ color: '#FF7A00', WebkitTextFillColor: '#FF7A00' }}>
              <Typewriter words={['Precision of ISRO.   ']} speed={100} delay={2500} />
            </span>
            <br />
            <span style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }}>
              <Typewriter words={['Ambition of Silicon Valley. ']} speed={100} delay={2500} />
            </span>
            <br />
            <div className='flex gap-0'>
              <img src={valleyImage} alt="valley" style={{ width: '150px', borderRadius: '15px', marginTop:'-35px' }} />
              <span style={{ color: '#22C55E', WebkitTextFillColor: '#22C55E', marginLeft:'-26px' }}>
                <Typewriter words={['of INDIA..']} speed={100} delay={2500} />
              </span>
            </div>

          </h2>

          <div style={glassCard}>
            {/* Row 1 — scrolls left */}
            <div className="city-marquee">
              <div className="city-track city-track-left">
                {[...cities, ...cities].map((city, index) => (
                  <div
                    key={`r1-${index}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.5rem', fontWeight: '500', whiteSpace: 'nowrap', margin: '0 24px' }}
                  >
                    {city.name}
                    <img src={city.img} alt={city.name} style={{ width: '120px', height: '40px', borderRadius: '50px', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="city-marquee">
              <div className="city-track city-track-right">
                {[...citiesRow2, ...citiesRow2].map((city, index) => (
                  <div
                    key={`r2-${index}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.5rem', fontWeight: '500', whiteSpace: 'nowrap', margin: '0 24px' }}
                  >
                    {city.name}
                    <img src={city.img} alt={city.name} style={{ width: '120px', height: '40px', borderRadius: '50px', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              position: 'absolute', width: '550px', height: '258px', top: '5px', left: '-80px',
              background: 'linear-gradient(135deg, #fad4bfd0 0%, #efc297d8 70%)',
              borderRadius: '50%', filter: 'blur(120px)', opacity: 0.6, zIndex: 0, pointerEvents: 'none'
            }}></div>
          </div>

          <div style={{
            position: 'absolute', width: '700px', height: '380px', top: '3600px', right: '-80px',
            background: '#357acec8', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.6,
            zIndex: 0, pointerEvents: 'none'
          }}
          ></div>

          <h2
            className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
            }}
          >
            <Typewriter words={['How We Hire']} speed={100} delay={2500} />
          </h2>
          <p style={{ marginBottom: '40px', fontSize: '1.15rem' }}>
            Our process is designed to find driven people with real skills and genuine curiosity. Here's exactly what to expect — no surprises.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <img
              src={how}
              alt="Hire"
              style={{ flex: '1', minWidth: '50px', borderRadius: '20px', minHeight: '80px' }}
            />
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>What We Look For:</h3>
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6', color: '#fff' }}>
                {`We care about what you can do — not where you learned to do it.

We don't filter by college names or years of experience. If you've built something interesting, shipped a real project, written a thoughtful post about AI, or contributed to open source — put that at the top.

If you're curious enough to learn across boundaries, you'll thrive here. For non-technical roles we're looking for clarity, ownership, and a genuine interest in what AI is doing to business. Our operations and marketing teams are small and high-impact. You'll shape how we work, not just execute on instructions.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Interview Process ─────────────────────────────────────── */}
      <section className=" text-white py-20 lg:py-28">
        <div className="wrap">
          {/* Main Section Header */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-tight">
            The Interview Process-3 steps
          </h2>

          {/* Vertical Cards Stack Container */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card w-full rounded-2xl border border-white/[0.06] p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:border-white/10"
                
              >
                {/* Flex wrapper for the internal content indicator timeline */}
                <div className="flex gap-6 md:gap-8 items-start relative z-10">

                  {/* Left side timeline inside the card itself */}
                  <div className="flex flex-col items-center self-stretch pt-2">
                    {/* Subtle Connecting Line */}
                    <div className="w-[1px] h-full min-h-[50px] bg-white relative flex justify-center items-end">
                      {/* Bottom white indicator dot exact to reference template */}
                      <div className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-white/50" />
                    </div>
                  </div>

                  {/* Right side textual wrapper block */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-[24px] font-medium text-white tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-[14px] md:text-[18px] font-light leading-relaxed max-w-5xl">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Safety, Accommodation & Contact Form ──────────────────── */}
      <div className=" text-white  p-6 md:p-1 mb-6">
        <div className="wrap mb-16 space-y-8">
          <div>
            <h2 className="text-2xl lg:text-[40px] font-normal mb-4">Your Safety Matters</h2>
            <p className="text-white lg:text-[18px] text-sm leading-relaxed border-l-2 border-white pl-4 ml-8">
              To protect yourself from scams, TechScape AI recruiters will only contact you from @techscapeai.in email addresses. We will never ask for money, fees or any payment before or during the hiring process. If you receive a suspicious message claiming to be from us, do not click any links. Contact us directly at hr@techscapeai.in to verify.
            </p>
          </div>
          <div>
            <h2 className="text-2xl lg:text-[40px] font-normal mb-4">Accommodation</h2>
            <p className="text-white text-sm lg:text-[18px] leading-relaxed border-l-2 border-white pl-4 ml-8">
              We are committed to an inclusive hiring experience. If you need any accommodation to participate fully in our process, please mention it in your application email or reach out directly to hr@techscapeai.in. All requests are kept confidential.
            </p>
          </div>
        </div>
      </div>

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
                <img src="/car13.svg" alt="" />
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
};

export default CareerPage;