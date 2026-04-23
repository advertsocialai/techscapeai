import { useScrollAnimation } from '../hooks/useScrollAnimation'
import howitStar from '../assets/howit-icon-star.svg'
import howitCloud from '../assets/howit-icon-cloud.svg'
import howitBolt from '../assets/howit-icon-bolt.svg'

/* Figma Cards (163:503):
   - Each card: w-379 h-455, outer rounded-[37px], border 1.553px #232323
   - Inner panel rounded-[23px], bg black, inset shadow glow in accent color
   - Accent colors: Discover #6041ff, POC #3ec5ff, Deploy #88c4bf
   - Title gradient text, Inter Medium 37px, body #d9d9d980 18.6px            */

const STEPS = [
  {
    title: 'Discover Call',
    body: 'We understand your business, your pain points, and where AI can make the fastest impact.',
    accent: '#6041ff',
    icon: howitStar,
  },
  {
    title: 'POC Build',
    body: 'We build a working proof-of-concept in 2–4 weeks. You see it working before you commit to anything bigger.',
    accent: '#3ec5ff',
    icon: howitCloud,
  },
  {
    title: 'Deploy & Scale',
    body: 'Once proven, we deploy, integrate, and scale the solution into your operations.',
    accent: '#88c4bf',
    icon: howitBolt,
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="how-it-works" className="relative bg-black py-20 lg:py-28">
      <div className="wrap" ref={ref}>
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-semibold tracking-[-2.4px] text-white leading-[77px]">
            How It Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 relative">

          {/* Horizontal connector line — desktop only */}
          <img src="/Safer.svg" alt="" />
          <img src="/Faster.svg" alt="" />
          <img src="/On-cloud.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
