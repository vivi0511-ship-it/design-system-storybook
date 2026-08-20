import type { Meta, StoryObj } from '@storybook/react';
import { Hamburger } from './Hamburger';

const meta: Meta<typeof Hamburger> = {
  title: 'Figma Components/Hamburger',
  component: Hamburger,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Toggle menu open state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Hamburger\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Icon Size** | \`var(--uedp-geometry-icon-lg)\` | \`24px\` |
| **Border Radius** | \`var(--uedp-radii-md)\` (\`8px\`) | — |
| **Figma Layer Name** | \`Hamburger\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hamburger>;

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
