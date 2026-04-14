import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ACCORDION = [
  {
    title: 'Founders & Leadership',
    content:
      'Technologists and business builders with experience across USA, Canada, and India — united by a belief that AI should create opportunity for everyone.',
  },
  {
    title: 'Design & Creative',
    content:
      'Designers who blend brand identity with user experience — ensuring every product we ship looks as good as it performs.',
  },
  {
    title: 'Development & Engineering',
    content:
      'Full-stack engineers and AI/ML specialists building robust, scalable solutions that integrate seamlessly with existing systems.',
  },
  {
    title: 'Marketing & Growth',
    content:
      'Growth operators who combine data, content, and strategy to help businesses acquire customers and expand into new markets.',
  },
  {
    title: 'Research & Education',
    content:
      'Educators and researchers developing the next generation of AI-ready talent through practical, industry-aligned training programs.',
  },
]

function AccordionItem({ title, content, open, onToggle }) {
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left group"
        onClick={onToggle}
      >
        <span className="text-[14px] font-semibold text-white/75 group-hover:text-white transition-colors pr-4">
          {title}
        </span>
        <svg
          className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-250 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-[13px] text-white/42 leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

function Character() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(61,117,243,0.14) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      <svg viewBox="0 0 200 260" className="w-full max-w-[190px] relative z-10 float">
        <defs>
          <radialGradient id="tBodyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#6B8AF7" />
            <stop offset="100%" stopColor="#2a4db0" />
          </radialGradient>
          <radialGradient id="tFaceGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#F5C6A0" />
            <stop offset="100%" stopColor="#D4935A" />
          </radialGradient>
        </defs>
        {/* Body */}
        <rect x="60" y="130" width="80" height="90" rx="20" fill="url(#tBodyGrad)" />
        {/* Head */}
        <circle cx="100" cy="105" r="35" fill="url(#tFaceGrad)" />
        {/* Eyes */}
        <circle cx="88" cy="102" r="4.5" fill="#1a1a2e" />
        <circle cx="112" cy="102" r="4.5" fill="#1a1a2e" />
        <circle cx="89.5" cy="100.5" r="1.8" fill="white" opacity="0.85" />
        <circle cx="113.5" cy="100.5" r="1.8" fill="white" opacity="0.85" />
        {/* Smile */}
        <path d="M90 114 Q100 123 110 114" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* Arms */}
        <rect x="22" y="135" width="42" height="18" rx="9" fill="url(#tBodyGrad)" />
        <rect x="136" y="135" width="42" height="18" rx="9" fill="url(#tBodyGrad)" />
        {/* Laptop body */}
        <rect x="54" y="155" width="92" height="57" rx="5" fill="#0d0d1a" />
        <rect x="57" y="158" width="86" height="47" rx="3" fill="#111133" />
        {/* Screen lines */}
        <rect x="63" y="164" width="52" height="3" rx="1.5" fill="#3D75F3" opacity="0.75" />
        <rect x="63" y="171" width="36" height="2.5" rx="1" fill="#F5A086" opacity="0.55" />
        <rect x="63" y="177" width="46" height="2.5" rx="1" fill="#3D75F3" opacity="0.45" />
        <rect x="63" y="183" width="28" height="2.5" rx="1" fill="#6B8AF7" opacity="0.4" />
        <rect x="63" y="189" width="38" height="2.5" rx="1" fill="#F5A086" opacity="0.3" />
        {/* Keyboard */}
        <rect x="44" y="212" width="112" height="8" rx="4" fill="#1a1a2e" />
        {/* Hair */}
        <ellipse cx="100" cy="74" rx="36" ry="13" fill="#1a1a2e" />
        <path d="M64 85 Q60 64 80 58 Q100 53 120 58 Q140 64 136 85" fill="#1a1a2e" />
      </svg>
    </div>
  )
}

export default function Team() {
  const [openIdx, setOpenIdx] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="team" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>

        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="label mb-4">Our Team</p>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] text-white leading-tight">
            Built By Builders.<br />
            <span className="grad-text">Led By Practitioners.</span>
          </h2>
        </div>

        {/* 3-column layout */}
        <div className={`grid lg:grid-cols-3 gap-8 lg:gap-10 items-start transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Left — description + dark box */}
          <div className="space-y-5">
            <p className="text-[15px] text-white/50 leading-relaxed">
              The TechScape AI team is not a group of consultants who talk about technology. We are engineers, designers, educators, and business operators who build it every day across India, the USA, and Canada.
            </p>
            <div
              className="rounded-2xl p-5"
              style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}
            >
              <p className="text-[13px] text-white/42 leading-relaxed">
                We are a lean, global, high-output team. Every person here owns their work and every piece of work we deliver reflects that. No bloat. No bureaucracy. Just results.
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: '3', l: 'Countries' },
                { v: '10+', l: 'Team Members' },
                { v: '50+', l: 'Projects' },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  className="rounded-xl p-3 text-center"
                  style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}
                >
                  <p className="text-[18px] font-extrabold grad-text leading-none mb-0.5">{v}</p>
                  <p className="text-[10px] text-white/30">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center — SVG character */}
          <div className="relative h-[280px] lg:h-[340px]">
            <Character />
          </div>

          {/* Right — accordion */}
          <div
            className="rounded-2xl p-6"
            style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}
          >
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Disciplines</p>
            {ACCORDION.map((item, i) => (
              <AccordionItem
                key={item.title}
                title={item.title}
                content={item.content}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
