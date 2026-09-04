import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu, DropdownMenuMatrix } from './Dropdown menu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Figma Components/Dropdown menu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Closed', 'open', 'Select'],
      description: 'Dropdown Variant State: Closed (trigger pill), open (expanded menu), Select (highlighted item)',
    },
    triggerLabel: {
      control: { type: 'text' },
      description: 'Closed trigger pill text',
    },
    headerLabel: {
      control: { type: 'text' },
      description: 'Expanded panel search header text',
    },
    selectedItem: {
      control: { type: 'text' },
      description: 'Highlighted selected option string',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Dropdown menu\` (Node ID: \`52:5138\` / \`52:5137\`)

| Variant | Geometry / Fill | Specs |
| :--- | :--- | :--- |
| **Variant 1 (Closed)** | \`#8b5cf6\` Pill | \`9999px\` border-radius, "Choose destination" + ChevronDown |
| **Variant 2 (open)** | \`#8b5cf6\` Panel | \`20px\` border-radius, "Search destination" header, ChevronUp, 9 cities in white |
| **Variant 3 (Select)** | \`#8b5cf6\` Panel | "Shimla" item highlighted in light lavender (\`#e9d5ff\`) & deep purple text (\`#5b21b6\`) |

- **Divider Lines**: \`1px solid rgba(255, 255, 255, 0.2)\`
- **Container Canvas**: White canvas enclosed in a subtle purple dashed border (\`2px dashed #9333ea\`)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const ClosedTriggerPill: Story = {
  args: {
    state: 'Closed',
  },
};

export const OpenMenuDefault: Story = {
  args: {
    state: 'open',
  },
};

export const OpenMenuSelectedShimla: Story = {
  args: {
    state: 'Select',
    selectedItem: 'Shimla',
  },
};

export const CompleteComponentSetMatrix: Story = {
  render: () => <DropdownMenuMatrix />,
};
