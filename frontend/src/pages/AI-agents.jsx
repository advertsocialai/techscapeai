import React from 'react';
import Typewriter from '../components/Typewriter'

export default function AIAgentsHeroSection() {
    const customStats = [
        { value: "4", label: "Agents Built" },
        { value: "3", label: "Build In Production" },
        { value: "Core, Micro, Mass.", label: "Delivery Layers" },
        { value: "India + CA", label: "Deployed Markets" }
    ];

    const builtAgents = [
        {
            title: "Travel AI Agent",
            desc: "Expand your portfolio with our native product. Seamless user client management for travel agencies to build a fast-moving enterprise.",
            icon: "aiagent6.svg"
        },
        {
            title: "Finance AI Agent",
            desc: "Guide your custom automated workflows easily with dedicated bookkeeping automation. Fast, intelligent workflows customized for industry scales.",
            icon: "aiagent7.svg"
        },
        {
            title: "Recruitment AI Agent",
            desc: "Build Techscapes into high-level design systems with customized check ins for your team and position your firm at the forefront of the AI era.",
            icon: "aiagent8.svg"
        },
        {
            title: "Logistics AI Agent",
            desc: "Automate delivery matching, routing protocols, and predictive workflow tracking to maintain optimal load capacity across channels.",
            icon: "aiagent9.png"
        }
    ];

    const metricsData = [
        { num: "4", text: "Agents Built" },
        { num: "3", text: "Built In Production" },
        { num: "Core, Micro, Mass.", text: "Delivery Layers" },
        { num: "India + CA", text: "Deployed Markets" }
    ];

    const airlineMetrics = [
        { value: "50%", label: "Inquiries Handled Instantly", color: "from-blue-500/20 to-cyan-500/5" },
        { value: "<1 min", label: "Average Response Latency", color: "from-teal-500/20 to-emerald-500/5" },
        { value: "38%", label: "Operational Cost Reduction", color: "from-purple-500/20 to-indigo-500/5" }
    ];

    // Industry capabilities rows array
    const dynamicCapabilities = [
        {
            num: "01",
            title: "Domain-First Training",
            desc: "Our agents don't work on general logic layers. They understand your industry taxonomy, operational playbooks, and specialized data vectors perfectly."
        },
        {
            num: "02",
            title: "Fits Your Existing Stack",
            desc: "Connects natively into custom database setups, CRM environments, ticketing networks, and validation loops without infrastructure breaking."
        },
        {
            num: "03",
            title: "Measurable Real Outcomes",
            desc: "Every pipeline built directly influences cost curves, handles repetitive tickets instantly, and shortens resolution wait times to milliseconds."
        }
    ];

    return (
        <>
            <section className="w-full text-white min-h-screen flex flex-col items-center overflow-hidden">

                <div className="w-full relative py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center">


                    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">

                        <img
                            src="aiagent1.svg"
                            alt="AI Face Core Background"
                            className="w-full h-full object-cover opacity-25 mix-blend-screen scale-105 pointer-events-none"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/20 via-transparent to-[#030303]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]" />
                    </div>


                    <div className="w-full max-w-[1200px] mx-auto text-center space-y-8 z-10 flex flex-col items-center">
                        <span className="text-[22px]  text-[#F7BFA0]">
                            AI AGENTS
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-[70px] font-bold tracking-tight leading-[110%] max-w-4xl text-white">
                            Your Operations Are Manual. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C68FA] via-blue-400 to-[#F5A086]">
                                <Typewriter words={["Your Competitors Won't Be."]} speed={100} delay={2500} />
                            </span>
                        </h1>

                        <p className="text-white text-xs sm:text-sm md:text-[18px] font-light max-w-2xl mx-auto leading-relaxed">
                            Techscape AI builds domain-specific agents (voice, chat, and workflow) trained on how your industry actually works. Not general AI. Industry AI.
                        </p>


                        <div className="flex flex-wrap items-center justify-center gap-4 pt-12 w-full max-w-5xl">
                            {customStats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[170px] sm:min-w-[210px] px-6 py-4 rounded-tl-[24px] rounded-br-[24px] rounded-tr-[4px] rounded-bl-[4px] border border-white/[0.06]  backdrop-blur-md flex flex-col items-center justify-center text-center space-y-0.5 transition-all duration-300 hover:border-white/10"
                                    style={{
                                        background: "linear-gradient(145deg, rgba(247, 191, 160, 0.5) 0%, rgba(28, 109, 208, 0) 100%)"
                                    }}
                                >
                                    <div className="text-[16px] sm:text-[22px] font-bold tracking-tight text-white">
                                        {stat.value}
                                    </div>
                                    <div className="text-[16px]  tracking-wider text-white/80">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>


                <div className="w-full max-w-6xl mx-auto py-0 px-4 sm:px-8 lg:px-1 space-y-16 flex flex-col items-center justify-center 4k:max-w-[2200px]">


                    <div className="w-full text-center md:text-left space-y-3">
                        <span className="text-[22px] text-[#F7BFA0] uppercase block">
                            LIVE AGENTS
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-[70px] font-bold tracking-tight text-[#2C80FF]">
                            What We've Built
                        </h2>
                        <p className="text-white text-xs sm:text-sm lg:text-[18px] font-light leading-relaxed max-w-2xl">
                            Three agents in production. One in deep research. Every one built domain-first not retrofitted from a generic model.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {builtAgents.map((agent, index) => (
                            <div
                                key={index}
                                className="rounded-[28px] p-8 flex flex-col items-center text-center justify-between space-y-8 transition-all duration-500 hover:scale-[1.02] border border-white/25 group select-none"
                                style={{
                                    background: "linear-gradient(145deg, rgba(247, 191, 160, 0.3) 0%, rgba(28, 109, 208, 0.1) 100%)"
                                }}
                            >
                                <div className="flex flex-col items-start space-y-6 w-full text-left">

                                    <div className="w-28 h-28 flex items-center justify-center">
                                        <img
                                            src={agent.icon}
                                            alt={`${agent.title} Illustration`}
                                            className="w-28 h-28 object-contain filter transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => { e.currentTarget.style.opacity = '0.5'; }}
                                        />
                                    </div>

                                    <div className="space-y-3 text-left">
                                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white/95 text-left">
                                            {agent.title}
                                        </h3>
                                        <p className="text-white text-xs sm:text-[16px] min-h-[96px] text-left">
                                            {agent.desc}
                                        </p>
                                    </div>

                                </div>



                            </div>
                        ))}
                    </div>

                </div>

            </section>


            <div className="w-full  text-white selection:bg-blue-500/30 antialiased min-h-screen">

                {/* =========================================================
          HERO CHAMBER LAYER (With Dynamic Background Glowing Spot)
          ========================================================= */}
                <section className="w-full relative py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center relative overflow-hidden">
                    <div className="absolute top-0 right-[-250px] w-[45%] min-h-[400px] aspect-square bg-[radial-gradient(circle_at_center,rgba(28,104,250,0.35),transparent_65%)] pointer-events-none select-none z-0" />
                    <div className="absolute top-[30%] -left-12 w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(245,160,134,0.04),transparent_60%)] pointer-events-none select-none z-0" />

                    <div className="w-full max-w-6xl mx-auto space-y-24 z-10 relative">

                        {/* Main Top Header Block */}
                        <div className="max-w-5xl space-y-6">
                            <h1 className="text-[80px] sm:text-5xl md:text-6xl font-bold tracking-tight leading-[112%] text-white">
                                Deliver a First Class experience with <br />
                                <span className="text-[#2C80FF]">
                                    AI Customer Service agents.
                                </span>
                            </h1>
                            <p className="text-white text-xs sm:text-sm md:text-[18px]  max-w-2xl leading-relaxed">
                                Resolve high-volume, repetitive inquiries including booking modifications, tracking updates, and multi-lingual support instantly. Cut overhead costs, reduce wait times, and free your teams to focus on what matters.
                            </p>
                            <div className="pt-2">
                                <button className="px-5 py-2.5 text-[16px] rounded-sm  text-white  hover:opacity-95 transition-all duration-300"
                                    style={{ backgroundImage: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }} >
                                    Deploy Agent v1.2
                                </button>
                            </div>
                        </div>

                        {/* Case Study Callout Block */}
                        <div className="w-full pt-12 space-y-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center max-w-3xl mx-auto leading-snug">
                                Discover how the Philippines' <span className="text-[#1C68FA]">largest airline</span> transformed its customer experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#F5A086]">with Techscape AI</span>
                            </h2>

                            {/* Premium Metric Cards Matrix Container */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto pt-4">
                                {airlineMetrics.map((metric, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-[24px] p-8 flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-white/[0.03]"
                                        style={{
                                            background: 'linear-gradient(165deg, rgba(15,15,18,0.7) 0%, rgba(5,5,7,0.95) 100%)',
                                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                                        }}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-b ${metric.color} opacity-40 z-0`} />
                                        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white relative z-10">
                                            {metric.value}
                                        </div>
                                        <div className="text-xs text-white/40 font-light max-w-[200px] leading-relaxed relative z-10">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-xs font-mono uppercase text-white/30 tracking-[0.2em] pt-4">
                                Build Traveller loyalty with always on <span className="text-white/60">AI customer service.</span>
                            </p>
                        </div>

                    </div>
                </section>
                {/* 
                <section className="w-full relative py-24 px-4 sm:px-8 lg:px-16 border-t border-white/[0.02]">
                    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
                            <span className="text-xs font-mono tracking-[0.25em] text-[#F5A086] uppercase block">
                                PORTFOLIO LOGIC
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                                Built for your industry. <br />
                                <span className="text-[#1C68FA]">Not adapted to it.</span>
                            </h2>
                            <p className="text-white/40 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                                Automate Common Inquiries effortlessly. Handle refund configurations, status workflows, and micro tasks on premium scales natively.
                            </p>
                        </div>

                        <div className="lg:col-span-7 flex flex-col gap-5 w-full">
                            {dynamicCapabilities.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-full rounded-2xl p-6 sm:p-8 flex items-start gap-6 border border-white/[0.04] transition-all duration-300 hover:border-white/10 group"
                                    style={{
                                        background: 'linear-gradient(155deg, rgba(20,20,24,0.5) 0%, rgba(5,5,5,0.9) 100%)'
                                    }}
                                >
                                    <div className="text-xs font-mono font-bold text-white/20 group-hover:text-[#1C68FA] transition-colors duration-300 pt-1">
                                        {item.num}
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <h4 className="text-base sm:text-lg font-bold tracking-tight text-white/95">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/40 text-xs sm:text-[13px] font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                <section className="w-full relative py-24 px-4 sm:px-8 lg:px-16 border-t border-white/[0.03]">
                    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center text-center space-y-12">

                        <div className="space-y-4 max-w-2xl">
                            <span className="text-xs font-mono tracking-[0.25em] text-[#F5A086] uppercase inline-block px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
                                READY TO AUTOMATE
                            </span>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                                Your Business has a problem <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1C68FA]">
                                    an agent can solve.
                                </span>
                            </h3>
                            <p className="text-white/40 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
                                Whether you are ready to configure a live custom agent workflow or research platform metrics data, our engineering groups are ready to build.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                            <button className="px-6 h-12 text-xs font-semibold rounded-xl text-white transition-all duration-300 hover:opacity-90 flex items-center justify-center shadow-lg shadow-blue-500/10" style={{ backgroundImage: 'linear-gradient(95deg, #1C68FA 0%, #F5A086 100%)' }}>
                                Get Started Now
                            </button>
                            <button className="px-6 h-12 text-xs font-semibold rounded-xl border border-white/10 bg-transparent text-white transition-all duration-300 hover:bg-white/[0.02] hover:border-white/20 flex items-center justify-center">
                                Talk with Our Team
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl pt-16">
                            {[
                                { cat: "SYSTEMS", label: "Industries", detail: "Explore specialized pipelines" },
                                { cat: "DATA", label: "Research", detail: "Read our technical papers" },
                                { cat: "CONTACT US", label: "Solutions", detail: "Get premium custom builds" }
                            ].map((footerTab, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-xl border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-transparent text-left flex flex-col justify-between h-28 hover:border-white/10 transition-colors duration-300 group cursor-pointer"
                                >
                                    <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase block">
                                        {footerTab.cat}
                                    </span>
                                    <div>
                                        <h5 className="text-sm font-bold text-white/80 group-hover:text-[#1C68FA] transition-colors">
                                            {footerTab.label}
                                        </h5>
                                        <p className="text-[11px] text-white/40 font-light truncate">
                                            {footerTab.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section> */}

            </div>

        </>
    );
}