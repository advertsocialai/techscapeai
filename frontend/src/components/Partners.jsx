export default function Partners() {
  return (
    <section id="partners" className="relative bg-black py-16 lg:py-20">
      <div className="wrap">
        <div className="rounded-2xl py-10 px-8 lg:px-14 text-center"
          style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>

          <p className="label mb-10">In Partnership With</p>

          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 mb-10">

            {/* nxt wave */}
            <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
              <svg width="32" height="26" viewBox="0 0 32 26" fill="none">
                <path d="M2 20 C6 6 10 2 16 13 C22 24 26 20 30 8"
                  stroke="#3D75F3" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M2 14 C6 2 10 -1 16 9 C22 18 26 14 30 4"
                  stroke="#F5A086" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
              <span className="text-[17px] font-bold text-white tracking-tight">nxt <span className="text-white/50 font-normal">wave</span></span>
            </div>

            {/* ASG */}
            <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3D75F3, #1a3a8a)', border: '1px solid rgba(61,117,243,0.3)' }}>
                <span className="text-[13px] font-black text-white">A</span>
              </div>
              <span className="text-[17px] font-bold text-white tracking-tight">ASG</span>
            </div>

            {/* nxt wave (second instance) */}
            <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
              <svg width="32" height="26" viewBox="0 0 32 26" fill="none">
                <path d="M2 20 C6 6 10 2 16 13 C22 24 26 20 30 8"
                  stroke="#F5A086" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M2 14 C6 2 10 -1 16 9 C22 18 26 14 30 4"
                  stroke="#3D75F3" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
              <span className="text-[17px] font-bold text-white tracking-tight">nxt <span className="text-white/50 font-normal">wave</span></span>
            </div>

            {/* ASG second */}
            <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #F5A086, #c0624a)', border: '1px solid rgba(245,160,134,0.3)' }}>
                <span className="text-[13px] font-black text-white">A</span>
              </div>
              <span className="text-[17px] font-bold text-white tracking-tight">ASG</span>
            </div>
          </div>

          {/* Tagline pill */}
          <div className="inline-block px-6 py-3 rounded-full text-[13px] font-medium text-white/50 leading-relaxed"
            style={{ background: '#111', border: '1px solid #1E1E1E' }}>
            This is not the future. This is happening now — and Tech Scape AI is leading it.
          </div>
        </div>
      </div>
    </section>
  )
}
