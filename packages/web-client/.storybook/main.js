const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // We need this for emotion to work inside storybook
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),

          "@": path.resolve(__dirname, "../src/"),
        },
        extensions: [...config.resolve.extensions, ".ts", ".tsx"],
      },
      plugins: config.plugins.filter((plugin) => {
        if (plugin.constructor.name === "ESLintWebpackPlugin") {
          return false;
        }
        return true;
      }),
    };
  },
};
