import Hero from '../components/Hero'
import About from '../components/About'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Problem from '../components/Problem'
import AIAgents from '../components/AIAgents'
import HowItWorks from '../components/HowItWorks'
import CTABand from '../components/CTABand'
import Team from '../components/Team'
import PartnersDetailed from '../components/PartnersDetailed'
import GetStarted from '../components/GetStarted'

// Page flow mirrors Figma canvas 124:306 top-to-bottom.
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Partners />
      <Services />
      <Problem />
      <AIAgents />
      <HowItWorks />
      <CTABand />
      <Team />
      <PartnersDetailed />
      <GetStarted />
    </>
  )
}
