import React, { useState } from 'react';
import './Search bar.css';

export interface SearchBarProps {
  /** Preserved Figma State variant property (Node ID: 53:2567) */
  state?: 'Default' | 'Pressed' | 'Active' | 'Filled';
  /** Search placeholder text */
  placeholder?: string;
  /** Input query value */
  value?: string;
  /** On search query change callback */
  onChange?: (val: string) => void;
  /** On microphone click callback */
  onMicClick?: () => void;
}

const MicIcon: React.FC = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor">
    <path d="M11 2C9.34 2 8 3.34 8 5V11C8 12.66 9.34 14 11 14C12.66 14 14 12.66 14 11V5C14 3.34 12.66 2 11 2ZM17.3 11C17.3 14.5 14.5 17.3 11 17.3C7.5 17.3 4.7 14.5 4.7 11H3C3 14.9 5.9 18.1 9.8 18.6V22H12.2V18.6C16.1 18.1 19 14.9 19 11H17.3Z" />
  </svg>
);

/**
 * Search bar
 * Preserved Figma Layer Name: "Search bar" (Node ID: 53:2567)
 * 
 * Synchronized with exact Figma node 53:2567 specifications:
 * - 326px max-width pill container with 50px border radius and 48px height
 * - Light lavender fill (#e9d5ff) and soft drop shadow
 * - Montserrat 20px weight 500 typography for input & placeholder
 * - Dark purple right microphone icon (#2e1065)
 * - Variants: Default, Pressed, Active (with blinking caret), Filled
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  state = 'Default',
  placeholder = 'Search city',
  value: propValue,
  onChange,
  onMicClick,
}) => {
  const getDefaultValue = () => {
    if (propValue !== undefined) return propValue;
    if (state === 'Active') return 'Symbio';
    if (state === 'Filled') return 'Symbiosis';
    return '';
  };

  const [val, setVal] = useState(getDefaultValue());
  const displayVal = propValue !== undefined ? propValue : val;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const containerClasses = [
    'figma-searchbar',
    `figma-searchbar--${state.toLowerCase()}`,
  ]
    .filter(Boolean)
    .join(' ');

  // Calculate cursor offset for Active state (~12px per char in 20px Montserrat)
  const cursorOffset = Math.min(displayVal.length * 12.5, 240);

  return (
    <div className={containerClasses} data-node-id="53:2567">
      <div className="figma-searchbar__input-wrap">
        <input
          className="figma-searchbar__input"
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={displayVal}
        />
        {state === 'Active' && (
          <span
            className="figma-searchbar__cursor"
            style={{ left: `${cursorOffset}px` }}
          />
        )}
      </div>
      <button
        className="figma-searchbar__mic-btn"
        onClick={onMicClick}
        type="button"
        aria-label="Voice Search"
      >
        <MicIcon />
      </button>
    </div>
  );
};
