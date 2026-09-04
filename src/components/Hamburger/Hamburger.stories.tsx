import type { Meta, StoryObj } from '@storybook/react';
import { Hamburger, HamburgerPreviewContainer } from './Hamburger';

const meta: Meta<typeof Hamburger> = {
  title: 'Figma Components/Hamburger',
  component: Hamburger,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Open/close drawer menu panel state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Hamburger\` (Node ID: \`52:5071\`)

| Figma Property | Bound Value / Hex | Specs |
| :--- | :--- | :--- |
| **Drawer Panel Fill** | \`#280c61\` (Deep Indigo-Purple) | 32px rounded left corners |
| **Close Cross (✕)** | \`#ffffff\` | Top-right header positioning |
| **7 Navigation Items** | Profile, Accessibility (with Chevron), Low battery mode, Timely check in, Offline mode, Volunteer, Settings | Pure white line-art icons (\`#ffffff\`) |
| **Typography** | Montserrat 500 Medium 16px | Pure white text (\`#ffffff\`) |
| **Container Canvas** | White canvas | Subtle purple dashed border (\`2px dashed #9333ea\`) |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hamburger>;

export const OpenDrawerMenu: Story = {
  args: {
    isOpen: true,
  },
};

export const CompleteComponentSetMatrix: Story = {
  render: () => <HamburgerPreviewContainer />,
};
