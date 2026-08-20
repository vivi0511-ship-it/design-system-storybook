import type { Meta, StoryObj } from '@storybook/react';
import { QuestionnaireCard } from './Questionnaire card';

const meta: Meta<typeof QuestionnaireCard> = {
  title: 'Figma Components/Questionnaire card',
  component: QuestionnaireCard,
  tags: ['autodocs'],
  argTypes: {
    question: {
      control: { type: 'text' },
      description: 'Question header label',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Questionnaire card\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Card Fill** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Option Background**| \`var(--uedp-slate-900)\` (\`#0f172a\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Figma Layer Name** | \`Questionnaire card\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestionnaireCard>;

export const Default: Story = {
  args: {
    question: 'What primary issue requires field inspection today?',
  },
};
