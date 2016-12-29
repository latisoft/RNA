module.exports = {
  entry: './index.js',

  output: {
    path: '../web/public/js/',
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
}