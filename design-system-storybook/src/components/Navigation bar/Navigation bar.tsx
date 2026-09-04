import React from 'react';
import './Navigation bar.css';

export interface NavigationBarProps {
  /** Preserved Figma State variant property (Node ID: 51:199) */
  state?: 'Home' | 'Travel' | 'Community' | 'Help' | 'Inactive';
  /** Tab selection callback */
  onSelectTab?: (tab: string) => void;
  /** SOS button click callback */
  onSosClick?: () => void;
}

const HomeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
  </svg>
);

const TravelIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 3v2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-4V3H9zm2 2h2v2h-2V5zM6 9h12v7H6V9z" />
  </svg>
);

const CommunityIcon: React.FC = () => (
  <svg width="26" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const HelpIcon: React.FC = () => (
  <svg width="26" height="22" viewBox="0 0 26 22" fill="currentColor">
    <path d="M21.5 7.5L18.2 4.2C17.6 3.6 16.7 3.6 16.1 4.2L12 8.3L10.4 6.7C9.8 6.1 8.9 6.1 8.3 6.7L4.5 10.5C3.9 11.1 3.9 12 4.5 12.6L10 18.1C10.6 18.7 11.5 18.7 12.1 18.1L21.5 9.7C22.1 9.1 22.1 8.1 21.5 7.5ZM8.5 14.5L5.5 11.5L9 8L12 11L8.5 14.5ZM19.5 8.5L17 11L14 8L16.5 5.5L19.5 8.5Z" />
  </svg>
);

/**
 * Navigation bar
 * Preserved Figma Layer Name: "Navigation bar" (Node ID: 51:199)
 * 
 * Synchronized with exact Figma node 51:199 specifications:
 * - 428px width x 97px height light lavender background (#f3e8ff)
 * - 5 Navigation Items: Home, Travel, SOS (center red button), Community, Help
 * - Active pill highlight (#ffffff background, radius 50px) around icon
 * - Montserrat 12px weight 600 typography
 * - Inactive purple color (#c084fc) & Active dark purple color (#2e1065)
 * - Bright red center SOS circular button (#ff3838) with white SOS text
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({
  state = 'Home',
  onSelectTab,
  onSosClick,
}) => {
  const leftTabs = [
    { id: 'Home', label: 'Home', Icon: HomeIcon },
    { id: 'Travel', label: 'Travel', Icon: TravelIcon },
  ];

  const rightTabs = [
    { id: 'Community', label: 'Community', Icon: CommunityIcon },
    { id: 'Help', label: 'Help', Icon: HelpIcon },
  ];

  const renderTab = (tab: { id: string; label: string; Icon: React.FC }) => {
    const isActive = state === tab.id;
    const IconComponent = tab.Icon;

    return (
      <button
        className={`figma-navbar__item ${isActive ? 'figma-navbar__item--active' : ''}`}
        key={tab.id}
        onClick={() => onSelectTab && onSelectTab(tab.id)}
        type="button"
      >
        <div className="figma-navbar__icon-pill">
          <IconComponent />
        </div>
        <span className="figma-navbar__label">{tab.label}</span>
      </button>
    );
  };

  return (
    <nav className="figma-navbar" data-node-id="51:199">
      {leftTabs.map(renderTab)}
      <button
        className="figma-navbar__sos-btn"
        onClick={() => onSosClick ? onSosClick() : onSelectTab && onSelectTab('SOS')}
        type="button"
      >
        SOS
      </button>
      {rightTabs.map(renderTab)}
    </nav>
  );
};
