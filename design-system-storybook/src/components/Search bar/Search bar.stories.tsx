import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './Search bar';

const meta: Meta<typeof SearchBar> = {
  title: 'Figma Components/Search bar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder input text',
    },
    showFilterBtn: {
      control: { type: 'boolean' },
      description: 'Filter action button toggle',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Search bar\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Container Fill** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Active Focus Border** | \`var(--uedp-primary-500)\` (\`#3b82f6\`) | — |
| **Border Radius** | \`var(--uedp-radii-lg)\` (\`12px\`) | — |
| **Figma Layer Name** | \`Search bar\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search locations, articles, metrics...',
    showFilterBtn: true,
  },
};

export const WithoutFilterBtn: Story = {
  args: {
    placeholder: 'Quick find...',
    showFilterBtn: false,
  },
};
