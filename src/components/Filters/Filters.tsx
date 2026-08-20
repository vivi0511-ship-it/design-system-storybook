import React, { useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import './Filters.css';

export interface FilterChipOption {
  id: string;
  label: string;
  active?: boolean;
}

export interface FiltersProps {
  /** Filter panel header title */
  title?: string;
  /** Placeholder for search input */
  placeholder?: string;
  /** Filter chip options */
  chips?: FilterChipOption[];
  /** On search query change */
  onSearchChange?: (query: string) => void;
  /** On chip toggle */
  onChipToggle?: (chipId: string) => void;
  /** On clear filters */
  onClearAll?: () => void;
}

/**
 * Filters
 * Preserved Figma Layer Name: "Filters"
 * 
 * Interactive search bar and filter chip selector bound to design system tokens.
 */
export const Filters: React.FC<FiltersProps> = ({
  title = 'Filters',
  placeholder = 'Search items, categories, tags...',
  chips: initialChips = [
    { id: '1', label: 'All Items', active: true },
    { id: '2', label: 'Active', active: false },
    { id: '3', label: 'Pending Review', active: false },
    { id: '4', label: 'Archived', active: false },
  ],
  onSearchChange,
  onChipToggle,
  onClearAll,
}) => {
  const [query, setQuery] = useState('');
  const [chips, setChips] = useState<FilterChipOption[]>(initialChips);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  const handleToggleChip = (id: string) => {
    setChips((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
    );
    if (onChipToggle) onChipToggle(id);
  };

  const handleClear = () => {
    setQuery('');
    setChips((prev) => prev.map((c) => ({ ...c, active: false })));
    if (onClearAll) onClearAll();
  };

  return (
    <div className="figma-filters">
      <div className="figma-filters__header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <SlidersHorizontal size={18} color="var(--uedp-primary-400)" />
          <h3 className="figma-filters__title">{title}</h3>
        </div>
        <button className="figma-filters__clear-btn" onClick={handleClear} type="button">
          Reset All
        </button>
      </div>

      <div className="figma-filters__search">
        <Search size={16} color="var(--uedp-slate-400)" />
        <input
          className="figma-filters__input"
          onChange={handleSearch}
          placeholder={placeholder}
          type="text"
          value={query}
        />
        {query && (
          <X
            color="var(--uedp-slate-400)"
            onClick={() => {
              setQuery('');
              if (onSearchChange) onSearchChange('');
            }}
            size={16}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>

      <div className="figma-filters__chips">
        {chips.map((chip) => (
          <button
            className={`figma-filters__chip ${chip.active ? 'figma-filters__chip--active' : ''}`}
            key={chip.id}
            onClick={() => handleToggleChip(chip.id)}
            type="button"
          >
            <span>{chip.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
