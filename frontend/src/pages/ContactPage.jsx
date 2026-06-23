import React, { useState } from 'react';
import Typewriter from '../components/Typewriter'
import GetStarted from '../components/GetStarted'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CHECK_ITEMS = [
  'No Commitment Required',
  'Response Within 24 Hours',
  'Tailored To Your Goals',
]

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#3D75F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.5 3.5L5.25 9.75L2.5 7" />
  </svg>
)

const ContactPage = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    companyName: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Data:', formData);
  };

  return (
    <div className="min-h-screen text-white  selection:bg-blue-500/30 w-full overflow-x-hidden relative pt-12 md:pt-20 pb-24">

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          left: '-11.2%', top: '80px', width: '286px', height: '258px',
          background: '#fad4bf',
          filter: 'blur(266.7px)',
          borderRadius: '254px 343px 129px 391px',
          opacity: 3.55,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          right: '-5%', top: '10%', width: '500px', height: '500px',
          background: 'rgba(53, 121, 206, 0.3)',
          filter: 'blur(150px)',
          borderRadius: '100%',
          zIndex: 0,
        }}
      />


      {/* Main Container: Hero Text + Glassmorphism Form */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Side: Hero Text */}
        <div className="md:col-span-7 text-center md:text-left space-y-6">
          <h1 className="font-bold tracking-tight leading-[100%] text-[44px] sm:text-[60px] md:text-[80px] bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)' }}>

            <Typewriter words={['Get in touch']} speed={100} delay={2500} />
            <br />
            <Typewriter words={['with Techscape AI']} speed={100} delay={2500} />

          </h1>
          <p className=" font-normal text-[24px] leading-[100%] text-[#FFFFFF] max-w-[699px] mx-auto md:mx-0 pt-2">
            Whether you're exploring our products, looking to partner, or want to join the team . we'd love to hear from you.
          </p>
        </div>

        <div className="md:col-span-5 w-full max-w-md mx-auto md:max-w-none">
          <div className="bg-transparent border border-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative transition-all duration-300 hover:border-gray-700/50">

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: First Name & Last Name */}
              <div className="space-y-4 ">
                {/* Row 1: Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">First Name <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                  </div>
                </div>

                {/* Row 2: Business Email */}
                <div>
                  <label className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">Business Email <span className="text-red-500">*</span></label>
                  <input type="email" name="businessEmail" required value={formData.businessEmail} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                </div>

                {/* Row 3: Company Name */}
                <div>
                  <label className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                </div>

                {/* Row 4: Dropdown Option */}
                <div>
                  <label className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">I'm reaching about ? <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select name="reason" required value={formData.reason} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer">
                      <option value="">Please Select</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Tech Support</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Row 5: Textarea Message */}
                <div>
                  <label className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">What can we help you with ? <span className="text-red-500">*</span></label>
                  <textarea name="message" rows="3" required value={formData.message} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200 resize-none"></textarea>
                </div>
              </div>
              {/* Let's Talk Button with Exact Fixed Corner Radius */}
              <div className="flex justify-center mt-4">
                <button type="submit" className="text-white  font-medium py-2.5 px-10 rounded-[8px] text-base tracking-wide shadow-lg hover:opacity-90 transition-all duration-200"
                  style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}>
                  Let’s Talk
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>

      {/* Grid Cards Section ("Our ways to connect") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-24 relative z-10 pb-16">
        <h2 className=" font-bold tracking-tight leading-[100%] text-[44px] sm:text-[60px] md:text-[80px] mb-12 text-center md:text-left bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)' }}>
          <Typewriter words={['Our ways to connect']} speed={100} delay={2500} />
        </h2>
        {/* Responsive Grid Layout */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Card 1: Talk To Sales */}
          <div className="bg-gradient-to-r from-[#FF7A00]/[0.15] via-[#0A0A0C] to-[#1B2B4A]/[0.25] border border-white/[0.04] rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:border-white/[0.08] transition-all duration-300 group shadow-2xl min-h-[200px]">
            <div className="space-y-3 max-w-full sm:max-w-[65%]">
              <h3 className="text-xl sm:text-2xl  font-semibold text-[#F2D1C2] tracking-wide">Talk To Sales</h3>
              <p className="text-white text-sm font-light leading-relaxed">Schedule A Call With Sales To Discuss The Needs Of Your Business.</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-38 md:h-38 flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shrink-0 self-end sm:self-auto">
              <img src="/cont1.svg" alt="Sales" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />

            </div>
          </div>

          {/* Card 2: Email Support */}
          <div className="bg-gradient-to-r from-[#FF7A00]/[0.15] via-[#0A0A0C] to-[#1B2B4A]/[0.25] border border-white/[0.04] rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:border-white/[0.08] transition-all duration-300 group shadow-2xl min-h-[200px]">
            <div className="space-y-3 max-w-full sm:max-w-[65%]">
              <h3 className="text-xl sm:text-2xl  font-semibold text-[#F2D1C2] tracking-wide">Email Support Team</h3>
              <a href="mailto:Info@Techscapeai.In" className="text-white text-sm font-light hover:text-white transition-colors block break-all underline decoration-gray-600 underline-offset-4">Info@Techscapeai.In</a>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-38 md:h-38 flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shrink-0 self-end sm:self-auto">
              <img src="/cont2.svg" alt="Support" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Card 3: Partner with Us */}
          <div className="bg-gradient-to-r from-[#FF7A00]/[0.15] via-[#0A0A0C] to-[#1B2B4A]/[0.25] border border-white/[0.04] rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:border-white/[0.08] transition-all duration-300 group shadow-2xl min-h-[200px]">
            <div className="space-y-3 max-w-full sm:max-w-[65%]">
              <h3 className="text-xl sm:text-2xl  font-semibold text-[#F2D1C2] tracking-wide">Partner With Techscape AI</h3>
              <a href="mailto:Info@Techscapeai.In" className="text-white text-sm font-light hover:text-white transition-colors block break-all underline decoration-gray-600 underline-offset-4">Info@Techscapeai.In</a>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-38 md:h-38 flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shrink-0 self-end sm:self-auto">
              <img src="/cont3.svg" alt="Partner" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Card 4: Press Inquiries */}
          <div className="bg-gradient-to-r from-[#FF7A00]/[0.15] via-[#0A0A0C] to-[#1B2B4A]/[0.25] border border-white/[0.04] rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:border-white/[0.08] transition-all duration-300 group shadow-2xl min-h-[200px]">
            <div className="space-y-3 max-w-full sm:max-w-[65%]">
              <h3 className="text-xl sm:text-2xl  font-semibold text-[#F2D1C2] tracking-wide">Press Inquiries</h3>
              <a href="mailto:Info@Techscapeai.In" className="text-white text-sm font-light hover:text-white transition-colors block break-all underline decoration-gray-600 underline-offset-4">Info@Techscapeai.In</a>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-38 md:h-38 flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shrink-0 self-end sm:self-auto">
              <img src="/cont5.svg" alt="Press" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>

        <div className=" bg-gradient-to-r from-[#FF7A00]/[0.15] via-[#0A0A0C] to-[#1B2B4A]/[0.25] border border-white/[0.04] rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:border-white/[0.08] transition-all duration-300 group shadow-2xl min-h-[200px]">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl  font-semibold text-[#F2D1C2] tracking-wide">Address</h3>
            <p className="text-white text-sm sm:text-base leading-relaxed font-light">
              Sprint, 2nd Floor, Jayabheri Silicon Towers,<br />
              Hitech City Main Road, Kothaguda,<br />
              Hyderabad, Telangana 500084.
            </p>
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-38 md:h-38 flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shrink-0 self-end sm:self-auto">
            <img src="/cont4.svg" alt="Location Map" className="w-full h-full object-contain" />
          </div>
        </div>

      </section>



      <section id="get-started" className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

          {/* --- Header Section --- */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* Premium Capsule Badge (Matches image layout perfectly) */}
            <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.06] bg-[#120b08]/60 shadow-[inset_0_1px_12px_rgba(245,160,134,0.06)] mb-8 backdrop-blur-sm">
              <span className="text-[#F7BFA0] uppercase tracking-[0.22em] text-[22px] font-semibold">
                Get Started
              </span>
            </div>

            {/* Bold Section Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[24px] font-medium text-[#FDFDFD] mb-6 tracking-tight">
              Let's Build Something Together
            </h2>

            {/* Balanced Low-Opacity Description Subtext */}
             <p className="text-white max-w-2xl mx-auto text-[13px] md:text-[16px]  leading-relaxed font-light tracking-wide px-4">
              Whether You're A Business Looking To Automate, <br /> A Student Ready To Upskill, Or A Partner Exploring Collaboration <br className="hidden md:inline" />
              The First Conversation Is Always Free. Tell Us What You Need And We'll Tell You Exactly How We Can Help.
            </p>
          </div>

          {/* --- Main Content Wrapper with Background Image --- */}
          <div
            className={`w-full border border-black/5  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{
              backgroundColor: '#050505',
              backgroundImage: "url('//bggetstarted.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* FIXED: Removed -mt-92 from the grid class list below */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 p-8 md:p-16 lg:p-20 items-start z-20">
              {/* Left: Glassmorphic Contact Form */}
              <div>
                <GetStarted />
              </div>

              {/* Right: Booking Info Section */}
              <div className="lg:pl-6 text-left lg:pt-2">
                <h3 className="text-[33px] md:text-[36px] font-semibold text-white mb-6 leading-tight tracking-tight">
                  Book a Free Consultation Directly
                </h3>
                <p className="text-white mb-10 text-base md:text-lg leading-relaxed max-w-md">
                  Skip the form. Pick a time that works for you and get on a call with our team within 24 hours.
                </p>

                <ul className="space-y-5">
                  {CHECK_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-4 group">
                      <span className="flex-shrink-0 p-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <CheckIcon />
                      </span>
                      <span className="text-white/70 group-hover:text-white transition-colors text-xs md:text-sm font-semibold uppercase tracking-widest">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="w-full bg-transparent text-center py-16 md:py-24 flex flex-col items-center justify-center">

              {/* Premium Bold Image-Matched Heading */}
              <h2 className="text-3xl md:text-6xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-10">
                Ready To Join The AI Revolution <br className="hidden md:inline" />
                With Techscape AI?
              </h2>

              {/* Dynamic Request A Demo Gradient Button (Matches image_430f2d.png) */}
              <button
                type="button"
                className="px-8 py-3 rounded-xl font-medium text-xs md:text-sm text-white shadow-lg transition-all duration-300 hover:opacity-90 active:scale-[0.98] tracking-wide backdrop-blur-sm border border-white/10"
                style={{ background: 'linear-gradient(90deg, #3D75F3 0%, #7E85D4 55%, #E39994 100%)' }}
              >
                Request A Demo
              </button>

            </div>
          </div>
        </div>


        {/* Subtle Bottom Glows */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
};


export default ContactPage;