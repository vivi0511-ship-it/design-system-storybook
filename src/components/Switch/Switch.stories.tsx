import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Figma Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'select' },
      options: ['On', 'Off'],
      description: 'Preserved Figma variant: Property 1 (Node ID: 42:7043)',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Interactive boolean state',
    },
    label: {
      control: { type: 'text' },
      description: 'Optional label text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Switch\` (Node ID: \`42:7043\`)

| Figma Layer Property | CSS Value / Colors | Exact Figma Spec |
| :--- | :--- | :--- |
| **Figma Node ID** | \`42:7043\` | Preserved |
| **Track Geometry** | \`36px x 18px\` | \`border-radius: 20px\` |
| **Thumb Geometry** | \`10px x 10px\` | Circle \`border-radius: 50%\` |
| **ON Track Fill** | \`#f3e8ff\` | Stroke \`#c084fc\` |
| **ON Thumb Fill** | \`#c084fc\` | Position \`left: 20px\` |
| **OFF Track Fill** | \`#d8b4fe\` | Stroke \`#f3e8ff\` |
| **OFF Thumb Fill** | \`#f3e8ff\` | Position \`left: 4px\` |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const OnVariant: Story = {
  args: {
    property1: 'On',
  },
};

export const OffVariant: Story = {
  args: {
    property1: 'Off',
  },
};

export const AllStatesPreview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '24px 32px',
        border: '2px dashed #8a38f5',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        width: 'fit-content',
        boxSizing: 'border-box',
      }}

    >
      <Switch property1="On" />
      <Switch property1="Off" />
    </div>
  ),
};
