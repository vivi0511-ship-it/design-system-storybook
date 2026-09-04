import type { Meta, StoryObj } from '@storybook/react';
import { IncidentHeatMapCard, IncidentHeatMapCardMatrix } from './Incident heat map card';

const meta: Meta<typeof IncidentHeatMapCard> = {
  title: 'Figma Components/Incident heat map card',
  component: IncidentHeatMapCard,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Hover'],
      description: 'Card Variant State: Default (pure white fill) or Hover (light lavender fill)',
    },
    heading: {
      control: { type: 'text' },
      description: 'Incident title heading',
    },
    categoriesList: {
      control: { type: 'text' },
      description: 'Harrassment categories list string',
    },
    location: {
      control: { type: 'text' },
      description: 'Incident location string',
    },
    dateTime: {
      control: { type: 'text' },
      description: 'Incident date and time range',
    },
    viewMoreText: {
      control: { type: 'text' },
      description: 'View more link button text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Incident heat map card\` (Node ID: \`42:7004\`)

| Variant State | Card Background | Typography & Icons |
| :--- | :--- | :--- |
| **Variant 1 (Default)** | \`#ffffff\` (Pure White) | Dark deep purple (\`#2e1065\`), purple icons (\`#9333ea\`) |
| **Variant 2 (Hover)** | \`#f8f5fe\` (Light Lavender) | Dark deep purple (\`#2e1065\`), purple icons (\`#9333ea\`) |

- **Card Radius**: \`24px\`
- **Container Canvas**: Grey background (\`#dedede\`) enclosed in a subtle purple dashed border (\`2px dashed #9333ea\`)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IncidentHeatMapCard>;

export const DefaultCard: Story = {
  args: {
    state: 'Default',
  },
};

export const HoverCard: Story = {
  args: {
    state: 'Hover',
  },
};

export const CompleteComponentSetMatrix: Story = {
  render: () => <IncidentHeatMapCardMatrix />,
};
