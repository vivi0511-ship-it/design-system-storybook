import React, { useState } from 'react';
import { Plus, Minus, Layers, MapPin, Compass } from 'lucide-react';
import './Map.css';

export interface MapMarker {
  id: string;
  xPercent: number;
  yPercent: number;
  title: string;
  type: 'farm' | 'zone' | 'sensor';
}

export interface MapProps {
  /** Map viewport title */
  title?: string;
  /** Current zoom level display */
  zoom?: number;
  /** List of map pin markers */
  markers?: MapMarker[];
  /** On marker click */
  onMarkerClick?: (marker: MapMarker) => void;
}

const defaultMarkers: MapMarker[] = [
  { id: 'm1', xPercent: 35, yPercent: 40, title: 'Field Zone Alpha', type: 'farm' },
  { id: 'm2', xPercent: 65, yPercent: 30, title: 'Soil Sensor Node 04', type: 'sensor' },
  { id: 'm3', xPercent: 50, yPercent: 65, title: 'Reservoir Station B', type: 'zone' },
];

/**
 * Map
 * Preserved Figma Layer Name: "Map"
 * 
 * Interactive geospatial map container component with layer controls and markers.
 */
export const Map: React.FC<MapProps> = ({
  title = 'Geospatial Regional View',
  zoom: initialZoom = 12,
  markers = defaultMarkers,
  onMarkerClick,
}) => {
  const [zoom, setZoom] = useState(initialZoom);
  const [activeMarker, setActiveMarker] = useState<string | null>('m1');

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 1, 20));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 1, 1));

  return (
    <div className="figma-map">
      <div className="figma-map__canvas">
        {/* Render Map Markers */}
        {markers.map((m) => {
          const isActive = activeMarker === m.id;
          const colorMap = {
            farm: 'var(--uedp-emerald-500, #10b981)',
            sensor: 'var(--uedp-primary-500, #3b82f6)',
            zone: 'var(--uedp-amber-500, #f59e0b)',
          };

          return (
            <div
              className="figma-map__pin"
              key={m.id}
              onClick={() => {
                setActiveMarker(m.id);
                if (onMarkerClick) onMarkerClick(m);
              }}
              style={{ left: `${m.xPercent}%`, top: `${m.yPercent}%` }}
            >
              <div
                style={{
                  backgroundColor: colorMap[m.type],
                  padding: '6px',
                  borderRadius: '9999px',
                  boxShadow: isActive ? '0 0 12px ' + colorMap[m.type] : 'var(--uedp-shadows-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={16} color="#ffffff" />
              </div>
              <div
                style={{
                  backgroundColor: 'var(--uedp-slate-900)',
                  border: '1px solid var(--uedp-slate-700)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  marginTop: '4px',
                }}
              >
                {m.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Map Controls */}
      <div className="figma-map__controls">
        <button className="figma-map__btn" onClick={handleZoomIn} title="Zoom In" type="button">
          <Plus size={16} />
        </button>
        <button className="figma-map__btn" onClick={handleZoomOut} title="Zoom Out" type="button">
          <Minus size={16} />
        </button>
        <button className="figma-map__btn" title="Toggle Layers" type="button">
          <Layers size={16} />
        </button>
      </div>

      {/* Map Overlay & Legend */}
      <div className="figma-map__overlay">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Compass size={16} color="var(--uedp-primary-400)" />
          <span style={{ fontWeight: 600, fontSize: '13px' }}>{title}</span>
          <span style={{ fontSize: '11px', color: 'var(--uedp-slate-400)', marginLeft: '8px' }}>
            Zoom Level: {zoom}x
          </span>
        </div>

        <div style={{ width: '1px', height: '18px', backgroundColor: 'var(--uedp-slate-700)' }} />

        <div className="figma-map__legend-item">
          <div className="figma-map__dot" style={{ backgroundColor: 'var(--uedp-emerald-500)' }} />
          <span>Farms</span>
        </div>
        <div className="figma-map__legend-item">
          <div className="figma-map__dot" style={{ backgroundColor: 'var(--uedp-primary-500)' }} />
          <span>Sensors</span>
        </div>
        <div className="figma-map__legend-item">
          <div className="figma-map__dot" style={{ backgroundColor: 'var(--uedp-amber-500)' }} />
          <span>Stations</span>
        </div>
      </div>
    </div>
  );
};
