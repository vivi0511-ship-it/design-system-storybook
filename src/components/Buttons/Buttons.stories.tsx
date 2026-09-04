import type { Meta, StoryObj } from '@storybook/react';
import { Buttons } from './Buttons';
import { PillComponentGrid } from '../PillComponentGrid/PillComponentGrid';

const meta: Meta<typeof Buttons> = {
  title: 'Figma Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Pill Component Grid\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Row 1 (Deep Purple)** | \`#6b21a8\` | White text & white vehicle icons |
| **Row 2 (Light Lavender-White)** | \`#ede9fe\` | Deep purple text & icons |
| **Row 3 (Vibrant Green)** | \`#10b981\` | Deep purple text & icons |
| **Row 4 (Light Mint-Green)** | \`#d1fae5\` | Vibrant green text & icons |
| **Border Radius** | \`9999px\` (Pill shape) | — |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Buttons>;

export const ComponentGridMatrix: Story = {
  render: () => <PillComponentGrid />,
};
