import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './Dropdown menu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Figma Components/Dropdown menu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Select', 'Closed', 'open'],
      description: 'Preserved Figma State variant',
    },
    label: {
      control: { type: 'text' },
      description: 'Dropdown title label',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Dropdown menu\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Menu Background** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Active Selection** | \`var(--uedp-primary-400)\` (\`#60a5fa\`) | — |
| **Border Radius** | \`var(--uedp-radii-md)\` (\`8px\`) | — |
| **Figma Layer Name** | \`Dropdown menu\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Closed: Story = {
  args: {
    state: 'Closed',
    label: 'Filter Category',
  },
};

export const Open: Story = {
  args: {
    state: 'open',
    label: 'Select Metric',
  },
};
