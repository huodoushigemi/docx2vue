import { createApp } from 'vue'
import 'uno.css'
import VueRevealEffect from 'vue-reveal-effect'
import App from './App.vue'

window.addEventListener('appinstalled', () => console.log('appinstalled'))

// service worker
// import { useRegisterSW } from 'virtual:pwa-register/vue'
// useRegisterSW({ onNeedRefresh: () => confirm('网页内容已过时，是否刷新页面') && location.reload() })

VueRevealEffect.setDefaultProps({
  borderWidth: 2,
  borderColor: '#0000002f'
})

createApp(App).use(VueRevealEffect).mount('#app')
