import { defineConfig, mergeConfig } from 'vite';

/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  viteFinal: async (config) => {
    return mergeConfig(
      config,
      defineConfig({
        server: {
          fs: {
            allow: ['styled-system']
          }
        }
      })
    );
  }
};
export default config;
