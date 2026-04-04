import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred'
    return Promise.reject(new Error(message))
  }
)

/**
 * Submit contact form
 * @param {{ name: string, email: string, company?: string, interest?: string, message: string }} data
 */
export const submitContact = (data) => api.post('/contact', data)

/**
 * Subscribe to newsletter
 * @param {{ email: string, name?: string }} data
 */
export const subscribeNewsletter = (data) => api.post('/newsletter/subscribe', data)

/**
 * Get all published blog posts (future use)
 */
export const getPosts = (params = {}) => api.get('/posts', { params })

/**
 * Get a single post by slug (future use)
 * @param {string} slug
 */
export const getPost = (slug) => api.get(`/posts/${slug}`)

/**
 * Get featured technology trends
 */
export const getTrends = (params = {}) => api.get('/trends', { params })

/**
 * Get featured tool analyses
 */
export const getTools = (params = {}) => api.get('/tools', { params })

export default api
