import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from './Filters';

const meta: Meta<typeof Filters> = {
  title: 'Figma Components/Filters',
  component: Filters,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Filter panel title',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Search placeholder text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Filters\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Card Background** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Padding** | \`var(--uedp-padding-6)\` (\`24px\`) | — |
| **Gap** | \`var(--uedp-gap-4)\` (\`16px\`) | \`10px\` search gap |
| **Chip Active Color** | \`var(--uedp-primary-600)\` (\`#2563eb\`) | — |
| **Figma Layer Name** | \`Filters\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {
    title: 'Filters',
    placeholder: 'Search items, categories, tags...',
  },
};
