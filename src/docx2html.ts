import { renderAsync } from 'docx-preview'

export default async function docx2html(file: File) {
  const container = document.createElement('div')
  await renderAsync(file, container, void 0, { inWrapper: false, useBase64URL: true })

  // Merge HTMLSpanElement of same attributes
  for (const el of container.querySelectorAll('*')) {
    for (let child = el.firstChild; (child = child?.nextSibling); ) {
      if (isMergeable(child, child.previousSibling)) {
        child.textContent = child.previousSibling.textContent + child.textContent
        child.previousSibling.remove()
      }
    }
  }

  // Wait for picture loading to complete
  await Promise.all([...container.querySelectorAll('img')].map(e => new Promise(s => ((e.onload = s), (e.onerror = s)))))

  return container.innerHTML
}

export const isTextNode = (node: ChildNode) => node.nodeType == 3
export const isSpanText = (node?: Element) => node?.tagName === 'SPAN' && node.childNodes.length == 1 && isTextNode(node.firstChild!)
export const isSameAttributes = (e1?: Element, e2?: Element) => e1?.attributes.length == e2?.attributes.length && e1?.getAttributeNames().every(k => e1?.getAttribute(k) == e2?.getAttribute(k))
export const isMergeable = (e1?: Node, e2?: Node) => [e1, e2].every(isSpanText) && isSameAttributes(e1 as Element, e2 as Element)
