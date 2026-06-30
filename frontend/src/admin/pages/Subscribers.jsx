import { useState } from 'react'
import { PageTitle, StatCard, Panel, Btn, Table, Tr, Td, IconBtn, Input, Select, Toggle, Badge, ICONS } from '../ui'

const SEED = [
  { email: 'rakesh.conqueri@gmail.com', source: '—', date: 'Jun 24, 2026', active: true },
  { email: 'hikitchener07@gmail.com',   source: '—', date: 'Jun 24, 2026', active: true },
  { email: 'kloroncanada@gmail.com',    source: '—', date: 'Jun 24, 2026', active: true },
  { email: 'nxtwavecan@gmail.com',      source: '—', date: 'Jun 24, 2026', active: true },
  { email: 'sahil@nxtwave.ca',          source: 'footer', date: 'Jun 22, 2026', active: false },
]

export default function Subscribers() {
  const [rows, setRows] = useState(SEED)
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')

  const total = rows.length
  const active = rows.filter(r => r.active).length

  const filtered = rows.filter(r =>
    r.email.toLowerCase().includes(q.toLowerCase()) &&
    (status === 'all' || (status === 'active' ? r.active : !r.active)))

  const toggle = (i) => setRows(rows.map((r, x) => x === i ? { ...r, active: !r.active } : r))
  const remove = (i) => setRows(rows.filter((_, x) => x !== i))

  return (
    <div className="mx-auto max-w-[1280px]">
      <PageTitle>Subscribers</PageTitle>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Subscribers" value={total} tone="white" />
        <StatCard label="Active" value={active} tone="green" />
        <StatCard label="Inactive" value={total - active} tone="red" />
      </div>

      {/* Filters */}
      <div className="mt-7 flex flex-wrap items-end gap-3">
        <Input placeholder="Search email…" value={q} onChange={(e) => setQ(e.target.value)} className="sm:w-[240px]" />
        <Btn variant="outline">Search</Btn>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-white/40">Status</span>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} className="!w-[150px]">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-white/40">From</span>
          <Input type="date" className="!w-[170px]" />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-white/40">To</span>
          <Input type="date" className="!w-[170px]" />
        </div>
        <Btn variant="outline" icon={ICONS.export} className="ml-auto">Export</Btn>
      </div>

      <div className="mt-5">
        <Table head={['Email', 'Source', 'Subscribed At', 'Status', { label: 'Actions', align: 'right' }]}>
          {filtered.map((r, i) => (
            <Tr key={i}>
              <Td className="font-medium text-white">{r.email}</Td>
              <Td className="text-white/50">{r.source}</Td>
              <Td className="text-white/60">{r.date}</Td>
              <Td><Badge tone={r.active ? 'green' : 'red'}>{r.active ? 'Active' : 'Inactive'}</Badge></Td>
              <Td>
                <div className="flex items-center justify-end gap-3">
                  <Toggle on={r.active} onClick={() => toggle(i)} />
                  <IconBtn icon={ICONS.trash} tone="red" title="Delete" onClick={() => remove(i)} />
                </div>
              </Td>
            </Tr>
          ))}
          {filtered.length === 0 && (
            <Tr><Td className="py-10 text-center text-white/40" colSpan={5}>No subscribers found.</Td></Tr>
          )}
        </Table>
      </div>
    </div>
  )
}
