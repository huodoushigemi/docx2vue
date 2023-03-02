import { isMergeable } from './../src/docx2html'
import { isSameAttributes, isSpanText, isTextNode } from '../src/docx2html'

it('isText', () => {
  const span = document.createElement('span')
  span.textContent = 'aaa'
  expect(isTextNode(span.firstChild!)).toBeTruthy()
})

it('isSpanText', () => {
  const span = document.createElement('span')
  span.textContent = 'aaa'
  expect(isSpanText(span)).toBeTruthy()
  span.innerHTML = '<span>aaa</span>'
  expect(isSpanText(span)).toBeFalsy()
})

it('isSameAttributes', () => {
  const el1 = document.createElement('span')
  const el2 = document.createElement('span')
  expect(isSameAttributes(el1, el2)).toBeTruthy()
  el1.className = 'flex'
  el2.className = 'flex'
  expect(isSameAttributes(el1, el2)).toBeTruthy()
  el2.className = 'grid'
  expect(isSameAttributes(el1, el2)).toBeFalsy()
})

it('isMergeable', () => {
  const el1 = document.createElement('span')
  const el2 = document.createElement('span')
  el1.innerHTML = 'aaa'
  el2.innerHTML = 'bbb'
  expect(isMergeable(el1, el2)).toBeTruthy()
  el2.innerHTML = '<span>bbb</span>'
  expect(isMergeable(el1, el2)).toBeFalsy()
})
