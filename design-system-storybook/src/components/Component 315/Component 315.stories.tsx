import type { Meta, StoryObj } from '@storybook/react';
import { Component315 } from './Component 315';

const meta: Meta<typeof Component315> = {
  title: 'Figma Components/Component 315',
  component: Component315,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    trendValue: { control: { type: 'text' } },
    trendDirection: {
      control: { type: 'select' },
      options: ['up', 'down', 'neutral'],
    },
    subtext: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Component 315\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Card Background** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Header Gap** | \`var(--uedp-spacing-3)\` (\`12px\`) | — |
| **Value Font Size** | \`var(--uedp-typography-font-size-2xl)\` | \`24px\` bold |
| **Icon Container Size** | — | \`36px x 36px\` hardcoded |
| **Figma Layer Name** | \`Component 315\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component315>;

export const Default: Story = {
  args: {
    label: 'Total Yield Volume',
    value: '48,250 Tons',
    trendValue: '+14.2%',
    trendDirection: 'up',
    subtext: 'vs. previous harvest cycle',
  },
};

export const NegativeTrend: Story = {
  args: {
    label: 'Water Deficit Index',
    value: '18.4 mm',
    trendValue: '-5.8%',
    trendDirection: 'down',
    subtext: 'critical threshold warning',
  },
};
