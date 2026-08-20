import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './Navigation bar';

const meta: Meta<typeof NavigationBar> = {
  title: 'Figma Components/Navigation bar',
  component: NavigationBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Home', 'Travel', 'Community', 'Help', 'Inactive'],
      description: 'Preserved Figma State variant',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Navigation bar\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Active Item Color** | \`var(--uedp-primary-400)\` (\`#60a5fa\`) | — |
| **Background Fill** | \`var(--uedp-slate-900)\` (\`#0f172a\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Figma Layer Name** | \`Navigation bar\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

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
