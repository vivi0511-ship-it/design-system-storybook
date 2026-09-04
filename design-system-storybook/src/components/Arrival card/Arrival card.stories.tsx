import type { Meta, StoryObj } from '@storybook/react';
import { ArrivalCard } from './Arrival card';

const meta: Meta<typeof ArrivalCard> = {
  title: 'Figma Components/Arrival card',
  component: ArrivalCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Hero arrival title text',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Arrival subtext description',
    },
    destination: {
      control: { type: 'text' },
      description: 'Destination location name',
    },
    tripTime: {
      control: { type: 'text' },
      description: 'Trip duration metric',
    },
    distance: {
      control: { type: 'text' },
      description: 'Distance metric',
    },
    safetyScore: {
      control: { type: 'text' },
      description: 'Safety score metric rating',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Arrival card\` (Node ID: \`52:5981\`)

| Figma Component Element | Color / Hex | Specs |
| :--- | :--- | :--- |
| **Card Sheet Fill** | \`#551ba8\` (Deep Purple) | 36px top border radius |
| **Hero Checkmark** | \`#ffd000\` (Vibrant Yellow) | 68px circle with dark checkmark |
| **Hero Title** | \`#ffd000\` | Montserrat Bold 24px |
| **Hero Subtitle** | \`#d8b4fe\` (Light Lavender) | Montserrat 14px |
| **Destination Badge** | \`#311059\` | Yellow dot + "Mrug Crafts" |
| **Safety Check-in** | \`#391873\` card box | "I am safe" (\`#ede9fe\`) & "Need help" (\`#7c3aed\`) |
| **Route Reactions** | \`#391873\` cards | Safe (😁), Unsafe (😟), Ok (😐), Report (🚨) |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArrivalCard>;

export const DefaultArrivedCard: Story = {
  args: {
    title: "You've arrived!",
    subtitle: "You reached your destination safe.",
    destination: "Mrug Crafts",
    tripTime: "5 min",
    distance: "700m",
    safetyScore: "3.9",
  },
};
