import type { Meta, StoryObj } from '@storybook/react';
import { ArticleThumbnail } from './Article thumbnail';

const meta: Meta<typeof ArticleThumbnail> = {
  title: 'Figma Components/Article thumbnail',
  component: ArticleThumbnail,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Press'],
      description: 'Preserved Figma State variant',
    },
    title: {
      control: { type: 'text' },
      description: 'Article headline title',
    },
    category: {
      control: { type: 'text' },
      description: 'Topic category badge',
    },
    readTime: {
      control: { type: 'text' },
      description: 'Reading duration estimate',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Article thumbnail\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Card Background** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Badge Color** | \`var(--uedp-primary-400)\` (\`#60a5fa\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Figma Layer Name** | \`Article thumbnail\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleThumbnail>;

export const Default: Story = {
  args: {
    state: 'Default',
    title: 'Sustainable Irrigation Practices for Modern Agriculture',
    category: 'Agronomy',
    readTime: '5 min read',
  },
};

export const PressedState: Story = {
  args: {
    state: 'Press',
    title: 'Optimizing Soil Moisture Sensors for High Yield',
    category: 'Tech & IoT',
    readTime: '8 min read',
  },
};
