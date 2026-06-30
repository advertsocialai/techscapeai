import { Link } from 'react-router-dom'

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3L5 8l5 5"/>
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6.5L8 2l6 4.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z"/>
      <path d="M6 15V9h4v6"/>
    </svg>
  )
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div
          className="text-8xl font-black mb-4"
          style={{
            background: 'linear-gradient(135deg, rgba(61,117,243,0.5), rgba(245,160,134,0.4))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-white/40 mb-8 max-w-md mx-auto text-[15px] leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white/50 rounded-xl hover:text-white hover:bg-white/[0.05] transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <ArrowLeftIcon />
            Go Back
          </button>
          <Link
            to="/"
            className="btn flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <HomeIcon />
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
