import type { Meta, StoryObj } from '@storybook/react';
import { ArrivalCard } from '../Arrival card/Arrival card';

const meta: Meta<typeof ArrivalCard> = {
  title: 'Figma Components/Component 315',
  component: ArrivalCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    destination: { control: { type: 'text' } },
    tripTime: { control: { type: 'text' } },
    distance: { control: { type: 'text' } },
    safetyScore: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Arrival Card\` / \`Component 315\` (image_0.png)

| Element | Color / Specs |
| :--- | :--- |
| **Card Fill** | \`#551ba8\` (Deep Purple) |
| **Header Checkmark** | \`#ffd000\` Yellow Circle |
| **Title** | \`#ffd000\` Bold Montserrat |
| **Location Badge** | \`#311059\` "Mrug Crafts" |
| **Trip Stats** | 5 min, 700m, 3.9 Safety score |
| **Safety Check-in** | "I am safe" & "Need help" pill buttons |
| **Route Reactions** | Safe (😁), Unsafe (😟), Ok (😐), Report (🚨) |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArrivalCard>;

export const ArrivalCardView: Story = {
  args: {
    title: "You've arrived!",
    subtitle: "You reached your destination safe.",
    destination: "Mrug Crafts",
    tripTime: "5 min",
    distance: "700m",
    safetyScore: "3.9",
  },
};
