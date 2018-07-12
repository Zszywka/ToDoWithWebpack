const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

// if we are in dev mode, we have only HtmlWebpackPlugin
const plugins = [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})];

module.exports = (env) => {
  if (env === 'production') {
    //if we are in production, add to the array plugins-a new plugin-OptimizeJsPlugin
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
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
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
