export const imports = {
  'src/docz.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz" */ 'src/docz.mdx'
    ),
}
