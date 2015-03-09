//var webpack = require("webpack");

module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  },
  //plugins: [
    //new webpack.optimize.CommonsChunkPlugin('build/common.js')
  //],
  devtool: 'source-map'
};
