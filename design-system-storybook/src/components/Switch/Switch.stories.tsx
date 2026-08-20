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
      description: 'Interactive toggle state',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text content',
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
### Figma Component Specs: \`Switch\` (Node ID: \`42:7043\`)

| Figma Layer Property | CSS Variable / Bound Value | Exact Figma Value |
| :--- | :--- | :--- |
| **Figma Node ID** | \`42:7043\` | Preserved |
| **Track Dimensions** | \`width: 36px\`, \`height: 18px\` | Exact \`36px x 18px\` |
| **Track Corner Radius**| \`20px\` | Exact \`20px\` |
| **Thumb Geometry** | \`width: 10px\`, \`height: 10px\` | Exact \`10px x 10px\` |
| **ON Padding (42:7042)**| \`padding: 3px 22px 5px 4px\` | \`left: 4px\` |
| **OFF Padding (42:7041)**| \`padding: 3px 4px 5px 20px\` | \`left: 20px\` |
| **ON Track Fill** | \`var(--uedp-primary-300)\` (\`VariableID:1:204\`) | \`#93c5fd\` |
| **ON Track Stroke** | \`var(--uedp-primary-600)\` (\`VariableID:1:207\`) | \`#2563eb\` |
| **OFF Track Fill** | \`var(--uedp-primary-500)\` (\`VariableID:1:206\`) | \`#3b82f6\` |
| **OFF Track Stroke** | \`var(--uedp-primary-300)\` (\`VariableID:1:204\`) | \`#93c5fd\` |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const OffVariant: Story = {
  args: {
    property1: 'Off',
    label: 'Switch (Property 1 = Off)',
  },
};

export const OnVariant: Story = {
  args: {
    property1: 'On',
    label: 'Switch (Property 1 = On)',
  },
};
