// Partner logos matching the Figma "In Partnership With" section
const PARTNERS = [
  { name: 'Red Wave', color: '#FF4444' },
  { name: 'Net Wave', color: '#3D75F3' },
  { name: 'ABS', color: '#FFFFFF' },
  { name: 'TechCore', color: '#F5A086' },
]

export default function Partners() {
  return (
    <section id="partners" className="relative bg-black py-16 lg:py-20">
      {/* Top border */}
      <div className="max-w-[1440px] mx-auto px-[114px] lg:px-[114px] md:px-8 sm:px-5">
        <div
          className="rounded-2xl py-10 px-8 lg:px-14 text-center"
          style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}
        >
          <p className="section-label mb-8">In Partnership With</p>

          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 mb-8">
            {PARTNERS.map(({ name, color }) => (
              <div key={name} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                {/* Coloured wave/shape icon */}
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                  <path
                    d="M2 18 C6 6, 10 2, 14 11 C18 20, 22 16, 26 8"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="text-[15px] font-bold text-white/80 tracking-tight">{name}</span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p
            className="text-[14px] font-medium leading-relaxed max-w-xl mx-auto px-6 py-4 rounded-xl"
            style={{ background: '#111', border: '1px solid #1E1E1E', color: 'rgba(255,255,255,0.55)' }}
          >
            This is not the future. This is happening now — and Tech Scape AI is leading it.
          </p>
        </div>
      </div>
    </section>
  )
}
