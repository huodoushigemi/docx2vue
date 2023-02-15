import { isSimpleIdentifier } from '@vue/compiler-core'
import { isTextNode } from './docx2html'
import { transformInterpolation, transformInterpolation1 } from './utils'

export default async function html2vue(document: Document) {
  const isInterpolation = (s: string) => s.match(/\{\{\s*(.*?)\s*\}\}/)?.[1]
  const isPureInterPolation = (s: string) => s.trim().startsWith('{{') && s.trim().endsWith('}}')

  const vars = new Set<string>()

  const root = replaceTag(document.body, 'div')
  //
  for (const el of root.querySelectorAll('*')) {
    for (const node of el.childNodes) {
      if (!isTextNode(node)) continue
      let txt = node.textContent!.replace('\n', '')
      const p = node.parentElement!
      const anchor = node.nextSibling
      let exp = isInterpolation(txt)
      if (!exp) continue
      txt = '{{ x.qqq + aaa }}'
      exp = isInterpolation(txt)
      node.textContent = await transformInterpolation1(txt)
      // todo
      console.log(node.textContent)
      const vari = isSimpleIdentifier(exp) ? exp : null
      if (!vari) continue
      vars.add(vari)

      // 表达式是变量，添加双向绑定

      if (isPureInterPolation(txt)) {
        if (p.childNodes.length == 1) {
          addAttributes(p, vari)
        } else {
          const span = document.createElement('span')
          addAttributes(span, vari)
          span.append(node)
          p.insertBefore(node, anchor)
        }
      } else {
        node.parentNode!.removeChild(node)
        const matched = txt.match(/(.*?)({{.*?}})(.*)/)!
        p.insertBefore(document.createTextNode(matched[1]), anchor)
        p.insertBefore(addAttributes(document.createElement('span'), vari, await transformInterpolation1(matched[2])), anchor)
        p.insertBefore(document.createTextNode(matched[3]), anchor) // todo
      }
    }
  }
  const tempalte = `<template>${root.outerHTML}</template>`

  const script = `
<script>
export default {
  props: {
    // 哪些字段可以双向绑定，默认全部
    vmodels: Array,
    // known data ${JSON.stringify([...vars].reduce((o, k) => ((o[k] = ''), o), {} as any))}
    data: { type: Object, default: () => ({}) }
  },
  computed: {
    edit() {
      const set = new Set(this.vmodels)
      return (prop) => !this.vmodels || set.has(prop)
    }
  },
  methods: {
    onInput({ target }) {
      const prop = target.getAttribute('name')
      this.set(prop, target.textContent)
    },
    getPaths(k) {
      return k.replace(/\[(.+?)\]/, '.$1').split('.')
    },
    get(k) {
      return this.getPaths(k).reduce((o, k) => o?.[k], this.data)
    },
    set(k, v) {
      const ks = this.getPaths(k)
      const prop = ks.shift()
      while (k = ks.pop()) (vv => (v = typeof k === 'number' ? [] : {})[k] = vv)(v)
      this._set(prop, v)
    },
    _set(prop, val) {
      if (this.$set) this.$set(this.data, prop, target.textContent)
      else this.data[prop] = val
    }
  }
}
</script>
`

  const styles = document.querySelectorAll('style')
  const styleTextContent = Array.from(styles)
    .map(e => e.textContent)
    .join('\n')
  const styleEl = Object.assign(document.createElement('style'), { textContent: styleTextContent })
  styleEl.setAttribute('scoped', '')
  styleEl.textContent += `
  [contenteditable] { display: inline-block; min-width: 2em; background: #7a7a7a12; text-align: center; }
  [contenteditable=false] { cursor: not-allowed; }
  [contenteditable]:hover { background: #7a7a7a33; }
  `
  const style = styleEl?.outerHTML.replace(/<!--/g, '').replace(/-- ?>/g, '')

  const format = (await import('./utils/prettierFormat')).default

  const vuesfc = format(
    [tempalte, script, style]
      .map(e => e.trim())
      .join('\n\n')
      .trim()
  )

  return vuesfc
}

function replaceTag(el: HTMLElement, tagName: string) {
  const tag = document.createElement(tagName)
  // clone attribute
  el.getAttributeNames().forEach(k => tag.setAttribute(k, el.getAttribute(k)!))
  tag.innerHTML = el.innerHTML

  el.parentNode?.insertBefore(tag, el)
  el.parentNode?.removeChild(el)

  return tag
}

function addAttributes(el: HTMLElement, prop: string, text?: string) {
  if (prop) {
    el.id = prop
    el.setAttribute(':contenteditable', `edit('${prop}')`)
    el.setAttribute('name', prop)
    el.setAttribute('v-on:input', `onInput`)
  }
  text && (el.textContent = text)
  return el
}
