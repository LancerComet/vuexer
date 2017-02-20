const path = require('path')
const webpack = require('webpack')

webpack({
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },

  output: {
    filename: 'index.umd.js',
    path: path.resolve(__dirname, './dist'),
    library: 'vuexer',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  }
}, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
