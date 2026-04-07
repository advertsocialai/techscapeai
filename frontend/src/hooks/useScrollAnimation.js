import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollAnimation({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}
