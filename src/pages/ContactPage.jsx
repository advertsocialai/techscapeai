import { useState } from 'react'
import { Mail, MessageSquare, User, Building2, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { submitContact } from '../services/api'

const INTEREST_OPTIONS = [
  'Trend Discovery',
  'Tool Analysis',
  'Custom Reports',
  'Enterprise Plan',
  'API Integration',
  'General Inquiry',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('loading')
    setErrorMessage('')

    try {
      await submitContact(form)
      setStatus('success')
      setForm({ name: '', email: '', company: '', interest: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-5">
            <span className="text-xs font-semibold text-purple-300 tracking-widest uppercase">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Start your journey with
            <br />
            <span className="gradient-text">TechScape AI</span>
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            Ready to navigate the tech landscape smarter? Tell us about your goals and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                iconColor: 'text-purple-400',
                iconBg: 'bg-purple-500/10',
                title: 'Email Us',
                value: 'hello@techscapeai.com',
              },
              {
                icon: MessageSquare,
                iconColor: 'text-cyan-400',
                iconBg: 'bg-cyan-500/10',
                title: 'Live Chat',
                value: 'Available 9am–6pm UTC',
              },
              {
                icon: Building2,
                iconColor: 'text-emerald-400',
                iconBg: 'bg-emerald-500/10',
                title: 'Enterprise Sales',
                value: 'enterprise@techscapeai.com',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-5 flex items-center gap-4"
                  style={{
                    background: 'rgba(17, 24, 39, 0.5)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] font-medium mb-0.5">{item.title}</p>
                    <p className="text-sm font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              )
            })}

            {/* Trust signals */}
            <div
              className="rounded-2xl p-5 mt-6"
              style={{
                background: 'rgba(17, 24, 39, 0.5)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-4">You're in good company</p>
              <div className="space-y-3">
                {[
                  '12,000+ teams trust TechScape AI',
                  '48M+ insights generated',
                  'SOC 2 Type II certified',
                  '99.9% uptime SLA',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-[#9CA3AF]">
                    <div className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-7 lg:p-8"
              style={{
                background: 'rgba(17, 24, 39, 0.5)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-[#9CA3AF] max-w-xs mx-auto">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 text-sm font-semibold text-white rounded-lg btn-primary"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563]" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Smith"
                          className="w-full pl-10 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#4B5563] focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563]" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@company.com"
                          className="w-full pl-10 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#4B5563] focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-[#9CA3AF] mb-2">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563]" />
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full pl-10 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#4B5563] focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-sm font-medium text-[#9CA3AF] mb-2">I'm interested in</label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-[#9CA3AF] focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-[#111827]">Select an option...</option>
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111827]">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your goals and how TechScape AI can help..."
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#4B5563] focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-sm text-red-400">{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-4 text-[15px] font-semibold text-white rounded-xl btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
