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
