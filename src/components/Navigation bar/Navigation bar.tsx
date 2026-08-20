import React from 'react';
import { Home, Navigation, Users, HelpCircle } from 'lucide-react';
import './Navigation bar.css';

export interface NavigationBarProps {
  /** Preserved Figma State variant */
  state?: 'Home' | 'Travel' | 'Community' | 'Help' | 'Inactive';
  /** Navigation item click callback */
  onSelectTab?: (tab: string) => void;
}

/**
 * Navigation bar
 * Preserved Figma Layer Name: "Navigation bar"
 * 
 * Mobile/desktop bottom/top navigation bar component with tab highlight state.
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({
  state = 'Home',
  onSelectTab,
}) => {
  const tabs = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Travel', label: 'Travel', icon: Navigation },
    { id: 'Community', label: 'Community', icon: Users },
    { id: 'Help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <nav className="figma-navbar">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        const isActive = state === tab.id;
        return (
          <button
            className={`figma-navbar__item ${isActive ? 'figma-navbar__item--active' : ''}`}
            key={tab.id}
            onClick={() => onSelectTab && onSelectTab(tab.id)}
            type="button"
          >
            <IconComponent size={20} />
            <span className="figma-navbar__label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
