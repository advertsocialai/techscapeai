import { useLayoutEffect } from 'react'

// Scroll-reveal for the CRT pages. Elements marked data-reveal fade/slide in once they
// enter the viewport. The hidden state is only applied after JS runs (.crt-anim), so the
// content is never invisible if something fails, and it is skipped for reduced motion.
export default function useCrtReveal(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') return undefined

    root.classList.add('crt-anim')
    const items = root.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('crt-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    )
    items.forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('crt-anim')
    }
  }, [rootRef])
}
