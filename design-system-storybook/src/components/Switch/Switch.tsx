import React, { useState } from 'react';
import './Switch.css';

export interface SwitchProps {
  /** Preserved Figma variant property: Property 1 */
  property1?: 'On' | 'Off';
  /** Boolean toggle state */
  checked?: boolean;
  /** Label tag */
  label?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Toggle handler */
  onChange?: (checked: boolean) => void;
}

/**
 * Switch
 * Preserved Figma Layer Name: "Switch" (Node ID: 42:7043)
 * 
 * Exact 36px x 18px toggle switch synchronized with Figma node 42:7043 variant properties,
 * padding dimensions (3px top, 4px/20px horizontal), 10px thumb geometry, and bound variables.
 */
export const Switch: React.FC<SwitchProps> = ({
  property1,
  checked,
  label = 'Enable Feature',
  disabled = false,
  onChange,
}) => {
  const isInitiallyOn = property1 ? property1 === 'On' : Boolean(checked);
  const [isChecked, setIsChecked] = useState(isInitiallyOn);

  const activeState = property1 !== undefined ? (isChecked ? 'On' : 'Off') : isChecked;

  const handleToggle = () => {
    if (disabled) return;
    const nextState = !isChecked;
    setIsChecked(nextState);
    if (onChange) onChange(nextState);
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
