import type { Meta, StoryObj } from '@storybook/react';
import { LocationCard1 } from './Location card 1';

const meta: Meta<typeof LocationCard1> = {
  title: 'Figma Components/Location card 1',
  component: LocationCard1,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'Press'],
      description: 'Preserved Figma State variant',
    },
    locationName: {
      control: { type: 'text' },
      description: 'Location title label',
    },
    distance: {
      control: { type: 'text' },
      description: 'Proximity distance display',
    },
    rating: {
      control: { type: 'number' },
      description: 'Rating score',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Location card 1\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Card Fill** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Action Button** | \`var(--uedp-primary-600)\` (\`#2563eb\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Figma Layer Name** | \`Location card 1\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LocationCard1>;

export const Default: Story = {
  args: {
    state: 'default',
    locationName: 'Valley AgStation North',
    distance: '2.4 km away',
    rating: 4.8,
  },
};

export const Pressed: Story = {
  args: {
    state: 'Press',
    locationName: 'Central Storage Silo 02',
    distance: '5.1 km away',
    rating: 4.6,
  },
};
