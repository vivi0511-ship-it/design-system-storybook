import type { Meta, StoryObj } from '@storybook/react';
import { Zones } from './Zones';

const meta: Meta<typeof Zones> = {
  title: 'Figma Components/Zones',
  component: Zones,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    selectedId: {
      control: { type: 'select' },
      options: ['z1', 'z2', 'z3', 'z4'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Zones\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Card Background** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Zone Badge** | \`var(--uedp-primary-600)\` (\`#2563eb\`) | \`24px x 24px\` circular badge |
| **Selected Card BG** | \`rgba(37, 99, 235, 0.15)\` | — |
| **Figma Layer Name** | \`Zones\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Zones>;

export const Default: Story = {
  args: {
    title: 'Geospatial Zones',
    selectedId: 'z1',
  },
};
