import type { Meta, StoryObj } from '@storybook/react';
import { IconsButtons } from './Icons Buttons';

const meta: Meta<typeof IconsButtons> = {
  title: 'Figma Components/Icons Buttons',
  component: IconsButtons,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Hover', 'Selected', 'Disabled'],
      description: 'Preserved Figma State variant (Node ID: 41:6814)',
    },
    type: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Tertiary'],
      description: 'Preserved Figma Type variant',
    },
    size: {
      control: { type: 'select' },
      options: ['Tiny', 'Small', 'Medium', 'Large', 'Giant'],
      description: 'Preserved Figma Size variant',
    },
    caption: {
      control: { type: 'text' },
      description: 'Inner circle caption text',
    },
    label: {
      control: { type: 'text' },
      description: 'Sub-label text below circular button',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Icons Buttons\` (Node ID: \`41:6814\`)

| Figma Layer Property | CSS Value / Colors | Exact Figma Spec |
| :--- | :--- | :--- |
| **Figma Node ID** | \`41:6814\` | Preserved |
| **Circle Sizes** | \`Tiny\` (42px), \`Small\` (56px), \`Medium\` (70px), \`Large\` (84px), \`Giant\` (100px) | \`border-radius: 50%\` |
| **Primary Type** | Fill \`#2e1065\` | White/Light icon & caption |
| **Secondary Type** | Fill \`#c084fc\` | Dark purple icon & caption |
| **Tertiary Type** | Fill \`#ddd6fe\` | Dark purple icon & caption |
| **Inner Elements** | \`mdi:car-police\` icon + \`Caption\` text | Centered in circle |
| **Sub-Label** | Montserrat 12px weight 600 \`#2e1065\` | Below circular button |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconsButtons>;

export const DefaultPrimary: Story = {
  args: {
    state: 'Default',
    type: 'Primary',
    size: 'Medium',
    caption: 'Caption',
    label: 'Text',
  },
};

export const SecondarySelected: Story = {
  args: {
    state: 'Selected',
    type: 'Secondary',
    size: 'Large',
    caption: 'Caption',
    label: 'Text',
  },
};

export const TertiaryGiant: Story = {
  args: {
    state: 'Default',
    type: 'Tertiary',
    size: 'Giant',
    caption: 'Caption',
    label: 'Text',
  },
};

export const AllVariantsMatrix: Story = {
  render: () => {
    const types: Array<'Primary' | 'Secondary' | 'Tertiary'> = ['Primary', 'Secondary', 'Tertiary'];
    const states: Array<'Default' | 'Hover' | 'Selected' | 'Disabled'> = ['Default', 'Hover', 'Selected', 'Disabled'];
    const sizes: Array<'Tiny' | 'Small' | 'Medium' | 'Large' | 'Giant'> = ['Tiny', 'Small', 'Medium', 'Large', 'Giant'];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
          padding: '40px 28px',
          border: '2px dashed #8a38f5',
          borderRadius: '16px',
          backgroundColor: '#ffffff',
          width: 'fit-content',
        }}
      >
        {types.map((t) =>
          states.map((s) => (
            <div
              key={`${t}-${s}`}
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '32px',
              }}
            >
              {sizes.map((sz) => (
                <IconsButtons
                  key={`${t}-${s}-${sz}`}
                  type={t}
                  state={s}
                  size={sz}
                  caption="Caption"
                  label="Text"
                />
              ))}
            </div>
          ))
        )}
      </div>
    );
  },
};
