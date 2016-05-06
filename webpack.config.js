var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'eval',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        'WEATHER_API_KEY': JSON.stringify(process.env.WEATHER_API_KEY)
      }
    })],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app')
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    { test: /\.png$/, loader: "url-loader?limit=100000" },
    { test: /\.jpg$/, loader: "file-loader" }
  ]
  }
};
