import type { Options } from 'prettier'
import prettier from 'prettier/esm/standalone.mjs'
import parserBabel from 'prettier/esm/parser-babel.mjs'
import parserHtml from 'prettier/esm/parser-html.mjs'

const config = {
  semi: false,
  parser: 'vue',
  arrowParens: 'avoid',
  trailingComma: 'none',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: Infinity,
  vueIndentScriptAndStyle: false
}

export function prettierFormat(str: string, options?: Options) {
  return prettier.format(str, {
    parse: 'babel',
    ...config,
    ...options,
    plugins: [parserBabel, parserHtml, ...[options?.plugins || []]]
  })
}

export default prettierFormat
