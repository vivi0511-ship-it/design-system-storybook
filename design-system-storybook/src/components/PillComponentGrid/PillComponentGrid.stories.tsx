import type { Meta, StoryObj } from '@storybook/react';
import { PillComponentGrid, PillComponent } from './PillComponentGrid';

const meta: Meta<typeof PillComponentGrid> = {
  title: 'Figma Components/Pill Component Grid',
  component: PillComponentGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Exact Component Grid Spec: \`image_0.png\`

| Row Theme | Background / Fill | Typography & Icon Color | Vehicle Icon Details |
| :--- | :--- | :--- | :--- |
| **Row 1 (Deep Purple)** | \`#6b21a8\` (Deep Purple) | \`#ffffff\` (White) | Line-art vehicle siren icon |
| **Row 2 (Light Lavender-White)** | \`#ede9fe\` (Light Lavender) | \`#5b21b6\` (Deep Purple) | Line-art vehicle siren icon |
| **Row 3 (Vibrant Green)** | \`#10b981\` (Vibrant Green) | \`#4c1d95\` (Deep Purple) | Line-art vehicle siren icon |
| **Row 4 (Light Mint-Green)** | \`#d1fae5\` (Light Mint Green) | \`#059669\` (Vibrant Green) | Line-art vehicle siren icon |

### Sizing Progression (Columns 1 → 4):
- **Col 1 (Small)**: Compact width, 32px height, 14px icons.
- **Col 2 (Medium)**: Medium width, 38px height, 16px icons.
- **Col 3 (Large)**: Large width, 44px height, 18px icons.
- **Col 4 (Giant)**: Widest & boldest, 56px height, 24px icons, 700 bold weight text.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PillComponentGrid>;

export const CompleteMatrixGrid: Story = {
  render: () => <PillComponentGrid />,
};

export const SingleRowDeepPurple: Story = {
  render: () => (
    <div style={{ padding: '30px', background: '#16171b', display: 'flex', gap: '20px', borderRadius: '12px' }}>
      <PillComponent rowTheme="deep-purple" colSize="col-1" />
      <PillComponent rowTheme="deep-purple" colSize="col-2" />
      <PillComponent rowTheme="deep-purple" colSize="col-3" />
      <PillComponent rowTheme="deep-purple" colSize="col-4" />
    </div>
  ),
};

export const SingleRowVibrantGreen: Story = {
  render: () => (
    <div style={{ padding: '30px', background: '#16171b', display: 'flex', gap: '20px', borderRadius: '12px' }}>
      <PillComponent rowTheme="vibrant-green" colSize="col-1" />
      <PillComponent rowTheme="vibrant-green" colSize="col-2" />
      <PillComponent rowTheme="vibrant-green" colSize="col-3" />
      <PillComponent rowTheme="vibrant-green" colSize="col-4" />
    </div>
  ),
};
