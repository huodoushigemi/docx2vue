import { isGloballyWhitelisted } from '@vue/shared'
import type { Identifier, Program } from '@babel/types'
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
        const parent = item.parent(0)

        // 过滤全局对象
        const refed = getRefed(item).name
        if (refed && isGloballyWhitelisted(refed)) return

        if (parent.node.type == 'MemberExpression' && item.parent(1).node.type != 'MemberExpression') {
          parent.replaceBy(`get('${parent.generate()}')`)
          // @ts-ignore
          parent.replaceBy(parent.node.expression)
        } else if (parent.node.type != 'MemberExpression') {
          item.node.name = `get('${item.node.name}')`
        }
      })
      .root()
      .generate({ isPretty: false })

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

export function getRefed(item: ASTIdentifier): Identifier {
  const parent = item.parent(0)
  if (parent.node.type === 'MemberExpression') return parent.find('$_$')[0].nodePath.node
  else return item.node
}

export async function isSimpleIdentifier(exp: string) {
  const gogocode = (await import('gogocode')).default
  const program = gogocode(exp).attr('program') as Program
  if (program.body.length == 1 && program.body[0].type === 'ExpressionStatement') {
    return ['Identifier', 'MemberExpression'].includes(program.body[0].expression.type)
  }
}
