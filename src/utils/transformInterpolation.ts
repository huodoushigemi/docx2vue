import { isGloballyWhitelisted } from '@vue/shared'
import type { Identifier } from '@babel/types'
import type GoGoCode from 'gogocode'

type ASTIdentifier = GoGoCode.GoGoAST & { node: Identifier }

/**
 * 转换插值表达式
 * 'x' + 1 + name
 * ->
 * 'x' + 1 + data.name
 */
export async function transformInterpolation(text: string, prefix = 'data') {
  const gogocode = (await import('gogocode')).default
  return text.replace(/\{\{\s*(.+?)\s*\}\}/g, (_, $1) => {
    const expression = gogocode($1)
      .find('$_$')
      .each((item: ASTIdentifier) => isRefed(item) && !isGloballyWhitelisted(item.node.name) && item.replaceBy(`${prefix}.${item.node.name}`))
      .root()
      .generate({ isPretty: false })
      .replace(/;$/, '')
    return `{{ ${expression} }}`
  })
}

export async function transformInterpolation1(text: string) {
  const gogocode = (await import('gogocode')).default
  return text.replace(/\{\{\s*(.+?)\s*\}\}/g, (_, $1) => {
    const list = [] as ASTIdentifier[]
    const gogo = gogocode($1)
      .find('$_$')
      .each(item => list.push(item as ASTIdentifier))

    list.forEach((item: ASTIdentifier) => {
      const parent = item.parent(0)

      console.log(item.node.name, parent)

      // 过滤全局对象
      const refed = getRefed(item).name
      if (refed && isGloballyWhitelisted(refed)) return

      if (parent.node.type == 'MemberExpression' && item.parent(1).node.type != 'MemberExpression') {
        // parent.empty()
        // parent.replaceBy(`get('${parent.generate()}')`)
      } else if (parent.node.type != 'MemberExpression') {
        // item.replaceBy(`get('${item.node.name}')`)
        // item.replaceBy('w')
        // item.empty().remove()
      }
    })
    console.log(123)

    const expression = gogo.root().generate({ isPretty: false }).replace(/;*$/, '')
    // console.log(expression)

    return `{{ ${expression} }}`
  })
}

//
function isRefed(item: ASTIdentifier) {
  const parent = item.parent(0)
  if (parent.node.type == 'MemberExpression' && parent.node.object.type == 'Identifier') {
    return true
  } else if (parent.node.type != 'MemberExpression') {
    return true
  }
}

function getRefed(item: ASTIdentifier): Identifier {
  const parent = item.parent(0)
  if (parent.node.type === 'MemberExpression') return parent.find('$_$')[0].nodePath.node
  else return item.node
}
