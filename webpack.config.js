const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: path.join(__dirname, './index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-amap.js',
    libraryTarget: 'umd',
    library: 'amap'
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@mixin': path.resolve(__dirname, './package/mixins'),
      '@elements': path.resolve(__dirname, './package/elements'),
      '@shared': path.resolve(__dirname, './package/shared'),
      '@layer': path.resolve(__dirname, './package/layer')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};