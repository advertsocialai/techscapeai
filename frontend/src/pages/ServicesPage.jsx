import React from 'react';
import SEO from '../components/SEO';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <SEO
        title="Careers — TechScape AI"
        description="Join TechScape AI — we're building the future of AI with engineers, designers, and business operators across India, USA, and Canada."
        canonical="/careers"
      />
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build What <br /> The World Hasn't Seen Yet
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            At Tech Scape AI, we're not maintaining systems we're inventing them. 
            Join a team obsessed with AI agents, autonomous workflows, and 
            technology that makes entire industries smarter. This is where 
            your best work happens.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg">
            View Open Roles
          </button>
        </div>

        {/* Right Image Container */}
        <div className="flex-1 w-full">
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;