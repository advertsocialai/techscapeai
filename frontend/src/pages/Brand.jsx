import React, { useState } from 'react';

import Typewriter from '../components/Typewriter';
import GetStarted from '../components/GetStarted';
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

export default function Brand() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
    return (
        <>
            {/* ===================================================================
                SECTION 1 — LOGO
               =================================================================== */}
            <section className="relative bg-black text-white py-20 lg:py-28 overflow-hidden">
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    style={{
                        left: '-11.2%', top: '80px', width: '286px', height: '258px',
                        background: '#fad4bf',
                        filter: 'blur(266.7px)',
                        borderRadius: '254px 343px 129px 391px',
                        opacity: 0.55,
                    }}
                />

                <div
                    className="absolute pointer-events-none"
                    style={{
                        right: '-5%', top: '10%', width: '500px', height: '500px',
                        background: 'rgba(53, 121, 206, 0.2)',
                        filter: 'blur(150px)',
                        borderRadius: '100%',
                        zIndex: 0,
                    }}
                />
                <div className="max-w-6xl mx-auto px-6 md:px-12">

                    {/* --- Top Massive Hero Logo Display --- */}
                    <div className="w-full flex justify-center mb-24 md:mb-32">
                        <img
                            src="/brand1.svg"
                            alt="TechScape AI Giant Primary Logo"
                            className="w-full max-w-[580px] h-auto object-contain"
                        />
                    </div>

                    {/* --- Detailed Content Specifications Grid --- */}
                    <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-20 text-left mb-16 items-start">

                        {/* Left Column: Heading, Core Meaning & Symbols */}
                        <div className="space-y-6">
                            <div>
                                <p className="label mb-3">Primary Logo</p>
                                <h2
                                    className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
                                    }}
                                >
                                    <Typewriter words={['Logo']} speed={100} delay={2500} />
                                </h2>
                            </div>

                            <p className="text-[14px] lg:text-[18px] text-white leading-relaxed font-light">
                                The Tech Scape AI logo represents the intersection of human-centered design and intelligent systems.
                            </p>

                            <div className="pt-2">
                                <h4 className="text-[18px] font-semibold text-white tracking-wide mb-3">
                                    Symbol Meaning
                                </h4>
                                <ul className="space-y-3 text-white text-[18px] font-light leading-relaxed">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#3D75F3] font-medium mt-0.5">•</span>
                                        <span>Circles = people, customer touchpoints, connection</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#A396FF] font-medium mt-0.5">•</span>
                                        <span>Rounded rectangles = structured journeys, pathways, AI support</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#F5A086] font-medium mt-0.5">•</span>
                                        <span>Combined shapes = the "experience landscape" (the Scape)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Wordmark Attributes */}
                        <div className="space-y-6 md:pt-14">
                            <div>
                                <h4 className="text-[18px] font-semibold text-white tracking-wide mb-3">
                                    Wordmark
                                </h4>
                                <p className="text-white text-[14px] lg:text-[18px] font-light leading-relaxed mb-4">
                                    The rounded geometric typography communicates:
                                </p>
                                <ul className="space-y-2 text-white text-[18px] font-light pl-1">
                                    <li className="flex items-center gap-2.5">
                                        <span className="w-1 h-1 rounded-full bg-white/30" /> Approachability
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="w-1 h-1 rounded-full bg-white/30" /> Modernity
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="w-1 h-1 rounded-full bg-white/30" /> Accessibility
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="w-1 h-1 rounded-full bg-white/30" /> Trust
                                    </li>
                                </ul>
                            </div>

                            <p className="text-white text-[14px] lg:text-[18px] font-light leading-relaxed pt-2">
                                The logo is engineered to be instantly recognizable, scalable, and timeless.
                            </p>
                        </div>
                    </div>

                    {/* --- Center Section: Technical Alignment Grid --- */}
                    <div className="w-full max-w-xl mx-auto aspect-[2.2/1] rounded-[700px] card flex items-center justify-center p-[10px] mb-16 backdrop-blur-sm">
                        <img
                            src="/brand2.svg"
                            alt="Technical Alignment & Clearspace Blueprint Grid"
                            className="max-h-[70%] max-w-full object-contain"
                        />
                    </div>

                    {/* --- Bottom Section: Variation Row Container --- */}
                    <div
                        className="w-full rounded-4xl border border-[#1C1C1C] p-4 md:p-6 h-auto md:h-[400px] md:max-h-[400px] flex flex-col justify-between overflow-hidden box-border"
                        style={{
                            background: "linear-gradient(120deg, rgba(247,191,160,0.15) 0%, rgba(33,36,45,1) 100%)"
                        }}
                    >
                        <div className="flex flex-col gap-8 w-full md:hidden py-6">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-full max-w-[200px] aspect-[4/5] p-1 flex items-center justify-center">
                                    <img src="/brand3.svg" alt="Mono Variation Light" className="max-h-full w-full object-contain" />
                                </div>
                                <div className="text-center text-sm font-semibold tracking-wider uppercase text-white/80">Mono</div>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="w-full max-w-[200px] aspect-[4/5] p-1 flex items-center justify-center">
                                    <img src="/brand4.svg" alt="Mono Variation Dark" className="max-h-full w-full object-contain" />
                                </div>
                                <div className="text-center text-sm font-semibold tracking-wider uppercase text-white/80">Reversed</div>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="w-full max-w-[200px] aspect-[4/5] p-1 flex items-center justify-center">
                                    <img src="/brand5.svg" alt="Reversed Solid Color" className="max-h-full w-full object-contain" />
                                </div>
                                <div className="text-center text-sm font-semibold tracking-wider uppercase text-white/80">Single Color</div>
                            </div>
                        </div>

                        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6 items-center justify-center my-auto w-full">
                            <div className="w-full  rounded-xl p-2 flex items-center justify-center transition-all duration-300 hover:border-white/10">
                                <img src="/brand3.svg" alt="Mono Variation Light" className="max-h-[85%] max-w-full object-contain" />
                            </div>

                            <div className="w-full  rounded-xl p-2 flex items-center justify-center transition-all duration-300 hover:border-white/10">
                                <img src="/brand4.svg" alt="Mono Variation Dark" className="max-h-[85%] max-w-full object-contain" />
                            </div>

                            <div className="w-full  rounded-xl p-2 flex items-center justify-center transition-all duration-300 hover:border-white/10">
                                <img src="/brand5.svg" alt="Reversed Solid Color" className="max-h-[85%] max-w-full object-contain" />
                            </div>
                        </div>

                        <div className="hidden md:grid grid-cols-3 text-center text-[23px] font-semibold tracking-wider uppercase pb-2">
                            <div>Mono</div>
                            <div>Reversed</div>
                            <div>Single Color</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===================================================================
                SECTION 2 — CO-BRANDING & COLORS
               =================================================================== */}
            <section className="relative bg-black text-white py-20 lg:py-28 overflow-hidden">

                {/* Background eclipse glow (brand blue) */}
                <div className="absolute right-[-20%] top-[15%] w-[700px] h-[900px] bg-gradient-to-b from-[#3D75F3]/55 via-[#1b3a6b]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

                <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 space-y-24">

                    {/* =========================================================
                        1. CO-BRANDING
                       ========================================================= */}
                    <div className="space-y-8 text-left">
                        <div>

                            <h2
                                className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
                                }}
                            >
                                <Typewriter words={['Co-Branding']} speed={100} delay={2500} />
                            </h2>
                            <p className="text-[14px] lg:text-[20px] text-white font-light leading-relaxed">
                                When appearing alongside partner logos:
                            </p>
                        </div>

                        <ul className="space-y-2.5 text-white text-[18px] font-light pl-1 list-none">
                            <li className="flex items-start gap-2">
                                <span className="text-[#3D75F3]">•</span> Align logos horizontally
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#3D75F3]">•</span> Maintain equal optical weight between both logos
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#3D75F3]">•</span> Place Tech Scape AI to the right, unless otherwise required
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#3D75F3]">•</span> Separate the logos with a 0.5pt vertical line
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#3D75F3]">•</span> Use one-circle-diameter spacing on both sides of the separator
                            </li>
                        </ul>

                        <p className="text-white text-[18px] font-light  pt-2">
                            This ensures professional, balanced co-branded layouts.
                        </p>

                        {/* Co-Branding Spec Display Card */}
                        <div className="w-full aspect-[3.2/1] sm:aspect-[4/1] rounded-4xl border border-[#1C1C1C] p-6 flex items-center justify-center shadow-xl backdrop-blur-md"
                            style={{
                                background: "linear-gradient(120deg, rgba(247,191,160,0.15) 0%, rgba(33,36,45,1) 100%)"
                            }}>
                            <img src="/brand10.svg" alt="img" />
                        </div>
                    </div>


                    {/* =========================================================
                        2. COLORS
                       ========================================================= */}
                    <div className="space-y-12 text-left">
                        <div>
                            <h2
                                className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
                                }}
                            >
                                <Typewriter words={['Colors']} speed={100} delay={2500} />
                            </h2>

                            <h3 className="text-[20px] lg:text-[32px] font-bold text-white mb-3">
                                Primary Colours
                            </h3>
                            <p className="text-white text-[18px] font-light max-w-xl leading-relaxed mb-4">
                                These colors reflect emotion-driven CX with a balance of trust and innovation.
                            </p>
                            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[18px] font-mono tracking-wider text-white">
                                <span>Tech Blue - <span className="text-white">#3D75F3</span></span>
                                <span>Peach Glow - <span className="text-white">#F5A086</span></span>
                            </div>
                        </div>

                        {/* Primary Color Palette Block */}
                        <div className="w-full rounded-2xl border border-[#1C1C1C] bg-[#0D0D0D] p-5 md:p-6 shadow-xl backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div className="w-full h-16 md:h-20 rounded-xl bg-[#3D75F3] shadow-lg shadow-[#3D75F3]/10" />
                                <div className="w-full h-16 md:h-20 rounded-xl bg-[#F5A086] shadow-lg shadow-[#F5A086]/10" />
                            </div>
                        </div>

                        {/* Secondary Colours Block */}
                        <div className="space-y-6 pt-4">
                            <div>
                                <h3 className="text-[20px] lg:text-[32px] font-bold text-white mb-2">
                                    Secondary Colours
                                </h3>
                                <p className="text-white text-[18px] font-light max-w-xl leading-relaxed mb-4">
                                    Secondary colors create warmth, dimension, and a more expressive CX storytelling system.
                                </p>

                                <div className="grid grid-cols-2 gap-4 text-[18px] font-mono tracking-wider text-white">
                                    <div className="space-x-4">
                                        <span>Deep Navy - <span className="text-white">#0F1F3A</span></span>
                                        <span>Muted Teal - <span className="text-white">#4DA7A0</span></span>
                                    </div>
                                    <div className="space-x-4">
                                        <span>Soft Lilac - <span className="text-white">#DAD7FF</span></span>
                                        <span>Warm Sand - <span className="text-white">#EADCCB</span></span>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Color Grid Layout */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Left Secondary Card */}
                                <div className="w-full rounded-2xl border border-[#1C1C1C] bg-[#0D0D0D] p-5 shadow-xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="w-full h-14 md:h-16 rounded-xl bg-[#0F1F3A]" />
                                        <div className="w-full h-14 md:h-16 rounded-xl bg-[#4DA7A0]" />
                                    </div>
                                </div>

                                {/* Right Secondary Card */}
                                <div className="w-full rounded-2xl border border-[#1C1C1C] bg-[#0D0D0D] p-5 shadow-xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="w-full h-14 md:h-16 rounded-xl bg-[#DAD7FF]" />
                                        <div className="w-full h-14 md:h-16 rounded-xl bg-[#EADCCB]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                        style={{
                            left: '-11.2%', top: '1400px', width: '286px', height: '258px',
                            background: '#1C6BFA',
                            filter: 'blur(266.7px)',
                            borderRadius: '254px 343px 129px 391px',
                            opacity: 3.55,
                        }}
                    />

                    <div className="space-y-8 text-left">
                        <div>

                            <h2
                                className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
                                }}
                            >
                                <Typewriter words={['Typography']} speed={100} delay={2500} />
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
                            <img src="/brand7.svg" alt="img" className="max-h-[300px] w-full sm:w-1/2 object-contain" />
                            <img src="/brand7.svg" alt="img" className="max-h-[300px] w-full sm:w-1/2 object-contain" />
                        </div>

                    </div>

                    <div className="space-y-8 text-left">
                        <div>

                            <h2
                                className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
                                }}
                            >
                                <Typewriter words={['Merchandise']} speed={100} delay={2500} />
                            </h2>
                        </div>
                        <div className='flex'>
                            <img src="/brand9.svg" alt="img" className='max-h-[600px] w-full' />
                        </div>

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
                            backgroundImage: "url('/bg2.svg')",
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
                            <h2 className="text-3xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-10">
                                Ready To put AI to work ?
                            </h2>
                            <p className="text-white mb-10 text-base md:text-lg leading-relaxed">

                                Your first discovery call is free. Let's find the workflow we can solve together
                            </p>

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
        </>
    );
}
