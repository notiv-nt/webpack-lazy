const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.html',
    // production
    // path: path.resolve('./dist'),
    // dev
    path: '/',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    lazy: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
    }),
  ],
};
