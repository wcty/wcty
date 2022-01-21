const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, [
      "@nrwl/react/babel",
      {
        "runtime": "automatic",
        "useBuiltIns": "usage"
      }
    ]],
    plugins: [
      ["babel-plugin-styled-components", { "pure": true, "ssr": true }]
    ]
    // any extra options you want to set
  }),
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
