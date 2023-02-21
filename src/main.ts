import { createApp } from 'vue'
import 'uno.css'
import './style.css'
import VueRevealEffect from 'vue-reveal-effect'
import App from './App.vue'

window.addEventListener('appinstalled', () => console.log('appinstalled'))

// service worker
import { useRegisterSW } from 'virtual:pwa-register/vue'
useRegisterSW({ onNeedRefresh: () => confirm('新的内容可用，单击确定按钮进行更新') && location.reload() })

VueRevealEffect.setDefaultProps({
  borderWidth: 2,
  borderColor: '#0000002f'
})

createApp(App).use(VueRevealEffect).mount('#app')
