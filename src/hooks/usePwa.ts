import { ref } from 'vue'

let event: any

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  e = e
  console.log('👍', 'beforeinstallprompt', e)
})

const installed = ref(false)

window.addEventListener('appinstalled', () => (installed.value = true))

export function usePwa() {
  const prompt = () => event.prompt()
  return { prompt, installed }
}
