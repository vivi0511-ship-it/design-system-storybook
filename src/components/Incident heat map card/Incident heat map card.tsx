import React from 'react';
import { Flame, AlertTriangle, ShieldCheck } from 'lucide-react';
import './Incident heat map card.css';

export interface IncidentHeatMapCardProps {
  /** Preserved Figma State variant */
  state?: 'Default' | 'Hover';
  /** Region name */
  regionName?: string;
  /** Incident alert count */
  incidentCount?: number;
  /** Risk severity tier */
  severity?: 'High' | 'Medium' | 'Low';
  /** Subtext detail */
  detailText?: string;
  /** On click callback */
  onClick?: () => void;
}

/**
 * Incident heat map card
 * Preserved Figma Layer Name: "Incident heat map card"
 * 
 * Incident risk and heatmap metric card component bound to design tokens.
 */
export const IncidentHeatMapCard: React.FC<IncidentHeatMapCardProps> = ({
  state = 'Default',
  regionName = 'North-East Crop Sector',
  incidentCount = 7,
  severity = 'High',
  detailText = 'High soil humidity anomaly detected',
  onClick,
}) => {
  const isHigh = severity === 'High';
  const isMedium = severity === 'Medium';

  return (
    <div
      className={`figma-heatmap-card ${state === 'Hover' ? 'figma-heatmap-card--hover' : ''} figma-heatmap-card--${severity.toLowerCase()}`}
      onClick={onClick}
    >
      <div className="figma-heatmap-card__header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isHigh ? (
            <Flame size={20} color="var(--uedp-rose-500)" />
          ) : isMedium ? (
            <AlertTriangle size={20} color="var(--uedp-amber-500)" />
          ) : (
            <ShieldCheck size={20} color="var(--uedp-emerald-500)" />
          )}
          <span className="figma-heatmap-card__title">{regionName}</span>
        </div>
        <span className={`figma-heatmap-card__badge figma-heatmap-card__badge--${severity.toLowerCase()}`}>
          {severity} Risk
        </span>
      </div>

      <div className="figma-heatmap-card__stat">
        <span className="figma-heatmap-card__count">{incidentCount}</span>
        <span className="figma-heatmap-card__count-label">Active Incidents</span>
      </div>

      <p className="figma-heatmap-card__detail">{detailText}</p>
    </div>
  );
};
