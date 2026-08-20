import type { Meta, StoryObj } from '@storybook/react';
import { Component336 } from './Component 336';

const meta: Meta<typeof Component336> = {
  title: 'Figma Components/Component 336',
  component: Component336,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Preserved Figma variant property',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Preserved Figma size property',
    },
    active: {
      control: { type: 'boolean' },
      description: 'Active outline highlight state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state flag',
    },
    label: {
      control: { type: 'text' },
      description: 'Button text label',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Component 336\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Border Radius** | \`var(--uedp-rounded-3xl)\` (\`32px\`) | — |
| **Gap** | \`var(--uedp-gap-4)\` (\`16px\`) | — |
| **Padding (lg)** | \`var(--uedp-padding-6)\` (\`24px\`) | \`32px\` horizontal |
| **Primary Color** | \`var(--uedp-primary-600)\` (\`#2563eb\`) | — |
| **Font Family** | \`var(--uedp-typography-font-family-base)\` | \`Inter, sans-serif\` |
| **Figma Layer Name** | \`Component 336\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component336>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    active: false,
    disabled: false,
    label: 'Component 336 Action',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary State',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    label: 'Outline Action',
  },
};

export const ActiveState: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    active: true,
    label: 'Active Highlighted',
  },
};
