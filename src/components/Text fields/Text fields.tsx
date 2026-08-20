import React, { useState } from 'react';
import './Text fields.css';

export interface TextFieldsProps {
  /** Preserved Figma State variant property (Node ID: 46:4414) */
  state?: 'Default' | 'Active' | 'Filled' | 'Pressed' | 'Disabled' | 'Error';
  /** Field label heading content */
  label?: string;
  /** Input placeholder or value text */
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
 * - Exact variant fills (#60a5fa, #3b82f6, #ddd6fe, #ffe4e6) and text colors (#dbeafe, #c4b5fd, #f43f5e)
 */
export const TextFields: React.FC<TextFieldsProps> = ({
  state = 'Default',
  label = 'Heading',
  placeholder = 'Fill me',
  value: initialValue = '',
  errorText = 'Error text',
  onChange,
}) => {
  const [val, setVal] = useState(initialValue);

  const isError = state === 'Error';
  const isDisabled = state === 'Disabled';

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
          value={val}
        />
        {state === 'Active' && <span className="figma-textfield__cursor" />}
      </div>
      {isError && errorText && <span className="figma-textfield__error-text">{errorText}</span>}
    </div>
  );
};
