const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/react-trianglify',

  siteMetadata: {
    title: 'React Trianglify',
    description: 'React Trianglify',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/media/storage/code/00-opensource/react-trianglify/.docz',
        base: '/react-trianglify',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Trianglify',
        description: 'React Trianglify',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/media/storage/code/00-opensource/react-trianglify',
          templates:
            '/media/storage/code/00-opensource/react-trianglify/node_modules/docz-core/dist/templates',
          docz: '/media/storage/code/00-opensource/react-trianglify/.docz',
          cache:
            '/media/storage/code/00-opensource/react-trianglify/.docz/.cache',
          app: '/media/storage/code/00-opensource/react-trianglify/.docz/app',
          appPackageJson:
            '/media/storage/code/00-opensource/react-trianglify/package.json',
          appTsConfig:
            '/media/storage/code/00-opensource/react-trianglify/tsconfig.json',
          gatsbyConfig:
            '/media/storage/code/00-opensource/react-trianglify/gatsby-config.js',
          gatsbyBrowser:
            '/media/storage/code/00-opensource/react-trianglify/gatsby-browser.js',
          gatsbyNode:
            '/media/storage/code/00-opensource/react-trianglify/gatsby-node.js',
          gatsbySSR:
            '/media/storage/code/00-opensource/react-trianglify/gatsby-ssr.js',
          importsJs:
            '/media/storage/code/00-opensource/react-trianglify/.docz/app/imports.js',
          rootJs:
            '/media/storage/code/00-opensource/react-trianglify/.docz/app/root.jsx',
          indexJs:
            '/media/storage/code/00-opensource/react-trianglify/.docz/app/index.jsx',
          indexHtml:
            '/media/storage/code/00-opensource/react-trianglify/.docz/app/index.html',
          db:
            '/media/storage/code/00-opensource/react-trianglify/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
