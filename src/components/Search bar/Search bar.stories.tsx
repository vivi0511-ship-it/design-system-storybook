import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './Search bar';

const meta: Meta<typeof SearchBar> = {
  title: 'Figma Components/Search bar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Pressed', 'Active', 'Filled'],
      description: 'Preserved Figma State variant (Node ID: 53:2567)',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input placeholder text',
    },
    value: {
      control: { type: 'text' },
      description: 'Input query string',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Search bar\` (Node ID: \`53:2567\`)

| Figma Layer Property | CSS Value / Colors | Exact Figma Spec |
| :--- | :--- | :--- |
| **Figma Node ID** | \`53:2567\` | Preserved |
| **Container Width** | \`326px\` | Max-width \`326px\` |
| **Container Height** | \`48px\` | \`border-radius: 50px\` |
| **Background Fill** | \`#e9d5ff\` | Light lavender fill |
| **Input Typography** | \`Montserrat, 20px, 500\` | Weight \`500\` |
| **Placeholder Fill** | \`#c084fc\` | Light purple text |
| **Active Text Fill** | \`#2e1065\` | Dark purple text |
| **Microphone Icon** | Fill \`#2e1065\` | Right microphone button |
| **Pressed / Active Stroke**| \`1px solid #c084fc\` | Stroke color |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const DefaultState: Story = {
  args: {
    state: 'Default',
    placeholder: 'Search city',
  },
};

export const PressedState: Story = {
  args: {
    state: 'Pressed',
    placeholder: 'Search city',
  },
};

export const ActiveState: Story = {
  args: {
    state: 'Active',
    value: 'Symbio',
  },
};

export const FilledState: Story = {
  args: {
    state: 'Filled',
    value: 'Symbiosis',
  },
};

export const AllStatesPreview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '32px 24px',
        border: '2px dashed #8a38f5',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        maxWidth: '376px',
        boxSizing: 'border-box',
      }}
    >
      <SearchBar state="Default" placeholder="Search city" />
      <SearchBar state="Pressed" placeholder="Search city" />
      <SearchBar state="Active" value="Symbio" />
      <SearchBar state="Filled" value="Symbiosis" />
    </div>
  ),
};
