import { isGloballyWhitelisted } from '@vue/shared'

// 转换插值表达式
export async function transformInterpolation(text: string) {
  const gogocode = (await import('gogocode')).default
  let identifier: string
  return text.replace(/\{\{\s*(.+?)\s*\}\}/g, (_, $1) => {
    const expression = gogocode($1)
      .find('$_$name')
      .each(item => !isGloballyWhitelisted((identifier = item.match.name[0].value)) && item.replaceBy(`data.${identifier}`))
      .root()
      .generate({ isPretty: false })
      .replace(/;$/, '')
    return `{{ ${expression} }}`
  })
}
