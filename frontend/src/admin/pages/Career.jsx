import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageTitle, StatCard, Btn, Table, Tr, Td, IconBtn, Input, Select, Badge, ICONS } from '../ui'

const SEED = [
  { title: 'Senior Backend Engineer', location: 'Toronto, Canada',   type: 'Remote',          date: 'May 24, 2026', open: true },
  { title: 'Product Designer',        location: 'Hyderabad, India',  type: 'Work From Office', date: 'May 20, 2026', open: false },
]

export default function Career() {
  const navigate = useNavigate()
  const [rows, setRows] = useState(SEED)
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')

  const open = rows.filter(r => r.open).length
  const filtered = rows.filter(r =>
    r.title.toLowerCase().includes(q.toLowerCase()) &&
    (status === 'all' || (status === 'open' ? r.open : !r.open)))

  const remove = (i) => setRows(rows.filter((_, x) => x !== i))

  return (
    <div className="mx-auto max-w-[1280px]">
      <PageTitle action={<Btn icon={ICONS.plus} onClick={() => navigate('/admin/career/new')}>Post New Job</Btn>}>
        Careers
      </PageTitle>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Positions" value={rows.length} tone="white" />
        <StatCard label="Open" value={open} tone="green" />
        <StatCard label="Closed" value={rows.length - open} tone="red" />
      </div>

      <div className="mt-7 flex flex-wrap items-end justify-between gap-3">
        <div className="flex gap-2">
          <Input placeholder="Search jobs…" value={q} onChange={(e) => setQ(e.target.value)} className="sm:w-[260px]" />
          <Btn variant="outline">Search</Btn>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-white/40">Status</span>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} className="!w-[150px]">
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </Select>
        </div>
      </div>

      <div className="mt-5">
        <Table head={['Job Title', 'Location', 'Type', 'Posted Date', 'Status', { label: 'Actions', align: 'right' }]}>
          {filtered.map((r, i) => (
            <Tr key={i}>
              <Td className="font-semibold text-white">{r.title}</Td>
              <Td className="text-white/60">{r.location}</Td>
              <Td className="text-white/60">{r.type}</Td>
              <Td className="text-white/60">{r.date}</Td>
              <Td><Badge tone={r.open ? 'green' : 'red'}>{r.open ? 'Open' : 'Closed'}</Badge></Td>
              <Td>
                <div className="flex items-center justify-end gap-1">
                  <IconBtn icon={ICONS.edit} tone="blue" title="Edit" onClick={() => navigate('/admin/career/new')} />
                  <IconBtn icon={ICONS.trash} tone="red" title="Delete" onClick={() => remove(i)} />
                </div>
              </Td>
            </Tr>
          ))}
          {filtered.length === 0 && (
            <Tr><Td className="py-10 text-center text-white/40" colSpan={6}>No positions found.</Td></Tr>
          )}
        </Table>
      </div>
    </div>
  )
}
