import type { Meta, StoryObj } from '@storybook/react';
import { ArticleThumbnail, ArticleThumbnailGrid } from './Article thumbnail';

const meta: Meta<typeof ArticleThumbnail> = {
  title: 'Figma Components/Article thumbnail',
  component: ArticleThumbnail,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Press'],
      description: 'Figma State variant: Default (flat) or Press (outlined)',
    },
    title: {
      control: { type: 'text' },
      description: 'Article headline title text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Article thumbnail\` (Node ID: \`52:4614\`)

| Figma Property | Bound Value / Hex | Specs |
| :--- | :--- | :--- |
| **Banner Fill** | \`#2e1065\` (Dark Deep Purple) | 20px bottom corner radius |
| **Title Typography** | Montserrat SemiBold 600 | \`#ffffff\` white, centered |
| **Outlined Stroke** | \`#8b5cf6\` (Purple Solid Border) | 24px corner radius |
| **Container Frame** | \`2px dashed #9333ea\` | White canvas background |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleThumbnail>;

export const DefaultFlatCard: Story = {
  args: {
    state: 'Default',
    title: 'How to navigate safely',
  },
};

export const PressedOutlinedCard: Story = {
  args: {
    state: 'Press',
    title: 'How to navigate safely',
  },
};

export const CompleteComponentSetMatrix: Story = {
  render: () => <ArticleThumbnailGrid />,
};
