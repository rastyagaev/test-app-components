import { css } from 'docz-plugin-css'

export default {
  src: './src',
  files: './src/**/*.mdx',
  plugins: [
    css({
      cssmodules: true
    })
  ]
}
