import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import './Date filters.css';

export interface DateFiltersProps {
  /** Selected preset key */
  selectedPreset?: string;
  /** Custom start date */
  startDate?: string;
  /** Custom end date */
  endDate?: string;
  /** Callback when range changes */
  onChangeRange?: (preset: string, start: string, end: string) => void;
}

const presets = [
  { id: 'today', label: 'Today' },
  { id: '7d', label: 'Last 7 Days' },
  { id: '30d', label: 'Last 30 Days' },
  { id: 'ytd', label: 'Year to Date' },
  { id: 'custom', label: 'Custom Range' },
];

/**
 * Date filters
 * Preserved Figma Layer Name: "Date filters"
 * 
 * Interactive date range picker and temporal preset selector bound to design tokens.
 */
export const DateFilters: React.FC<DateFiltersProps> = ({
  selectedPreset: initialPreset = '7d',
  startDate: initialStart = '2026-08-01',
  endDate: initialEnd = '2026-08-12',
  onChangeRange,
}) => {
  const [activePreset, setActivePreset] = useState(initialPreset);
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);

  const handlePresetSelect = (id: string) => {
    setActivePreset(id);
    if (onChangeRange) onChangeRange(id, start, end);
  };

  return (
    <div className="figma-date-filters">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Calendar size={18} color="var(--uedp-primary-400)" />
        <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--uedp-slate-100)' }}>
          Date Range Filter
        </span>
      </div>

      <div className="figma-date-filters__presets">
        {presets.map((p) => (
          <button
            className={`figma-date-filters__btn ${
              activePreset === p.id ? 'figma-date-filters__btn--active' : ''
            }`}
            key={p.id}
            onClick={() => handlePresetSelect(p.id)}
            type="button"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="figma-date-filters__inputs">
        <div className="figma-date-filters__field">
          <label className="figma-date-filters__label">Start Date</label>
          <input
            className="figma-date-filters__input"
            onChange={(e) => {
              setStart(e.target.value);
              setActivePreset('custom');
              if (onChangeRange) onChangeRange('custom', e.target.value, end);
            }}
            type="date"
            value={start}
          />
        </div>

        <div className="figma-date-filters__field">
          <label className="figma-date-filters__label">End Date</label>
          <input
            className="figma-date-filters__input"
            onChange={(e) => {
              setEnd(e.target.value);
              setActivePreset('custom');
              if (onChangeRange) onChangeRange('custom', start, e.target.value);
            }}
            type="date"
            value={end}
          />
        </div>
      </div>
    </div>
  );
};
