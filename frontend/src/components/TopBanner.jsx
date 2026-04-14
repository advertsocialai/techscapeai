import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TopBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div
      className="relative z-[60] flex items-center justify-center gap-3 px-10 py-2.5 text-center overflow-hidden"
      style={{ background: 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' }}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
          animation: 'shimmer 3s linear infinite',
          backgroundSize: '200% auto',
        }}
      />

      <p className="text-[13px] font-medium text-white relative z-10">
        🚀 Now accepting new clients —{' '}
        <Link
          to="/contact"
          className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity"
        >
          Book your free consultation today
        </Link>
      </p>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all z-10"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
