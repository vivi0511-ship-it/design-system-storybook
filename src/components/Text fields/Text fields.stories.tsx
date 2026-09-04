import type { Meta, StoryObj } from '@storybook/react';
import { TextFields } from './Text fields';

const meta: Meta<typeof TextFields> = {
  title: 'Figma Components/Text fields',
  component: TextFields,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Pressed', 'Filled', 'Active', 'Disabled', 'Error'],
      description: 'Preserved Figma State variant (Node ID: 46:4414)',
    },
    label: {
      control: { type: 'text' },
      description: 'Label heading text',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input text placeholder content',
    },
    value: {
      control: { type: 'text' },
      description: 'Input value content',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Subtext error message (used in Error state)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Text fields\` (Node ID: \`46:4414\`)

| Figma Layer Property | CSS Value / Colors | Exact Figma Spec |
| :--- | :--- | :--- |
| **Figma Node ID** | \`46:4414\` | Preserved |
| **Container Width** | \`326px\` | Exact \`326px\` max-width |
| **Input Shape** | \`border-radius: 25px\` | Exact \`25px\` pill radius |
| **Label Typography** | \`Inter, 16px, 500\` | Color \`#2e1065\` |
| **Input Typography** | \`Inter, 16px, 500\` | Weight \`500\` |
| **Default State** | Fill \`#e9d5ff\`, Text/Placeholder \`#d8b4fe\` | Transparent border |
| **Pressed / Focus Empty** | Fill \`#d8b4fe\`, Stroke \`#c084fc\`, Placeholder \`#e9d5ff\` | \`1px solid\` |
| **Filled State** | Fill \`#d8b4fe\`, Stroke \`#c084fc\`, Text \`#2e1065\` | \`1px solid\` |
| **Active State** | Fill \`#d8b4fe\`, Stroke \`#c084fc\`, Text \`#2e1065\` | Blinking cursor caret |
| **Disabled State** | Fill \`#ddd6fe\`, Label & Text \`#c4b5fd\` | Cursor \`not-allowed\` |
| **Error State** | Fill \`#ffe4e6\`, Stroke \`#f43f5e\`, Label & Text \`#f43f5e\` | Subtext \`12px 500\` |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextFields>;

export const DefaultState: Story = {
  args: {
    state: 'Default',
    label: 'Heading',
    placeholder: 'Fill me',
  },
};

export const PressedState: Story = {
  args: {
    state: 'Pressed',
    label: 'Heading',
    placeholder: 'Fill me',
  },
};

export const FilledState: Story = {
  args: {
    state: 'Filled',
    label: 'Heading',
    value: 'Something',
  },
};

export const ActiveState: Story = {
  args: {
    state: 'Active',
    label: 'Heading',
    value: 'Something',
  },
};

export const DisabledState: Story = {
  args: {
    state: 'Disabled',
    label: 'Heading',
    placeholder: 'Fill me',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    label: 'Heading',
    value: 'Something',
    errorText: 'Error text',
  },
};

export const AllStatesPreview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        padding: '32px 24px',
        border: '2px dashed #8a38f5',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        maxWidth: '376px',
        boxSizing: 'border-box',
      }}
    >
      <TextFields state="Default" label="Heading" placeholder="Fill me" />
      <TextFields state="Pressed" label="Heading" placeholder="Fill me" />
      <TextFields state="Filled" label="Heading" value="Something" />
      <TextFields state="Active" label="Heading" value="Something" />
      <TextFields state="Disabled" label="Heading" placeholder="Fill me" />
      <TextFields state="Error" label="Heading" value="Something" errorText="Error text" />
    </div>
  ),
};
