module.exports = {
  stories: ['../stories/**/*.stoires.[tj]s'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.externals = {
      AMap: 'window.AMap'
    };
    return config;
  },
  addons: ['@storybook/addon-actions/register']
};