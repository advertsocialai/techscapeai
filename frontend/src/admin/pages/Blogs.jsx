import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageTitle, Btn, Table, Tr, Td, IconBtn, Input, Select, Badge, ICONS } from '../ui'

const SEED = [
  { title: 'Responsible by Design: How NxtWave Is Building AI for Canadian Businesses', category: 'blog', author: 'Rakesh Chandra', date: 'Jun 5, 2026',  status: 'Published' },
  { title: 'Meet Tractbook: The AI-Native Accounting Platform Built for Canadian Businesses', category: 'blog', author: 'Vyshnavi Mayvar', date: 'Jun 9, 2025', status: 'Published' },
]

export default function Blogs() {
  const navigate = useNavigate()
  const [rows, setRows] = useState(SEED)
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')
  const [cat, setCat] = useState('all')

  const filtered = rows.filter(r =>
    r.title.toLowerCase().includes(q.toLowerCase()) &&
    (status === 'all' || r.status.toLowerCase() === status) &&
    (cat === 'all' || r.category === cat))

  const remove = (i) => setRows(rows.filter((_, x) => x !== i))

  return (
    <div className="mx-auto max-w-[1280px]">
      <PageTitle action={<Btn icon={ICONS.plus} onClick={() => navigate('/admin/blog/create')}>New Blog</Btn>}>
        Blogs
      </PageTitle>

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="flex gap-2">
          <Input placeholder="Search blogs…" value={q} onChange={(e) => setQ(e.target.value)} className="sm:w-[320px]" />
          <Btn variant="outline">Search</Btn>
        </div>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} className="!w-auto ml-auto">
          <option value="all">Status: All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </Select>
        <Select value={cat} onChange={(e) => setCat(e.target.value)} className="!w-auto">
          <option value="all">Category: All</option>
          <option value="blog">blog</option>
          <option value="header">header</option>
          <option value="recent-blog">recent-blog</option>
        </Select>
      </div>

      <Table head={['Title', 'Category', 'Author', 'Publish Date', 'Status', { label: 'Actions', align: 'right' }]}>
        {filtered.map((r, i) => (
          <Tr key={i}>
            <Td className="max-w-[420px] font-medium text-white">{r.title}</Td>
            <Td><Badge tone="salmon">{r.category}</Badge></Td>
            <Td className="text-white/60">{r.author}</Td>
            <Td className="text-white/60">{r.date}</Td>
            <Td><Badge tone="green">{r.status}</Badge></Td>
            <Td>
              <div className="flex items-center justify-end gap-1">
                <IconBtn icon={ICONS.edit} tone="blue" title="Edit" onClick={() => navigate('/admin/blog/create')} />
                <IconBtn icon={ICONS.trash} tone="red" title="Delete" onClick={() => remove(i)} />
              </div>
            </Td>
          </Tr>
        ))}
        {filtered.length === 0 && (
          <Tr><Td className="py-10 text-center text-white/40" colSpan={6}>No blogs found.</Td></Tr>
        )}
      </Table>
    </div>
  )
}
