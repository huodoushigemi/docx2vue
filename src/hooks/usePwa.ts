import { ref } from 'vue'

let event: any

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  event = e
  console.log('👍', 'beforeinstallprompt', e)
  installed.value = false
})

const installed = ref(true)

window.addEventListener('appinstalled', () => (installed.value = true))

export function usePwa() {
  const prompt = async () => await event?.prompt()
  return { prompt, installed }
}
