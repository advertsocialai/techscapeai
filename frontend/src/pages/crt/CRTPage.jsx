import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import CRTFonts from './CRTFonts'
import useCrtReveal from './useCrtReveal'
import './crt-page.css'

// All three Apply buttons open the registration form.
const REGISTER_PATH = '/crt/register'

// The highlighted word in the hero headline types out, holds, deletes, then types the next one
// (same effect as the homepage headline). The first word is the real headline copy.
const HERO_WORDS = ['Career-Ready.', 'Job-Ready.', 'Future-Ready.', 'Hire-Ready.']

function TypedWord({ words }) {
  const [text, setText] = useState(words[0])

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    let i = 0
    let n = words[0].length
    let typing = false
    let timer
    const tick = () => {
      const word = words[i]
      let delay
      if (typing) {
        n += 1
        setText(word.slice(0, n))
        if (n === word.length) { typing = false; delay = 2000 } else delay = 90
      } else {
        n -= 1
        setText(word.slice(0, n))
        if (n === 0) { i = (i + 1) % words.length; typing = true; delay = 250 } else delay = 45
      }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 2400)
    return () => clearTimeout(timer)
  }, [words])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '')
  return (
    <span className="crt-typed" aria-hidden="true">
      <span className="crt-typed-size" data-text={longest} />
      <span className="crt-typed-text">
        {text}
        <span className="crt-caret" />
      </span>
    </span>
  )
}

const STATS = [
  { value: '12', label: 'Weeks' },
  { value: '24', label: 'Sessions' },
  { value: '36', label: 'Learning hours' },
]

const BENEFITS = [
  { title: 'ONLINE LEARNING', text: 'Learn from anywhere' },
  { title: 'FOUR INTEGRATED MODULES', text: 'Technical + business skills' },
  { title: 'STRUCTURED CURRICULUM', text: '24 sessions across 12 weeks' },
  { title: 'PILOT COHORT', text: 'Limited to 25 students' },
]

const MODULES = [
  { n: '01', sessions: 5, tone: 'violet', title: 'AI Engineering & AI Basics', text: 'Understand AI fundamentals, core concepts and practical applications.' },
  { n: '02', sessions: 7, tone: 'teal', title: 'Python Programming & Networking', text: 'Build programming foundations with Python and learn core networking concepts.' },
  { n: '03', sessions: 5, tone: 'violet', title: 'Business Analysis & ECBA Foundations', text: 'Learn business analysis fundamentals and develop BA skills aligned with ECBA foundations.' },
  { n: '04', sessions: 7, tone: 'teal', bright: true, title: 'Professional Development & Mock Interviews', text: 'Strengthen communication, professional presence and interview readiness through practice.' },
]

export default function CRTPage() {
  const rootRef = useRef(null)
  useCrtReveal(rootRef)

  return (
    <>
      <SEO
        title="Campus Recruitment & Training (CRT) | Tech Scape AI"
        description="Tech Scape AI's 12-week online Campus Recruitment & Training program covering AI, Python, business analysis and interview prep. Pilot cohort limited to 25 students."
        canonical="/crt"
      />
      <CRTFonts />

      <div className="crt-page" ref={rootRef}>
        {/* ============ HERO ============ */}
        <section className="crt-hero" aria-labelledby="crt-hero-title">
          <div className="crt-wrap">
            <div className="crt-hero-grid">
              <div className="crt-hero-copy">
                <p className="crt-eyebrow crt-rise" style={{ '--d': '0ms' }}>CAMPUS RECRUITMENT &amp; TRAINING / CRT</p>
                <h1 id="crt-hero-title" className="crt-rise" style={{ '--d': '80ms' }} aria-label="Learn. Build. Get Career-Ready.">
                  Learn. Build.<br />
                  Get <TypedWord words={HERO_WORDS} />
                </h1>
                <p className="crt-hero-desc crt-rise" style={{ '--d': '160ms' }}>
                  A structured 12-week online learning journey designed to strengthen your technical foundations, business understanding and professional readiness.
                </p>

                <ul className="crt-stats" aria-label="Program at a glance">
                  {STATS.map((s, i) => (
                    <li key={s.label} className="crt-rise" style={{ '--d': `${260 + i * 90}ms` }}><strong>{s.value}</strong><span>{s.label}</span></li>
                  ))}
                </ul>

                <div className="crt-hero-cta crt-rise" style={{ '--d': '540ms' }}>
                  <Link className="crt-btn crt-btn--solid" to={REGISTER_PATH}>
                    Apply for pilot cohort <span aria-hidden="true">→</span>
                  </Link>
                  <p className="crt-hero-note">100% Online • 25 pilot seats</p>
                </div>
              </div>

              <div className="crt-hero-visual crt-rise" style={{ '--d': '200ms' }}>
                <img className="crt-blob crt-blob--blue" src="/crt/hero-blue-shape.svg" width="475" height="500" alt="" aria-hidden="true" />
                <img className="crt-blob crt-blob--peach" src="/crt/hero-peach-accent.svg" width="300" height="300" alt="" aria-hidden="true" />
                <img className="crt-hero-photo" src="/crt/hero-students.png" width="560" height="450" alt="Two students working together on a laptop" fetchPriority="high" />
              </div>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS + MODULES + PILOT ============ */}
        <div className="crt-light">
          <span className="crt-glow crt-glow--teal" aria-hidden="true" />
          <span className="crt-glow crt-glow--violet" aria-hidden="true" />

          <div className="crt-wrap">
            <ul className="crt-benefits" data-reveal>
              {BENEFITS.map((b) => (
                <li key={b.title}><h3>{b.title}</h3><p>{b.text}</p></li>
              ))}
            </ul>

            <section className="crt-journey" aria-labelledby="crt-journey-title">
              <p className="crt-eyebrow crt-eyebrow--dark" data-reveal>THE LEARNING JOURNEY</p>
              <h2 id="crt-journey-title" className="crt-h2" data-reveal style={{ '--d': '80ms' }}><span className="crt-violet">Four integrated</span> learning modules.</h2>
              <p className="crt-lead" data-reveal style={{ '--d': '160ms' }}>A balanced program combining technical foundations, business understanding and professional readiness.</p>

              <div className="crt-modules">
                {MODULES.map((m, i) => (
                  <article key={m.n} className={`crt-module crt-module--${m.tone}`} data-reveal style={{ '--d': `${i * 110}ms` }}>
                    <p className="crt-module-accent">{m.n} • {m.sessions} Sessions</p>
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                    <span className={`crt-pill${m.bright ? ' crt-pill--bright' : ''}`}>{m.sessions} Sessions</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="crt-pilot" id="pilot" aria-labelledby="crt-pilot-title">
              <div className="crt-pilot-copy">
                <p className="crt-eyebrow crt-eyebrow--dark" data-reveal>FIRST PILOT COHORT</p>
                <h2 id="crt-pilot-title" className="crt-h2 crt-h2--tall" data-reveal style={{ '--d': '80ms' }}>A focused start to your career journey.</h2>
                <p className="crt-pilot-desc" data-reveal style={{ '--d': '160ms' }}>Join the first Tech Scape AI CRT cohort and work through all four learning modules in one structured online program.</p>
                <p className="crt-pilot-terms" data-reveal style={{ '--d': '240ms' }}>₹2,000 is the pilot cohort fee for the complete 12-week program.</p>
              </div>

              <aside className="crt-price" aria-label="Pilot cohort fee" data-reveal style={{ '--d': '160ms' }}>
                <p className="crt-price-label">COMPLETE PROGRAM FEE</p>
                <p className="crt-price-amount">₹2,000</p>
                <p className="crt-price-incl">All four modules included</p>
                <hr className="crt-price-rule" />
                <p className="crt-price-seats">25 seats available</p>
                <Link className="crt-btn crt-btn--soft" to={REGISTER_PATH}>
                  Register for CRT <span aria-hidden="true">→</span>
                </Link>
              </aside>
            </section>
          </div>
        </div>

        {/* ============ PROGRAM AT A GLANCE ============ */}
        <section className="crt-glance" aria-labelledby="crt-glance-title">
          <div className="crt-wrap">
            <p className="crt-eyebrow crt-eyebrow--peach" data-reveal>PROGRAM AT A GLANCE</p>
            <h2 id="crt-glance-title" className="crt-h2 crt-h2--light" data-reveal style={{ '--d': '80ms' }}>Clear expectations. A structured experience.</h2>
            <p className="crt-facts" data-reveal style={{ '--d': '160ms' }}><span>Format: Online&nbsp; •&nbsp; Duration: 12 weeks&nbsp; •&nbsp; Sessions: 24&nbsp; •&nbsp; Learning hours: 36</span></p>
            <p className="crt-glance-body" data-reveal style={{ '--d': '240ms' }}>The program includes all four learning modules. Session timings, eligibility, payment instructions and completion requirements will be shared with applicants before enrolment.</p>
          </div>
        </section>

        {/* ============ CLOSING CTA ============ */}
        <section className="crt-closing" id="apply" aria-labelledby="crt-closing-title">
          <div className="crt-wrap crt-closing-inner" data-reveal>
            <div>
              <h2 id="crt-closing-title">Ready to take your next step?</h2>
              <p>Apply for the first CRT pilot cohort. Limited to 25 students.</p>
            </div>
            <Link className="crt-btn crt-btn--grad" to={REGISTER_PATH}>
              Apply Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
