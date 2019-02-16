const merge = require('webpack-merge');
const common = require('./webpack.server.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([distPath], {
      verbose: true
    })
  ]
});