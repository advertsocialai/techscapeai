import { PageTitle, Panel, Eyebrow, Btn, Field, Input, Select } from '../ui'

function FilePicker() {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-[#2a2a2a] bg-[#141414] p-1.5">
      <span className="rounded-[6px] border border-[#2a2a2a] bg-[#1c1c1c] px-3 py-1.5 text-[13px] font-medium text-white/75">Choose File</span>
      <span className="text-[13px] text-white/35">No file chosen</span>
      <input type="file" className="hidden" />
    </label>
  )
}

export default function Settings() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mx-auto max-w-[1100px]">
      <PageTitle>Settings</PageTitle>

      <div className="flex flex-col gap-5">
        {/* Site Information */}
        <Panel className="p-6 sm:p-7">
          <Eyebrow>Site Information</Eyebrow>
          <p className="-mt-2 mb-4 text-[13px] text-white/40">Basic information about your website.</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Site Name" required><Input defaultValue="NxtWave Technologies" /></Field>
            <Field label="Site URL" required><Input defaultValue="https://nxtwavetechnologies.com" /></Field>
            <Field label="Logo" className="sm:col-span-2"><FilePicker /></Field>
          </div>
        </Panel>

        {/* Notification Settings */}
        <Panel className="p-6 sm:p-7">
          <Eyebrow>Notification Settings</Eyebrow>
          <p className="-mt-2 mb-4 text-[13px] text-white/40">Where contact-form alerts are sent.</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Notification Email"><Input type="email" defaultValue="info@nxtwave.ca" /></Field>
            <Field label="Contact Email"><Input type="email" defaultValue="info@nxtwave.ca" /></Field>
          </div>
        </Panel>

        {/* Email / SMTP */}
        <Panel className="grad-border p-6 sm:p-7">
          <Eyebrow>Email / SMTP Settings</Eyebrow>
          <p className="-mt-2 mb-4 text-[13px] text-white/40">System email settings configuration.</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="SMTP Host"><Input placeholder="smtp.gmail.com" /></Field>
            <Field label="SMTP Port"><Input placeholder="587" /></Field>
            <Field label="SMTP Username"><Input placeholder="info@nxtwave.ca" /></Field>
            <Field label="SMTP Password"><Input type="password" placeholder="••••••••" /></Field>
            <Field label="Encryption">
              <Select defaultValue="TLS"><option>TLS</option><option>SSL</option><option>None</option></Select>
            </Field>
            <Field label="From Address"><Input defaultValue="info@nxtwave.ca" /></Field>
            <Field label="From Name" className="sm:col-span-2"><Input defaultValue="NxtWave Technologies" /></Field>
          </div>
          <div className="mt-5 flex justify-end">
            <Btn type="button">Send Test Email</Btn>
          </div>
        </Panel>

        {/* Social Links */}
        <Panel className="p-6 sm:p-7">
          <Eyebrow>Social Links</Eyebrow>
          <p className="-mt-2 mb-4 text-[13px] text-white/40">Links shown across the site footer.</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Instagram"><Input placeholder="https://instagram.com/…" /></Field>
            <Field label="Facebook"><Input placeholder="https://facebook.com/…" /></Field>
            <Field label="LinkedIn"><Input placeholder="https://linkedin.com/company/…" /></Field>
            <Field label="YouTube"><Input placeholder="https://youtube.com/@…" /></Field>
            <Field label="Twitter / X" className="sm:col-span-2"><Input placeholder="https://x.com/…" /></Field>
          </div>
          <div className="mt-5 flex justify-end">
            <Btn type="submit">Save Settings</Btn>
          </div>
        </Panel>

        {/* Change Password */}
        <Panel className="p-6 sm:p-7">
          <Eyebrow>Change Admin Password</Eyebrow>
          <p className="-mt-2 mb-4 text-[13px] text-white/40">Update your admin login password.</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Field label="Current Password"><Input type="password" placeholder="••••••••" /></Field>
            <Field label="New Password"><Input type="password" placeholder="••••••••" /></Field>
            <Field label="Confirm New Password"><Input type="password" placeholder="••••••••" /></Field>
          </div>
          <div className="mt-5 flex justify-end">
            <Btn type="button">Update Password</Btn>
          </div>
        </Panel>
      </div>
    </form>
  )
}
