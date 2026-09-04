import type { Meta, StoryObj } from '@storybook/react';
import { VerificationCode, VerificationCodeMatrix } from './Verification code';

const meta: Meta<typeof VerificationCode> = {
  title: 'Figma Components/Verification code',
  component: VerificationCode,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Pressed', 'Active', 'Filled', 'Error'],
      description: 'Verification Code Variant State: Default, Pressed, Active, Filled, Error',
    },
    title: {
      control: { type: 'text' },
      description: 'Verification code heading text',
    },
    timerText: {
      control: { type: 'text' },
      description: 'Timer duration string',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error helper message',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Verification code\` (Node ID: \`52:5013\` / \`52:5019\`)

| State Variant | Circle Fill | Digit Text / Border Specs |
| :--- | :--- | :--- |
| **Default State** | \`#f0ebff\` | Placeholder \`0\`s in \`#c4b5fd\` |
| **Pressed State** | \`#ebdfff\` | Placeholder \`0\`s in \`#b89bfb\` |
| **Active State** | \`#ebdfff\` | Entered \`5\` \`4\`, active cursor \`|\`, placeholder \`0\`s |
| **Filled State** | \`#ebdfff\` | Entered digits \`5 4 6 3 8\` in \`#1e0c45\` |
| **Error State** | \`#ffd8d8\` | Red border \`#f43f5e\`, helper text \`Incorrect code\` (\`#e11d48\`) |

- **Circle Geometry**: \`54px x 54px\` perfect circle (\`border-radius: 50%\`)
- **Container Canvas**: White canvas enclosed in a subtle purple dashed border (\`2px dashed #9333ea\`)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VerificationCode>;

export const DefaultState: Story = {
  args: {
    state: 'Default',
  },
};

export const PressedState: Story = {
  args: {
    state: 'Pressed',
  },
};

export const ActiveState: Story = {
  args: {
    state: 'Active',
  },
};

export const FilledState: Story = {
  args: {
    state: 'Filled',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
  },
};

export const CompleteComponentSetMatrix: Story = {
  render: () => <VerificationCodeMatrix />,
};
