import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Typewriter from './Typewriter';

const I_AM_OPTIONS = ['A Business', 'A Student', 'A Partner', 'Other']
const INTEREST_OPTIONS = [
  'AI Agents & Automation',
  'Digital Services & Transformation',
  'Technology Training & EdTech',
  'CRM & SaaS for Small Business',
  'Other',
]

const CHECK_ITEMS = [
  '30-Minute Discovery Call',
  'No Commitment Required',
  'Get A Clear Action Plan On The Call',
]

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" className="opacity-40" />
      <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function GetStarted() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    iAm: '',
    interestedIn: '',
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', form)
  }

  const typewriterWords = ["Let's Build Something Together"];
  return (
    <section id="get-started" className="relative bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

        {/* --- Header Section --- */}
        <div
          className={`text-center mb-86 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-[#C58E75] uppercase tracking-[0.2em] text-[12px] font-bold mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-semibold text-white mb-6 tracking-tight">
           <Typewriter words={typewriterWords} speed={100} delay={2500} />
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed font-light">
            Whether You're A Business Looking To Automate, A Student Ready To Upskill, Or A Partner Exploring Collaboration.
            The First Conversation Is Always Free. Tell Us What You Need And We'll Tell You Exactly How We Can Help.
          </p>
        </div>

        {/* --- Main Content Wrapper with Background Image --- */}
        <div
          className={`w-full border border-black/5  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          style={{
            backgroundColor: '#050505',
            backgroundImage: "url('/conactusbg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 p-8 md:p-16 lg:p-20 items-center -mt-92 z-20">
            {/* Left: Glassmorphic Contact Form */}
            <div
              className="rounded-[16px] p-8 md:p-12 border border-white/10 backdrop-blur-xl shadow-2xl"
              style={{ background: 'linear-gradient(45deg, rgba(200,147,114,0.9) 0%, rgba(6,6,8,1) 100%)' }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 tracking-tight">Send Us a Message</h3>

              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
                  <label className="text-[16px] uppercase tracking-widest text-rgba(197, 197, 197, 1) block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={update('fullName')}
                    className="bg-transparent w-full text-white outline-none py-1 placeholder:text-white/10 text-sm md:text-base"
                  />
                </div>

                <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
                  <label className="text-[16px] uppercase tracking-widest text-rgba(197, 197, 197, 1) block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className="bg-transparent w-full text-white outline-none py-1 placeholder:text-white/10 text-sm md:text-base"
                  />
                </div>

                <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
                  <label className="text-[16px] uppercase tracking-widest text-rgba(197, 197, 197, 1) block mb-1">Phone Number</label>
                  <input
                    type="phone"
                    required
                    value={form.phone}
                    onChange={update('email')}
                    className="bg-transparent w-full text-white outline-none py-1 placeholder:text-white/10 text-sm md:text-base"
                  />
                </div>
                <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
                  <label className="text-[16px] uppercase tracking-widest text-rgba(197, 197, 197, 1) block mb-1">
                    I am a
                  </label>

                  <select
                    required
                    value={form.role}
                    onChange={update('role')}
                    className="bg-transparent w-full text-white outline-none py-1 text-sm md:text-base"
                  >
                    <option value="" className="text-black">Select</option>
                    <option value="student" className="text-black">Student</option>
                    <option value="developer" className="text-black">Developer</option>
                    <option value="designer" className="text-black">Designer</option>
                    <option value="business" className="text-black">Business Owner</option>
                  </select>
                </div>


                <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
                  <label className="text-[16px] uppercase tracking-widest text-rgba(197, 197, 197, 1) block mb-1">
                    I am interested in
                  </label>

                  <select
                    required
                    value={form.interest}
                    onChange={update('interest')}
                    className="bg-transparent w-full text-white outline-none py-1 text-sm md:text-base"
                  >
                    <option value="" className="text-black">Select</option>
                    <option value="web" className="text-black">Web Development</option>
                    <option value="app" className="text-black">App Development</option>
                    <option value="ai" className="text-black">AI / Machine Learning</option>
                    <option value="design" className="text-black">UI/UX Design</option>
                    <option value="marketing" className="text-black">Digital Marketing</option>
                  </select>
                </div>

                <div className="relative border-b border-white/60 pb-2 focus-within:border-white/40 transition-all">
                  <label className="text-[16px] uppercase tracking-widest text-rgba(197, 197, 197, 1) block mb-1">Tell us about your need</label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={update('message')}
                    className="bg-transparent w-full text-white outline-none py-1 resize-none placeholder:text-white/10 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.98]"
                  style={{ background: 'linear-gradient(90deg, #3D75F3 0%, #A396FF 50%, #F5A086 100%)' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Booking Info Section */}
            <div className="lg:pl-6 text-left lg:-mt-36">
              <h3 className="text-[33px] md:text-[36px] font-semibold text-white mb-6 leading-tight tracking-tight">
                Book a Free Consultation Directly
              </h3>
              <p className="text-white/40 mb-12 text-base md:text-lg leading-relaxed max-w-md">
                Skip the form. Pick a time that works for you and get on a call with our team within 24 hours.
              </p>

              <button
                className="w-full md:w-auto px-10 py-4 rounded-xl font-bold text-white mb-16 border border-white/10 shadow-2xl transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(90deg, #3D75F3 0%, #A396FF 50%, #F5A086 100%)' }}
              >
                Book Your Free Consultation
              </button>

              <div className="space-y-8">
                {CHECK_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-5 group">
                    <div className="flex-shrink-0 p-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                      <CheckIcon />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors text-xs md:text-sm font-semibold uppercase tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Bottom Glows */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}