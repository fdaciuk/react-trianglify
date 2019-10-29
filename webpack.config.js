'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),

  mode: 'production',

  externals: {
    react: 'react',
    'prop-types': 'prop-types',
    trianglify: 'trianglify',
    canvas: 'canvas'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'trianglify.js',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
