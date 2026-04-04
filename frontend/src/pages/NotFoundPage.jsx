import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div
          className="text-8xl font-black mb-4"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(6,182,212,0.3))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-[#9CA3AF] mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#9CA3AF] border border-white/[0.12] rounded-xl hover:text-white hover:bg-white/[0.05] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-primary"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
