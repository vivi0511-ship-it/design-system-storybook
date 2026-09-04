import React, { useState } from 'react';
import './Switch.css';

export interface SwitchProps {
  /** Preserved Figma variant property: Property 1 (Node ID: 42:7043) */
  property1?: 'On' | 'Off';
  /** Boolean toggle state */
  checked?: boolean;
  /** Label text content */
  label?: string;
  /** Disabled interaction state */
  disabled?: boolean;
  /** Toggle callback */
  onChange?: (checked: boolean) => void;
}

/**
 * Switch
 * Preserved Figma Layer Name: "Switch" (Node ID: 42:7043)
 * 
 * Synchronized with exact Figma node 42:7043 specifications:
 * - 36px x 18px track with 20px border radius
 * - 10px x 10px circular thumb
 * - Property 1 = On (light lavender track #f3e8ff, purple border #c084fc, purple thumb #c084fc on right)
 * - Property 1 = Off (medium purple track #d8b4fe, light lavender border #f3e8ff, light lavender thumb #f3e8ff on left)
 */
export const Switch: React.FC<SwitchProps> = ({
  property1,
  checked: controlledChecked,
  label,
  disabled = false,
  onChange,
}) => {
  const isInitiallyOn = property1 !== undefined ? property1 === 'On' : Boolean(controlledChecked);
  const [internalChecked, setInternalChecked] = useState(isInitiallyOn);

  const isChecked = controlledChecked !== undefined
    ? controlledChecked
    : property1 !== undefined
    ? property1 === 'On'
    : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const next = !isChecked;
    setInternalChecked(next);
    if (onChange) onChange(next);
  };

  return (
    <label className={`figma-switch ${disabled ? 'figma-switch--disabled' : ''}`}>
      <input
        checked={isChecked}
        disabled={disabled}
        onChange={handleToggle}
        type="checkbox"
      />
      <span
        className={`figma-switch__track ${
          isChecked ? 'figma-switch__track--on' : 'figma-switch__track--off'
        }`}
        data-node-id="42:7043"
      >
        <span className="figma-switch__thumb" />
      </span>
      {label && <span className="figma-switch__label">{label}</span>}
    </label>
  );
};
