<template>
  <div grid="~" class="auto-cols-[max-content] gap-x-4 relative my4 px4 py2 shadow">
    <img class="self-center w14 h14 row-span-2" src="https://huodoushigemi.github.io/vue-reveal-effect/assets/Microsoft-Word.80420470.svg" />
    <span class="text-lg col-[2]">{{ name }}</span>
    <span class="text-sm c-gray">{{ desc }}</span>
    <button class="absolute bottom-2 right-16 op-30 hover:op-60">预览</button>
    <button class="absolute bottom-2 right-4 op-30 hover:op-60">下载</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  desc: string
}>()
</script>
