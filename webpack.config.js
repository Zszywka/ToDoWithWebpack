const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body' //?why body
})];

module.exports = (env) => {
  if (env === 'production') {
      plugins.push(
          new OptimizeJsPlugin({
              sourceMap: false
          })
      )
  }
  return {
  // developer mode setting:
    // mode: 'development',
    mode: env || 'production',
    entry: './src/App.js', //??dlaczego nie index.js?
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/, //?$
          exclude: '/node_modules',
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader', options: {modules: true}}
          ]
        }
      ]
    },
    // plugins: plugins
    plugins
  }
};
