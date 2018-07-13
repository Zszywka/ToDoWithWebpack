You should:
1. create package.json (write in the console):
-> npm init -y
2. add packages (write in the console):
-> npm install --save -dev babel-preset-latest
-> npm install --save -dev babel-cli
-> npm install --save -dev babel-preset-react
-> npm install webpack webpack-cli --save-dev
-> npm install babel-preset-env --save-dev
-> npm install babel-preset-react --save-dev
-> npm install --save-dev react-dom react
-> npm install --save uuid
-> npm install --save-dev style-loader css-loader
-> npm install --save -dev react-hot-loader
-> npm install babel-preset-env --save-dev
-> npm install --save-dev optimize-js-plugin
-> npm install --save-dev babel-loader
-> npm install --save-dev babel-preset-es2015
-> npm install --save-dev html-webpack-plugin
-> npm install --save-dev uglifyjs-webpack-plugin
-> npm install --save-dev webpack
-> npm install --save-dev webpack-cli
-> npm install --save-dev babel-core
-> npm install --save-dev react-hot-loader
-> npm install --save-dev webpack-dev-server
-> npm install --save-dev react-hot-loader
3. install server for developer mode:
-> npm install --save-dev webpack-dev-server
4. add the package.json file and write there: "start": "webpack-dev-server --env development
5. write in the console:
-> npm start
6. open in the browser -> localhost: 8080
-------------------------------------------------------------------
Hot Module Replacement:
1. write in the console:
-> npm install --save-dev webpack-dev-server
2. write in the package.json:
-> "start": "webpack-dev-server --env development
3. write in the console:
-> npm start
 open in the browser -> localhost: 8080
Next:
4. write in the package.json:
-> "start": "webpack-dev-server --hot --env development",
5. write in the console:
-> npm install --save-dev react-hot-loader
6. add to file .babelrc:
{
  "presets": ["env", "react"],
  "plugins": ["react-hot-loader/babel"]
}
7. add to file webpack.config.js:
test: /\.js$/,
loader: "babel-loader",
options: {
    plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
}
8. add to file App.js:
-> import { hot } from 'react-hot-loader';
and
-> export default hot(module)(App);
9. write in the console (HMR also works for Reacta):
-> npm start
