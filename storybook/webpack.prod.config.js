'use strict'

const { join } = require('path')
const webpack = require('webpack')

const root = join(__dirname, '..')
const src = join(root, 'src')

module.exports = {
  entry: join(src, 'index'),

  externals: {
    react: 'react',
    'prop-types': 'prop-types',
    trianglify: 'trianglify'
  },

  output: {
    path: join(root, 'dist'),
    filename: 'trianglify.js',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    })
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: src,
        use: 'standard-loader'
      },
      {
        test: /\.js$/,
        include: src,
        use: 'babel-loader'
      }
    ]
  },

  resolve: {
    alias: {
      src,
      components: join(src, 'components')
    }
  }
}
