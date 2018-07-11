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

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
    },
    // testuje czy modul ma rozszezenie .js , a gdy ma, transforujemy go przy uzyciu babel-loader
    module: {
      // tablica loaderow
      rules: [
        {
          // warunek, który musi zostać spełniony w nazwie importowanego modułu
          // aby mógł zostać przetransformowany danym loaderem
          test: /\.js$/, //o co chodzi z rozszerzeniem tego $????
          // mozna wpisac tu include lub exclude aby wlaczyc dany modu lub wylaczyc z loadera
          //z jakis loaderow ma skorzystac webpack gdy spelniony zostanie warunek wyzej
          exclude: '/node_modules',
          loader: "babel-loader"
          // mozna wpisac rules:[tablica loaderow gdy chcemy skorzystac z wiecej niz jednego]
          // to samo co zapisane w .babelrc
          // options: {
          //   presets: ['env', 'react', 'uuid']
          // }
        },
        { //wszystko z rozszezeniem .css
          test: /\.css$/,
          use: [ //to lista loaderow przez jakie musi przejsc plik zeby stac sie modulem(sciezka zdrowia)
            {loader: 'style-loader'},
            //modules:true, zmienia zasieg na lokalny(dziala tylko w modulegdzie zostal zaiportowany)
            // gdzie indziej mozna uzyc klasy o tej samej nazwie do innych styli
            {loader: 'css-loader', options: {modules: true}}
          ]
        }
      ]
    }
};
