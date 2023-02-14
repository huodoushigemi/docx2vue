import { createApp } from 'vue'
import 'uno.css'
import VueRevealEffect from 'vue-reveal-effect'
import App from './App.vue'

// service worker
import { useRegisterSW } from 'virtual:pwa-register/vue'
useRegisterSW({
  onRegisteredSW() {
    console.log('onRegisteredSW')
  },
  onNeedRefresh() {
    console.log('onNeedRefresh')
    if (confirm('网页内容已过时，是否刷新页面')) location.reload()
  },
  onRegisterError(error) {
    console.error('onRegisterError', error)
  },
  onOfflineReady() {
    console.log('onOfflineReady')
  }
})

VueRevealEffect.setDefaultProps({
  borderWidth: 2,
  borderColor: '#0000002f'
})

createApp(App).use(VueRevealEffect).mount('#app')
