import { Link } from 'react-router-dom'

/* ──────────────────────────────────────────────
   Admin dashboard — overview stat grid.
   Mirrors the reference layout but on the home-page
   brand palette (blue #3D75F3 / salmon #F5A086).
   Counts are placeholders until the backend exposes
   the matching list/count endpoints.
   ────────────────────────────────────────────── */

const I = (d) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
)

// accent === 'blue' | 'salmon' — alternating brand tints for the icon tiles
const STATS = [
  { label: 'Services',          count: 0, to: '/admin/services',   accent: 'blue',   icon: I(<><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></>) },
  { label: 'Blogs',             count: 0, to: '/admin/blog/list',  accent: 'salmon', icon: I(<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>) },
  { label: 'FAQs',              count: 0, to: '/admin/faqs',       accent: 'blue',   icon: I(<><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></>) },
  { label: 'Team Members',      count: 0, to: '/admin/team',       accent: 'salmon', icon: I(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>) },
  { label: 'Contact Inquiries', count: 0, to: '/admin/contacts',   accent: 'blue',   icon: I(<><path d="M4 4h16v16H4z" /><path d="m22 6-10 7L2 6" /></>) },
  { label: 'Carousel Items',    count: 0, to: '/admin/carousel',   accent: 'salmon', icon: I(<><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M18 8v8" /><path d="M22 10v4" /></>) },
  { label: 'Subscribers',       count: 0, to: '/admin/subscribers',accent: 'blue',   icon: I(<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>) },
  { label: 'Gallery Images',    count: 0, to: '/admin/gallery',    accent: 'salmon', icon: I(<><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></>) },
  { label: 'Captains',          count: 0, to: '/admin/captains',   accent: 'blue',   icon: I(<><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></>) },
  { label: 'Tickers',           count: 0, to: '/admin/tickers',    accent: 'salmon', icon: I(<><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>) },
  { label: 'Client Images',     count: 0, to: '/admin/clients',    accent: 'blue',   icon: I(<><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21" /></>) },
  { label: 'Careers / Jobs',    count: 2, to: '/admin/career',     accent: 'salmon', icon: I(<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>) },
]

const ACCENT = {
  blue:   { tile: 'rgba(61,117,243,0.14)',  ring: 'rgba(61,117,243,0.30)',  fg: '#3D75F3' },
  salmon: { tile: 'rgba(245,160,134,0.14)', ring: 'rgba(245,160,134,0.30)', fg: '#F5A086' },
}

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-[1280px]">
      <h1 className="text-[26px] sm:text-[30px] font-extrabold tracking-tight">Dashboard</h1>

      {/* Welcome banner */}
      <div className="relative mt-6 overflow-hidden rounded-[18px] border border-[#1C1C1C] p-7 sm:p-9"
        style={{ background: 'linear-gradient(110deg, rgba(61,117,243,0.18) 0%, rgba(13,13,13,1) 55%, rgba(245,160,134,0.16) 100%)' }}>
        <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full opacity-30 blur-2xl grad pointer-events-none" />
        <div className="relative">
          <p className="section-label">Welcome back 👋</p>
          <h2 className="mt-2 text-[28px] sm:text-[34px] font-extrabold">
            Hello <span className="grad-text">Admin</span>
          </h2>
          <p className="mt-2 text-[14px] lg:text-[15px] text-white/50">
            Here&apos;s what&apos;s happening with your website today.
          </p>
        </div>
      </div>

      {/* Stat grid */}
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {STATS.map(({ label, count, to, accent, icon }) => {
          const a = ACCENT[accent]
          return (
            <Link
              key={label}
              to={to}
              className="group flex items-center gap-4 rounded-[16px] border border-[#1C1C1C] bg-[#0D0D0D] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15"
            >
              <span
                className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-[12px]"
                style={{ background: a.tile, border: `1px solid ${a.ring}`, color: a.fg }}
              >
                {icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[24px] font-extrabold leading-none">{count}</p>
                <p className="mt-1.5 truncate text-[13px] text-white/50">{label}</p>
              </div>
              <span className="text-white/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white/60">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
