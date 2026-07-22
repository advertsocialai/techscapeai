import React, { useState, useRef } from 'react';
import Typewriter from '../components/Typewriter'
import GetStarted from '../components/GetStarted';
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SEO from '../components/SEO';

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

export default function PartnerEcosystemPage() {
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

  const partnerReasons = [
    {
      title: "Growth and Retain Your Business",
      desc: "Develop side by side with AI dynamic modules that keep your clients updated, ensuring solid retention and asset management.",
      icon: (
        <img src="/par1.svg" alt="" />
      )
    },
    {
      title: "Accelerate AI Adoption",
      desc: "Unlock structural framework tools configured directly for fast-paced deployment lifecycle management without ecosystem errors.",
      icon: (
        <img src="/par2.svg" alt="" />
      )
    },
    {
      title: "Be a Technology Leader",
      desc: "Get initial direct insights on cloud architecture configurations and feature pipelines before they scale out to production clusters.",
      icon: (
        <img src="/par3.svg" alt="" />
      )
    }
  ];

  const teamMembers = [
    { name: "Member 1", role: "Founder", img: "/partnerimg1.png", linkedin: "#" },
    { name: "Member 2", role: "Co-Founder", img: "/partnerimg3.png", linkedin: "#" },
    { name: "Member 3", role: "Lead AI", img: "/partnerimg2.png", linkedin: "#" },
    { name: "Member 4", role: "Research Head", img: "/partnerimg4.jpeg", linkedin: "#" },
  ];

  const teamScrollerRef = useRef(null);
  const [flippedIdx, setFlippedIdx] = useState(null);

  const scrollTeam = (dir) => {
    const el = teamScrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-team-card]');
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <>
      <SEO
        title="Our Partners — TechScape AI"
        description="TechScape AI partners with world-class networks and validated technology providers to deliver real opportunities."
        canonical="/partners"
      />
      <div className="w-full space-y-24 py-16 relative overflow-hidden">

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

        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-bold tracking-tight leading-[100%] text-[36px] sm:text-[46px] md:text-[62px]">

              Join <br /> Techscape AI,
              <br />
              <Typewriter words={['Partner Ecosystem']} speed={100} delay={2500} />

            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed max-w-lg">
              Grow your capabilities with absolute tech integration across high-performance clusters by partnering with us.
            </p>
          </div>

          <div
            className="p-8 rounded-2xl border border-white/[0.06] backdrop-blur-xl space-y-4"
            style={{ background: "linear-gradient(135deg, rgba(20,20,25,0.7) 0%, rgba(10,10,12,0.9) 100%)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pp-firstName" className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">First Name <span className="text-red-500">*</span></label>
                    <input id="pp-firstName" type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                  </div>
                  <div>
                    <label htmlFor="pp-lastName" className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">Last Name <span className="text-red-500">*</span></label>
                    <input id="pp-lastName" type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                  </div>
                </div>

                <div>
                  <label htmlFor="pp-businessEmail" className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">Business Email <span className="text-red-500">*</span></label>
                  <input id="pp-businessEmail" type="email" name="businessEmail" required value={formData.businessEmail} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                </div>

                <div>
                  <label htmlFor="pp-companyName" className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">Company Name <span className="text-red-500">*</span></label>
                  <input id="pp-companyName" type="text" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200" />
                </div>

                <div>
                  <label htmlFor="pp-reason" className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">I'm reaching about ? <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select id="pp-reason" name="reason" required value={formData.reason} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer">
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

                <div>
                  <label htmlFor="pp-message" className="block text-[14px] font-medium leading-[20px] text-white mb-1.5">What can we help you with ? <span className="text-red-500">*</span></label>
                  <textarea id="pp-message" name="message" rows="3" required value={formData.message} onChange={handleChange} className="w-full bg-[#1b1c22] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all duration-200 resize-none"></textarea>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button type="submit" className="btn">
                  Let’s Talk
                </button>
              </div>
            </form>

          </div>
        </div>

        <div className="wrap lg:space-y-12 space-y-12 lg:py-16 pt-12">
          <h2 className=" font-bold tracking-tight leading-[100%] text-[36px] sm:text-[46px] md:text-[62px] mb-5 text-center md:text-left">
            Why Partner {" "}
            <Typewriter words={[' with us ?']} speed={100} delay={2500} />
          </h2>
          <p className="text-[14px] lg:text-[18px] leading-relaxed font-light">
            Join a growing ecosystem of businesses building smarter with AI-native products <br /> from accounting intelligence to marketing automation.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerReasons.map((reason, idx) => (
              <div
                key={idx}
                className="card p-6 rounded-2xl border border-white/[0.05] flex flex-col justify-between group hover:border-white/10 transition-all lg:min-h-[400px] min-h-[300px]"
              >
                <div className="p-3 w-fit  rounded-xl lg:mb-4 mb-0">
                  {reason.icon}
                </div>
                <div className="space-y-2 lg:mt-auto mt-0">
                  <h3 className="text-[22px] lg:text-[26px] font-semibold bg-gradient-to-r from-[#F7BFA0] to-[#1C6DD0] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#1619e7] group-hover:to-[#1C68FA]">
                    {reason.title}
                  </h3>
                  <p className="text-[16px] font-light leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap space-y-8">
          <h2 className=" font-bold tracking-tight leading-[100%] text-[36px] sm:text-[46px] md:text-[62px] mb-12 text-center md:text-left mt-8">
            Tech Alliance{" "}
            <Typewriter words={[' Partners']} speed={100} delay={2500} />
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div
              
              
            >
              <img src="/par4.svg" alt="" />
            </div>

            <div className="space-y-6">
              <p className="lg:text-[18px] text-base font-light leading-relaxed">
                Techscape AI Alliance program is a network of best in class software solutions that help our shared customers operate more efficiently.
              </p>
              <div className="space-y-3">
                <h4 className="text-[22px] lg:text-[26px]  text-[#F7CBB4] uppercase tracking-widest">Benefits Include:</h4>
                <ul className="space-y-2 text-sm lg:text-[18px] font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#1C68FA]" /> Access to the Techscape AI developer team.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#1C68FA]" /> Up-to-date documentation.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#1C68FA]" /> Exclusive access to Techscape AI's Product Roadmap.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
      <section className="w-full  lg:py-15 py-5 relative overflow-hidden">

        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#1C68FA]/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute left-[-5%] top-[50%] w-[400px] h-[600px] bg-[#1C68FA]/26 rounded-full blur-[120px] pointer-events-none" />

        <div className="wrap space-y-24">

          <div className="space-y-10 relative">
            <div className="flex justify-between items-center">
              <h2 className=" font-bold tracking-tight leading-[100%] text-[36px] sm:text-[46px] md:text-[62px] mb-12 text-center md:text-left">
                Our {" "}
                <Typewriter words={['Team']} speed={100} delay={2500} />
              </h2>
            </div>

            <div
              ref={teamScrollerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory z-20 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  data-team-card
                  onClick={() => setFlippedIdx((cur) => (cur === idx ? null : idx))}
                  className="snap-start shrink-0 basis-full sm:basis-[calc(20%-0.75rem)] lg:basis-[calc(33.333%-1rem)] aspect-[1.1/1.7] rounded-[170px] relative group [perspective:1400px] cursor-pointer"
                >
                  <div className={`relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${flippedIdx === idx ? '[transform:rotateY(180deg)]' : ''}`}>
                    {/* Front */}
                    <div className="absolute inset-0 rounded-[170px] overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 rounded-[170px] overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center gap-5 px-8 text-center bg-gradient-to-b from-[#141b2e] to-[#05070d] border border-white/10">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0A66C2] text-white transition-transform duration-300 hover:scale-110"
                      >
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8.25h4.5V24H.24V8.25zM8.5 8.25h4.3v2.15h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.87V24h-4.5v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V24H8.5V8.25z" />
                        </svg>
                      </a>
                      <div>
                        <p className="text-white text-[22px] lg:text-[26px] font-semibold leading-tight">{member.name}</p>
                        <p className="text-white/60 text-[15px] lg:text-[17px] mt-1">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => scrollTeam(-1)}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1C68FA] transition-colors group"
              >
                <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => scrollTeam(1)}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1C68FA] transition-colors group"
              >
                <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>


          <div className="space-y-8">

            <div
              className="w-full rounded-3xl border border-white/[0.06] p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              style={{ background: "linear-gradient(145deg, rgba(30,30,40,0.4) 0%, rgba(10,10,12,0.8) 100%)" }}
            >
              <div className="md:col-span-7 space-y-4">
                <h3 className=" font-bold tracking-tight leading-[100%] text-[36px] sm:text-[60px] md:text-[40px] mb-12 text-center md:text-left">
                  <Typewriter words={['Early Growth']}  />
                </h3>
                <p className="text-sm sm:text-base md:text-[18px] font-light leading-relaxed">
                  Between 2021 and 2024, we secured four major funding rounds (Series A through D), raising nearly $1 Billion.
                </p>
                <p className="text-sm md:text-[18px] font-light leading-relaxed">
                  This support has enabled us to scale our teams, expand globally, and continually develop cutting-edge models that power practical AI applications for the world's leading enterprises.
                </p>
              </div>
              <div className="md:col-span-5 aspect-[15/10] rounded-2xl overflow-hidden relative">
                <img src="/par9.svg" alt="" />
              </div>
            </div>

            <div
              className="w-full rounded-3xl border border-white/[0.06] p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              style={{ background: "linear-gradient(145deg, rgba(30,30,40,0.4) 0%, rgba(10,10,12,0.8) 100%)" }}
            >
              <div className="md:col-span-7 space-y-4">
                <h3 className=" font-bold tracking-tight leading-[100%] text-[36px] sm:text-[60px] md:text-[40px] mb-12 text-center md:text-left">
                  <Typewriter words={['Research Focus']} />
                </h3>
                <p className="md:text-[18px] text-sm sm:text-base font-light leading-relaxed">
                  In 2022, we launched cohere Labs, our open science initiative for solving complex machine learning problems.
                </p>
                <p className="md:text-[18px] text-sm font-light leading-relaxed">
                  Today, Cohere Labs 4,500+ community members and has published over 100 research papers.
                </p>
                <button className="btn btn-sm mt-2">
                  Learn More
                </button>
              </div>
              <div className="md:col-span-5 aspect-[15/10] rounded-2xl overflow-hidden relative">
                <img src="/par10.svg" alt="" />
              </div>
            </div>

          </div>


          <div className="w-full lg:py-10  space-y-6">
            <h2 className=" font-bold tracking-tight leading-[100%] text-[36px] sm:text-[46px] md:text-[62px] mb-12 text-center md:text-left">
              <Typewriter words={['Agentic AI for the Enterprise']}/>
            </h2>

            <div className="max-w-3xl space-y-4">
              <p className="text-sm md:text-[18px] sm:text-base font-light leading-relaxed">
                In 2026, we launched North, Our Turnkey AI platform for workplace productivity.
              </p>
              <p className="text-sm md:text-[18px] sm:text-base font-light leading-relaxed">
                North's agentic capabilities and advanced retrieval allow teams to auto-routine tasks, accelerate complex workflows, and surface insights securely grounded in enterprise data.
              </p>

              <div className="pt-4">
                <button className="btn btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="get-started" className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10" ref={ref}>

          <div
            className={`text-center lg:mb-0 mb-2 mt-10 transition-all duration-1000 ease-out flex flex-col items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.06] bg-[#120b08]/60 shadow-[inset_0_1px_12px_rgba(245,160,134,0.06)] mb-8 backdrop-blur-sm">
              <span className="text-[#F7BFA0] uppercase tracking-[0.22em] text-[22px] font-semibold">
                Get Started
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[24px] font-medium text-[#FDFDFD] mb-6 tracking-tight">
              Let's Build Something Together
            </h2>

            <p className="max-w-2xl mx-auto text-[13px] md:text-[16px]  leading-relaxed font-light tracking-wide px-4">
              Whether You're A Business Looking To Automate, <br /> A Student Ready To Upskill, Or A Partner Exploring Collaboration <br className="hidden md:inline" />
              The First Conversation Is Always Free. Tell Us What You Need And We'll Tell You Exactly How We Can Help.
            </p>
          </div>

          <div
            className={`w-full border border-black/5  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{
              backgroundColor: '#050505',
              backgroundImage: "url('/bg2.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 p-8 md:p-16 lg:p-20 items-start z-20">
              <div>
                <GetStarted />
              </div>

              <div className="lg:pl-6 text-left lg:pt-2">
                <h3 className="text-[33px] md:text-[36px] font-semibold mb-6 leading-tight tracking-tight">
                  Book a Free Consultation Directly
                </h3>
                <p className="mb-10 text-base md:text-lg leading-relaxed max-w-md">
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

              <h2 className="text-3xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.15] max-w-4xl mx-auto mb-10">
                Ready To put AI to work ?
              </h2>
              <p className="mb-10 text-base md:text-lg leading-relaxed">

                Your first discovery call is free. Let's find the workflow we can solve together
              </p>

              <button type="button" className="btn">
                Request A Demo
              </button>

            </div>
          </div>
        </div>


        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </>
  );
}