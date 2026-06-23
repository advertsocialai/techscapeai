import { useState } from 'react'
import { submitContactForm } from '../lib/contact';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  iAm: '',
  interestedIn: '',
  message: '',
}

export default function ContactFormOnly() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitContactForm({
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        i_am: form.iAm,
        interested_in: form.interestedIn,
        message: form.message,
      })
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.message ?? 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto card backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 md:p-10 shadow-2xl">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 tracking-tight">
        Send Us a Message
      </h3>

      <form className="space-y-10" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
          <label className="text-[14px] uppercase tracking-widest text-[#c5c5c5] block mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={update('fullName')}
            className="bg-transparent w-full text-white outline-none py-1 placeholder:text-white/10 text-sm md:text-base"
          />
        </div>

        {/* Email */}
        <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
          <label className="text-[14px] uppercase tracking-widest text-[#c5c5c5] block mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            className="bg-transparent w-full text-white outline-none py-1 placeholder:text-white/10 text-sm md:text-base"
          />
        </div>

        {/* Phone */}
        <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
          <label className="text-[14px] uppercase tracking-widest text-[#c5c5c5] block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            className="bg-transparent w-full text-white outline-none py-1 placeholder:text-white/10 text-sm md:text-base"
          />
        </div>

        {/* I am a */}
        <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
          <label className="text-[14px] uppercase tracking-widest text-[#c5c5c5] block mb-1">
            I am a
          </label>
          <select
            value={form.iAm}
            onChange={update('iAm')}
            className="bg-transparent w-full text-white outline-none py-1 text-sm md:text-base cursor-pointer"
          >
            <option value="" className="text-black">Select</option>
            <option value="business" className="text-black">A Business</option>
            <option value="student" className="text-black">A Student</option>
            <option value="partner" className="text-black">A Partner</option>
            <option value="other" className="text-black">Other</option>
          </select>
        </div>

        {/* Interested In */}
        <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
          <label className="text-[14px] uppercase tracking-widest text-[#c5c5c5] block mb-1">
            I am interested in
          </label>
          <select
            value={form.interestedIn}
            onChange={update('interestedIn')}
            className="bg-transparent w-full text-white outline-none py-1 text-sm md:text-base cursor-pointer"
          >
            <option value="" className="text-black">Select</option>
            <option value="ai-agents" className="text-black">AI Agents &amp; Automation</option>
            <option value="digital-services" className="text-black">Digital Services &amp; Transformation</option>
            <option value="training" className="text-black">Technology Training &amp; EdTech</option>
            <option value="crm-saas" className="text-black">CRM &amp; SaaS for Small Business</option>
            <option value="other" className="text-black">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
          <label className="text-[14px] uppercase tracking-widest text-[#c5c5c5] block mb-1">
            Tell us about your need
          </label>
          <textarea
            rows={2}
            value={form.message}
            onChange={update('message')}
            className="bg-transparent w-full text-white outline-none py-1 resize-none placeholder:text-white/10 text-sm"
          />
        </div>

        {/* Alerts / Status */}
        {status === 'success' && (
          <div className="rounded-xl px-4 py-3 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
            Thanks — we received your message and will get back within 24 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="rounded-xl px-4 py-3 text-sm text-red-300 bg-red-500/10 border border-red-500/30">
            {errorMsg}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ background: 'linear-gradient(90deg, #3D75F3 0%, #A396FF 50%, #F5A086 100%)' }}
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}