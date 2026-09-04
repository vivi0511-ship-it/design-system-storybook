import type { Meta, StoryObj } from '@storybook/react';
import { QuestionnaireCard } from './Questionnaire card';

const meta: Meta<typeof QuestionnaireCard> = {
  title: 'Figma Components/Questionnaire card',
  component: QuestionnaireCard,
  tags: ['autodocs'],
  argTypes: {
    question: {
      control: { type: 'text' },
      description: 'Question title text',
    },
    selectedId: {
      control: { type: 'text' },
      description: 'Currently selected option ID',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Questionnaire card\` (Node ID: \`47:4495\`)

| Figma Layer Property | CSS Value / Colors | Exact Figma Spec |
| :--- | :--- | :--- |
| **Figma Node ID** | \`47:4495\` | Preserved |
| **Card Fill** | \`#f3e8ff\` | Light lavender fill |
| **Border Radius** | \`24px\` | Rounded card container |
| **Title Typography** | \`Inter, 16px, 600\` | Color \`#2e1065\` |
| **Option Typography** | \`Inter, 16px, 600\` | Color \`#2e1065\` |
| **Radial Radio Button** | Ring \`#c084fc\`, Fill \`#ede9fe\` | Inner dot \`#c084fc\` when selected |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestionnaireCard>;

export const Default: Story = {
  args: {
    question: '1. How do u usually travel?',
  },
};

export const OptionSelected: Story = {
  args: {
    question: '1. How do u usually travel?',
    selectedId: 'opt2',
  },
};

export const CardPreview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px 24px',
        border: '2px dashed #8a38f5',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        maxWidth: '420px',
        boxSizing: 'border-box',
      }}
    >
      <QuestionnaireCard />
    </div>
  ),
};
