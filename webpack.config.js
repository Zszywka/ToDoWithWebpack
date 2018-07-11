const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

// module.exports = {
//   //zaczynamy kompilacje od:
//     entry: './src/index.js',
//     output: {
//       // sciezka kompilacji
//         path: path.resolve(__dirname, 'build'),
//         // plik wyjsciowy
//         filename: 'app.bundle.js'
//     }
// };

module.exports = (env) => {
  return {
  // developer mode setting:
    // mode: 'development',
    mode: env || 'production';
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
    }
  }
};
