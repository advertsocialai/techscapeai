/**
 * TechScape Workflow Platform — frontend API client.
 *
 * The dashboard uses an API key (X-API-Key header) tied to a Business row.
 * For dev / demos, we store the key in localStorage and let the user paste it.
 */
const BASE = (import.meta.env.VITE_API_URL || '/api') + '/techscape/v1'
const KEY_STORAGE     = 'ts_api_key'
const ACCESS_STORAGE  = 'ts_access_token'
const REFRESH_STORAGE = 'ts_refresh_token'

export const getApiKey   = () => localStorage.getItem(KEY_STORAGE) || ''
export const setApiKey   = (k) => localStorage.setItem(KEY_STORAGE, k)
export const clearApiKey = ()  => localStorage.removeItem(KEY_STORAGE)

export const getAccessToken   = () => localStorage.getItem(ACCESS_STORAGE)  || ''
export const setAccessToken   = (k) => localStorage.setItem(ACCESS_STORAGE, k)
export const getRefreshToken  = () => localStorage.getItem(REFRESH_STORAGE) || ''
export const setRefreshToken  = (k) => localStorage.setItem(REFRESH_STORAGE, k)

export const isAuthenticated = () => Boolean(getApiKey() || getAccessToken())

export const signOut = () => {
  localStorage.removeItem(KEY_STORAGE)
  localStorage.removeItem(ACCESS_STORAGE)
  localStorage.removeItem(REFRESH_STORAGE)
}

async function request(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  const access = getAccessToken()
  const apiKey = getApiKey()
  if (access)        headers['Authorization'] = `Bearer ${access}`
  else if (apiKey)   headers['X-API-Key']     = apiKey
  const res = await fetch(`${BASE}${path}`, { ...options, headers })
  const text = await res.text()
  const data = text ? JSON.parse(text) : null

  // try a one-shot refresh on 401 if we have a refresh token
  if (res.status === 401 && getRefreshToken() && path !== '/auth/refresh') {
    try {
      const r = await fetch(`${BASE}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: getRefreshToken() }),
      })
      if (r.ok) {
        const tok = await r.json()
        setAccessToken(tok.access_token)
        setRefreshToken(tok.refresh_token)
        return request(path, options)
      }
    } catch { /* fall through */ }
  }

  if (!res.ok) {
    const msg = data?.detail || data?.message || `HTTP ${res.status}`
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg))
  }
  return data
}

/* ── Businesses ─────────────────────────────────────── */
export const registerBusiness = (payload) =>
  request('/businesses/register', { method: 'POST', body: JSON.stringify(payload) })

export const getMe = () => request('/auth/me')

/* ── Auth ───────────────────────────────────────────── */
export const registerWithUser = (payload) =>
  request('/auth/register-business', { method: 'POST', body: JSON.stringify(payload) })

export const login = (email, password) =>
  request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })

export const rotateApiKey = () =>
  request('/auth/api-key/rotate', { method: 'POST' })

/* ── Workflows ──────────────────────────────────────── */
export const listWorkflows  = () => request('/workflows')
export const getWorkflow    = (id) => request(`/workflows/${id}`)
export const createWorkflow = (payload) =>
  request('/workflows', { method: 'POST', body: JSON.stringify(payload) })
export const updateWorkflow = (id, payload) =>
  request(`/workflows/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
export const archiveWorkflow = (id) =>
  request(`/workflows/${id}`, { method: 'DELETE' })
export const activateWorkflow   = (id) =>
  request(`/workflows/${id}/activate`,   { method: 'POST' })
export const deactivateWorkflow = (id) =>
  request(`/workflows/${id}/deactivate`, { method: 'POST' })

export const triggerWorkflow = (id, payload) =>
  request(`/workflows/${id}/trigger`, { method: 'POST', body: JSON.stringify(payload) })

/* ── Templates ──────────────────────────────────────── */
export const listTemplates  = (channel) =>
  request(`/templates${channel ? `?channel=${channel}` : ''}`)
export const createTemplate = (payload) =>
  request('/templates', { method: 'POST', body: JSON.stringify(payload) })
export const previewTemplate = (id, sampleData) =>
  request(`/templates/${id}/preview`, {
    method: 'POST',
    body: JSON.stringify({ sample_data: sampleData }),
  })

/* ── Executions + communications ────────────────────── */
export const listExecutions    = (limit = 50) => request(`/executions?limit=${limit}`)
export const listCommunications = (limit = 100) => request(`/communications?limit=${limit}`)

/* ── Contacts ───────────────────────────────────────── */
export const listContacts  = (search) =>
  request(`/contacts${search ? `?search=${encodeURIComponent(search)}` : ''}`)
export const upsertContact = (payload) =>
  request('/contacts', { method: 'POST', body: JSON.stringify(payload) })

/* ── Direct send ────────────────────────────────────── */
export const directSend = (payload) =>
  request('/send', { method: 'POST', body: JSON.stringify(payload) })

/* ── AI ─────────────────────────────────────────────── */
export const generateMessage = (payload) =>
  request('/ai/generate-message', { method: 'POST', body: JSON.stringify(payload) })
export const analyzeSentiment = (text) =>
  request('/ai/analyze-sentiment', { method: 'POST', body: JSON.stringify({ text }) })

/* ── Analytics ──────────────────────────────────────── */
export const analyticsOverview = () => request('/analytics/overview')

/* ── Demo seeding ───────────────────────────────────── */
export const seedTravelDemo = () => request('/demo/seed-travel', { method: 'POST' })

/* ── Bulk contact CSV import ────────────────────────── */
export const importContactsCsv = async (file) => {
  const fd = new FormData()
  fd.append('file', file)
  const headers = {}
  const access = getAccessToken()
  const apiKey = getApiKey()
  if (access)      headers['Authorization'] = `Bearer ${access}`
  else if (apiKey) headers['X-API-Key']     = apiKey
  const res = await fetch(`${BASE}/contacts/import`, {
    method: 'POST', body: fd, headers,
  })
  if (!res.ok) {
    const t = await res.text()
    throw new Error(t || `HTTP ${res.status}`)
  }
  return res.json()
}

/* ── Extras (used by the dashboard) ─────────────────── */
export const generateTemplate    = (channel, scenario, tone) =>
  request('/ai/generate-template', { method: 'POST', body: JSON.stringify({ channel, scenario, tone }) })
export const classifyIntent      = (text) =>
  request('/ai/classify-intent',   { method: 'POST', body: JSON.stringify({ text }) })
export const summarizeConversation = (messages) =>
  request('/ai/summarize-conversation', { method: 'POST', body: JSON.stringify({ messages }) })
export const optimizeWorkflow    = (workflow_id) =>
  request('/ai/optimize-workflow', { method: 'POST', body: JSON.stringify({ workflow_id }) })

export const billingCurrent      = () => request('/billing/current')
export const billingHistory      = () => request('/billing/history')
export const aggregateAnalytics  = () => request('/admin/aggregate-day', { method: 'POST' })

export const exportData          = () => request('/gdpr/export')
export const eraseBusiness       = () => request('/gdpr/erase', { method: 'DELETE' })
