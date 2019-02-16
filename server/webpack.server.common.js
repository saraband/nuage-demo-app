const path = require('path');
const nodeExternals = require('webpack-node-externals');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(srcPath, 'index.js'),
  resolve: {
    alias: {
      UTILS: path.resolve(__dirname, '../utils'),
      CONTROLLERS: path.resolve(srcPath, 'controllers')
    }
  },
  output: {
    path: distPath,
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};