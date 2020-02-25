const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const packageConfig = require('../webpack.config');

module.exports = {
  entry: path.join(__dirname, '../example/src/main.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../example/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.css'],
    alias: {
      '@': path.resolve('./src'),
      ...packageConfig.resolve.alias
    },
  },
  externals: {
    AMap: 'AMap',
    Loca: 'Loca'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    })
  ]
};