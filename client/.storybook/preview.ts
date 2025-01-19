import "../src/app.css";

import type { Preview } from "@storybook/svelte";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "mocha", value: "#1e1e2e" },
        { name: "latte", value: "#eff1f5" },
        { name: "frappe", value: "#303446" },
        { name: "macchiato", value: "#24273a" },
      ],
      default: "mocha",
    },
  },
};

export default preview;
