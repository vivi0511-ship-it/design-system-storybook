import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const spacingScale = [
  { token: '--uedp-spacing-1', px: '4px', variableId: 'VariableID:2:102' },
  { token: '--uedp-spacing-2', px: '8px', variableId: 'VariableID:2:103' },
  { token: '--uedp-spacing-3', px: '12px', variableId: 'VariableID:2:104' },
  { token: '--uedp-spacing-4', px: '16px', variableId: 'VariableID:2:105' },
  { token: '--uedp-spacing-5', px: '20px', variableId: 'VariableID:2:106' },
  { token: '--uedp-spacing-6', px: '24px', variableId: 'VariableID:2:107' },
  { token: '--uedp-spacing-8', px: '32px', variableId: 'VariableID:2:108' },
  { token: '--uedp-spacing-10', px: '40px', variableId: 'VariableID:2:109' },
  { token: '--uedp-spacing-12', px: '48px', variableId: 'VariableID:2:110' },
];

const radiiScale = [
  { token: '--uedp-radii-sm', px: '4px', variableId: 'VariableID:2:202' },
  { token: '--uedp-radii-md', px: '8px', variableId: 'VariableID:2:203' },
  { token: '--uedp-radii-lg', px: '12px', variableId: 'VariableID:2:204' },
  { token: '--uedp-radii-xl', px: '16px', variableId: 'VariableID:2:205' },
  { token: '--uedp-radii-2xl', px: '24px', variableId: 'VariableID:2:206' },
  { token: '--uedp-radii-3xl', px: '32px', variableId: 'VariableID:2:207' },
  { token: '--uedp-radii-full', px: '9999px', variableId: 'VariableID:2:208' },
];

const geometryTokens = [
  { token: '--uedp-geometry-border-width-sm', value: '1px', category: 'Border Width' },
  { token: '--uedp-geometry-border-width-md', value: '2px', category: 'Border Width' },
  { token: '--uedp-geometry-icon-sm', value: '16px', category: 'Icon Geometry' },
  { token: '--uedp-geometry-icon-md', value: '20px', category: 'Icon Geometry' },
  { token: '--uedp-geometry-icon-lg', value: '24px', category: 'Icon Geometry' },
];

const FoundationalTokensComponent: React.FC = () => {
  return (
    <div style={{ padding: '24px', backgroundColor: 'var(--uedp-slate-900)', color: 'var(--uedp-slate-100)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ marginBottom: '32px', borderBottom: '1px solid var(--uedp-slate-700)', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--uedp-primary-400)' }}>
          Foundational Design Tokens
        </h1>
        <p style={{ color: 'var(--uedp-slate-400)', margin: 0, fontSize: '14px' }}>
          Extracted directly from <code>foundational-tokens.json</code> mapped via <code>com.figma.variableId</code>.
        </p>
      </header>

      {/* Spacing Scales */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Spacing Scales</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {spacingScale.map((item) => (
            <div key={item.token} style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--uedp-slate-800)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ width: item.px, height: '24px', backgroundColor: 'var(--uedp-primary-500)', borderRadius: '4px' }} />
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{item.token}</span>
                <span style={{ marginLeft: '12px', color: 'var(--uedp-slate-400)', fontSize: '12px' }}>{item.px}</span>
              </div>
              <code style={{ fontSize: '11px', color: 'var(--uedp-slate-400)' }}>{item.variableId}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radii */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Border Radii</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
          {radiiScale.map((item) => (
            <div key={item.token} style={{ backgroundColor: 'var(--uedp-slate-800)', padding: '16px', textAlign: 'center', borderRadius: '8px', border: '1px solid var(--uedp-slate-700)' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'var(--uedp-primary-600)',
                  margin: '0 auto 12px auto',
                  borderRadius: `var(${item.token})`,
                  border: '2px solid var(--uedp-primary-300)',
                }}
              />
              <div style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 600 }}>{item.token}</div>
              <div style={{ fontSize: '11px', color: 'var(--uedp-slate-400)', marginTop: '4px' }}>{item.px}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Geometry Tokens */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Geometry & Border Tokens</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {geometryTokens.map((item) => (
            <div key={item.token} style={{ backgroundColor: 'var(--uedp-slate-800)', padding: '16px', borderRadius: '8px', border: '1px solid var(--uedp-slate-700)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--uedp-primary-400)', fontWeight: 600, marginBottom: '6px' }}>
                {item.category}
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', fontWeight: 600, wordBreak: 'break-all' }}>
                {item.token}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--uedp-slate-400)', marginTop: '4px' }}>
                Value: {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensComponent> = {
  title: 'Design Tokens/Foundational Tokens',
  component: FoundationalTokensComponent,
  parameters: {
    docs: {
      description: {
        component: `
### Foundational Tokens Gallery

Visual documentation of spacing scales, border radii, geometry, and border token variables mapped via \`foundational-tokens.json\` and \`com.figma.variableId\`.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FoundationalTokensComponent>;

export const Default: Story = {
  render: () => <FoundationalTokensComponent />,
};
