import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TopBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="relative w-full z-[60] flex items-center justify-center gap-3 px-4 py-2.5 text-center"
      style={{ background: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}>

      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)' }} />

      <p className="text-[13px] font-medium text-white relative">
        🚀 Now accepting new clients —{' '}
        <Link to="/contact"
          className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
          Book your free consultation today
        </Link>
      </p>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
