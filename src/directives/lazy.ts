import type { DirectiveBinding } from 'vue'

const lazyLoad = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.setAttribute('src', '/logo.png')

    const options = {
      rootMargin: '0px'
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          binding.value && el.setAttribute('src', binding.value)
          observer.unobserve(el)
        }
      })
    }, options)
    observer.observe(el)
  }
}

export default lazyLoad
