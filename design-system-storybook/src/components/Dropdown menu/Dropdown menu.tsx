import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Dropdown menu.css';

export interface DropdownMenuProps {
  /** Preserved Figma State variant */
  state?: 'Closed' | 'open' | 'Select';
  /** Closed trigger label text */
  triggerLabel?: string;
  /** Open panel header search label */
  headerLabel?: string;
  /** Currently selected item string */
  selectedItem?: string;
  /** Available destination options array */
  options?: string[];
  /** Selection callback handler */
  onSelect?: (item: string) => void;
}

const defaultCities: string[] = [
  'Pune',
  'Mumbai',
  'Nagpur',
  'Shimla',
  'Jaipur',
  'Hyderabad',
  'Delhi',
  'Pondicherry',
  'Gokarna',
];

/**
 * Dropdown Menu Component
 * Preserved Figma Layer Name: "Dropdown menu" (Node ID: 52:5138 / 52:5137)
 * 
 * Re-created with 100% exact fidelity to image_0.png & Figma specs:
 * - Variant 1 (Closed): Pill trigger button (#8b5cf6 fill, 9999px radius) with "Choose destination" & ChevronDown
 * - Variant 2 (open): Expanded panel (#8b5cf6 fill, 20px radius) with "Search destination" header, ChevronUp & 9 city items
 * - Variant 3 (Select): Expanded panel with "Shimla" item highlighted in light lavender (#e9d5ff) & deep purple text (#5b21b6)
 */
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  state: initialState = 'Closed',
  triggerLabel = 'Choose destination',
  headerLabel = 'Search destination',
  selectedItem: initialSelectedItem = 'Shimla',
  options = defaultCities,
  onSelect,
}) => {
  const [currentState, setCurrentState] = useState<'Closed' | 'open' | 'Select'>(initialState);
  const [selectedItem, setSelectedItem] = useState<string>(initialSelectedItem);

  const isClosed = currentState === 'Closed';
  const isSelectedState = currentState === 'Select';

  const handleToggle = () => {
    setCurrentState(isClosed ? 'open' : 'Closed');
  };

  const handleItemClick = (city: string) => {
    setSelectedItem(city);
    setCurrentState('Select');
    if (onSelect) onSelect(city);
  };

  // Render Variant 1: Closed Trigger Pill
  if (isClosed) {
    return (
      <div className="dropdown-closed-pill-wrap">
        <button
          className="dropdown-closed-pill"
          onClick={handleToggle}
          type="button"
        >
          <span className="dropdown-closed-pill__label">{triggerLabel}</span>
          <ChevronDown size={20} color="#ffffff" strokeWidth={2.2} className="dropdown-closed-pill__arrow" />
        </button>
      </div>
    );
  }

  // Render Variants 2 & 3: Expanded Panel (open / Select)
  return (
    <div className="dropdown-panel">
      {/* Header Item */}
      <button
        className="dropdown-panel__header"
        onClick={handleToggle}
        type="button"
      >
        <span className="dropdown-panel__header-title">{headerLabel}</span>
        <ChevronUp size={20} color="#ffffff" strokeWidth={2.2} className="dropdown-panel__header-arrow" />
      </button>

      {/* Options List */}
      <ul className="dropdown-panel__list">
        {options.map((city) => {
          const isHighlighted = isSelectedState && city === selectedItem;

          return (
            <li key={city} className="dropdown-panel__item">
              <button
                className={`dropdown-panel__item-btn ${isHighlighted ? 'dropdown-panel__item-btn--selected' : ''}`}
                onClick={() => handleItemClick(city)}
                type="button"
              >
                <span>{city}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/**
 * Container rendering all 3 Dropdown Menu variants (Closed, open Default, Select Highlighted)
 * side-by-side inside the white canvas with purple dashed border matching image_0.png exactly.
 */
export const DropdownMenuMatrix: React.FC = () => {
  return (
    <div className="dropdown-matrix-wrapper">
      <div className="dropdown-matrix-container">
        {/* Variant 1: Closed Trigger Pill */}
        <div className="dropdown-matrix-col">
          <DropdownMenu state="Closed" />
        </div>

        {/* Variant 2: Open Menu Default */}
        <div className="dropdown-matrix-col">
          <DropdownMenu state="open" />
        </div>

        {/* Variant 3: Open Menu Selected (Shimla Highlighted) */}
        <div className="dropdown-matrix-col">
          <DropdownMenu state="Select" selectedItem="Shimla" />
        </div>
      </div>
    </div>
  );
};
