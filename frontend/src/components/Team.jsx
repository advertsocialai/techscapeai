import { useState } from 'react'

const ACCORDION = [
  {
    title: 'Founders & Leadership',
    content: 'Technologists and business builders with experience across USA, Canada, and India — united by a belief that AI should create opportunity for everyone.',
  },
  {
    title: 'Design & Creative',
    content: 'Designers who blend brand identity with user experience — ensuring every product we ship looks as good as it performs.',
  },
  {
    title: 'Development & Engineering',
    content: 'Full-stack engineers and AI/ML specialists building robust, scalable solutions that integrate seamlessly with existing systems.',
  },
  {
    title: 'Marketing & Growth',
    content: 'Growth operators who combine data, content, and strategy to help businesses acquire customers and expand into new markets.',
  },
  {
    title: 'Research & Education',
    content: 'Educators and researchers developing the next generation of AI-ready talent through practical, industry-aligned training programs.',
  },
]

function AccordionItem({ title, content, open, onToggle }) {
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left group"
        onClick={onToggle}
      >
        <span className="text-[15px] font-semibold text-white/80 group-hover:text-white transition-colors">{title}</span>
        <svg className={`chev w-4 h-4 text-white/30 flex-shrink-0 ${open ? 'open' : ''}`} viewBox="0 0 16 16" fill="none">
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-[13px] text-white/45 leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

/* 3D character illustration */
function Character() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(61,117,243,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />
      <svg viewBox="0 0 200 260" className="w-full max-w-[180px] relative z-10">
        <defs>
          <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#6B8AF7" />
            <stop offset="100%" stopColor="#2a4db0" />
          </radialGradient>
          <radialGradient id="faceGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#F5C6A0" />
            <stop offset="100%" stopColor="#D4935A" />
          </radialGradient>
        </defs>
        {/* Body */}
        <rect x="60" y="130" width="80" height="90" rx="20" fill="url(#bodyGrad)" />
        {/* Head */}
        <circle cx="100" cy="105" r="35" fill="url(#faceGrad)" />
        {/* Eyes */}
        <circle cx="88" cy="102" r="4" fill="#1a1a2e" />
        <circle cx="112" cy="102" r="4" fill="#1a1a2e" />
        <circle cx="89.5" cy="100.5" r="1.5" fill="white" opacity="0.8" />
        <circle cx="113.5" cy="100.5" r="1.5" fill="white" opacity="0.8" />
        {/* Smile */}
        <path d="M90 114 Q100 122 110 114" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Arms */}
        <rect x="22" y="135" width="42" height="18" rx="9" fill="url(#bodyGrad)" />
        <rect x="136" y="135" width="42" height="18" rx="9" fill="url(#bodyGrad)" />
        {/* Laptop */}
        <rect x="55" y="155" width="90" height="55" rx="5" fill="#0d0d1a" />
        <rect x="58" y="158" width="84" height="45" rx="3" fill="#111133" />
        {/* Screen glow lines */}
        <rect x="64" y="164" width="50" height="3" rx="1.5" fill="#3D75F3" opacity="0.7" />
        <rect x="64" y="171" width="35" height="2" rx="1" fill="#F5A086" opacity="0.5" />
        <rect x="64" y="177" width="45" height="2" rx="1" fill="#3D75F3" opacity="0.4" />
        <rect x="64" y="183" width="28" height="2" rx="1" fill="#6B8AF7" opacity="0.4" />
        {/* Keyboard base */}
        <rect x="45" y="210" width="110" height="8" rx="4" fill="#1a1a2e" />
        {/* Hair */}
        <ellipse cx="100" cy="74" rx="36" ry="12" fill="#1a1a2e" />
        <path d="M64 85 Q60 65 80 60 Q100 55 120 60 Q140 65 136 85" fill="#1a1a2e" />
      </svg>
    </div>
  )
}

export default function Team() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="team" className="relative bg-black py-20 lg:py-28">
      <div className="wrap">

        {/* Top label */}
        <p className="label mb-4">Our Team</p>

        {/* Big heading */}
        <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.02em] text-white leading-tight mb-12">
          Built By Builders.<br />
          <span className="grad-text">Led By Practitioners.</span>
        </h2>

        {/* 3-column layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">

          {/* Left — description */}
          <div>
            <p className="text-[15px] text-white/50 leading-relaxed mb-6">
              The Tech Scape AI team is not a group of consultants who talk about technology. We are engineers, designers, educators, and business operators who build it every day across India, the USA, and Canada.
            </p>
            <div className="rounded-2xl p-5" style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}>
              <p className="text-[13px] text-white/45 leading-relaxed">
                We are a lean, global, high-output team. Every person here owns their work and every piece of work we deliver reflects that.
              </p>
            </div>
          </div>

          {/* Center — 3D character */}
          <div className="relative h-[280px] lg:h-[320px]">
            <Character />
          </div>

          {/* Right — accordion */}
          <div className="rounded-2xl p-6" style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}>
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
