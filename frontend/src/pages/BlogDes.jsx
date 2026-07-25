import React, { useState, useEffect, useRef } from 'react';
import Typewriter from '../components/Typewriter';
import GetStarted from '../components/GetStarted';
import { useScrollAnimation } from '../hooks/useScrollAnimation'


export default function ArticleVoiceLayout() {
    const [isPlaying, setIsPlaying] = useState(false);
    const speechRef = useRef(null);
    const textToReadRef = useRef(null);

    const allArticles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [visibleCount, setVisibleCount] = useState(3);
    const displayedArticles = allArticles.slice(0, visibleCount);

    // Function to gather all clean text strings inside content node
    const getArticleText = () => {
        if (textToReadRef.current) {
            return textToReadRef.current.innerText || textToReadRef.current.textContent;
        }
        return "";
    };

    const handleVoiceToggle = () => {
        if ('speechSynthesis' in window) {
            if (isPlaying) {
                // Stop speech stream safely
                window.speechSynthesis.cancel();
                setIsPlaying(false);
            } else {
                const cleanText = getArticleText();
                if (!cleanText) return;

                // Configuration setup for browser Voice synthesis
                const utterance = new SpeechSynthesisUtterance(cleanText);
                utterance.rate = 1.0; // Standard speech tempo pacing
                utterance.pitch = 1.0;

                utterance.onend = () => {
                    setIsPlaying(false);
                };

                utterance.onerror = () => {
                    setIsPlaying(false);
                };

                speechRef.current = utterance;
                window.speechSynthesis.speak(utterance);
                setIsPlaying(true);
            }
        } else {
            alert("Text-to-speech voice engine is not supported in this browser version.");
        }
    };

    // Clean memory leaks if component unmounts mid-speech stream
    useEffect(() => {
        return () => {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return (
        <>
            <section className="w-full  text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          background: 'rgba(53, 121, 206, 0.3)',
          filter: 'blur(150px)',
          borderRadius: '100%',
          zIndex: 0,
        }}
      />

                {/* Background Premium Radial Gradients */}
                
                <div className="absolute left-[-10%] top-[40%] w-[400px] h-[400px] bg-[#004477DB]/40 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto space-y-12">

                    {/* Top Breadcrumb Meta row info */}
                    <div className="text-center space-y-2">
                        <span className="text-[16px] font-mono tracking-[0.3em] uppercase text-[#F7BFA0] block">
                            ARTICLE . APRIL 4 2026
                        </span>
                    </div>
                    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 text-center px-4">
                        <div className="flex-1 space-y-4 order-2 md:order-1 w-full">
                            <h2
                                className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-2 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
                                }}
                            >
                                <Typewriter words={['Borderless AI Blog']} speed={100} delay={2500} />
                            </h2>
                            <p className="text-white text-sm md:text-[20px] font-light leading-relaxed max-w-xl mx-auto">
                                Discover how our values shape our mission and foster a culture of respect and collaboration with our customers and partners.
                            </p>
                        </div>

                        <div className="flex-shrink-0 order-1 md:order-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mx-auto md:mx-0">
                            <img
                                src="/blog1.svg"
                                alt="Borderless AI Blog Decorative Pattern Asset"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    {/* <div className="flex  gap-3 item-center space-y-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Rakesh Chandra" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-white/90">Rakesh Chandra</div>
                            <div className="text-[10px] font-mono text-white/40">CEO at NxtWave</div>
                        </div>
                    </div> */}



                    {/* Central Article Banner Image Element */}
                    <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.05] relative shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80"
                            alt="Dashboard Context Visualizer"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-[1.01] transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4">
                            <button className="px-4 py-1.5 rounded-lg bg-[#2C80FF] backdrop-blur-md border border-white/10 text-[16px] font-medium flex items-center gap-2 hover:bg-white/20 transition-all">
                                <span>Share</span>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 10.742l4.642-2.321m0 7.156l-4.642-2.321m5.96 1.157a3 3 0 110-6 3 3 0 010 6zm-8.96-1.157a3 3 0 110-6 3 3 0 010 6z" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* =========================================================
            AUDIO MEDIA PLAYER PLATFORM INTEGRATION CAPABILITY
            ========================================================= */}
                    <div className="w-full rounded-full border border-white/[0.08] bg-[#0d0d11] p-3 sm:p-4 flex items-center justify-between px-6 shadow-xl relative group">

                        <div className="flex items-center gap-4">
                            {/* Play Trigger Control Mechanism */}
                            <button
                                onClick={handleVoiceToggle}
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1C68FA] to-blue-600 text-white flex items-center justify-center hover:scale-105 transition-all  z-10"
                            >
                                {isPlaying ? (
                                    // Stop Matrix Icon
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="1" /></svg>
                                ) : (
                                    // Play Icon
                                    <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                )}
                            </button>

                            <div className="flex flex-col">
                                <span className="text-xs sm:text-sm lg:text-[16px] font-semibold tracking-wide">
                                    {isPlaying ? "Reading Document Stream..." : "Listen to articles"}
                                </span>
                                <span className="text-[10px] lg:text-[14px] font-mono text-white">Duration: 5 minutes</span>
                            </div>
                        </div>

                        {/* DYNAMIC AUDIO WAVEFLOW SYSTEM (Animate on isPlaying) */}
                        <div className="flex items-center gap-[3px] h-6">
                            {[1.2, 2.3, 1.5, 2.8, 1.1, 2.4, 1.7, 2.1, 1.3, 2.6].map((multiplier, index) => (
                                <div
                                    key={index}
                                    className={`w-[3px] bg-gradient-to-t from-[#1C68FA] to-purple-400 rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'opacity-40'
                                        }`}
                                    style={{
                                        height: isPlaying ? `${multiplier * 8}px` : '4px',
                                        animationDelay: `${index * 120}ms`,
                                        animationDuration: '600ms'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* =========================================================
            ARTICLE WRITTEN CONTENT zone (Target Node monitored by text-to-speech)
            ========================================================= */}
                    <div ref={textToReadRef} className="space-y-8 pt-4">

                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-[32px] font-bold tracking-tight text-[#F7C8B4]">About NxtWave AI</h2>
                            <h3 className="text-base lg:text-[22px] font-semibold text-[#F7CBB4]">NxtWave</h3>
                            <p className="text-white lg:text-[18px] text-sm sm:text-base font-light leading-relaxed">
                                At NxtWave, we're dedicated to pushing the boundaries of AI technology and its applications. Based in Hyderabad, India, we are committed to developing innovative AI solutions that address real-world challenges and drive meaningful impact across industries.
                            </p>
                            <p className="text-white lg:text-[18px] text-sm sm:text-base font-light leading-relaxed">
                                NxtWave has secured significant funding from prominent investors, and we proudly collaborate with industry leaders such as Tata, Reliance, and HDFC Bank.
                            </p>
                            <p className="text-white lg:text-[18px] text-sm sm:text-base font-light leading-relaxed">
                                Through strategic alliances within the tech ecosystem, NxtWave has achieved significant product-market fit and is focused on building a sustainable, profitable organization for the future.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-base font-semibold lg:text-[22px] text-[#F7CBB4]">The Opportunity:</h4>
                            <p className="text-white lg:text-[18px] text-sm sm:text-base font-light leading-relaxed">
                                We are seeking a motivated AI Blogger to create engaging content on our key initiatives. You will manage content creation, collaborate with cross-functional teams, and ensure timely delivery of high-quality blog posts. This role is perfect for experienced content creators who thrive in a dynamic startup environment.
                            </p>
                        </div>

                        {/* Structured Roles list node fields */}
                        <div className="space-y-4">
                            <h4 className="text-base font-semibold text-[#F7CBB4] lg:text-[22px]">Roles and Responsibilities</h4>
                            <ul className="space-y-3 list-none pl-0">
                                {[
                                    "Create and manage blog content from concept to publication, ensuring alignment with timelines, scope, and budget.",
                                    "Work with cross-functional teams including Product, Engineering, Marketing, and Sales to drive content creation.",
                                    "Monitor content performance, track milestones, and address any risks or bottlenecks.",
                                    "Communicate content status, updates, and results to stakeholders and leadership.",
                                    "Work with internal teams to define content objectives, success metrics, and requirements.",
                                    "Improve processes to enhance efficiency, collaboration, and content outcomes across the organization.",
                                    "Support the creation of impactful content that directly influences NxtWave's customer experience and business growth."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white lg:text-[18px] text-sm sm:text-base font-light leading-relaxed">
                                        <span className="text-[#1C68FA] mt-1.5 block shrink-0 text-xs">◆</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="space-y-6 mx-auto max-w-6xl mt-12">

                    <h3
                        className="inline-block text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.025em] mb-4 bg-clip-text text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #0050fe 0%, #af90af 66%, #ffd0c0 100%)",
                        }}
                    >
                        <Typewriter words={['Releted Articles']} speed={100} delay={2500} />
                    </h3>

                    {/* Structured grid constraint tracking exact 3 cards per row rule */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedArticles.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/[0.05] p-5 flex flex-col justify-between hover:border-white/10 transition-all group"
                                style={{
                                    background: "linear-gradient(320deg, rgba(200,147,114,0.1) 0%, rgba(6,6,8) 100%)"
                                }}
                            >
                                <div className="space-y-4">
                                    <div className="w-full aspect-[16/9] bg-white/[0.01] rounded-xl overflow-hidden border border-white/5">
                                        <img src="" alt="Editors Choice Visual 1" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-[14px] font-mono uppercase tracking-wider text-[#7A7A7A]">ARTICLE • April 4, 2026</div>
                                    <h4 className="text-lg lg:text-[28px] font-bold tracking-tight text-[#F7C8B4] group-hover:text-[#1C68FA] transition-colors">AI Impact</h4>
                                    <p className="text-white text-[16px] font-light leading-relaxed line-clamp-2">
                                        We govern our products, datacenter infrastructure, and AI assets using responsible pathways to help every person and organization develop algorithms cleanly.
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 mt-4">
                                    <span className="text-[15px] font-medium text-white">
                                        Rakesh Chandra <span className="text-[14px] text-white/50 block font-light">CEO of NxtWave</span>
                                    </span>

                                    <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-all duration-300">
                                        <img
                                            src="/play.svg"
                                            alt="Play"
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Conditional rendering logic: Shows button ONLY if array count exceeds total active target list */}
                    {allArticles.length > visibleCount && (
                        <div className="w-full flex justify-center pt-6">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 3)}
                                className="px-6 py-2 rounded-lg bg-[#1C68FA] text-white text-[18px] font-medium tracking-wide hover:bg-[#1C68FA]/90 transition-colors shadow-lg shadow-[#1C68FA]/10"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section id="get-started" className="relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto relative z-10">



                    {/* --- Main Content Wrapper with Background Image --- */}
                    <div
                        className={`w-full border border-black/5  transition-all duration-1000 delay-300`}
                        style={{
                            backgroundColor: '#050505',
                            backgroundImage: "url('/bg2.svg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >


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