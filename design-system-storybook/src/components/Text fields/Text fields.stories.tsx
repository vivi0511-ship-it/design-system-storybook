import type { Meta, StoryObj } from '@storybook/react';
import { TextFields } from './Text fields';

const meta: Meta<typeof TextFields> = {
  title: 'Figma Components/Text fields',
  component: TextFields,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Active', 'Filled', 'Pressed', 'Disabled', 'Error'],
      description: 'Preserved Figma State variant (Node ID: 46:4414)',
    },
    label: {
      control: { type: 'text' },
      description: 'Label heading text',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input text / placeholder content',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Subtext error message (used in Error state)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Text fields\` (Node ID: \`46:4414\`)

| Figma Layer Property | CSS Variable / Bound Value | Exact Figma Value |
| :--- | :--- | :--- |
| **Figma Node ID** | \`46:4414\` | Preserved |
| **Container Width** | \`326px\` | Exact \`326px\` max-width |
| **Input Shape** | \`border-radius: 25px\` | Exact \`25px\` pill radius |
| **Label Typography** | \`Inter, 16px, 500\` | \`font-weight: 500\` |
| **Input Typography** | \`Inter, 16px, 500\` | \`font-weight: 500\` |
| **Default State** | Fill \`var(--uedp-primary-400)\` (\`#60a5fa\`), Text \`var(--uedp-primary-500)\` (\`#3b82f6\`) | No border |
| **Active State** | Fill \`var(--uedp-primary-500)\` (\`#3b82f6\`), Stroke \`var(--uedp-primary-600)\` (\`#2563eb\`), Text \`var(--uedp-primary-100)\` (\`#dbeafe\`) | \`1px solid\` |
| **Disabled State** | Fill \`#ddd6fe\`, Label & Text \`#c4b5fd\` | \`#c4b5fd\` |
| **Error State** | Fill \`#ffe4e6\`, Stroke & Text \`#f43f5e\` | Subtext \`12px 500\` |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextFields>;

export const DefaultState: Story = {
  args: {
    state: 'Default',
    label: 'Heading',
    placeholder: 'Fill me',
  },
};

export const ActiveState: Story = {
  args: {
    state: 'Active',
    label: 'Heading',
    placeholder: 'Something',
  },
};

export const FilledState: Story = {
  args: {
    state: 'Filled',
    label: 'Heading',
    placeholder: 'Something',
  },
};

export const PressedState: Story = {
  args: {
    state: 'Pressed',
    label: 'Heading',
    placeholder: 'Fill me',
  },
};

export const DisabledState: Story = {
  args: {
    state: 'Disabled',
    label: 'Heading',
    placeholder: 'Fill me',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    label: 'Heading',
    placeholder: 'Something',
    errorText: 'Error text',
  },
};
