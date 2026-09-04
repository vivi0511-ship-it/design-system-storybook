import type { Meta, StoryObj } from '@storybook/react';
import { LocationCard1, LocationCard1Matrix } from './Location card 1';

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
      description: 'Location title',
    },
    safetyScore: {
      control: { type: 'text' },
      description: 'Safety score value',
    },
    isWomanOwned: {
      control: { type: 'boolean' },
      description: 'Woman owned badge indicator',
    },
    category: {
      control: { type: 'text' },
      description: 'Category description',
    },
    status: {
      control: { type: 'text' },
      description: 'Operational status',
    },
    closingTime: {
      control: { type: 'text' },
      description: 'Closing time text',
    },
    distance: {
      control: { type: 'text' },
      description: 'Distance display',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Location card 1\`

| Figma Layer Property | Value | Notes |
| :--- | :--- | :--- |
| **Card Fill** | \`#ede4ff\` | Light lavender card background |
| **Active Border** | \`1.5px solid #5b21b6\` | Active / Press state border |
| **Title Color** | \`#362061\` | Deep purple Montserrat title |
| **Text Color** | \`#60507e\` | Medium purple labels |
| **Open Status** | \`#16a34a\` | Bold green status text |
| **Border Radius** | \`24px\` | Card container corner radius |
| **Figma Layer Name** | \`Location card 1\` | Node ID 51:4530 |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LocationCard1>;

export const DefaultCard: Story = {
  args: {
    state: 'default',
    locationName: 'Mrug Crafts',
    safetyScore: '4.9',
    isWomanOwned: true,
    category: 'Craft center',
    status: 'Open',
    closingTime: 'Closes 22:30',
    distance: '8 km',
  },
};

export const PressedCard: Story = {
  args: {
    state: 'Press',
    locationName: 'Mrug Crafts',
    safetyScore: '4.9',
    isWomanOwned: true,
    category: 'Craft center',
    status: 'Open',
    closingTime: 'Closes 22:30',
    distance: '8 km',
  },
};

export const CompleteComponentSetMatrix: Story = {
  render: () => <LocationCard1Matrix />,
};
