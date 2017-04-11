const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'prop-types']
  },

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: 'static/index.html'}), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
})]
};
