import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig, UserConfig } from "vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: "./vite.config.ts",
      },
    },
  },
  previewHead: (head) => `
    <script src="https://unpkg.com/trianglify@^4/dist/trianglify.bundle.js"></script>
    <script>console.log("trianglify:", trianglify)</script>
    ${head}
  `,
  // viteFinal: (config) => {
  //   return mergeConfig(config, {
  //     build: {
  //       rollupOptions: {
  //         external: ["trianglify"],
  //         output: {
  //           format: "umd",
  //           globals: {
  //             trianglify: "trianglify",
  //           },
  //         },
  //       },
  //     },
  //   } satisfies UserConfig)
  // },
  docs: {
    autodocs: "tag",
  },
};
export default config;
