import { useState } from 'react'
import { PageTitle, Panel, Btn, Input, Table, Tr, Td, IconBtn, ICONS } from '../ui'

const SEED = [
  { id: 16, name: 'blog' },
  { id: 18, name: 'header' },
  { id: 17, name: 'recent-blog' },
]

export default function BlogCategory() {
  const [rows, setRows] = useState(SEED)
  const [name, setName] = useState('')

  const add = () => {
    const v = name.trim()
    if (!v) return
    const nextId = rows.reduce((m, r) => Math.max(m, r.id), 0) + 1
    setRows([...rows, { id: nextId, name: v }])
    setName('')
  }
  const remove = (id) => setRows(rows.filter(r => r.id !== id))

  return (
    <div className="mx-auto max-w-[1000px]">
      <PageTitle>Blog Categories</PageTitle>

      <Panel className="mb-5 flex flex-col gap-3 p-4 sm:flex-row">
        <Input placeholder="Enter category name (e.g. Technology)" value={name}
          onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && add()} />
        <Btn icon={ICONS.plus} onClick={add} className="shrink-0">Add Category</Btn>
      </Panel>

      <Table head={['ID', 'Name', { label: 'Action', align: 'right' }]}>
        {rows.map((r) => (
          <Tr key={r.id}>
            <Td className="w-24 text-[#3D75F3]">{r.id}</Td>
            <Td className="font-medium text-white">{r.name}</Td>
            <Td>
              <div className="flex justify-end">
                <IconBtn icon={ICONS.trash} tone="red" title="Delete" onClick={() => remove(r.id)} />
              </div>
            </Td>
          </Tr>
        ))}
        {rows.length === 0 && (
          <Tr><Td className="py-10 text-center text-white/40" colSpan={3}>No categories yet.</Td></Tr>
        )}
      </Table>
    </div>
  )
}
