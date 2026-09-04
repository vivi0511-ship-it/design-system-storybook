import React, { useState } from 'react';
import './Text fields.css';

export interface TextFieldsProps {
  /** Preserved Figma State variant property (Node ID: 46:4414) */
  state?: 'Default' | 'Active' | 'Filled' | 'Pressed' | 'Disabled' | 'Error';
  /** Field label heading content */
  label?: string;
  /** Input placeholder text */
  placeholder?: string;
  /** Input value string */
  value?: string;
  /** Helper/Error subtext display */
  errorText?: string;
  /** Change callback */
  onChange?: (val: string) => void;
}

/**
 * Text fields
 * Preserved Figma Layer Name: "Text fields" (Node ID: 46:4414)
 * 
 * Synchronized with exact Figma node 46:4414 specifications:
 * - 326px max-width container, 10px vertical gap
 * - 25px rounded pill container shape (`border-radius: 25px`)
 * - 16px Inter 500 typography for label and input
 * - Exact purple/lavender variant fills (#e9d5ff, #d8b4fe, #ddd6fe, #ffe4e6) and text colors (#2e1065, #c4b5fd, #f43f5e)
 */
export const TextFields: React.FC<TextFieldsProps> = ({
  state = 'Default',
  label = 'Heading',
  placeholder = 'Fill me',
  value,
  errorText = 'Error text',
  onChange,
}) => {
  const isFilledState = state === 'Filled' || state === 'Active' || state === 'Error';
  const defaultVal = isFilledState ? (value !== undefined ? value : 'Something') : (value || '');
  const [val, setVal] = useState(defaultVal);

  const isError = state === 'Error';
  const isDisabled = state === 'Disabled';
  const displayVal = value !== undefined ? value : val;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const containerClasses = [
    'figma-textfield',
    `figma-textfield--${state.toLowerCase()}`,
  ]
    .filter(Boolean)
    .join(' ');

  const textLength = displayVal ? displayVal.length : 0;
  // Estimate caret offset based on 16px Inter font width (~9.5px per char) + 20px padding
  const cursorOffset = Math.min(20 + textLength * 9.5, 280);

  return (
    <div className={containerClasses} data-node-id="46:4414">
      {label && <label className="figma-textfield__label">{label}</label>}
      <div className="figma-textfield__input-wrap">
        <input
          className="figma-textfield__input"
          disabled={isDisabled}
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={displayVal}
        />
        {state === 'Active' && (
          <span
            className="figma-textfield__cursor"
            style={{ left: `${cursorOffset}px` }}
          />
        )}
      </div>
      {isError && errorText && <span className="figma-textfield__error-text">{errorText}</span>}
    </div>
  );
};
