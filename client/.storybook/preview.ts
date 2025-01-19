import '../src/app.css';

import type { Preview } from '@storybook/svelte';
import ThemeDecorator from './ThemeDecorator.svelte';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      values: [
        { name: 'mocha', value: '#1e1e2e' },
        { name: 'latte', value: '#eff1f5' },
        { name: 'frappe', value: '#303446' },
        { name: 'macchiato', value: '#24273a' }
      ],
      default: 'mocha'
    }
  },
  tags: ['autodocs'],
  decorators: [() => ThemeDecorator]
};

export default preview;
