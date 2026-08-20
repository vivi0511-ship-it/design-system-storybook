import type { Meta, StoryObj } from '@storybook/react';
import { IconsButtons } from './Icons Buttons';

const meta: Meta<typeof IconsButtons> = {
  title: 'Figma Components/Icons Buttons',
  component: IconsButtons,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Hover', 'Selected', 'Disabled'],
      description: 'Preserved Figma State variant',
    },
    type: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Tertiary'],
      description: 'Preserved Figma Type variant',
    },
    size: {
      control: { type: 'select' },
      options: ['Tiny', 'Small', 'Medium', 'Large', 'Giant'],
      description: 'Preserved Figma Size variant',
    },
    icon: {
      control: { type: 'select' },
      options: ['star', 'settings', 'heart', 'bell', 'share'],
      description: 'Icon element selection',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Icons Buttons\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Primary Fill** | \`var(--uedp-primary-600)\` (\`#2563eb\`) | — |
| **Icon Sizes** | \`var(--uedp-geometry-icon-*)\` | \`14px\` - \`28px\` |
| **Border Radius** | \`var(--uedp-radii-md)\` (\`8px\`) | — |
| **Figma Layer Name** | \`Icons Buttons\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconsButtons>;

export const DefaultPrimary: Story = {
  args: {
    state: 'Default',
    type: 'Primary',
    size: 'Medium',
    icon: 'star',
  },
};

export const SelectedState: Story = {
  args: {
    state: 'Selected',
    type: 'Primary',
    size: 'Large',
    icon: 'heart',
  },
};

export const SecondarySettings: Story = {
  args: {
    state: 'Default',
    type: 'Secondary',
    size: 'Medium',
    icon: 'settings',
  },
};
