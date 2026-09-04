import type { Meta, StoryObj } from '@storybook/react';
import { Buttons, ButtonsSet, Buttons3SetsMatrix } from './Buttons';

const meta: Meta<typeof Buttons> = {
  title: 'Figma Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Tertiary'],
      description: 'Button Theme Set: Primary (Deep Purple), Secondary (Light Lavender), Tertiary (Vibrant Green)',
    },
    state: {
      control: { type: 'select' },
      options: ['Default', 'Hover', 'Pressed', 'Disabled'],
      description: 'Button Interactive State: Default, Hover, Pressed, Disabled',
    },
    size: {
      control: { type: 'select' },
      options: ['Small', 'Medium', 'Large', 'Giant'],
      description: 'Button Column Sizing Step: Small, Medium, Large, Giant',
    },
    label: {
      control: { type: 'text' },
      description: 'Button text label',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Buttons\` (Node ID: \`41:6793\` / \`41:6426\`)

| Set Theme | Row States | Column Sizes | Fill Colors |
| :--- | :--- | :--- | :--- |
| **Set 1: Primary (Deep Purple)** | Default, Hover, Pressed, Disabled | Small, Medium, Large, Giant | \`#6b21a8\` / \`#5b21b6\` / \`#4c1d95\` / \`#ddd6fe\` |
| **Set 2: Secondary (Light Lavender)** | Default, Hover, Pressed, Disabled | Small, Medium, Large, Giant | \`#ede9fe\` / \`#ddd6fe\` / \`#c4b5fd\` / \`#f3e8ff\` |
| **Set 3: Tertiary (Vibrant Green)** | Default, Hover, Pressed, Disabled | Small, Medium, Large, Giant | \`#10b981\` / \`#059669\` / \`#047857\` / \`#d1fae5\` |

- **Border Radius**: \`9999px\` (Pill shape)
- **Container**: White background canvas with subtle purple dashed border (\`2px dashed #9333ea\`)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Buttons>;

export const DefaultButton: Story = {
  args: {
    type: 'Primary',
    state: 'Default',
    size: 'Medium',
    label: 'Text',
  },
};

export const PrimaryDeepPurpleSet: Story = {
  render: () => <ButtonsSet type="Primary" title="Set 1: Primary (Deep Purple)" />,
};

export const SecondaryLightLavenderSet: Story = {
  render: () => <ButtonsSet type="Secondary" title="Set 2: Secondary (Light Lavender)" />,
};

export const TertiaryVibrantGreenSet: Story = {
  render: () => <ButtonsSet type="Tertiary" title="Set 3: Tertiary (Vibrant Green)" />,
};

export const Complete3SetsMatrix: Story = {
  render: () => <Buttons3SetsMatrix />,
};
