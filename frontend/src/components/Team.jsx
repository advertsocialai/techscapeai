import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import teamCharacter from '../assets/team-character.svg'
import Typewriter from './Typewriter';

const ACCORDION = [
  {
    title: 'Founders & Leadership',
    content: 'A cross-functional founding team with deep expertise across AI engineering, business development, digital marketing, and technology education. Our founders have built products, run agencies, trained talent, and delivered solutions for clients globally.',
  },
  { title: 'Design & Creative', content: 'Designers who blend brand identity with user experience to create visually stunning and highly functional digital products.' },
  { title: 'Development & Engineering', content: 'Full-stack engineers and AI/ML specialists focused on building scalable, high-performance automation and software solutions.' },
  { title: 'Marketing & Growth', content: 'Growth operators who combine data, content, and strategy to scale digital presence and drive business results.' },
  { title: 'Research & Education', content: 'Educators and researchers developing the next generation of AI-literate talent and cutting-edge tech curricula.' },
]

function AccordionItem({ title, content, open, onToggle }) {
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        className="w-full flex items-center justify-between gap-[18px] py-6 text-left group"
        onClick={onToggle}
      >
        <span className={`text-[18px] lg:text-[20px] font-medium transition-colors ${open ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-white/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-[14px] text-white/50 leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

export default function Team() {
  const [openIdx, setOpenIdx] = useState(0)
  const { ref, isVisible } = useScrollAnimation()
  const typewriterWords = ["Built By Builders. Led By Practitioners."];

  return (
    <section id="team" className="relative bg-black py-20 lg:py-32 text-white overflow-hidden">
      <div 
        className="absolute pointer-events-none"
        style={{
          left: '-30%', 
          top: '20%', 
          width: '700px', 
          height: '700px',
          background: '#3579CE',
          filter: 'blur(200px)',
          borderRadius: '50%',
          opacity: 0.15,
          zIndex: 0
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#C58E75] uppercase tracking-[0.2em] text-[16px] font-bold mb-4">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            <Typewriter words={typewriterWords} speed={100} delay={2500} />
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4 pt-4">
            <p className="text-white/60 text-lg leading-relaxed font-light">
              The Tech Scape AI Team Is Not A Group Of Consultants Who Talk About Technology.
              We Are Engineers, Designers, Educators, And Business Operators Who Build It
              Every Day Across India, The USA, And Canada.
            </p>
          </div>

          <div className="lg:col-span-2 flex justify-center py-10 lg:py-0">
            <img
              src={teamCharacter}
              alt="Team icon"
              className="w-32 md:w-40 h-auto object-contain animate-bounce"
              style={{ animationDuration: '3s' }}
            />
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-2">
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

        <div className="flex justify-center">
          <div 
            className="inline-block px-8 md:px-12 py-8 rounded-[40px] border border-white/10 text-center max-w-4xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(197,142,117,0.1) 0%, rgba(0,0,0,1) 100%)',
              backdropBlur: '10px'
            }}
          >
            <p className="text-white/70 text-sm md:text-lg leading-relaxed">
              "We are a lean, global, high-output team. Every person here owns their work and
              every piece of work we deliver reflects that."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}