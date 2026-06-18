const BASE_URL = import.meta.env.VITE_API_URL || '/api'

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data?.detail || data?.message || 'An unexpected error occurred')
  }
  return data
}

export const submitContact = (data) =>
  request('/contact', { method: 'POST', body: JSON.stringify(data) })

export const subscribeNewsletter = (data) =>
  request('/newsletter/subscribe', { method: 'POST', body: JSON.stringify(data) })

// ── TravelWorkflow OS — public API helpers ──────────────────────
// All 24 UCs are read-only for unauthenticated demos. Mutations
// (dispatch, seed) require business auth and so are not exposed here.
export const listPlaybooks    = ()     => request('/travel/v1/playbooks')
export const getPlaybook      = (id)   => request(`/travel/v1/playbooks/${id}`)
export const renderPlaybook   = (id, context, channels) =>
  request(`/travel/v1/playbooks/${id}/render`, {
    method: 'POST',
    body: JSON.stringify({ context: context || {}, channels: channels || null }),
  })
