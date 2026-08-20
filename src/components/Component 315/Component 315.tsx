import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import './Component 315.css';

export interface Component315Props {
  /** Metric card label */
  label?: string;
  /** Primary metric value display */
  value?: string;
  /** Trend percentage string e.g., '+12.5%' */
  trendValue?: string;
  /** Trend directional state */
  trendDirection?: 'up' | 'down' | 'neutral';
  /** Secondary comparison subtext */
  subtext?: string;
}

/**
 * Component 315
 * Preserved Figma Layer Name: "Component 315"
 * 
 * Metric & KPI summary card synchronized with bound tokens and fallback geometries.
 */
export const Component315: React.FC<Component315Props> = ({
  label = 'Total Yield Volume',
  value = '48,250 Tons',
  trendValue = '+14.2%',
  trendDirection = 'up',
  subtext = 'vs. previous period',
}) => {
  return (
    <div className="component-315">
      <div className="component-315__header">
        <span className="component-315__label">{label}</span>
        <div className="component-315__icon-wrap">
          <Activity size={18} />
        </div>
      </div>

      <div className="component-315__value">{value}</div>

      <div className="component-315__footer">
        {trendDirection === 'up' ? (
          <span className="component-315__trend--up" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={14} /> {trendValue}
          </span>
        ) : trendDirection === 'down' ? (
          <span className="component-315__trend--down" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingDown size={14} /> {trendValue}
          </span>
        ) : (
          <span style={{ color: 'var(--uedp-slate-400)' }}>{trendValue}</span>
        )}
        <span className="component-315__subtext">{subtext}</span>
      </div>
    </div>
  );
};
