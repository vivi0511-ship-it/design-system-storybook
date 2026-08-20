import React from 'react';
import './Component 336.css';

export interface Component336Props {
  /** Preserved layer variant property */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Preserved layer size property */
  size?: 'sm' | 'md' | 'lg';
  /** Active toggle state */
  active?: boolean;
  /** Disabled interactive state */
  disabled?: boolean;
  /** Button label content */
  label?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Component 336
 * Preserved Figma Layer Name: "Component 336"
 * 
 * Interactive action badge and callout element synchronized with bound design tokens.
 */
export const Component336: React.FC<Component336Props> = ({
  variant = 'primary',
  size = 'md',
  active = false,
  disabled = false,
  label = 'Component 336 Action',
  onClick,
}) => {
  const classNames = [
    'component-336',
    `component-336--${variant}`,
    `component-336--${size}`,
    active ? 'component-336--active' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} disabled={disabled} onClick={onClick} type="button">
      <span>{label}</span>
    </button>
  );
};
