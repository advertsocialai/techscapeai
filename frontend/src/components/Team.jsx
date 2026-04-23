import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import teamCharacter from '../assets/team-character.svg'

const ACCORDION = [
  {
    title: 'Founders & Leadership',
    content:
      'A cross-functional founding team with deep expertise across AI engineering, business development, digital marketing, and technology education. Our founders have built products, run agencies, trained talent, and delivered solutions for clients globally.',
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
        className="w-full flex items-center justify-between gap-[18px] py-5 text-left group"
        onClick={onToggle}
      >
        <span className="text-[24px] font-semibold text-white/75 group-hover:text-white transition-colors">
          {title}
        </span>
        <svg
          className={`w-6 h-6 text-white/30 flex-shrink-0 transition-transform duration-250 ${open ? 'rotate-180' : ''}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-[14px] text-white/42 leading-relaxed">{content}</p>
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
      <img
        src={teamCharacter}
        alt="Team character illustration"
        className="w-full max-w-[154px] relative z-10 float"
      />
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
