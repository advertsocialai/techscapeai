import { useEffect } from 'react'
import SEO from '../components/SEO'

export default function Accessibility() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEO
        title="Accessibility Statement | Tech Scape AI"
        description="Tech Scape AI LLP is committed to WCAG 2.1 Level AA accessibility standards. Learn about our accessibility features and how to report barriers."
        canonical="/accessibility"
      />

      <main className="legal-page">
        <div className="legal-container">

          <div className="legal-header">
            <span className="legal-badge">Legal</span>
            <h1>Accessibility Statement</h1>
            <p className="legal-meta">
              Effective Date: June 27, 2026 &nbsp;|&nbsp; Last Updated: June 27, 2026
            </p>
            <p className="legal-intro">
              Tech Scape AI LLP is committed to making our website and digital products
              accessible to the widest possible audience, including people with disabilities.
              We believe that AI-powered technology should be inclusive and we strive to meet
              international accessibility standards across all our digital touchpoints.
            </p>
          </div>

          <section className="legal-section">
            <h2>1. Our Commitment</h2>
            <p>
              Tech Scape AI LLP is committed to ensuring digital accessibility for people
              with diverse abilities. We aim to conform to the{' '}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> as
              published by the World Wide Web Consortium (W3C). These guidelines explain
              how to make web content more accessible to people with disabilities including
              visual, auditory, physical, speech, cognitive, language, learning, and
              neurological disabilities.
            </p>
            <p>
              We continuously work to improve the accessibility of our website and
              AI-powered products to ensure we provide equal access and equal opportunity
              to all users.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Conformance Status</h2>
            <p>
              The techscapeai.in website is <strong>partially conformant</strong> with
              WCAG 2.1 Level AA. Partially conformant means that some parts of the content
              do not fully conform to the accessibility standard. We are actively working to
              address known gaps.
            </p>
            <p>Our current accessibility implementation includes:</p>
            <ul>
              <li>
                <strong>Semantic HTML structure</strong> with proper heading hierarchy
                (H1, H2, H3) across all pages
              </li>
              <li>
                <strong>Descriptive ALT text</strong> for meaningful images across the
                website
              </li>
              <li>
                <strong>Keyboard navigation support</strong> for primary navigation and
                interactive elements
              </li>
              <li>
                <strong>Sufficient color contrast</strong> ratios for text and background
                combinations
              </li>
              <li>
                <strong>Responsive design</strong> optimized for a range of devices and
                screen sizes
              </li>
              <li>
                <strong>HTTPS encryption</strong> across all pages for secure browsing
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Technical Specifications</h2>
            <p>
              The Tech Scape AI website relies on the following technologies for conformance
              with WCAG 2.1:
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3 (Tailwind CSS)</li>
              <li>JavaScript (React)</li>
              <li>WAI-ARIA (Accessible Rich Internet Applications)</li>
            </ul>

            <h3>3.1 Browser Compatibility</h3>
            <p>
              Our website is optimized to be accessible on the following modern browsers:
            </p>
            <ul>
              <li>Google Chrome (latest version)</li>
              <li>Mozilla Firefox (latest version)</li>
              <li>Microsoft Edge (latest version)</li>
              <li>Apple Safari (latest version)</li>
              <li>Mobile browsers on iOS and Android</li>
            </ul>

            <h3>3.2 Screen Resolution</h3>
            <p>
              Our website is designed to be usable across a variety of screen resolutions
              and device types including desktop, tablet, and mobile with a minimum of
              scrolling, panning, and zooming required.
            </p>

            <h3>3.3 Screen Reader Support</h3>
            <p>We aim to support compatibility with the following screen readers:</p>
            <ul>
              <li>NVDA (NonVisual Desktop Access) with Chrome or Firefox</li>
              <li>JAWS with Chrome or Edge</li>
              <li>VoiceOver with Safari on macOS and iOS</li>
              <li>TalkBack on Android devices</li>
            </ul>

            <h3>3.4 JavaScript</h3>
            <p>
              Our website uses JavaScript (React) for enhanced functionality. Core
              navigation and content remain accessible when JavaScript is limited, though
              some interactive features may require JavaScript to be enabled for full
              functionality.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. AI Agent Accessibility</h2>
            <p>
              Our AI agents including Klara are designed with the following accessibility
              considerations:
            </p>
            <ul>
              <li>
                <strong>Text-based interaction:</strong> All AI agent interfaces support
                text input and output, accessible to screen readers and assistive
                technologies
              </li>
              <li>
                <strong>Clear conversation structure:</strong> Chat interfaces use clearly
                labeled user and agent message bubbles
              </li>
              <li>
                <strong>Keyboard navigable:</strong> Chat interfaces can be operated
                entirely via keyboard
              </li>
              <li>
                <strong>Timeout warnings:</strong> Users are notified before session
                timeouts occur
              </li>
              <li>
                <strong>Error identification:</strong> Input errors are described in text,
                not color alone
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Known Limitations</h2>
            <p>
              Despite our best efforts, some areas of our website may not yet fully meet
              WCAG 2.1 Level AA. Known limitations include:
            </p>
            <ul>
              <li>
                Some SVG illustrations may have limited alt text descriptions — we are
                actively addressing this
              </li>
              <li>
                Certain animated elements may not have reduced motion alternatives — we
                are working to add prefers-reduced-motion support
              </li>
              <li>
                Some third-party embedded content may not fully conform to our
                accessibility standards
              </li>
            </ul>
            <p>
              We are committed to addressing these limitations in our ongoing development
              roadmap.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Formal Complaints</h2>
            <p>
              If you are not satisfied with our response to your accessibility feedback,
              you may contact the relevant regulatory authority in your jurisdiction. In
              India, accessibility standards for digital services are guided by the{' '}
              <strong>Guidelines for Indian Government Websites (GIGW)</strong> and the{' '}
              <strong>Rights of Persons with Disabilities Act, 2016</strong>.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Assessment Approach</h2>
            <p>
              Tech Scape AI LLP assesses the accessibility of our website through the
              following methods:
            </p>
            <ul>
              <li>Self-evaluation by our development team</li>
              <li>
                Automated accessibility testing using tools including Lighthouse and axe
                DevTools
              </li>
              <li>Manual testing with keyboard navigation</li>
              <li>Periodic review during development sprints</li>
            </ul>
            <p>
              We plan to engage third-party accessibility auditors as our platform scales.
            </p>
          </section>

          <section className="legal-section legal-contact">
            <h2>8. Feedback and Contact</h2>
            <p>
              We welcome your feedback on the accessibility of the Tech Scape AI website
              and our AI products. If you experience any barriers to access or have
              suggestions for improvement, please contact us:
            </p>
            <div className="legal-contact-card">
              <p><strong>Tech Scape AI LLP — Accessibility Team</strong></p>
              <p><strong>Contact Person:</strong> Rakesh Chandra Talakaturi</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:accessibility@techscapeai.in">
                  accessibility@techscapeai.in
                </a>
              </p>
              <p>
                <strong>Alternative:</strong>{' '}
                <a href="mailto:info@techscapeai.in">info@techscapeai.in</a>
              </p>
              <p>
                <strong>Response Time:</strong> We aim to respond within{' '}
                <strong>5 business days</strong>
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
