<template>
  <header sticky aic spacex4 px4 top-0 w-full h14 box-border bg-white shadow-lg z-9>
    <h1>🔨 Docx To Vue</h1>
    <img w12 h12 src="./assets/word.svg" />
    <!-- <img w10 src="https://v2.vuejs.org/images/logo.svg" /> -->
    <div flex-1 />
    <img src="https://img.shields.io/github/stars/huodoushigemi/docx2vue.svg?style=flat-square" />
    <a href="https://github.com/huodoushigemi/docx2vue" target="_blank"><img w10 src="./assets/github.svg" /></a>
    <Button v-if="!installed" @click="prompt">下载</Button>
  </header>

  <main wrap justify-evenly>
    <!-- 预览区 -->
    <article ref="dropRef" relative my4 min-w595pt min-h-842pt bg-white z-1 style="box-shadow: 0px 5px 30px -10px #0000004f">
      <SFC v-bind="sfc" w595pt />
      <div v-if="!active" absolute inset-0 col fcc op60><img w20 mb4 src="./assets/github.svg" />将 docx 文件或文件夹拖拽至此</div>
      <div v-if="isOverDropZone" absolute inset-0 fcc text-100 c-white class="bg-#0000002f" style="backdrop-filter: blur(24px)">+</div>
    </article>

    <div w80>
      <!-- 编辑器 -->
      <MonacoEditor animate-fade-in v-model:value="dataString" language="json" :height="300" :options="{ minimap: { enabled: false }, lineNumbers: 'off' }" class="shadow" my4 />
      <!-- 下载文件 -->
      <Button v-if="files.length" mt4 mb2 @click="downloadVues">下载全部</Button>
      <Button v-if="files.length" ml2 mt4 mb2 @click=";(files = []), (sfc = null), (active = null)">X</Button>
      <!-- 文件列表 -->
      <template v-for="(file, i) in files" :key="i">
        <div class="aic px4 mb1 leading-8 bg-#80808033 hover:bg-#0078d72f cursor-pointer" :class="file == active && 'bg-#0078d72f!'" v-reveal-effect @click="renderDocx(file)">
          <img w8 py2 mr4 src="./assets/vue.svg" />
          {{ file.webkitRelativePath.replace('.docx', '.vue') }}
          <button mla op-30 hover:op-60 @click.stop="downloadVue(file)">下载</button>
        </div>
      </template>
    </div>

    <article min-w75 px4 v-once>
      <h2>示例</h2>
      <Sample v-reveal-effect name="exmaple.doc" desc="示例文件" />
      <Sample v-reveal-effect name="exmaple-img.doc" desc="带图片的示例" />
      <Sample v-reveal-effect name="exmaple-more.doc" desc="更多的示例" />
    </article>
  </main>

  <!-- prettier-ignore -->
  <footer col fcc mt8 h40 bg-gray-300 v-once>
    <p><b>Last updated: {{ last_updated }}</b></p>
    <p><a c-inherit href="https://github.com/huodoushigemi/docx2vue" target="_blank">Please give a ⭐️ if this project helped you!</a></p>
  </footer>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import { refDefault, useDropZone } from '@vueuse/core'
import Sample from './components/File.vue'
import Button from './components/Button.vue'
import SFC from './components/SFC.vue'
import { usePwa } from './hooks'

// 转换
import { getFiles } from './utils'
import docx2html from './docx2html'
import html2vue from './html2vue'

// 编辑器
const MonacoEditor = defineAsyncComponent(async () => {
  const JsonWork = (await import('monaco-editor/esm/vs/language/json/json.worker?worker')).default
  const EditorWorker = (await import('monaco-editor/esm/vs/editor/editor.worker?worker')).default
  window.MonacoEnvironment = {
    getWorker(workerId, label) {
      if (label === 'json') return new JsonWork()
      return new EditorWorker()
    }
  }
  return import('monaco-editor-vue3')
})

const last_updated = new Date(__DATE__).toLocaleString()
const { prompt, installed } = usePwa()

const dropRef = ref<HTMLElement>()
const { isOverDropZone } = useDropZone(dropRef, () => {})

const files = ref<File[]>([])
const active = ref<File>()
const sfc = refDefault(ref(), { sfc: '', props: {} })

onMounted(() => {
  dropRef.value!.addEventListener('drop', async e => {
    const fs = await getFiles(e.dataTransfer?.items)
    const docxs = fs.filter(e => e.name.endsWith('.docx'))
    if (!docxs.length) return alert('仅支持 docx 类型的文件')
    files.value = docxs
    renderDocx(files.value[0])
  })
})

const dataString = computed({
  get: () => JSON.stringify(sfc.value.props, null, 2),
  set: v => (sfc.value.props = JSON.parse(v))
})

async function renderDocx(file: File) {
  const vuesfc = await docx2sfc(file)
  renderSfc(vuesfc)
  active.value = file
}

function renderSfc(txt: string) {
  const knownData = txt.match(/\/\/ known data (.*)/)?.[1]
  const data = { vmodels: null, data: {} }
  if (knownData) data.data = JSON.parse(knownData)
  sfc.value = { sfc: txt, props: data }
}

async function docx2sfc(file: File) {
  const html = await docx2html(file).catch(err => (alert('文件内容读取失败'), Promise.reject(err)))
  const document = new DOMParser().parseFromString(html, 'text/html')
  return await html2vue(document)
}

async function downloadVue(file: File) {
  const txt = await docx2sfc(file)
  const filename = file.name.replace('.docx', '.vue')
  let a = document.createElement('a')
  a.download = filename
  a.href = URL.createObjectURL(new Blob([txt]))
  a.click()
}

async function downloadVues() {
  for (const file of files.value) {
    await downloadVue(file)
  }
}
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0 15px -5px rgba(#000, 0.2);
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
</style>
