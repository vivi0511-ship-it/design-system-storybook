import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './Dropdown menu.css';

export interface DropdownOption {
  id: string;
  label: string;
}

export interface DropdownMenuProps {
  /** Preserved Figma State variant */
  state?: 'Select' | 'Closed' | 'open';
  /** Dropdown title label */
  label?: string;
  /** Available options */
  options?: DropdownOption[];
  /** Initially selected option */
  selectedId?: string;
  /** Option select callback */
  onSelect?: (option: DropdownOption) => void;
}

const defaultOptions: DropdownOption[] = [
  { id: 'opt1', label: 'Option 1: Regional Field Data' },
  { id: 'opt2', label: 'Option 2: High Yield Sensors' },
  { id: 'opt3', label: 'Option 3: Environmental Analysis' },
];

/**
 * Dropdown menu
 * Preserved Figma Layer Name: "Dropdown menu"
 * 
 * Interactive dropdown menu selector component bound to Figma tokens.
 */
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  state = 'Closed',
  label = 'Select Category',
  options = defaultOptions,
  selectedId: initialSelectedId,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(state === 'open');
  const [selectedId, setSelectedId] = useState(initialSelectedId || options[0]?.id);

  const selectedOption = options.find((o) => o.id === selectedId);

  const handleSelectOption = (opt: DropdownOption) => {
    setSelectedId(opt.id);
    setIsOpen(false);
    if (onSelect) onSelect(opt);
  };

  return (
    <div className="figma-dropdown">
      {label && <label className="figma-dropdown__label">{label}</label>}
      <button
        className={`figma-dropdown__trigger ${isOpen ? 'figma-dropdown__trigger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
        <ChevronDown className={`figma-dropdown__arrow ${isOpen ? 'figma-dropdown__arrow--open' : ''}`} size={18} />
      </button>

      {isOpen && (
        <div className="figma-dropdown__menu">
          {options.map((opt) => (
            <div
              className={`figma-dropdown__item ${opt.id === selectedId ? 'figma-dropdown__item--selected' : ''}`}
              key={opt.id}
              onClick={() => handleSelectOption(opt)}
            >
              <span>{opt.label}</span>
              {opt.id === selectedId && <Check size={16} color="var(--uedp-primary-400)" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
