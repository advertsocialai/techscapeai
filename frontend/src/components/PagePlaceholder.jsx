import { Link } from 'react-router-dom'

export default function PagePlaceholder({ eyebrow, title, description }) {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-4 py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(61,117,243,0.07) 0%, transparent 60%)' }}
      />

      <div className="relative text-center">
        <p className="label mb-4">{eyebrow}</p>
        <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-[-0.02em] leading-tight mb-5">
          <span className="grad-text">{title}</span>
        </h1>
        {description && (
          <p className="text-white/45 max-w-md mx-auto text-[15px] leading-relaxed mb-8">
            {description}
          </p>
        )}
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
