import React from 'react';
import './Icons Buttons.css';

export interface IconsButtonsProps {
  /** Preserved Figma State variant */
  state?: 'Default' | 'Hover' | 'Selected' | 'Disabled';
  /** Preserved Figma Type variant */
  type?: 'Primary' | 'Secondary' | 'Tertiary';
  /** Preserved Figma Size variant */
  size?: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Giant';
  /** Icon selection */
  icon?: 'car-police' | 'star' | 'settings' | 'heart' | 'bell';
  /** Inner caption text */
  caption?: string;
  /** Sub-label text below button */
  label?: string;
  /** Show inner caption */
  showCaption?: boolean;
  /** Show sub-label text */
  showLabel?: boolean;
  /** Disabled interaction state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

const PoliceCarIcon: React.FC<{ sizePx?: number }> = ({ sizePx = 28 }) => (
  <svg width={sizePx} height={sizePx * 0.8} viewBox="0 0 28 22" fill="currentColor">
    <path d="M22 6h-3.2l-1.4-2.8C17 2.4 16.2 2 15.3 2H12.7C11.8 2 11 2.4 10.6 3.2L9.2 6H6c-1.7 0-3 1.3-3 3v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h14v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V9c0-1.7-1.3-3-3-3zm-10.7-2h5.4l1 2H10.3l1-2zM7 13c-.8 0-1.5-.7-1.5-1.5S6.2 10 7 10s1.5.7 1.5 1.5S7.8 13 7 13zm14 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
  </svg>
);

const StarIcon: React.FC<{ sizePx?: number }> = ({ sizePx = 24 }) => (
  <svg width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/**
 * Icons Buttons
 * Preserved Figma Layer Name: "Icons Buttons" (Node ID: 41:6814)
 * 
 * Synchronized with exact Figma node 41:6814 specifications:
 * - 5 sizes: Tiny (42px), Small (56px), Medium (70px), Large (84px), Giant (100px)
 * - 3 types: Primary (#2e1065), Secondary (#c084fc), Tertiary (#ddd6fe)
 * - 4 states: Default, Hover, Selected, Disabled
 * - Inner icon (mdi:car-police default) & "Caption" text inside circular button
 * - Centered "Text" sub-label below circular button
 */
export const IconsButtons: React.FC<IconsButtonsProps> = ({
  state = 'Default',
  type = 'Primary',
  size = 'Medium',
  icon = 'car-police',
  caption = 'Caption',
  label = 'Text',
  showCaption = true,
  showLabel = true,
  disabled = false,
  onClick,
}) => {
  const isDisableState = state === 'Disabled' || disabled;

  const iconSizes: Record<string, number> = {
    tiny: 16,
    small: 22,
    medium: 28,
    large: 34,
    giant: 42,
  };
  const sizePx = iconSizes[size.toLowerCase()] || 28;

  const buttonClasses = [
    'figma-icon-btn',
    `figma-icon-btn--${type.toLowerCase()}`,
    `figma-icon-btn--${size.toLowerCase()}`,
    state !== 'Default' ? `figma-icon-btn--${state.toLowerCase()}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const renderIcon = () => {
    switch (icon) {
      case 'star':
        return <StarIcon sizePx={sizePx} />;
      case 'car-police':
      default:
        return <PoliceCarIcon sizePx={sizePx} />;
    }
  };

  return (
    <div className="figma-icon-btn-wrapper" data-node-id="41:6814">
      <button
        className={buttonClasses}
        disabled={isDisableState}
        onClick={onClick}
        type="button"
      >
        {renderIcon()}
        {showCaption && caption && <span className="figma-icon-btn__caption">{caption}</span>}
      </button>
      {showLabel && label && <span className="figma-icon-btn__label">{label}</span>}
    </div>
  );
};
