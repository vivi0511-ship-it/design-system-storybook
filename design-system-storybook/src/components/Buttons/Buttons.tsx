import React from 'react';
import './Buttons.css';
import { VehicleSirenIcon } from '../PillComponentGrid/PillComponentGrid';

export interface ButtonsProps {
  /** Preserved Figma variant property: Type / Theme */
  type?: 'Primary' | 'Secondary' | 'Tertiary';
  /** Preserved Figma variant property: Size step */
  size?: 'Small' | 'Medium' | 'Large' | 'Giant';
  /** Preserved Figma variant property: State */
  state?: 'Default' | 'Hover' | 'Pressed' | 'Disabled';
  /** Button text label content */
  label?: string;
  /** Interaction disabled flag */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Buttons Component
 * Preserved Figma Layer Name: "Buttons"
 * Node ID: 41:6793 / 41:6426
 * 
 * Re-created with exact fidelity to image_0.png & Figma specs:
 * - 3 Component Sets: Primary (Deep Purple), Secondary (Light Lavender), Tertiary (Vibrant Green)
 * - 4 States: Default, Hover, Pressed, Disabled
 * - 4 Sizes: Small, Medium, Large, Giant
 * - Left & Right vehicle siren icons
 */
export const Buttons: React.FC<ButtonsProps> = ({
  type = 'Primary',
  size = 'Medium',
  state = 'Default',
  label = 'Text',
  disabled = false,
  onClick,
}) => {
  const isDisabledState = state === 'Disabled' || disabled;

  // Icon size per column size step
  const getIconSize = () => {
    switch (size) {
      case 'Small':
        return 14;
      case 'Medium':
        return 16;
      case 'Large':
        return 18;
      case 'Giant':
        return 24;
      default:
        return 16;
    }
  };

  const iconSize = getIconSize();

  const classNames = [
    'figma-btn-pill',
    `figma-btn-pill--${type.toLowerCase()}`,
    `figma-btn-pill--${size.toLowerCase()}`,
    `figma-btn-pill--state-${state.toLowerCase()}`,
    isDisabledState ? 'figma-btn-pill--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={isDisabledState}
      onClick={onClick}
      type="button"
    >
      <VehicleSirenIcon size={iconSize} className="figma-btn-pill__icon figma-btn-pill__icon--left" />
      <span className="figma-btn-pill__text">{label}</span>
      <VehicleSirenIcon size={iconSize} className="figma-btn-pill__icon figma-btn-pill__icon--right" />
    </button>
  );
};

export interface ButtonsSetProps {
  type: 'Primary' | 'Secondary' | 'Tertiary';
  title: string;
}

export const ButtonsSet: React.FC<ButtonsSetProps> = ({ type }) => {
  const states: Array<'Default' | 'Hover' | 'Pressed' | 'Disabled'> = [
    'Default',
    'Hover',
    'Pressed',
    'Disabled',
  ];
  const sizes: Array<'Small' | 'Medium' | 'Large' | 'Giant'> = [
    'Small',
    'Medium',
    'Large',
    'Giant',
  ];

  return (
    <div className="buttons-set-group">
      {states.map((state) => (
        <div key={state} className="buttons-set-row">
          {sizes.map((size) => (
            <Buttons key={`${type}-${state}-${size}`} type={type} state={state} size={size} label="Text" />
          ))}
        </div>
      ))}
    </div>
  );
};

/**
 * Renders all 3 distinct Component Sets (Primary, Secondary, Tertiary)
 * matching image_0.png exactly inside a subtle purple dashed container.
 */
export const Buttons3SetsMatrix: React.FC = () => {
  return (
    <div className="buttons-matrix-wrapper">
      <div className="buttons-matrix-container">
        {/* Set 1: Primary (Deep Purple) */}
        <ButtonsSet type="Primary" title="Set 1: Primary (Deep Purple)" />

        {/* Set 2: Secondary (Light Lavender) */}
        <ButtonsSet type="Secondary" title="Set 2: Secondary (Light Lavender)" />

        {/* Set 3: Tertiary (Vibrant Green) */}
        <ButtonsSet type="Tertiary" title="Set 3: Tertiary (Vibrant Green)" />
      </div>
    </div>
  );
};
