import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './Navigation bar';

const meta: Meta<typeof NavigationBar> = {
  title: 'Figma Components/Navigation bar',
  component: NavigationBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Inactive', 'Home', 'Travel', 'Community', 'Help'],
      description: 'Preserved Figma State variant (Node ID: 51:199)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Navigation bar\` (Node ID: \`51:199\`)

| Figma Layer Property | CSS Value / Colors | Exact Figma Spec |
| :--- | :--- | :--- |
| **Figma Node ID** | \`51:199\` | Preserved |
| **Container Dimensions** | \`428px x 97px\` | Light lavender fill \`#f3e8ff\` |
| **SOS Center Button** | Circle \`60px x 60px\` | Fill \`#ff3838\`, Inter 24px 700 \`#ffffff\` |
| **Inactive Item** | Text & Icon Fill \`#c084fc\` | Montserrat 12px weight 600 |
| **Active Item** | Pill Fill \`#ffffff\` (\`54px x 36px\`, radius \`50px\`) | Text & Icon Fill \`#2e1065\` |
| **Navigation Tabs** | \`Home\`, \`Travel\`, \`SOS\`, \`Community\`, \`Help\` | 5 items layout |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Inactive: Story = {
  args: {
    state: 'Inactive',
  },
};

export const HomeActive: Story = {
  args: {
    state: 'Home',
  },
};

export const TravelActive: Story = {
  args: {
    state: 'Travel',
  },
};

export const CommunityActive: Story = {
  args: {
    state: 'Community',
  },
};

export const HelpActive: Story = {
  args: {
    state: 'Help',
  },
};

export const AllStatesPreview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px 16px',
        border: '2px dashed #8a38f5',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        maxWidth: '460px',
        boxSizing: 'border-box',
      }}
    >
      <NavigationBar state="Inactive" />
      <NavigationBar state="Home" />
      <NavigationBar state="Travel" />
      <NavigationBar state="Community" />
      <NavigationBar state="Help" />
    </div>
  ),
};
