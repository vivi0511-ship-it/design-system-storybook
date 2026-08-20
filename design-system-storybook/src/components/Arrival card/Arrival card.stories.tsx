import type { Meta, StoryObj } from '@storybook/react';
import { ArrivalCard } from './Arrival card';

const meta: Meta<typeof ArrivalCard> = {
  title: 'Figma Components/Arrival card',
  component: ArrivalCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Main arrival headline (Node ID: 52:5981)',
    },
    destination: {
      control: { type: 'text' },
      description: 'Destination location name',
    },
    tripTime: {
      control: { type: 'text' },
      description: 'Trip time metric',
    },
    distance: {
      control: { type: 'text' },
      description: 'Distance metric',
    },
    safetyScore: {
      control: { type: 'text' },
      description: 'Safety score rating metric',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Arrival card\` (Node ID: \`52:5981\`)

| Figma Layer Property | CSS Variable / Bound Value | Exact Figma Value |
| :--- | :--- | :--- |
| **Card Fill** | — | \`#5b21b6\` (Deep Purple) |
| **Title Color** | — | \`#eab308\` (Yellow) |
| **Subtext Color** | — | \`#a78bfa\` (Light Purple) |
| **Destination Box Fill**| — | \`#3e2a64\` |
| **Safety Button Fill** | \`var(--uedp-primary-50)\` | \`#eff6ff\` (Text \`#ede9fe\`) |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArrivalCard>;

export const DefaultArrived: Story = {
  args: {
    title: "You've arrived!",
    destination: 'Mrug Crafts',
    tripTime: '5 min',
    distance: '700m',
    safetyScore: '3.9',
  },
};

export const CustomLocation: Story = {
  args: {
    title: "You've arrived!",
    destination: 'Central AgStation',
    tripTime: '12 min',
    distance: '2.4km',
    safetyScore: '4.8',
  },
};
