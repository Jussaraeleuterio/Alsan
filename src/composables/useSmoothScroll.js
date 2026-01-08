import { onMounted } from 'vue'

export function useSmoothScroll() {
  const handleSmoothScroll = (e) => {
    const id = e.target.getAttribute('href')
    if (!id || id === '#') return

    const el = document.querySelector(id)
    if (!el) return

    e.preventDefault()
    const offset = 80
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    if (history.pushState) {
      history.pushState(null, null, id)
    }
  }

  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', handleSmoothScroll)
    })
  })
}

