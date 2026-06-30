import { Link, useNavigate } from 'react-router-dom'
import { Panel, Eyebrow, Btn, Field, Input, Select, Textarea, RichText, Svg, ICONS } from '../ui'

export default function CareerPost() {
  const navigate = useNavigate()

  const submit = (e) => { e.preventDefault(); navigate('/admin/career') }

  return (
    <form onSubmit={submit} className="mx-auto max-w-[1100px]">
      <Link to="/admin/career" className="mb-3 inline-flex items-center gap-2 text-[13px] text-[#3D75F3] hover:underline">
        <Svg d={ICONS.back} size={15} /> Back to Careers
      </Link>
      <h1 className="mb-7 text-[26px] sm:text-[30px] font-extrabold tracking-tight">Post New Job</h1>

      {/* Basic info */}
      <Panel className="p-6 sm:p-7">
        <Eyebrow>Basic Information</Eyebrow>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Field label="Job Title" required><Input placeholder="e.g. Senior Backend Engineer" required /></Field>
          <Field label="Location"><Input placeholder="e.g. Bengaluru, India" /></Field>
          <Field label="Job Type">
            <Select defaultValue="Remote">
              <option>Remote</option><option>Work From Office</option><option>Hybrid</option>
            </Select>
          </Field>
          <Field label="Posted Date"><Input type="date" /></Field>
          <Field label="Status">
            <Select defaultValue="Open"><option>Open</option><option>Closed</option></Select>
          </Field>
        </div>
      </Panel>

      {/* Description */}
      <Panel className="mt-5 p-6 sm:p-7">
        <Eyebrow>Job Description</Eyebrow>
        <div className="flex flex-col gap-5">
          <Field label="Short Description">
            <Textarea rows={2} placeholder="One or two lines summarising the role…" />
          </Field>
          <Field label="Long Description">
            <RichText placeholder="Describe the role, responsibilities, requirements… Use the toolbar for headings, bold, lists." />
          </Field>
        </div>
      </Panel>

      <div className="mt-6 flex justify-end gap-3">
        <Btn variant="outline" type="button" onClick={() => navigate('/admin/career')}>Cancel</Btn>
        <Btn type="submit">Create Job</Btn>
      </div>
    </form>
  )
}
