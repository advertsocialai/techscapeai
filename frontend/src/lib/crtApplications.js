// CRT pilot-cohort application, saved to Supabase.
//   1) the resume (optional) is uploaded to the private `crt-resumes` bucket
//   2) the form is saved through the Postgres function `submit_crt_application`
// See supabase/migrations/0004_crt_applications.sql.
//
// submitCrtApplication() resolves to the reference string, e.g. "CRT-2026-0001".
// It throws Error('ALREADY_APPLIED') for a repeat email, otherwise Error('<readable message>').

const BASE = import.meta.env.VITE_SUPABASE_URL
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY

export const RESUME_MAX_BYTES = 5 * 1024 * 1024
export const RESUME_TYPES = {
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
}

const headers = (extra = {}) => ({ Authorization: `Bearer ${ANON}`, apikey: ANON, ...extra })

export function checkResume(file) {
  if (!file) return ''
  const ext = file.name.split('.').pop().toLowerCase()
  const okType = RESUME_TYPES[file.type] || ['pdf', 'doc', 'docx'].includes(ext)
  if (!okType) return 'Please upload a PDF, DOC or DOCX file.'
  if (file.size > RESUME_MAX_BYTES) return 'The file is too large. Maximum size is 5 MB.'
  return ''
}

async function uploadResume(file) {
  const safe = file.name.replace(/[^A-Za-z0-9._-]+/g, '_').slice(-120) || 'resume'
  const path = `${crypto.randomUUID()}/${safe}`
  let res
  try {
    res = await fetch(`${BASE}/storage/v1/object/crt-resumes/${path}`, {
      method: 'POST',
      headers: headers({ 'Content-Type': file.type || 'application/octet-stream', 'x-upsert': 'false' }),
      body: file,
    })
  } catch {
    throw new Error('Could not upload your resume. Please check your connection and try again.')
  }
  if (!res.ok) throw new Error('Your resume could not be uploaded. Please try again, or submit without it.')
  return { path, name: file.name }
}

export async function submitCrtApplication(form, resumeFile) {
  if (!BASE || !ANON) {
    throw new Error('Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local.')
  }

  const resume = resumeFile ? await uploadResume(resumeFile) : null

  let res
  try {
    res = await fetch(`${BASE}/rest/v1/rpc/submit_crt_application`, {
      method: 'POST',
      headers: headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        p_full_name: form.fullName,
        p_email: form.email,
        p_mobile: form.mobile,
        p_city: form.city,
        p_college: form.college,
        p_qualification: form.qualification,
        p_year_of_study: form.yearOfStudy,
        p_learning_area: form.learningArea || null,
        p_resume_path: resume ? resume.path : null,
        p_resume_name: resume ? resume.name : null,
        p_consent: form.consent,
      }),
    })
  } catch {
    throw new Error('Could not reach the server. Please check your connection and try again.')
  }

  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const msg = (data && (data.message || data.error)) || ''
    if (msg.includes('ALREADY_APPLIED')) throw new Error('ALREADY_APPLIED')
    throw new Error('Something went wrong while submitting. Please try again.')
  }
  return data // PostgREST returns the scalar as a JSON string
}
