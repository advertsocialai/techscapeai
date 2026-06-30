import { Link, useNavigate } from 'react-router-dom'
import { Panel, Eyebrow, Btn, Field, Input, Select, Textarea, RichText, Svg, ICONS } from '../ui'

/* File picker styled on brand */
function FilePicker({ label = 'Choose File', hint = 'No file chosen' }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-[#2a2a2a] bg-[#141414] p-1.5">
      <span className="rounded-[6px] border border-[#2a2a2a] bg-[#1c1c1c] px-3 py-1.5 text-[13px] font-medium text-white/75">{label}</span>
      <span className="text-[13px] text-white/35">{hint}</span>
      <input type="file" className="hidden" />
    </label>
  )
}

export default function CreateBlog() {
  const navigate = useNavigate()
  const submit = (e) => { e.preventDefault(); navigate('/admin/blog/list') }

  return (
    <form onSubmit={submit} className="mx-auto max-w-[1100px]">
      <Link to="/admin/blog/list" className="mb-3 inline-flex items-center gap-2 text-[13px] text-[#3D75F3] hover:underline">
        <Svg d={ICONS.back} size={15} /> Back to Blogs
      </Link>
      <h1 className="mb-7 text-[26px] sm:text-[30px] font-extrabold tracking-tight">Create Blog</h1>

      <Panel className="p-6 sm:p-7">
        <Eyebrow>Basic Information</Eyebrow>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Title" required><Input placeholder="Welcome to the Tech Blog" required /></Field>
          <Field label="Category" required>
            <Select defaultValue="">
              <option value="" disabled>Select Category</option>
              <option>blog</option><option>header</option><option>recent-blog</option>
            </Select>
          </Field>
          <Field label="Author Name"><Input placeholder="Jane Doe" /></Field>
          <Field label="Author Position"><Input placeholder="Senior Engineer" /></Field>
          <Field label="Publish Date"><Input type="date" /></Field>
          <Field label="Status">
            <Select defaultValue="Draft"><option>Draft</option><option>Published</option></Select>
          </Field>
        </div>
      </Panel>

      <Panel className="mt-5 p-6 sm:p-7">
        <Eyebrow>Description</Eyebrow>
        <Field label="Content" required>
          <RichText placeholder="Write your blog content. Use the toolbar for headings, bold, lists…" />
        </Field>
      </Panel>

      <Panel className="mt-5 p-6 sm:p-7">
        <Eyebrow>Featured Image</Eyebrow>
        <FilePicker />
      </Panel>

      <Panel className="mt-5 p-6 sm:p-7">
        <Eyebrow>SEO Meta</Eyebrow>
        <div className="flex flex-col gap-5">
          <Field label="Meta Title"><Input placeholder="Tech Blog Welcome" /></Field>
          <Field label="Meta Description"><Textarea rows={3} placeholder="Our first post on the tech blog." /></Field>
        </div>
      </Panel>

      <div className="mt-6 flex justify-end gap-3">
        <Btn variant="outline" type="button" onClick={() => navigate('/admin/blog/list')}>Cancel</Btn>
        <Btn type="submit">Create Blog</Btn>
      </div>
    </form>
  )
}
