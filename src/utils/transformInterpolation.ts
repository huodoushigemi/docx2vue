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
    const expression = gogocode($1)
      .find('$_$')
      .each((item: ASTIdentifier) => {
        if (item.parent(0).node.type == 'MemberExpression' && item.parent(1).node.type != 'MemberExpression') {
          item.parent(0).replaceBy(`get('${item.parent(0).generate()}')`)
        } else if (item.parent(0).node.type != 'MemberExpression' && !isGloballyWhitelisted(item.node.name)) {
          item.replaceBy(`get('${item.node.name}')`)
        }
      })
      .root()
      .generate({ isPretty: false })
      .replace(/;$/, '')
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
