import React, { useState } from 'react';
import { MapPin, Check } from 'lucide-react';
import './Zones.css';

export interface ZoneItem {
  id: string;
  name: string;
  area: string;
  status: 'active' | 'warning' | 'normal';
}

export interface ZonesProps {
  /** Section title */
  title?: string;
  /** Available zone items */
  zones?: ZoneItem[];
  /** Initially selected zone ID */
  selectedId?: string;
  /** Callback on zone selection */
  onSelectZone?: (zone: ZoneItem) => void;
}

const defaultZonesList: ZoneItem[] = [
  { id: 'z1', name: 'Zone North-A', area: '1,240 ha', status: 'active' },
  { id: 'z2', name: 'Zone East-B', area: '850 ha', status: 'normal' },
  { id: 'z3', name: 'Zone South-C', area: '2,100 ha', status: 'warning' },
  { id: 'z4', name: 'Zone West-D', area: '960 ha', status: 'normal' },
];

/**
 * Zones
 * Preserved Figma Layer Name: "Zones"
 * 
 * Regional sector selector and spatial zone filter panel bound to design tokens.
 */
export const Zones: React.FC<ZonesProps> = ({
  title = 'Geospatial Zones',
  zones = defaultZonesList,
  selectedId: initialSelectedId = 'z1',
  onSelectZone,
}) => {
  const [selectedId, setSelectedId] = useState(initialSelectedId);

  const handleSelect = (zone: ZoneItem) => {
    setSelectedId(zone.id);
    if (onSelectZone) onSelectZone(zone);
  };

  return (
    <div className="figma-zones">
      <div className="figma-zones__header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={18} color="var(--uedp-primary-400)" />
          <span style={{ fontWeight: 600, fontSize: '14px' }}>{title}</span>
        </div>
        <span style={{ fontSize: '12px', color: 'var(--uedp-slate-400)' }}>
          {zones.length} Zones Available
        </span>
      </div>

      <div className="figma-zones__grid">
        {zones.map((z, idx) => {
          const isSelected = selectedId === z.id;
          return (
            <div
              className={`figma-zones__card ${isSelected ? 'figma-zones__card--selected' : ''}`}
              key={z.id}
              onClick={() => handleSelect(z)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="figma-zones__badge">{idx + 1}</span>
                {isSelected && <Check size={14} color="var(--uedp-primary-400)" />}
              </div>
              <div className="figma-zones__name">{z.name}</div>
              <div className="figma-zones__meta">{z.area}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
