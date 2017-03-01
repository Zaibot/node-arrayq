const NodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./benchmark/index.js'],
  output: {
    path: './benchmark/dist',
    filename: 'arrayq-benchmark.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, use: [{ loader: 'babel-loader', options: { presets: ['es2015'] } }] }
    ]
  },
  externals: {
    'lodash': '_',
    'platform': 'platform',
    'benchmark': 'Benchmark'
  }
};