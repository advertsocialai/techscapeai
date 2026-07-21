import { useEffect } from 'react'
import SEO from '../components/SEO'

export default function TrustCenter() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEO
        title="Trust Center | Tech Scape AI"
        description="Tech Scape AI LLP Trust Center — our AI ethics principles, security practices, data governance, and compliance commitments including Anthropic CPN partnership."
        canonical="/trust-center"
      />

      <main className="legal-page">
        <div className="legal-container">

          <div className="legal-header">
            <span className="legal-badge">Trust &amp; Safety</span>
            <h1>Trust Center</h1>
            <p className="legal-meta">Last Updated: June 27, 2026</p>
            <p className="legal-intro">
              At Tech Scape AI LLP, trust is foundational to everything we build. As an AI
              company developing and deploying intelligent agents and automated workflows for
              businesses across India, Canada, and globally, we take our responsibility to
              our clients, users, and the broader public seriously. This Trust Center
              provides transparency into our security posture, AI ethics principles, data
              governance practices, and compliance commitments.
            </p>
          </div>

          <section className="legal-section">
            <h2>1. Our AI Ethics Principles</h2>
            <p>
              Tech Scape AI LLP is committed to building AI systems that are safe,
              responsible, and beneficial. Our AI development and deployment practices are
              guided by the following core principles:
            </p>

            <div className="trust-principle">
              <h3>🔒 Safety First</h3>
              <p>
                All AI agents we build are designed with safety as a primary constraint.
                We implement content filtering, output monitoring, and human oversight
                mechanisms to prevent harmful outputs.
              </p>
            </div>

            <div className="trust-principle">
              <h3>🔍 Transparency</h3>
              <p>
                We are transparent with users when they are interacting with an AI agent.
                Our AI agents clearly identify themselves as AI systems and do not
                impersonate humans.
              </p>
            </div>

            <div className="trust-principle">
              <h3>⚖️ Fairness</h3>
              <p>
                We actively work to identify and mitigate bias in our AI systems. Our
                agents are designed to treat all users equitably regardless of language,
                background, or identity.
              </p>
            </div>

            <div className="trust-principle">
              <h3>🛡️ Privacy by Design</h3>
              <p>
                Data minimization, consent, and privacy are built into our AI systems
                from the ground up — not added as afterthoughts.
              </p>
            </div>

            <div className="trust-principle">
              <h3>👤 Human Oversight</h3>
              <p>
                Our AI agents operate with human-in-the-loop principles. Decisions with
                significant consequences for users are subject to human review upon request.
              </p>
            </div>

            <div className="trust-principle">
              <h3>📊 Accountability</h3>
              <p>
                We take responsibility for the AI systems we build and deploy. We maintain
                logs, conduct regular reviews, and provide clear channels for users to
                raise concerns.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>2. AI Infrastructure and Partners</h2>

            <h3>2.1 Anthropic Claude Partner Network</h3>
            <p>
              Tech Scape AI LLP is an accepted partner in{' '}
              <strong>Anthropic's Claude Partner Network (CPN)</strong>. Our AI agents
              including Klara are powered by Anthropic's Claude large language models —
              one of the most safety-focused AI systems available today.
            </p>
            <p>
              Anthropic's Constitutional AI approach and safety research align with our
              commitment to responsible AI deployment. By building on Claude, we inherit
              robust safety measures including:
            </p>
            <ul>
              <li>Refusal of harmful, illegal, or unethical requests</li>
              <li>Resistance to prompt injection and jailbreak attempts</li>
              <li>Consistent, predictable behavior across interactions</li>
              <li>No persistent memory between sessions by default</li>
            </ul>

            <h3>2.2 No Unauthorized Model Training</h3>
            <p>
              Client data and user conversations submitted through our AI agents are{' '}
              <strong>not used to train AI models</strong> without explicit written consent.
              Data processed through Anthropic's Claude API is subject to Anthropic's data
              processing terms, which prohibit using customer data for model training
              without consent.
            </p>

            <h3>2.3 NxtWave Technologies Inc. Partnership</h3>
            <p>
              Tech Scape AI LLP operates as the AI delivery arm of the NxtWave ecosystem.
              NxtWave Technologies Inc. (Scarborough, Ontario, Canada) is our Canadian
              affiliate and both entities are accepted Anthropic CPN partners. Data flows
              between these entities are governed by inter-company data processing
              agreements and are disclosed in our{' '}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Security Practices</h2>

            <h3>3.1 Infrastructure Security</h3>
            <ul>
              <li>
                <strong>HTTPS everywhere:</strong> All web properties enforce HTTPS with
                TLS encryption
              </li>
              <li>
                <strong>Cloud security:</strong> Hosted on Vercel with industry-standard
                security certifications
              </li>
              <li>
                <strong>Access controls:</strong> Role-based access control (RBAC) for all
                internal systems
              </li>
              <li>
                <strong>API security:</strong> All APIs protected with authentication and
                rate limiting
              </li>
            </ul>

            <h3>3.2 Application Security</h3>
            <ul>
              <li>Input validation and sanitization on all user-facing forms</li>
              <li>
                Protection against common web vulnerabilities (XSS, CSRF, injection)
              </li>
              <li>Dependency vulnerability scanning on all code repositories</li>
              <li>Secure credential management — no hardcoded secrets</li>
            </ul>

            <h3>3.3 Operational Security</h3>
            <ul>
              <li>Employee confidentiality agreements</li>
              <li>Principle of least privilege for system access</li>
              <li>Regular security reviews during development</li>
              <li>Incident response procedures in place</li>
            </ul>

            <h3>3.4 Incident Response</h3>
            <p>
              In the event of a security incident affecting personal data, Tech Scape AI
              LLP will investigate and contain the incident promptly, notify affected
              clients and users within a reasonable timeframe as required by applicable law,
              take steps to prevent recurrence, and report to relevant authorities as
              required under the DPDP Act 2023 and IT Act 2000.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Data Governance</h2>

            <h3>4.1 Data Residency</h3>
            <div className="trust-table">
              <table>
                <thead>
                  <tr>
                    <th>Data Type</th>
                    <th>Primary Location</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website and platform data</td>
                    <td>India / Global CDN</td>
                    <td>Vercel edge network</td>
                  </tr>
                  <tr>
                    <td>AI agent conversation logs</td>
                    <td>Anthropic servers (US)</td>
                    <td>Subject to Anthropic DPA</td>
                  </tr>
                  <tr>
                    <td>Client project data</td>
                    <td>As agreed per engagement</td>
                    <td>Specified in engagement agreement</td>
                  </tr>
                  <tr>
                    <td>Business analytics</td>
                    <td>Google Analytics (US)</td>
                    <td>Anonymized, aggregated</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>4.2 Data Retention</h3>
            <p>
              We retain data only for as long as necessary. See our{' '}
              <a href="/privacy-policy">Privacy Policy</a> for detailed retention periods
              by data category.
            </p>

            <h3>4.3 Data Subject Rights</h3>
            <p>
              Users and clients may exercise their data rights including access, correction,
              and erasure by contacting{' '}
              <a href="mailto:privacy@techscapeai.in">privacy@techscapeai.in</a>. We
              respond within 30 days.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Compliance and Certifications</h2>

            <div className="trust-compliance-grid">
              <div className="trust-compliance-item">
                <h3>DPDP Act 2023</h3>
                <p>
                  We align our data handling practices with the Digital Personal Data
                  Protection Act, 2023 principles, pending full notification of implementing
                  rules by the Government of India.
                </p>
                <span className="trust-badge in-progress">In Progress</span>
              </div>

              <div className="trust-compliance-item">
                <h3>IT Act 2000</h3>
                <p>
                  We comply with the Information Technology Act, 2000 and applicable rules
                  including the IT (SPDI) Rules, 2011.
                </p>
                <span className="trust-badge compliant">Compliant</span>
              </div>

              <div className="trust-compliance-item">
                <h3>PIPEDA (Canada)</h3>
                <p>
                  For services delivered to Canadian clients through NxtWave Technologies
                  Inc., we align with PIPEDA requirements.
                </p>
                <span className="trust-badge compliant">Aligned</span>
              </div>

              <div className="trust-compliance-item">
                <h3>Anthropic CPN</h3>
                <p>
                  Accepted partner in Anthropic's Claude Partner Network — reflecting our
                  commitment to responsible AI development.
                </p>
                <span className="trust-badge compliant">Active Partner</span>
              </div>

              <div className="trust-compliance-item">
                <h3>ISO 27001</h3>
                <p>
                  We are working toward ISO 27001 certification for Information Security
                  Management as our operations scale.
                </p>
                <span className="trust-badge planned">Planned — 2027</span>
              </div>

              <div className="trust-compliance-item">
                <h3>Startup India — DPIIT</h3>
                <p>
                  Tech Scape AI LLP is pursuing DPIIT recognition under the Startup India
                  initiative for recognized Indian startup status.
                </p>
                <span className="trust-badge in-progress">In Progress</span>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>6. Responsible AI Use Policy</h2>
            <p>
              Tech Scape AI LLP will not develop, deploy, or support AI systems that are
              designed or intended to:
            </p>
            <ul>
              <li>Deceive users about their AI nature</li>
              <li>
                Engage in mass surveillance or unauthorized tracking of individuals
              </li>
              <li>Generate or amplify harmful, hateful, or illegal content</li>
              <li>Discriminate against individuals on protected characteristics</li>
              <li>Manipulate users psychologically against their own interests</li>
              <li>
                Undermine democratic processes or spread deliberate misinformation
              </li>
            </ul>
            <p>
              We reserve the right to decline any engagement request that conflicts with
              these principles, regardless of commercial value.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Vulnerability Disclosure</h2>
            <p>
              If you discover a security vulnerability in any Tech Scape AI system, we
              encourage responsible disclosure. Please report it to us privately before
              public disclosure:
            </p>
            <div className="legal-contact-card">
              <p>
                <strong>Security Email:</strong>{' '}
                <a href="mailto:security@techscapeai.in">security@techscapeai.in</a>
              </p>
              <p>
                We commit to acknowledging reports within <strong>48 hours</strong> and
                providing a resolution timeline within <strong>10 business days</strong>.
              </p>
            </div>
          </section>

          <section className="legal-section legal-contact">
            <h2>8. Contact Our Trust Team</h2>
            <div className="legal-contact-card">
              <p><strong>Tech Scape AI LLP</strong></p>
              <p>
                <strong>Grievance &amp; Trust Officer:</strong> Rakesh Chandra Talakaturi
              </p>
              <p><strong>Designation:</strong> Co-Founder &amp; Chief Growth Officer</p>
              <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
              <p>
                <strong>Privacy:</strong>{' '}
                <a href="mailto:privacy@techscapeai.in">privacy@techscapeai.in</a>
              </p>
              <p>
                <strong>Security:</strong>{' '}
                <a href="mailto:security@techscapeai.in">security@techscapeai.in</a>
              </p>
              <p>
                <strong>General:</strong>{' '}
                <a href="mailto:info@techscapeai.in">info@techscapeai.in</a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
