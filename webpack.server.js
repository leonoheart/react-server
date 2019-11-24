const path = require('path');

module.exports = {
  target: 'node',
  entry: 'src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(_dirname, 'build'),
  },
  module: {
    rules: [{
      test: '/\.js?$/',
      loader: 'babel-loader',
      exclude: '/node_modules/',
      options: {
        presets: ['react']
      }
    }]
  }
}