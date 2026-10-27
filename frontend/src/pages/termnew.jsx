import { useEffect, useState } from 'react'
import SEO from '../components/SEO'

const SECTIONS = [
  { id: 'definitions', n: '01', label: 'Definitions' },
  { id: 'acceptance', n: '02', label: 'Acceptance of Terms' },
  { id: 'services', n: '03', label: 'Services Description' },
  { id: 'ai-usage', n: '04', label: 'AI Agent Usage Terms' },
  { id: 'intellectual-property', n: '05', label: 'Intellectual Property' },
  { id: 'confidentiality', n: '06', label: 'Confidentiality' },
  { id: 'payment', n: '07', label: 'Payment Terms' },
  { id: 'warranties', n: '08', label: 'Disclaimer of Warranties' },
  { id: 'liability', n: '09', label: 'Limitation of Liability' },
  { id: 'indemnification', n: '10', label: 'Indemnification' },
  { id: 'termination', n: '11', label: 'Termination' },
  { id: 'third-party', n: '12', label: 'Third-Party Services' },
  { id: 'governing-law', n: '13', label: 'Governing Law' },
  { id: 'changes', n: '14', label: 'Changes to These Terms' },
  { id: 'contact', n: '15', label: 'Contact Us' },
]

export default function TermsAndConditions() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  /* Scroll-spy: the active entry is the last section whose top has crossed the
     reading line sitting just below the sticky navbar. */
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (!els.length) return

    const READING_LINE = 140

    const sync = () => {
      // The final section may never cross the line, so pin it once we hit the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) {
        setActiveId(els[els.length - 1].id)
        return
      }

      let current = els[0].id
      for (const el of els) {
        if (el.getBoundingClientRect().top <= READING_LINE) current = el.id
        else break
      }
      setActiveId(current)
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      window.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  return (
    <>
      <SEO
        title="Terms & Conditions | Tech Scape AI"
        description="Terms and Conditions governing your use of Tech Scape AI LLP services, AI agents, and platforms. Governed by Indian law, Hyderabad jurisdiction."
        canonical="/terms"
      />

      <main className="legal-page legal-page--doc">
        <div className="legal-doc-container">

          <div className="legal-header">
            <span className="legal-badge">Legal</span>
            <h1>Terms &amp; Conditions</h1>
            <p className="legal-meta">
              Effective Date: June 27, 2026 &nbsp;|&nbsp; Last Updated: June 27, 2026
            </p>
            <p className="legal-intro">
              These Terms and Conditions ("Terms") govern your access to and use of the
              website, products, AI agents, and services provided by Tech Scape AI LLP
              ("Tech Scape AI", "we", "us", or "our"), an Indian Limited Liability
              Partnership registered in Hyderabad, Telangana, India. By accessing or using
              our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="legal-doc-grid">

          <aside className="legal-toc" aria-label="Table of contents">
            <p className="legal-toc-title">On this page</p>
            <ul className="legal-toc-list">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`legal-toc-link${activeId === s.id ? ' is-active' : ''}`}
                    aria-current={activeId === s.id ? 'true' : undefined}
                  >
                    <span className="legal-toc-num">{s.n}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="legal-toc-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
              Back to top
            </button>
          </aside>

          <div className="legal-doc-body">

          <section className="legal-section" id="definitions">
            <h2>1. Definitions</h2>
            <ul>
              <li>
                <strong>"Services"</strong> means all AI products, consulting services,
                agentic workflows, software platforms, and technology solutions provided by
                Tech Scape AI LLP.
              </li>
              <li>
                <strong>"AI Agent"</strong> means any conversational AI system developed
                and deployed by Tech Scape AI LLP, including Klara Travel AI and Klara
                Finance AI.
              </li>
              <li>
                <strong>"Client"</strong> means any business or individual that engages
                Tech Scape AI LLP for services under a separate engagement agreement.
              </li>
              <li>
                <strong>"User"</strong> means any individual who accesses our website or
                interacts with our AI agents.
              </li>
              <li>
                <strong>"Platform"</strong> means the Tech Scape AI website at
                techscapeai.in and any associated web applications or APIs.
              </li>
              <li>
                <strong>"Content"</strong> means all text, graphics, images, code, data,
                and other materials on or generated by our Platform.
              </li>
            </ul>
          </section>

          <section className="legal-section" id="acceptance">
            <h2>2. Acceptance of Terms</h2>
            <p>
              By accessing our website, engaging our services, or interacting with our AI
              agents, you confirm that you:
            </p>
            <ul>
              <li>Are at least 18 years of age</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Accept these Terms and our Privacy Policy in their entirety</li>
              <li>
                If acting on behalf of a company, have authority to bind that company to
                these Terms
              </li>
            </ul>
          </section>

          <section className="legal-section" id="services">
            <h2>3. Services Description</h2>
            <p>Tech Scape AI LLP provides the following categories of services:</p>
            <ul>
              <li>
                <strong>AI Agent Development:</strong> Design, development, and deployment
                of conversational AI agents for business automation
              </li>
              <li>
                <strong>Agentic Workflow Automation:</strong> Building automated business
                processes powered by large language models
              </li>
              <li>
                <strong>AI Consulting:</strong> Strategic advisory on AI adoption,
                implementation, and optimization
              </li>
              <li>
                <strong>Technology Solutions:</strong> Custom software development, SaaS
                product building, and digital transformation
              </li>
              <li>
                <strong>Managed AI Services:</strong> Ongoing operation, monitoring, and
                improvement of deployed AI systems
              </li>
            </ul>
            <p>
              Specific service terms, deliverables, timelines, and commercial arrangements
              are governed by separate written engagement agreements between Tech Scape AI
              LLP and each Client.
            </p>
          </section>

          <section className="legal-section" id="ai-usage">
            <h2>4. AI Agent Usage Terms</h2>

            <h3>4.1 Nature of AI Responses</h3>
            <p>
              Our AI agents generate responses using large language models. These responses
              are automated and may not always be accurate, complete, or suitable for your
              specific circumstances. AI agent responses do not constitute professional
              legal, financial, medical, or other regulated advice.
            </p>

            <h3>4.2 Acceptable Use</h3>
            <p>You must not use our AI agents to:</p>
            <ul>
              <li>Generate harmful, illegal, or misleading content</li>
              <li>Attempt to manipulate, jailbreak, or circumvent AI safety measures</li>
              <li>Collect or harvest personal data of other users</li>
              <li>Engage in any activity that violates applicable law</li>
              <li>Impersonate any person or entity</li>
              <li>Transmit malicious code, spam, or unauthorized advertising</li>
              <li>Reverse engineer or attempt to extract underlying model weights</li>
            </ul>

            <h3>4.3 Data Submitted to AI Agents</h3>
            <p>
              You are responsible for the accuracy and legality of data you submit to our
              AI agents. Do not submit sensitive personal data, government identification
              numbers, financial credentials, or confidential third-party information unless
              required by the specific service and covered under a separate data processing
              agreement.
            </p>

            <h3>4.4 AI Limitations</h3>
            <p>
              Our AI agents operate within the capabilities and constraints of the underlying
              language models. Tech Scape AI LLP does not guarantee that AI agent responses
              will be error-free, uninterrupted, or suitable for any particular purpose.
              Human review is recommended for any AI-generated content used in critical
              business decisions.
            </p>
          </section>

          <section className="legal-section" id="intellectual-property">
            <h2>5. Intellectual Property</h2>

            <h3>5.1 Our Intellectual Property</h3>
            <p>
              All intellectual property rights in the Tech Scape AI Platform, website, AI
              systems, software, brand assets, and Content — including but not limited to
              the Klara AI brand, methodologies, and proprietary workflows — are owned by
              or licensed to Tech Scape AI LLP. Nothing in these Terms grants you any right
              to use our intellectual property without prior written permission.
            </p>

            <h3>5.2 Client Intellectual Property</h3>
            <p>
              Clients retain ownership of all data, content, and materials they provide to
              Tech Scape AI LLP for service delivery. We do not claim ownership over
              Client-provided data.
            </p>

            <h3>5.3 Deliverables</h3>
            <p>
              Intellectual property ownership of custom deliverables developed for Clients
              is governed by the terms of the specific engagement agreement. Unless expressly
              agreed otherwise in writing, Tech Scape AI LLP retains ownership of all
              underlying frameworks, tools, methodologies, and reusable components.
            </p>

            <h3>5.4 Feedback</h3>
            <p>
              Any feedback, suggestions, or ideas you provide regarding our services may be
              used by Tech Scape AI LLP without restriction or compensation to you.
            </p>
          </section>

          <section className="legal-section" id="confidentiality">
            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information
              shared during the course of service engagement. Confidential information shall
              not be disclosed to third parties without prior written consent, except as
              required by law. This obligation survives termination of any service engagement.
            </p>
          </section>

          <section className="legal-section" id="payment">
            <h2>7. Payment Terms</h2>
            <ul>
              <li>
                Invoices are payable within the timeframe specified in the engagement
                agreement
              </li>
              <li>
                Late payments may attract interest at the rate specified in the engagement
                agreement
              </li>
              <li>
                Tech Scape AI LLP reserves the right to suspend services for non-payment
              </li>
              <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
              <li>
                Goods and Services Tax (GST) will be charged as applicable under Indian
                tax law
              </li>
            </ul>
          </section>

          <section className="legal-section" id="warranties">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              Our services and AI agents are provided on an{' '}
              <strong>"as is" and "as available"</strong> basis without warranties of any
              kind, express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, uninterrupted or error-free
              operation, or accuracy of AI-generated content.
            </p>
            <p>
              AI-generated outputs should be reviewed by qualified professionals before
              being relied upon for critical business, legal, financial, or medical decisions.
            </p>
          </section>

          <section className="legal-section" id="liability">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable Indian law, Tech Scape AI LLP,
              its partners, employees, and affiliates shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>
                Damages arising from reliance on AI-generated content or recommendations
              </li>
              <li>
                Damages resulting from unauthorized access to or alteration of your data
              </li>
              <li>
                Any damages exceeding the total fees paid by you to Tech Scape AI LLP in
                the three months preceding the claim
              </li>
            </ul>
          </section>

          <section className="legal-section" id="indemnification">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Tech Scape AI LLP and its
              partners, employees, and affiliates from and against any claims, losses,
              damages, liabilities, and expenses (including legal fees) arising from your
              violation of these Terms, misuse of our AI agents or services, data you provide
              that infringes third-party rights, or your violation of applicable law.
            </p>
          </section>

          <section className="legal-section" id="termination">
            <h2>11. Termination</h2>
            <p>
              Tech Scape AI LLP reserves the right to suspend or terminate access to our
              services at any time for violation of these Terms, non-payment of fees, conduct
              that we determine to be harmful, or legal or regulatory requirements. Upon
              termination, all licenses granted to you cease immediately.
            </p>
          </section>

          <section className="legal-section" id="third-party">
            <h2>12. Third-Party Services and Links</h2>
            <p>
              Our Platform may integrate with or link to third-party services. Tech Scape AI
              LLP is not responsible for the content, privacy practices, or terms of
              third-party services. Your use of third-party services is governed by their
              respective terms.
            </p>
          </section>

          <section className="legal-section" id="governing-law">
            <h2>13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India.
              Any dispute arising out of or in connection with these Terms shall be subject
              to the exclusive jurisdiction of the courts of{' '}
              <strong>Hyderabad, Telangana, India</strong>.
            </p>
            <p>
              Prior to initiating legal proceedings, the parties agree to attempt resolution
              through good-faith negotiation for a period of 30 days from written notice of
              the dispute.
            </p>
          </section>

          <section className="legal-section" id="changes">
            <h2>14. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material
              changes by updating the effective date. Continued use of our services after
              changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="legal-section legal-contact" id="contact">
            <h2>15. Contact Us</h2>
            <div className="legal-contact-card">
              <p><strong>Tech Scape AI LLP</strong></p>
              <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
              <p>
                <strong>General:</strong>{' '}
                <a href="mailto:info@techscapeai.in">info@techscapeai.in</a>
              </p>
              <p>
                <strong>Legal Queries:</strong>{' '}
                <a href="mailto:legal@techscapeai.in">legal@techscapeai.in</a>
              </p>
            </div>
          </section>

          </div>
          </div>

        </div>
      </main>
    </>
  )
}
