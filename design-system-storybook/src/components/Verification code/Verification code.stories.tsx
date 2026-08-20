import type { Meta, StoryObj } from '@storybook/react';
import { VerificationCode } from './Verification code';

const meta: Meta<typeof VerificationCode> = {
  title: 'Figma Components/Verification code',
  component: VerificationCode,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Active', 'Filled', 'Pressed', 'Error'],
      description: 'Preserved Figma State variant',
    },
    length: {
      control: { type: 'number', min: 4, max: 6 },
      description: 'OTP length digits',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Verification code\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Input Height** | — | \`56px\` |
| **Input Width** | — | \`48px\` |
| **Border Radius** | \`var(--uedp-radii-md)\` (\`8px\`) | — |
| **Figma Layer Name** | \`Verification code\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VerificationCode>;

export const FourDigits: Story = {
  args: {
    state: 'Default',
    length: 4,
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    length: 4,
  },
};
