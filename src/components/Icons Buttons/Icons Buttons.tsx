import React from 'react';
import { Star, Settings, Heart, Bell, Share2 } from 'lucide-react';
import './Icons Buttons.css';

export interface IconsButtonsProps {
  /** Preserved Figma variant property: State */
  state?: 'Default' | 'Hover' | 'Selected' | 'Disabled';
  /** Preserved Figma variant property: Type */
  type?: 'Primary' | 'Secondary' | 'Tertiary';
  /** Preserved Figma variant property: Size */
  size?: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Giant';
  /** Icon name selection */
  icon?: 'star' | 'settings' | 'heart' | 'bell' | 'share';
  /** Disabled interaction state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Icons Buttons
 * Preserved Figma Layer Name: "Icons Buttons"
 * 
 * Icon button component bound to Figma token radii, sizes, and states.
 */
export const IconsButtons: React.FC<IconsButtonsProps> = ({
  state = 'Default',
  type = 'Primary',
  size = 'Medium',
  icon = 'star',
  disabled = false,
  onClick,
}) => {
  const isDisableState = state === 'Disabled' || disabled;

  const classNames = [
    'figma-icon-btn',
    `figma-icon-btn--${type.toLowerCase()}`,
    `figma-icon-btn--${size.toLowerCase()}`,
    `figma-icon-btn--state-${state.toLowerCase()}`,
    isDisableState ? 'figma-icon-btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const renderIcon = () => {
    const iconSizeMap = {
      tiny: 14,
      small: 16,
      medium: 20,
      large: 24,
      giant: 28,
    };
    const sizePx = iconSizeMap[size.toLowerCase() as keyof typeof iconSizeMap] || 20;

    switch (icon) {
      case 'settings':
        return <Settings size={sizePx} />;
      case 'heart':
        return <Heart size={sizePx} />;
      case 'bell':
        return <Bell size={sizePx} />;
      case 'share':
        return <Share2 size={sizePx} />;
      case 'star':
      default:
        return <Star size={sizePx} />;
    }
  };

  return (
    <button
      className={classNames}
      disabled={isDisableState}
      onClick={onClick}
      type="button"
    >
      {renderIcon()}
    </button>
  );
};
