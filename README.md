## Docx To Vue

- 一个可批量将 docx 文件转 vue 文件的工具
- 支持在 word 文档中使用 `模板语法`，并自动与数据双向绑定
- 支持 **PWA**

## 🌈 Demo

https://huodoushigemi.github.io/docx2vue/

## 🔥 Principles

- 使用 [docx-preview](https://www.npmjs.com/package/docx-preview) 将 `docx` 转 `html`
- 然后将 `html` 转 [vue-sfc](https://cn.vuejs.org/api/sfc-spec.html)，模板语法使用 [gogocode](https://www.npmjs.com/package/gogocode) 进行转换
- 最后使用 [vue3-sfc-loader](https://www.npmjs.com/package/vue3-sfc-loader) 渲染 `sfc`

## ⭐️ Show Your Support

Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute, please write the issue or give me a Pull Request freely.

[![fork](https://img.shields.io/github/forks/huodoushigemi/docx2vue.svg?style=for-the-badge)](https://github.com/huodoushigemi/docx2vue)
[![fork](https://img.shields.io/github/stars/huodoushigemi/docx2vue.svg?style=for-the-badge)](https://github.com/huodoushigemi/docx2vue)
