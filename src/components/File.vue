<template>
  <div grid="~ auto-cols-[max-content]" gap-x-4 relative my4 px5 py3 shadow bg-white class="">
    <img self-center w12 h12 row-span-2 src="../assets/word.svg" />
    <span text-lg mb1 class="col-[2]">{{ name }}</span>
    <span text-sm c-gray>{{ desc }}</span>
    <button absolute bottom-2 right-16 op-30 hover:op-60 @click="onPreview">预览</button>
    <button absolute bottom-2 right-4 op-30 hover:op-60 @click="onDownload">下载</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  desc: string
  url: string
}>()

const emits = defineEmits<{
  (e: 'preview', file: File)
}>()

async function file() {
  const blob = await (await window.fetch(props.url)).blob()
  const file = new File([blob], props.name, { type: blob.type })
  Object.defineProperty(file, 'webkitRelativePath', { value: props.name })
  return file
}

async function onPreview() {
  emits('preview', await file())
}

async function onDownload() {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(await file())
  a.download = props.name
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>
