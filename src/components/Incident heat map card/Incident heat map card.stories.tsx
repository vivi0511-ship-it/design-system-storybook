import type { Meta, StoryObj } from '@storybook/react';
import { IncidentHeatMapCard } from './Incident heat map card';

const meta: Meta<typeof IncidentHeatMapCard> = {
  title: 'Figma Components/Incident heat map card',
  component: IncidentHeatMapCard,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Hover'],
      description: 'Preserved Figma State variant',
    },
    severity: {
      control: { type: 'select' },
      options: ['High', 'Medium', 'Low'],
      description: 'Severity risk level',
    },
    regionName: {
      control: { type: 'text' },
      description: 'Region name label',
    },
    incidentCount: {
      control: { type: 'number' },
      description: 'Count of active incidents',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specs: \`Incident heat map card\`

| Figma Layer Property | CSS Variable / Bound Value | Unbound / Hardcoded Fallback |
| :--- | :--- | :--- |
| **Card Fill** | \`var(--uedp-slate-800)\` (\`#1e293b\`) | — |
| **Border High Risk** | \`var(--uedp-rose-500)\` (\`#f43f5e\`) | — |
| **Border Radius** | \`var(--uedp-radii-xl)\` (\`16px\`) | — |
| **Figma Layer Name** | \`Incident heat map card\` | Preserved as-is |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IncidentHeatMapCard>;

export const HighRiskDefault: Story = {
  args: {
    state: 'Default',
    regionName: 'North-East Crop Sector',
    incidentCount: 7,
    severity: 'High',
    detailText: 'High soil humidity anomaly detected',
  },
};

export const MediumRiskHover: Story = {
  args: {
    state: 'Hover',
    regionName: 'South River Delta',
    incidentCount: 3,
    severity: 'Medium',
    detailText: 'Moderate temperature fluctuations recorded',
  },
};
