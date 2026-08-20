import type { Meta, StoryObj } from '@storybook/react';
import { Map } from './Map';

const meta: Meta<typeof Map> = {
  title: 'Figma Components/Map',
  component: Map,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    zoom: { control: { type: 'number', min: 1, max: 20 } },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Map\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Viewport Background** | \`var(--uedp-slate-950)\` (\`#020617\`) | — |
| **Border Radius** | \`var(--uedp-radii-2xl)\` (\`24px\`) | — |
| **Viewport Height** | — | \`380px\` hardcoded default |
| **Control Button BG** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | \`36px x 36px\` hardcoded |
| **Figma Layer Name** | \`Map\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  args: {
    title: 'Geospatial Regional View',
    zoom: 12,
  },
};
