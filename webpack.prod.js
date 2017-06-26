const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader' ]
      },
      { test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000' }
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    port: 3001
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
     mangle: {
       screw_ie8: true,
       keep_fnames: true
     },
     compress: {
       screw_ie8: true
     },
     comments: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
