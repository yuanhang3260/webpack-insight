'use strict'
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),

  entry: {
    app: './src/app.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].dev.js',
  },

  devtool: "source-map",

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    progress: true,
    host: 'localhost',
    port: 9090,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },

  plugins: [  
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true,
    }),
  ]
};