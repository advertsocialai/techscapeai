import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On every route change, jump the window back to the top so a new page always
// opens from its start instead of keeping the previous page's scroll position
// (which made pages open scrolled to the middle/footer).
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
