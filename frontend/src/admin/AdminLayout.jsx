import { useState } from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'

/* ──────────────────────────────────────────────
   Admin shell — fixed gradient sidebar + scrollable
   content area. Colors follow the home-page brand
   system (blue #3D75F3 → salmon #F5A086 on #000).
   ────────────────────────────────────────────── */

const Icon = ({ d, ...p }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {d}
  </svg>
)

const NAV = [
  { to: '/admin', end: true, label: 'Dashboard', icon: <><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></> },
  { to: '/admin/contacts',    label: 'Contacts',    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></> },
  { to: '/admin/subscribers', label: 'Subscribers', icon: <><path d="M4 4h16v16H4z" /><path d="m22 6-10 7L2 6" /></> },
  { to: '/admin/career',      label: 'Career',      icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></> },
  { to: '/admin/settings',    label: 'Settings',    icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></> },
]

const BLOG_ICON = <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>
const BLOG_SUB = [
  { to: '/admin/blog/category', label: 'Category' },
  { to: '/admin/blog/create',   label: 'Create Blog' },
  { to: '/admin/blog/list',     label: 'List Blog' },
]

export default function AdminLayout() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [blogOpen, setBlogOpen] = useState(location.pathname.startsWith('/admin/blog'))

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-[10px] text-[14px] font-medium transition-all duration-200 ${
      isActive
        ? 'text-white grad'
        : 'text-white/55 hover:text-white hover:bg-white/[0.05]'
    }`

  const SidebarBody = (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="px-6 pt-7 pb-6">
        <NavLink to="/admin" className="flex items-center gap-2" onClick={() => setOpen(false)}>
           <img src="/logotechscapeai.svg" alt="Tech Scape AI" width={170} height={32} fetchpriority="high" decoding="async" className="h-8 w-auto" />
        </NavLink>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3.5 flex flex-col gap-1.5">
        {NAV.map(({ to, end, label, icon }) => (
          <NavLink key={to} to={to} end={end} className={linkClass} onClick={() => setOpen(false)} >
            <Icon d={icon} className='text-white'/>
            <span className='text-white'>{label}</span>
          </NavLink>
        ))}

        {/* Blog — expandable group */}
        <button
          onClick={() => setBlogOpen(v => !v)}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-[10px] text-[14px] font-medium transition-all duration-200 ${
            location.pathname.startsWith('/admin/blog') ? 'text-white' : 'text-white hover:text-white hover:bg-white/[0.05]'
          }`}
        >
          <Icon d={BLOG_ICON} />
          <span>Blog</span>
          <Icon d={<polyline points="6 9 12 15 18 9" />} width="16" height="16"
            className={`ml-auto chev ${blogOpen ? 'open' : ''}`} />
        </button>
        {blogOpen && (
          <div className="ml-3 flex flex-col gap-1 border-l border-[#1C1C1C] pl-3">
            {BLOG_SUB.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-[8px] px-4 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? 'grad-text' : 'text-white hover:text-white'
                  }`}>
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* User + logout */}
      <div className="border-t border-[#1C1C1C] p-4">
        <div className="flex items-center gap-3 px-1 pb-3">
          <span className="grid place-items-center h-9 w-9 rounded-full grad text-white text-[14px] font-bold">T</span>
          <div className="leading-tight">
            <p className="text-[14px] font-semibold text-white">Test User</p>
            <p className="text-[11px] text-white">Admin</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="w-full rounded-[10px] border border-[#2a2a2a] py-2.5 text-[13px] font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
        >
          Logout
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] border-r border-[#1C1C1C] bg-[#0A0A0A] lg:block">
        {SidebarBody}
      </aside>

      {/* Mobile drawer */}
      {open && <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[260px] border-r border-[#1C1C1C] bg-[#0A0A0A] transition-transform duration-300 lg:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        {SidebarBody}
      </aside>

      {/* Content */}
      <div className="lg:pl-[260px]">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-[#1C1C1C] bg-black/80 px-4 py-3 nav-blur lg:hidden">
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-white/70">
            <Icon d={<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>} width="22" height="22" />
          </button>
          <span className="text-[16px] font-extrabold">Tech<span className="grad-text">Scape</span></span>
        </div>

        <main className="px-5 py-8 sm:px-8 lg:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
