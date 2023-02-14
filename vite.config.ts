import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from '@unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/').pop()!.split('/')[0].toString()
          }
        }
      }
    }
  },
  define: {
    __DATE__: `${+new Date()}`
  },
  plugins: [
    vue(),
    UnoCSS({
      shortcuts: {
        row: 'flex flex-row',
        col: 'flex flex-col',
        wrap: 'flex flex-wrap',
        aic: 'flex items-center',
        jcc: 'flex justify-center',
        fcc: 'flex justify-center items-center'
      },
      presets: [presetUno(), presetAttributify()]
    }),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: 'DoxToVue',
        short_name: 'docx2vue',
        icons: [{ src: 'vue-dot-js.png', sizes: '192x192', type: 'image/png' }]
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,ts,vue,css,html,ico,png,svg}']
      }
    }),
    visualizer({ open: true })
  ]
})
