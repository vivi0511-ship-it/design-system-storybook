import React from 'react';
import './Buttons.css';

export interface ButtonsProps {
  /** Preserved Figma variant property: State */
  state?: 'Default' | 'Hover' | 'Press' | 'Disable';
  /** Preserved Figma variant property: Type */
  type?: 'Primary' | 'Secondary' | 'Tertiary';
  /** Preserved Figma variant property: Size */
  size?: 'Tiny' | 'Medium' | 'Large' | 'Big';
  /** Button text label */
  label?: string;
  /** Disabled interaction flag */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Buttons
 * Preserved Figma Layer Name: "Buttons"
 * 
 * High-fidelity React component matching exact Figma variants, states, and bound design tokens.
 */
export const Buttons: React.FC<ButtonsProps> = ({
  state = 'Default',
  type = 'Primary',
  size = 'Medium',
  label = 'Button Action',
  disabled = false,
  onClick,
}) => {
  const isDisableState = state === 'Disable' || disabled;
  
  const classNames = [
    'figma-btn',
    `figma-btn--${type.toLowerCase()}`,
    `figma-btn--${size.toLowerCase()}`,
    `figma-btn--state-${state.toLowerCase()}`,
    isDisableState ? 'figma-btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={isDisableState}
      onClick={onClick}
      type="button"
    >
      <span>{label}</span>
    </button>
  );
};
