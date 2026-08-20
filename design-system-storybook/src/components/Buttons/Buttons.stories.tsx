import type { Meta, StoryObj } from '@storybook/react';
import { Buttons } from './Buttons';

const meta: Meta<typeof Buttons> = {
  title: 'Figma Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Hover', 'Press', 'Disable'],
      description: 'Preserved Figma State variant',
    },
    type: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Tertiary'],
      description: 'Preserved Figma Type variant',
    },
    size: {
      control: { type: 'select' },
      options: ['Tiny', 'Medium', 'Large', 'Big'],
      description: 'Preserved Figma Size variant',
    },
    label: {
      control: { type: 'text' },
      description: 'Button text label',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state control',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Buttons\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Primary Fill** | \`var(--uedp-primary-600)\` (\`#2563eb\`) | — |
| **Hover Fill** | \`var(--uedp-primary-700)\` (\`#1d4ed8\`) | — |
| **Border Radius** | \`var(--uedp-radii-md)\` (\`8px\`) | — |
| **Font Family** | \`var(--uedp-typography-font-family-base)\` | \`Inter, sans-serif\` |
| **Figma Layer Name** | \`Buttons\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Buttons>;

export const PrimaryDefault: Story = {
  args: {
    state: 'Default',
    type: 'Primary',
    size: 'Medium',
    label: 'Primary Button',
  },
};

export const SecondaryHover: Story = {
  args: {
    state: 'Hover',
    type: 'Secondary',
    size: 'Large',
    label: 'Secondary Hover',
  },
};

export const TertiaryBig: Story = {
  args: {
    state: 'Default',
    type: 'Tertiary',
    size: 'Big',
    label: 'Tertiary Action',
  },
};

export const DisabledState: Story = {
  args: {
    state: 'Disable',
    type: 'Primary',
    size: 'Medium',
    label: 'Disabled Action',
    disabled: true,
  },
};
