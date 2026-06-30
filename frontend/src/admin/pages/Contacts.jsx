import { useState } from 'react'
import { PageTitle, Btn, Table, Tr, Td, IconBtn, Select, ICONS, Badge } from '../ui'

const SEED = [
  { name: 'Henry Stallwart',         email: 'hikitchener07@gmail.com',  type: 'general_inquiry', date: 'Jun 24, 2026', read: false },
  { name: 'Rakesh Chandra Talakaturi', email: 'nxtwavecan@gmail.com',   type: 'general_inquiry', date: 'Jun 24, 2026', read: false },
  { name: 'Rakesh Chandra Talakaturi', email: 'rakesh@nxtwaveworks.com', type: 'general_inquiry', date: 'Jun 24, 2026', read: true },
  { name: 'Rakesh Chandra Talakaturi', email: 'techaiscape@gmail.com',  type: 'general_inquiry', date: 'Jun 22, 2026', read: false },
  { name: 'SAHIL SINGH',             email: 'sahilsingh000764@gmail.com', type: 'general_inquiry', date: 'Jun 22, 2026', read: false },
  { name: 'SAHIL SINGH',             email: 'sahil@nxtwave.ca',         type: 'general_inquiry', date: 'Jun 22, 2026', read: true },
]

export default function Contacts() {
  const [rows, setRows] = useState(SEED)
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')

  const filtered = rows.filter(r =>
    (status === 'all' || (status === 'read' ? r.read : !r.read)) &&
    (type === 'all' || r.type === type))

  const remove = (i) => setRows(rows.filter((_, x) => x !== i))

  return (
    <div className="mx-auto max-w-[1280px]">
      <PageTitle
        action={
          <div className="flex flex-wrap items-center gap-3">
            <Select value={status} onChange={(e) => setStatus(e.target.value)} className="!py-2 !w-auto">
              <option value="all">Status: All</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </Select>
            <Select value={type} onChange={(e) => setType(e.target.value)} className="!py-2 !w-auto">
              <option value="all">Types: All</option>
              <option value="general_inquiry">General Inquiry</option>
            </Select>
            <Btn variant="outline" icon={ICONS.export}>Export</Btn>
          </div>
        }
      >
        Contacts
      </PageTitle>

      <Table head={['First Name', 'Email', 'Type', 'Date', 'Status', { label: 'Actions', align: 'right' }]}>
        {filtered.map((r, i) => (
          <Tr key={i}>
            <Td className="font-medium text-white">{r.name}</Td>
            <Td className="text-white/60">{r.email}</Td>
            <Td><Badge tone="blue">{r.type}</Badge></Td>
            <Td className="text-white/60">{r.date}</Td>
            <Td>{r.read ? <Badge tone="gray">Read</Badge> : <Badge tone="salmon">New</Badge>}</Td>
            <Td>
              <div className="flex items-center justify-end gap-1">
                <IconBtn icon={ICONS.eye} tone="blue" title="View" />
                <IconBtn icon={ICONS.trash} tone="red" title="Delete" onClick={() => remove(i)} />
              </div>
            </Td>
          </Tr>
        ))}
        {filtered.length === 0 && (
          <Tr><Td className="py-10 text-center text-white/40" colSpan={6}>No contacts found.</Td></Tr>
        )}
      </Table>
    </div>
  )
}
