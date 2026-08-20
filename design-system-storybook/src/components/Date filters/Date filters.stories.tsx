import type { Meta, StoryObj } from '@storybook/react';
import { DateFilters } from './Date filters';

const meta: Meta<typeof DateFilters> = {
  title: 'Figma Components/Date filters',
  component: DateFilters,
  tags: ['autodocs'],
  argTypes: {
    selectedPreset: {
      control: { type: 'select' },
      options: ['today', '7d', '30d', 'ytd', 'custom'],
    },
    startDate: { control: { type: 'text' } },
    endDate: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Date filters\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Container Background** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Preset Button** | \`var(--uedp-slate-900)\` (\`#0f172a\`) | \`6px 14px\` hardcoded padding |
| **Active Highlight** | \`var(--uedp-primary-600)\` (\`#2563eb\`) | — |
| **Figma Layer Name** | \`Date filters\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateFilters>;

export const Default: Story = {
  args: {
    selectedPreset: '7d',
    startDate: '2026-08-01',
    endDate: '2026-08-12',
  },
};
