const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module :{
      rules : [
          {test : /\.js$/,
            exclude : /node_modules/,
            loader : "babel-loader"
        }
      ]
  },
  devServer : {
      port : 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}