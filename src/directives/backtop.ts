import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener(
      'click',
      () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      },
      false
    )
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    })
  }
}
