import { useEffect, useMemo, useState } from 'react'
import { listPlaybooks, getPlaybook, renderPlaybook } from '../services/api'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CATEGORY_BADGES = {
  'Enquiry & Lead Management': { color: '#3D75F3', glyph: '◆' },
  'Booking & Payment':         { color: '#3D75F3', glyph: '●' },
  'Pre-Departure':             { color: '#F5A086', glyph: '▲' },
  'In-Trip Support':           { color: '#F5A086', glyph: '◇' },
  'Post-Trip':                 { color: '#3D75F3', glyph: '◊' },
  'Visa & Documents':          { color: '#F5A086', glyph: '✱' },
  'Upsell & Loyalty':          { color: '#3D75F3', glyph: '✦' },
}

const SAMPLE_CONTEXT = {
  name: 'Sarah',
  ref:  'TSAI-20260606-0001',
  destination: 'Kerala',
  destination_upper: 'KERALA',
  dates: '12–22 Jan 2027',
  pax: '2 Adults',
  budget_range: '₹50,000',
  agent_name: 'Priya Sharma',
  agent: 'Priya',
  company_name: 'Gogaga Holidays',
  phone: '+91-9999900001',
  email: 'sarah@example.com',
  website: 'gogaga.in',
  whatsapp_num: '+91-9999900001',
  source: 'website',
  timeofday: 'evening',
  datetime: 'Sat 06 Jun 2026, 19:21',
  coordinator: 'Arjun',
  coordinator_name: 'Arjun Mehta',
  coord_phone: '+91-9999900002',
  departure_date: '12 Jan 2027',
  return_date: '22 Jan 2027',
  nights: '10',
  deposit: '₹25,000',
  balance: '₹80,000',
  balance_due_date: '15 Dec 2026',
  payment_link: 'https://pay.gogaga.in/tsai-0001',
  grand_total: '₹1,05,000',
  emergency_line: '+91-80000-12345',
  insurance_hotline: '+91-1800-209-5858',
  flight_number: 'AI-302',
  dep_time: '06:45',
  terminal: '3',
  arrive_by_time: '04:15',
  driver_name: 'Ravi Kumar',
  driver_phone: '+91-9999911111',
  hotel_name: 'Taj Lake Palace',
  hotel1_phone: '+91-9999922222',
  local_emergency: '112',
  visa_status: 'PENDING',
  visa_status_banner: 'REQUIRED',
  visa_action_required: 'Apply within 7 days at gogaga.in/visa',
  visa_link: 'https://gogaga.in/visa',
  visa_whatsapp_status: 'Pending — apply now',
  fourteen_day_date: '23 Dec 2026',
  three_day_date: '03 Jan 2027',
  passport_expiry_check: 'OK',
  trip_type: 'Honeymoon',
  amount: '₹52,500',
  quote_date: '06 Jun 2026',
  expiry_date: '20 Jun 2026',
  agent_phone: '+91-9999900001',
}

const CHANNEL_ICONS = { email: '✉', whatsapp: '💬', sms: '📱', voice: '📞' }

export default function TravelWorkflowPage() {
  const [items, setItems]       = useState([])
  const [active, setActive]     = useState(null)
  const [detail, setDetail]     = useState(null)
  const [rendered, setRendered] = useState(null)
  const [filter, setFilter]     = useState('all')
  const [busy, setBusy]         = useState(false)
  const [err, setErr]           = useState(null)
  const heroAnim = useScrollAnimation({ threshold: 0.15 })

  useEffect(() => {
    listPlaybooks()
      .then(setItems)
      .catch((e) => setErr(String(e.message || e)))
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'all') return items
    return items.filter((i) => i.category === filter)
  }, [items, filter])

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category))
    return ['all', ...Array.from(set)]
  }, [items])

  const open = async (uc) => {
    setActive(uc.id)
    setBusy(true)
    setErr(null)
    setDetail(null)
    setRendered(null)
    try {
      const d = await getPlaybook(uc.id)
      setDetail(d)
      const r = await renderPlaybook(uc.id, SAMPLE_CONTEXT, null)
      setRendered(r)
    } catch (e) {
      setErr(String(e.message || e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <section
        ref={heroAnim.ref}
        className={`wrap py-20 lg:py-28 transition-all duration-700 ${
          heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="label">TravelWorkflow OS</span>
        <h1 className="mt-3 text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold leading-tight">
          All 24 Use Cases · <span className="grad-text">Live Templates</span>
        </h1>
        <p className="mt-5 max-w-[720px] text-[14px] lg:text-[15px] text-white/50">
          Every email, WhatsApp, SMS and phone script defined in the India
          Travel Automation spec — rendered from the same registry that powers
          dispatch in production. Click any card to preview the full templates
          with a sample customer profile.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
                filter === c
                  ? 'bg-[#3D75F3] border-[#3D75F3] text-white'
                  : 'border-[#1C1C1C] text-white/70 hover:border-[#3D75F3]/50'
              }`}
            >
              {c === 'all' ? `All (${items.length})` : c}
            </button>
          ))}
        </div>

        {err && (
          <div className="mt-6 text-[13px] text-[#F5A086]">⚠ {err}</div>
        )}

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((uc, i) => (
            <UseCaseCard key={uc.id} uc={uc} index={i} onOpen={() => open(uc)} />
          ))}
        </div>
      </section>

      {active && (
        <Drawer
          uc={items.find((x) => x.id === active)}
          detail={detail}
          rendered={rendered}
          busy={busy}
          onClose={() => { setActive(null); setDetail(null); setRendered(null) }}
        />
      )}
    </main>
  )
}

function UseCaseCard({ uc, index, onOpen }) {
  const a = useScrollAnimation({ threshold: 0.05 })
  const badge = CATEGORY_BADGES[uc.category] || { color: '#3D75F3', glyph: '●' }
  return (
    <article
      ref={a.ref}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
      className={`card cursor-pointer transition-all duration-700 ${
        a.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] tracking-wider font-semibold uppercase"
            style={{ color: badge.color }}
          >
            {badge.glyph} {uc.id}
          </span>
        </div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{
            background: uc.priority?.includes('CRITICAL') ? '#F5A08620' : '#3D75F320',
            color: uc.priority?.includes('CRITICAL') ? '#F5A086' : '#3D75F3',
          }}
        >
          {uc.priority}
        </span>
      </div>
      <h3 className="mt-3 text-[18px] font-bold leading-snug">{uc.title}</h3>
      <p className="mt-2 text-[13px] text-white/50 line-clamp-2">{uc.trigger}</p>
      <div className="mt-4 pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
        <div className="flex gap-2 text-[14px]">
          {uc.channels.map((ch) => (
            <span key={ch} title={ch}>
              {CHANNEL_ICONS[ch] || '·'}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-white/40">{uc.sla}</span>
      </div>
    </article>
  )
}

function Drawer({ uc, detail, rendered, busy, onClose }) {
  if (!uc) return null
  const channels = rendered?.channels || {}
  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <aside
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[820px] h-full overflow-y-auto bg-[#0D0D0D] border-l border-[#1C1C1C]"
      >
        <header className="sticky top-0 bg-[#0D0D0D]/95 backdrop-blur border-b border-[#1C1C1C] px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-wider text-[#F5A086] uppercase font-semibold">
              {uc.id} · {uc.category}
            </div>
            <h2 className="mt-1 text-[20px] lg:text-[24px] font-extrabold leading-tight">
              {uc.title}
            </h2>
            <div className="mt-2 text-[12px] text-white/50">
              SLA: {uc.sla} · Priority: {uc.priority}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-[20px] leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </header>

        <div className="p-6 space-y-8">
          {busy && <div className="text-[13px] text-white/50">Loading…</div>}

          {detail?.trigger && (
            <section>
              <h4 className="label">Trigger</h4>
              <p className="mt-2 text-[14px] text-white/70">{detail.trigger}</p>
            </section>
          )}

          {detail?.automation?.length > 0 && (
            <section>
              <h4 className="label">Automation Rules</h4>
              <ul className="mt-2 space-y-1.5">
                {detail.automation.map((a, i) => (
                  <li key={i} className="text-[13px] text-white/70 flex gap-2">
                    <span className="text-[#3D75F3]">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {channels.email && (
            <ChannelBlock title="Email" icon="✉" accent="#3D75F3">
              {channels.email.subject && (
                <div className="mb-3 pb-3 border-b border-[#1C1C1C]">
                  <div className="text-[11px] text-white/40 uppercase tracking-wide mb-1">
                    Subject
                  </div>
                  <div className="text-[14px] font-semibold">
                    {channels.email.subject}
                  </div>
                </div>
              )}
              <pre className="whitespace-pre-wrap text-[13px] leading-relaxed text-white/80 font-sans">
                {channels.email.body}
              </pre>
            </ChannelBlock>
          )}

          {channels.whatsapp && (
            <ChannelBlock title="WhatsApp" icon="💬" accent="#F5A086">
              <pre className="whitespace-pre-wrap text-[13px] leading-relaxed text-white/80 font-sans">
                {channels.whatsapp.content}
              </pre>
            </ChannelBlock>
          )}

          {channels.sms && (
            <ChannelBlock title="SMS" icon="📱" accent="#3D75F3">
              <pre className="whitespace-pre-wrap text-[13px] leading-relaxed text-white/80 font-sans">
                {channels.sms.content}
              </pre>
            </ChannelBlock>
          )}

          {channels.voice && (
            <ChannelBlock title="Phone Script" icon="📞" accent="#F5A086">
              <pre className="whitespace-pre-wrap text-[13px] leading-relaxed text-white/80 font-sans">
                {channels.voice.script}
              </pre>
            </ChannelBlock>
          )}

          {detail?.merge_vars?.length > 0 && (
            <section>
              <h4 className="label">Merge Variables ({detail.merge_vars.length})</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {detail.merge_vars.map((v) => (
                  <code
                    key={v}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#1a1a1a] text-white/70"
                  >
                    {'{'}{v}{'}'}
                  </code>
                ))}
              </div>
            </section>
          )}
        </div>
      </aside>
    </div>
  )
}

function ChannelBlock({ title, icon, accent, children }) {
  return (
    <section>
      <h4 className="flex items-center gap-2 text-[11px] tracking-wider uppercase font-semibold"
          style={{ color: accent }}>
        <span>{icon}</span> {title}
      </h4>
      <div
        className="mt-3 p-4 rounded-lg border"
        style={{ background: '#0a0a0a', borderColor: '#1C1C1C' }}
      >
        {children}
      </div>
    </section>
  )
}
