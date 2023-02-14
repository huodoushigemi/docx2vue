<template>
  <div ref="el"></div>
</template>

<script setup lang="ts">
import * as vue from 'vue'
import { App, createApp, defineAsyncComponent, h, ref, watchEffect } from 'vue'

const props = defineProps<{
  sfc: string
  props: Record<string, any>
}>()

let app: App
const el = ref<HTMLElement>()

watchEffect(() => {
  if (!props.sfc) return app?.unmount(), (app = null)

  const Widget = defineAsyncComponent(async () =>
    (await import('vue3-sfc-loader')).loadModule('App.vue', {
      moduleCache: { vue },
      getFile: () => props.sfc,
      addStyle(textContent: string) {
        el.value.append(Object.assign(document.createElement('style'), { textContent }))
      }
    })
  )

  app?.unmount()
  app = createApp(() => h(Widget, props.props))
  app.mount(el.value)
})
</script>
