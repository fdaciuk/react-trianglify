'use strict'

const { join } = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const root = join(__dirname, '..')
const src = join(root, 'src')

module.exports = validate({
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
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
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
})
