/* eslint-disable react-refresh/only-export-components */
import { useRef } from 'react'

/* ──────────────────────────────────────────────
   Shared admin UI primitives — brand palette
   (blue #3D75F3 → salmon #F5A086 on #0D0D0D).
   Reused across every admin screen for consistency.
   ────────────────────────────────────────────── */

/* Inline icon helper */
export const Svg = ({ d, size = 18, sw = 1.8, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...p}>{d}</svg>
)

export const ICONS = {
  eye:    <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
  trash:  <><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></>,
  edit:   <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></>,
  export: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>,
  plus:   <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
  search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  back:   <><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></>,
  chevron:<polyline points="6 9 12 15 18 9" />,
}

/* Page title */
export const PageTitle = ({ children, action }) => (
  <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
    <h1 className="text-[26px] sm:text-[30px] font-extrabold tracking-tight">{children}</h1>
    {action}
  </div>
)

/* Eyebrow / section label (salmon, uppercase) */
export const Eyebrow = ({ children }) => (
  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F5A086]">{children}</p>
)

/* Card / panel surface */
export const Panel = ({ className = '', children }) => (
  <div className={`rounded-[16px] border border-[#1C1C1C] bg-[#0D0D0D] ${className}`}>{children}</div>
)

/* Stat card */
export const StatCard = ({ label, value, tone = 'white' }) => {
  const colors = { white: '#FFFFFF', green: '#34D399', red: '#F87171', blue: '#3D75F3', salmon: '#F5A086' }
  return (
    <Panel className="px-6 py-6 text-center">
      <p className="text-[13px] text-white/50">{label}</p>
      <p className="mt-2 text-[34px] font-extrabold leading-none" style={{ color: colors[tone] }}>{value}</p>
    </Panel>
  )
}

/* Buttons */
export const Btn = ({ variant = 'primary', icon, children, className = '', ...p }) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-[8px] px-4 py-2.5 text-[14px] font-semibold transition-all duration-200 disabled:opacity-60'
  const styles = {
    primary: 'grad text-white hover:opacity-90 hover:-translate-y-px',
    outline: 'border border-[#2a2a2a] text-white/75 hover:border-white/30 hover:text-white',
    ghost:   'text-white/60 hover:text-white hover:bg-white/[0.05]',
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...p}>
      {icon && <Svg d={icon} size={16} />}{children}
    </button>
  )
}

/* Icon-only action button (row actions) */
export const IconBtn = ({ icon, tone = 'blue', title, ...p }) => {
  const c = { blue: '#3D75F3', red: '#F87171', salmon: '#F5A086' }[tone]
  return (
    <button title={title}
      className="grid h-8 w-8 place-items-center rounded-[8px] transition-colors hover:bg-white/[0.06]"
      style={{ color: c }} {...p}>
      <Svg d={icon} size={17} />
    </button>
  )
}

/* Status / category badge */
export const Badge = ({ tone = 'green', children }) => {
  const map = {
    green:  { bg: 'rgba(52,211,153,0.12)',  bd: 'rgba(52,211,153,0.30)',  fg: '#34D399' },
    red:    { bg: 'rgba(248,113,113,0.12)', bd: 'rgba(248,113,113,0.30)', fg: '#F87171' },
    blue:   { bg: 'rgba(61,117,243,0.12)',  bd: 'rgba(61,117,243,0.30)',  fg: '#3D75F3' },
    salmon: { bg: 'rgba(245,160,134,0.12)', bd: 'rgba(245,160,134,0.30)', fg: '#F5A086' },
    gray:   { bg: 'rgba(255,255,255,0.06)', bd: 'rgba(255,255,255,0.12)', fg: 'rgba(255,255,255,0.6)' },
  }[tone]
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium"
      style={{ background: map.bg, border: `1px solid ${map.bd}`, color: map.fg }}>
      {children}
    </span>
  )
}

/* Form field wrapper */
export const Field = ({ label, required, children, className = '' }) => (
  <label className={`flex flex-col gap-1.5 ${className}`}>
    {label && (
      <span className="text-[12px] font-medium text-[#3D75F3]">
        {label}{required && <span className="text-[#F5A086]"> *</span>}
      </span>
    )}
    {children}
  </label>
)

const fieldBase =
  'w-full rounded-[8px] border border-[#2a2a2a] bg-[#141414] px-3.5 py-2.5 text-[14px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#3D75F3]'

export const Input = (p) => <input {...p} className={`${fieldBase} ${p.className || ''}`} />
export const Textarea = (p) => <textarea {...p} className={`${fieldBase} resize-y ${p.className || ''}`} />
export const Select = ({ children, ...p }) => (
  <div className="relative">
    <select {...p} className={`${fieldBase} cursor-pointer appearance-none pr-9 ${p.className || ''}`}
      style={{ colorScheme: 'dark' }}>{children}</select>
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
      <Svg d={ICONS.chevron} size={16} />
    </span>
  </div>
)

/* Toggle switch */
export const Toggle = ({ on, onClick }) => (
  <button onClick={onClick} type="button"
    className="relative h-[22px] w-[40px] flex-shrink-0 rounded-full transition-all duration-200"
    style={{ background: on ? 'linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%)' : '#2a2a2a' }}>
    <span className="absolute top-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-all duration-200"
      style={{ left: on ? '20px' : '2px' }} />
  </button>
)

/* Search box (input + button) */
export const SearchBox = ({ placeholder = 'Search...', value, onChange, onSearch }) => (
  <div className="flex gap-2">
    <Input placeholder={placeholder} value={value} onChange={onChange}
      onKeyDown={(e) => e.key === 'Enter' && onSearch?.()} className="sm:w-[280px]" />
    <Btn variant="outline" onClick={onSearch}>Search</Btn>
  </div>
)

/* Simple table shell — pass head (array of labels) + children rows */
export const Table = ({ head, children }) => (
  <Panel className="overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left">
        <thead>
          <tr className="border-b border-[#1C1C1C]">
            {head.map((h, i) => (
              <th key={i} className={`px-5 py-4 text-[13px] font-semibold text-white/45 ${h.align === 'right' ? 'text-right' : ''}`}>
                {h.label ?? h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  </Panel>
)

export const Tr = ({ children }) => (
  <tr className="border-b border-[#141414] transition-colors last:border-0 hover:bg-white/[0.02]">{children}</tr>
)
export const Td = ({ children, className = '', ...p }) => (
  <td className={`px-5 py-4 text-[14px] text-white/80 ${className}`} {...p}>{children}</td>
)

/* Single toolbar button — hoisted out of RichText so it isn't recreated each render */
const RteTool = ({ onClick, children, title }) => (
  <button type="button" title={title} onMouseDown={(e) => e.preventDefault()} onClick={onClick}
    className="grid h-8 min-w-8 place-items-center rounded px-1.5 text-[13px] font-semibold text-white/65 transition-colors hover:bg-white/[0.07] hover:text-white">
    {children}
  </button>
)

/* Lightweight rich-text toolbar + editable area (execCommand-based) */
export function RichText({ placeholder = 'Write your content…' }) {
  const ref = useRef(null)
  const cmd = (c, v) => { document.execCommand(c, false, v); ref.current?.focus() }
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#2a2a2a] bg-[#141414]">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-[#2a2a2a] bg-[#0F0F0F] px-2 py-1.5">
        <RteTool title="Heading 1" onClick={() => cmd('formatBlock', '<h1>')}>H1</RteTool>
        <RteTool title="Heading 2" onClick={() => cmd('formatBlock', '<h2>')}>H2</RteTool>
        <RteTool title="Heading 3" onClick={() => cmd('formatBlock', '<h3>')}>H3</RteTool>
        <RteTool title="Paragraph" onClick={() => cmd('formatBlock', '<p>')}>P</RteTool>
        <span className="mx-1 h-5 w-px bg-[#2a2a2a]" />
        <RteTool title="Bold" onClick={() => cmd('bold')}><b>B</b></RteTool>
        <RteTool title="Italic" onClick={() => cmd('italic')}><i>I</i></RteTool>
        <RteTool title="Underline" onClick={() => cmd('underline')}><u>U</u></RteTool>
        <span className="mx-1 h-5 w-px bg-[#2a2a2a]" />
        <RteTool title="Bullet list" onClick={() => cmd('insertUnorderedList')}>• ⃥</RteTool>
        <RteTool title="Numbered list" onClick={() => cmd('insertOrderedList')}>1.</RteTool>
        <RteTool title="Quote" onClick={() => cmd('formatBlock', '<blockquote>')}>&ldquo;</RteTool>
        <RteTool title="Link" onClick={() => { const u = prompt('Link URL'); if (u) cmd('createLink', u) }}>🔗</RteTool>
        <RteTool title="Clear formatting" onClick={() => cmd('removeFormat')}>✕</RteTool>
      </div>
      <div ref={ref} contentEditable suppressContentEditableWarning data-ph={placeholder}
        className="admin-rte min-h-[200px] px-4 py-3 text-[14px] leading-relaxed text-white/85 outline-none" />
    </div>
  )
}
