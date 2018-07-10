export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "button-index" */ 'button/index.mdx'),
  'footer/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "footer-index" */ 'footer/index.mdx'),
  'items/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "items-index" */ 'items/index.mdx'),
  'navbar/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "navbar-index" */ 'navbar/index.mdx'),
  'theme/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "theme-index" */ 'theme/index.mdx'),
}
