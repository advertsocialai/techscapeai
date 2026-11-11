import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import CRTFonts from './CRTFonts'
import { submitCrtApplication, checkResume } from '../../lib/crtApplications'
import './crt-page.css'

// NOTE: the Figma file shows these as dropdowns without listing the options,
// so these lists are a sensible default. Edit freely.
const QUALIFICATIONS = [
  'B.Tech / B.E.', 'B.Sc', 'BCA', 'B.Com', 'BBA', 'B.A.',
  'M.Tech / M.E.', 'MCA', 'M.Sc', 'MBA', 'Diploma', 'Other',
]
const YEARS = ['1st year', '2nd year', '3rd year', '4th year / final year', 'Graduated']
const AREAS = [
  'AI Engineering & AI Basics',
  'Python Programming & Networking',
  'Business Analysis & ECBA Foundations',
  'Professional Development & Mock Interviews',
  'Not sure yet',
]

// Country codes for the mobile number. India is the default.
const COUNTRIES = [
  { code: '+91', label: 'IN +91', digits: [10, 10] },
  { code: '+1', label: 'US/CA +1', digits: [10, 10] },
  { code: '+44', label: 'UK +44', digits: [10, 10] },
  { code: '+971', label: 'UAE +971', digits: [8, 9] },
  { code: '+61', label: 'AU +61', digits: [9, 9] },
  { code: '+65', label: 'SG +65', digits: [8, 8] },
  { code: '+966', label: 'SA +966', digits: [9, 9] },
  { code: '+974', label: 'QA +974', digits: [8, 8] },
  { code: '+977', label: 'NP +977', digits: [10, 10] },
  { code: '+880', label: 'BD +880', digits: [10, 10] },
  { code: '+94', label: 'LK +94', digits: [9, 9] },
  { code: '+49', label: 'DE +49', digits: [10, 11] },
]
const countryOf = (code) => COUNTRIES.find((c) => c.code === code) || COUNTRIES[0]

const EMPTY = {
  countryCode: '+91',
  fullName: '', email: '', mobile: '', city: '',
  college: '', qualification: '', yearOfStudy: '', learningArea: '',
  consent: false,
  website: '', // honeypot: real users never see or fill this
}

function validate(v, resume) {
  const e = {}
  if (!v.fullName.trim()) e.fullName = 'Please enter your full name.'
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  const c = countryOf(v.countryCode)
  const okLen = v.mobile.length >= c.digits[0] && v.mobile.length <= c.digits[1]
  const okStart = v.countryCode !== '+91' || /^[6-9]/.test(v.mobile)
  if (!okLen || !okStart) {
    e.mobile = v.countryCode === '+91'
      ? 'Enter a valid 10-digit mobile number.'
      : `Enter a valid mobile number for ${c.label}.`
  }
  if (!v.city.trim()) e.city = 'Please enter your city.'
  if (!v.college.trim()) e.college = 'Please enter your institution name.'
  if (!v.qualification) e.qualification = 'Please select your qualification.'
  if (!v.yearOfStudy) e.yearOfStudy = 'Please select your year of study.'
  if (!v.learningArea) e.learningArea = 'Please choose a preferred learning area.'
  if (!resume) e.resume = 'Please upload your resume.'
  if (!v.consent) e.consent = 'Please confirm to continue.'
  return e
}

function Field({ id, label, error, children, className = '' }) {
  return (
    <div className={`crt-field ${className}`.trim()}>
      <label htmlFor={id}>{label} <span className="crt-req" aria-hidden="true">*</span></label>
      {children}
      {error && <p className="crt-error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  )
}

export default function CRTRegisterPage() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [reference, setReference] = useState('')
  const [resume, setResume] = useState(null)
  const resumeInput = useRef(null)

  const set = (name) => (e) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    if (name === 'mobile') {
      let d = value.replace(/\D/g, '')
      if (values.countryCode === '+91' && d.length > 10 && d.startsWith('91')) d = d.slice(2) // pasted +91 numbers
      value = d.slice(0, countryOf(values.countryCode).digits[1])
    }
    if (name === 'countryCode') {
      // trim an already-typed number to the new country's maximum length
      const max = countryOf(value).digits[1]
      setValues((p) => ({ ...p, countryCode: value, mobile: p.mobile.slice(0, max) }))
      if (errors.mobile) setErrors((p) => ({ ...p, mobile: undefined }))
      return
    }
    setValues((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const pickResume = (e) => {
    const file = e.target.files?.[0] || null
    setResume(file)
    setErrors((p) => ({ ...p, resume: file ? checkResume(file) || undefined : undefined }))
  }
  const clearResume = () => {
    setResume(null)
    setErrors((p) => ({ ...p, resume: undefined }))
    if (resumeInput.current) resumeInput.current.value = ''
  }

  const aria = (name) => ({
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  async function onSubmit(ev) {
    ev.preventDefault()
    if (submitting) return
    setFormError('')

    const found = validate(values, resume)
    const resumeProblem = checkResume(resume)
    if (resumeProblem) found.resume = resumeProblem
    setErrors(found)
    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      document.getElementById(firstBad)?.focus()
      return
    }

    // Bots fill hidden fields. Pretend it worked, send nothing.
    if (values.website) {
      setReference('CRT-PENDING')
      return
    }

    setSubmitting(true)
    try {
      const ref = await submitCrtApplication({
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        mobile: `${values.countryCode}${values.mobile}`,
        city: values.city.trim(),
        college: values.college.trim(),
        qualification: values.qualification,
        yearOfStudy: values.yearOfStudy,
        learningArea: values.learningArea,
        consent: values.consent,
      }, resume)
      setReference(ref)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      if (err.message === 'ALREADY_APPLIED') {
        setErrors({ email: 'An application with this email address has already been submitted.' })
        document.getElementById('email')?.focus()
      } else {
        setFormError(err.message || 'Something went wrong. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  const seo = (
    <>
      <SEO
        title="Apply for the CRT Pilot Cohort | Tech Scape AI"
        description="Apply for the first Tech Scape AI Campus Recruitment & Training pilot cohort. 12 weeks, fully online, 25 seats."
        canonical="/crt/register"
      />
      <CRTFonts />
    </>
  )

  /* ---------------- Application submitted (Figma, Page 1: 03 Application Submitted) ---------------- */
  if (reference) {
    return (
      <>
        {seo}
        <div className="crt-page">
          <section className="crt-done" aria-live="polite">
            <div className="crt-done-halo crt-pop" aria-hidden="true">
              <div className="crt-done-icon crt-pop" style={{ '--d': '180ms' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline className="crt-check" pathLength="1" points="5 12.5 10 17.5 19 7" />
                </svg>
              </div>
            </div>
            <h1 className="crt-rise" style={{ '--d': '420ms' }}>Application received!</h1>
            <p className="crt-done-lead crt-rise" style={{ '--d': '500ms' }}>
              Thank you for applying to the Tech Scape AI CRT Pilot Cohort. Our admissions team will review your application.
            </p>

            <div className="crt-ref crt-rise" style={{ '--d': '600ms' }}>
              <p className="crt-ref-label">YOUR APPLICATION REFERENCE</p>
              <p className="crt-ref-value">{reference}</p>
            </div>

            <h2 className="crt-rise" style={{ '--d': '700ms' }}>What happens next?</h2>
            <p className="crt-done-next crt-rise" style={{ '--d': '780ms' }}>
              We will contact you using the email address and mobile number provided. Please wait for an official seat offer before making any payment.
            </p>
            <Link className="crt-done-back crt-rise" style={{ '--d': '860ms' }} to="/crt">← Back to the CRT program</Link>
          </section>
        </div>
      </>
    )
  }

  /* ---------------- Registration form (Figma, Page 1: 02 Student Registration) ---------------- */
  return (
    <>
      {seo}
      <div className="crt-page">
        <section className="crt-reg-hero">
          <div className="crt-wrap">
            <h1 className="crt-rise">Start your CRT journey.</h1>
            <p className="crt-rise" style={{ '--d': '80ms' }}>Complete the application below to be considered for the first Tech Scape AI pilot cohort.</p>
            <span className="crt-fee-pill crt-rise" style={{ '--d': '160ms' }}>₹2,000 • Complete program</span>
          </div>
        </section>

        <div className="crt-wrap crt-reg-grid">
          <form className="crt-form crt-rise" style={{ '--d': '200ms' }} onSubmit={onSubmit} noValidate>
            <p className="crt-kicker">REGISTRATION FORM</p>
            <h2>Student application</h2>
            <p className="crt-form-sub">All four learning modules are included in this 12-week online program.</p>

            <p className="crt-group">PERSONAL INFORMATION</p>
            <div className="crt-fields">
              <Field id="fullName" label="Full name" error={errors.fullName}>
                <input id="fullName" type="text" autoComplete="name" placeholder="Enter your full name" value={values.fullName} onChange={set('fullName')} maxLength={120} {...aria('fullName')} />
              </Field>
              <Field id="email" label="Email address" error={errors.email}>
                <input id="email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={set('email')} maxLength={200} {...aria('email')} />
              </Field>
              <Field id="mobile" label="Mobile number" error={errors.mobile}>
                <div className="crt-phone">
                  <select aria-label="Country code" className="crt-phone-code" value={values.countryCode} onChange={set('countryCode')}>
                    {COUNTRIES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
                  </select>
                  <input id="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder={values.countryCode === '+91' ? '10-digit mobile number' : 'Mobile number'} value={values.mobile} onChange={set('mobile')} {...aria('mobile')} />
                </div>
              </Field>
              <Field id="city" label="City" error={errors.city}>
                <input id="city" type="text" autoComplete="address-level2" placeholder="Your city" value={values.city} onChange={set('city')} maxLength={80} {...aria('city')} />
              </Field>
            </div>

            <p className="crt-group">EDUCATION DETAILS</p>
            <div className="crt-fields">
              <Field id="college" label="College / University" error={errors.college}>
                <input id="college" type="text" placeholder="Enter institution name" value={values.college} onChange={set('college')} maxLength={160} {...aria('college')} />
              </Field>
              <Field id="qualification" label="Qualification" error={errors.qualification}>
                <select id="qualification" value={values.qualification} onChange={set('qualification')} {...aria('qualification')}>
                  <option value="" disabled>Select qualification</option>
                  {QUALIFICATIONS.map((q) => <option key={q} value={q}>{q}</option>)}
                </select>
              </Field>
              <Field id="yearOfStudy" label="Year of study" error={errors.yearOfStudy}>
                <select id="yearOfStudy" value={values.yearOfStudy} onChange={set('yearOfStudy')} {...aria('yearOfStudy')}>
                  <option value="" disabled>Select current year / graduation year</option>
                  {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </Field>
              <Field id="learningArea" label="Preferred learning area" error={errors.learningArea}>
                <select id="learningArea" value={values.learningArea} onChange={set('learningArea')} {...aria('learningArea')}>
                  <option value="" disabled>Choose an area of interest</option>
                  {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </Field>
            </div>

            <div className="crt-resume">
              <label htmlFor="resume">Resume <span className="crt-req" aria-hidden="true">*</span> <span>(PDF, DOC or DOCX · max 5 MB)</span></label>
              <input
                id="resume"
                ref={resumeInput}
                className="crt-file"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={pickResume}
                {...aria('resume')}
              />
              <div className="crt-resume-box">
                <button type="button" className="crt-resume-btn" onClick={() => resumeInput.current?.click()}>
                  {resume ? 'Change file' : 'Add resume'}
                </button>
                {resume ? (
                  <span className="crt-resume-name">
                    {resume.name}
                    <button type="button" className="crt-resume-x" onClick={clearResume} aria-label="Remove resume">×</button>
                  </span>
                ) : (
                  <span className="crt-resume-hint">No file chosen</span>
                )}
              </div>
              {errors.resume && <p className="crt-error" id="resume-error" role="alert">{errors.resume}</p>}
            </div>

            {/* honeypot */}
            <div className="crt-hp" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
            </div>

            <div className="crt-consent">
              <label>
                <input id="consent" type="checkbox" checked={values.consent} onChange={set('consent')} {...aria('consent')} />
                <span>I confirm that the information provided is accurate and agree to be contacted about my CRT application. <span className="crt-req" aria-hidden="true">*</span></span>
              </label>
              {errors.consent && <p className="crt-error" id="consent-error" role="alert">{errors.consent}</p>}
            </div>

            {formError && <p className="crt-form-error" role="alert">{formError}</p>}

            <button className="crt-submit" type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : <>Submit application <span aria-hidden="true">→</span></>}
            </button>
            <p className="crt-privacy">Your information will be used to process your application and communicate with you about the program.</p>
          </form>

          <aside className="crt-side crt-rise" style={{ '--d': '320ms' }}>
            <div className="crt-summary">
              <p className="crt-kicker crt-kicker--peach">FIRST PILOT COHORT</p>
              <p className="crt-summary-fee">₹2,000</p>
              <p className="crt-summary-sub">Complete program fee</p>
              <hr />
              <p>12 weeks &nbsp;•&nbsp; 24 sessions &nbsp;•&nbsp; 36 hours</p>
              <p>100% Online</p>
              <p>Includes all four learning modules</p>
              <span className="crt-seat-pill">25 seats in pilot cohort</span>
            </div>
            <p className="crt-side-note">
              Submitting an application does not guarantee admission or reserve a seat. Payment instructions are shared only after an offer.
            </p>
          </aside>
        </div>
      </div>
    </>
  )
}
