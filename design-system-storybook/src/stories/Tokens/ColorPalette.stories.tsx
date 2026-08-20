import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const colorFamilies = [
  {
    name: 'Slate Palette',
    description: 'Neutral background and typography tokens',
    swatches: [
      { name: '--uedp-slate-50', value: 'var(--uedp-slate-50)', variableId: 'VariableID:1:101', hex: '#f8fafc' },
      { name: '--uedp-slate-100', value: 'var(--uedp-slate-100)', variableId: 'VariableID:1:102', hex: '#f1f5f9' },
      { name: '--uedp-slate-200', value: 'var(--uedp-slate-200)', variableId: 'VariableID:1:103', hex: '#e2e8f0' },
      { name: '--uedp-slate-300', value: 'var(--uedp-slate-300)', variableId: 'VariableID:1:104', hex: '#cbd5e1' },
      { name: '--uedp-slate-400', value: 'var(--uedp-slate-400)', variableId: 'VariableID:1:105', hex: '#94a3b8' },
      { name: '--uedp-slate-500', value: 'var(--uedp-slate-500)', variableId: 'VariableID:1:106', hex: '#64748b' },
      { name: '--uedp-slate-600', value: 'var(--uedp-slate-600)', variableId: 'VariableID:1:107', hex: '#475569' },
      { name: '--uedp-slate-700', value: 'var(--uedp-slate-700)', variableId: 'VariableID:1:108', hex: '#334155' },
      { name: '--uedp-slate-800', value: 'var(--uedp-slate-800)', variableId: 'VariableID:1:109', hex: '#1e293b' },
      { name: '--uedp-slate-900', value: 'var(--uedp-slate-900)', variableId: 'VariableID:1:110', hex: '#0f172a' },
      { name: '--uedp-slate-950', value: 'var(--uedp-slate-950)', variableId: 'VariableID:1:111', hex: '#020617' },
    ],
  },
  {
    name: 'Primary Blue Palette',
    description: 'Brand actions, highlights, and active interactive states',
    swatches: [
      { name: '--uedp-primary-50', value: 'var(--uedp-primary-50)', variableId: 'VariableID:1:201', hex: '#eff6ff' },
      { name: '--uedp-primary-100', value: 'var(--uedp-primary-100)', variableId: 'VariableID:1:202', hex: '#dbeafe' },
      { name: '--uedp-primary-200', value: 'var(--uedp-primary-200)', variableId: 'VariableID:1:203', hex: '#bfdbfe' },
      { name: '--uedp-primary-300', value: 'var(--uedp-primary-300)', variableId: 'VariableID:1:204', hex: '#93c5fd' },
      { name: '--uedp-primary-400', value: 'var(--uedp-primary-400)', variableId: 'VariableID:1:205', hex: '#60a5fa' },
      { name: '--uedp-primary-500', value: 'var(--uedp-primary-500)', variableId: 'VariableID:1:206', hex: '#3b82f6' },
      { name: '--uedp-primary-600', value: 'var(--uedp-primary-600)', variableId: 'VariableID:1:207', hex: '#2563eb' },
      { name: '--uedp-primary-700', value: 'var(--uedp-primary-700)', variableId: 'VariableID:1:208', hex: '#1d4ed8' },
      { name: '--uedp-primary-800', value: 'var(--uedp-primary-800)', variableId: 'VariableID:1:209', hex: '#1e40af' },
      { name: '--uedp-primary-900', value: 'var(--uedp-primary-900)', variableId: 'VariableID:1:210', hex: '#1e3a8a' },
    ],
  },
  {
    name: 'Emerald Palette',
    description: 'Success states, badges, positive metrics',
    swatches: [
      { name: '--uedp-emerald-50', value: 'var(--uedp-emerald-50)', variableId: 'VariableID:1:301', hex: '#ecfdf5' },
      { name: '--uedp-emerald-100', value: 'var(--uedp-emerald-100)', variableId: 'VariableID:1:302', hex: '#d1fae5' },
      { name: '--uedp-emerald-500', value: 'var(--uedp-emerald-500)', variableId: 'VariableID:1:303', hex: '#10b981' },
      { name: '--uedp-emerald-600', value: 'var(--uedp-emerald-600)', variableId: 'VariableID:1:304', hex: '#059669' },
      { name: '--uedp-emerald-700', value: 'var(--uedp-emerald-700)', variableId: 'VariableID:1:305', hex: '#047857' },
    ],
  },
  {
    name: 'Amber Palette',
    description: 'Warnings, alerts, pending indicators',
    swatches: [
      { name: '--uedp-amber-50', value: 'var(--uedp-amber-50)', variableId: 'VariableID:1:401', hex: '#fffbeb' },
      { name: '--uedp-amber-100', value: 'var(--uedp-amber-100)', variableId: 'VariableID:1:402', hex: '#fef3c7' },
      { name: '--uedp-amber-500', value: 'var(--uedp-amber-500)', variableId: 'VariableID:1:403', hex: '#f59e0b' },
      { name: '--uedp-amber-600', value: 'var(--uedp-amber-600)', variableId: 'VariableID:1:404', hex: '#d97706' },
    ],
  },
  {
    name: 'Rose Palette',
    description: 'Errors, destructive actions, critical status',
    swatches: [
      { name: '--uedp-rose-50', value: 'var(--uedp-rose-50)', variableId: 'VariableID:1:501', hex: '#fff1f2' },
      { name: '--uedp-rose-100', value: 'var(--uedp-rose-100)', variableId: 'VariableID:1:502', hex: '#ffe4e6' },
      { name: '--uedp-rose-500', value: 'var(--uedp-rose-500)', variableId: 'VariableID:1:503', hex: '#f43f5e' },
      { name: '--uedp-rose-600', value: 'var(--uedp-rose-600)', variableId: 'VariableID:1:504', hex: '#e11d48' },
    ],
  },
];

const ColorPaletteComponent: React.FC = () => {
  return (
    <div style={{ padding: '24px', backgroundColor: 'var(--uedp-slate-900)', color: 'var(--uedp-slate-100)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ marginBottom: '32px', borderBottom: '1px solid var(--uedp-slate-700)', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--uedp-primary-400)' }}>
          Base Color Palette Tokens
        </h1>
        <p style={{ color: 'var(--uedp-slate-400)', margin: 0, fontSize: '14px' }}>
          Extracted directly from <code>base-palette-tokens.json</code> mapped via <code>com.figma.variableId</code>.
        </p>
      </header>

      {colorFamilies.map((family) => (
        <section key={family.name} style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--uedp-slate-100)', marginBottom: '4px' }}>
            {family.name}
          </h2>
          <p style={{ color: 'var(--uedp-slate-400)', fontSize: '13px', marginBottom: '16px' }}>
            {family.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {family.swatches.map((swatch) => (
              <div
                key={swatch.name}
                style={{
                  backgroundColor: 'var(--uedp-slate-800)',
                  borderRadius: 'var(--uedp-radii-md, 8px)',
                  border: '1px solid var(--uedp-slate-700)',
                  overflow: 'hidden',
                  boxShadow: 'var(--uedp-shadows-sm)',
                }}
              >
                <div
                  style={{
                    height: '80px',
                    backgroundColor: swatch.value,
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'monospace', color: 'var(--uedp-slate-100)' }}>
                    {swatch.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--uedp-primary-400)', marginTop: '4px', fontFamily: 'monospace' }}>
                    {swatch.hex}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--uedp-slate-400)', marginTop: '6px' }}>
                    ID: <code>{swatch.variableId}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorPaletteComponent> = {
  title: 'Design Tokens/Color Palette',
  component: ColorPaletteComponent,
  parameters: {
    docs: {
      description: {
        component: `
### Base Color Palette Swatch Gallery

This gallery displays all color token families declared in \`base-palette-tokens.json\`.
Each color is mapped to its exact Figma variable ID (\`com.figma.variableId\`) and exposed via CSS custom properties (\`--uedp-*\`).
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPaletteComponent>;

export const Default: Story = {
  render: () => <ColorPaletteComponent />,
};
