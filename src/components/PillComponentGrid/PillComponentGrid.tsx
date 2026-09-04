import React from 'react';
import './PillComponentGrid.css';

export interface VehicleSirenIconProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Line-art vehicle icon with sirens, light rays, and clock details
 * matching mdi:car-police in image_0.png
 */
export const VehicleSirenIcon: React.FC<VehicleSirenIconProps> = ({
  size = 18,
  color = 'currentColor',
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`vehicle-siren-icon ${className}`}
  >
    {/* Top Flashing Emergency Lights / Sirens rays */}
    <path d="M12 1.5v2.5M7.5 3l1.2 1.8M16.5 3l-1.2 1.8" strokeWidth="1.75" />
    {/* Siren Bar */}
    <rect x="9.5" y="4" width="5" height="2" rx="0.8" fill={color} stroke="none" />
    {/* Car Roof & Windshield */}
    <path d="M6 10l1.8-4.2h8.4L18 10" />
    {/* Car Body Frame */}
    <rect x="3.5" y="10" width="17" height="7.5" rx="2.5" />
    {/* Left and Right Headlights / Clock dials */}
    <circle cx="7" cy="13.75" r="1.3" fill={color} stroke="none" />
    <circle cx="17" cy="13.75" r="1.3" fill={color} stroke="none" />
    {/* Center Grille */}
    <line x1="10" y1="14" x2="14" y2="14" strokeWidth="1.5" />
    {/* Wheels / Bumper base */}
    <path d="M5.5 17.5v2.5M18.5 17.5v2.5" strokeWidth="2.2" />
  </svg>
);

export interface PillComponentProps {
  rowTheme: 'deep-purple' | 'light-lavender' | 'vibrant-green' | 'light-mint';
  colSize: 'col-1' | 'col-2' | 'col-3' | 'col-4';
  label?: string;
}

export const PillComponent: React.FC<PillComponentProps> = ({
  rowTheme,
  colSize,
  label = 'Text',
}) => {
  // Determine icon size based on column sizing progression
  const getIconSize = () => {
    switch (colSize) {
      case 'col-1':
        return 14;
      case 'col-2':
        return 16;
      case 'col-3':
        return 18;
      case 'col-4':
        return 24;
      default:
        return 16;
    }
  };

  const iconSize = getIconSize();

  return (
    <div className={`pill-btn pill-btn--${rowTheme} pill-btn--${colSize}`}>
      <VehicleSirenIcon size={iconSize} className="pill-btn__icon pill-btn__icon--left" />
      <span className="pill-btn__text">{label}</span>
      <VehicleSirenIcon size={iconSize} className="pill-btn__icon pill-btn__icon--right" />
    </div>
  );
};

export interface PillComponentGridProps {
  /** Optional title for preview header */
  title?: string;
}

/**
 * 4x4 Professional UI Component Grid based exactly on image_0.png
 */
export const PillComponentGrid: React.FC<PillComponentGridProps> = () => {
  const rows: Array<{
    theme: 'deep-purple' | 'light-lavender' | 'vibrant-green' | 'light-mint';
    name: string;
  }> = [
    { theme: 'deep-purple', name: 'Row 1 (Deep Purple)' },
    { theme: 'light-lavender', name: 'Row 2 (Light Lavender-White)' },
    { theme: 'vibrant-green', name: 'Row 3 (Vibrant Green)' },
    { theme: 'light-mint', name: 'Row 4 (Light Mint-Green)' },
  ];

  const cols: Array<'col-1' | 'col-2' | 'col-3' | 'col-4'> = [
    'col-1',
    'col-2',
    'col-3',
    'col-4',
  ];

  return (
    <div className="pill-grid-wrapper">
      <div className="pill-grid-container">
        {rows.map((row) => (
          <div key={row.theme} className="pill-grid-row">
            {cols.map((col) => (
              <PillComponent
                key={`${row.theme}-${col}`}
                rowTheme={row.theme}
                colSize={col}
                label="Text"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
