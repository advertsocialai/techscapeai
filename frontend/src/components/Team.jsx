import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import teamCharacter from '../assets/team-character.svg'

/* Figma 138:961 (eyebrow) + 138:962 (heading) + 138:1235 (left body) + Frame 127 (203:492)
   + Group 7 (202:459) SVG character + Frame 126 (202:476) 5-item accordion */

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
        <span className="text-[20px] lg:text-[22px] font-semibold text-white/80 group-hover:text-white transition-colors">
          {title}
        </span>
        <svg
          className={`w-6 h-6 text-white/40 flex-shrink-0 transition-transform duration-250 ${open ? 'rotate-180' : ''}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-5' : 'max-h-0'}`}>
        <p className="text-[14px] lg:text-[15px] text-white/55 leading-[25px]">{content}</p>
      </div>
    </div>
  )
}

export default function Team() {
  const [openIdx, setOpenIdx] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="team" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>

        {/* Header — Figma 138:961 + 138:962 (centered) */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="label mb-4">Our Team</p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-1.32px] text-white leading-[1.2]">
            Built by Builders. <span className="grad-text">Led by Practitioners.</span>
          </h2>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* ── Left: character + body copy (Figma 138:1235 + Frame 127) ── */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <img
                src={teamCharacter}
                alt="Team character"
                className="w-[110px] h-auto flex-shrink-0 float"
              />
              <p className="text-[15px] lg:text-[16px] text-white/55 leading-[25px] tracking-[-0.48px] max-w-[520px]">
                The Tech Scape AI team is not a group of consultants who talk about technology. We are engineers, designers, educators, and business operators who build it every day across India, the USA, and Canada.
              </p>
            </div>
            <p className="text-[15px] lg:text-[16px] text-white/55 leading-[25px] tracking-[-0.48px] max-w-[575px]">
              We are a lean, global, high-output team. Every person here owns their work and every piece of work we deliver reflects that.
            </p>
          </div>

          {/* Center — SVG character */}
          <div className="relative h-[280px] lg:h-[340px]">
           <img src="/middle.svg" alt="" />
          </div>

          {/* Right — accordion */}
          <div
            className="rounded-[20px] p-6 lg:p-8"
            style={{ background: '#0D0D0D', border: '1px solid #1C1C1C' }}
          >
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
