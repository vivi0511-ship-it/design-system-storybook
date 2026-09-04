import React, { useState } from 'react';
import {
  User,
  Accessibility,
  ChevronDown,
  BatteryCharging,
  History,
  WifiOff,
  ShieldCheck,
  Settings,
  X,
  LucideIcon,
} from 'lucide-react';
import './Hamburger.css';

export interface HamburgerNavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  hasChevron?: boolean;
}

export interface HamburgerProps {
  /** Open/close drawer menu state */
  isOpen?: boolean;
  /** Close button callback */
  onClose?: () => void;
  /** Menu item selection callback */
  onSelectItem?: (itemId: string) => void;
}

/**
 * Hamburger Navigation Drawer Component
 * Preserved Figma Layer Name: "Hamburger" (Node ID: 52:5071)
 * 
 * Re-created with 100% exact fidelity to image_0.png & Figma specs:
 * - Dark deep purple side panel (#2e1065 / #280c61) with 32px rounded left corners
 * - Top-right close cross icon (✕)
 * - 7 navigation items with pure white line-art icons (#ffffff):
 *   1. Profile
 *   2. Accessibility (with trailing Chevron Down arrow)
 *   3. Low battery mode
 *   4. Timely check in
 *   5. Offline mode
 *   6. Volunteer
 *   7. Settings
 */
export const Hamburger: React.FC<HamburgerProps> = ({
  isOpen = true,
  onClose,
  onSelectItem,
}) => {
  const [activeItem, setActiveItem] = useState<string>('profile');

  const navItems: HamburgerNavItem[] = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'accessibility', label: 'Accessibility', icon: Accessibility, hasChevron: true },
    { id: 'low-battery', label: 'Low battery mode', icon: BatteryCharging },
    { id: 'timely-checkin', label: 'Timely check in', icon: History },
    { id: 'offline', label: 'Offline mode', icon: WifiOff },
    { id: 'volunteer', label: 'Volunteer', icon: ShieldCheck },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    if (onSelectItem) onSelectItem(id);
  };

  if (!isOpen) return null;

  return (
    <nav className="hamburger-drawer">
      {/* Top Header Row with Close Cross */}
      <div className="hamburger-drawer__header">
        <button
          className="hamburger-drawer__close-btn"
          onClick={onClose}
          type="button"
          aria-label="Close menu"
        >
          <X size={20} color="#ffffff" strokeWidth={2.2} />
        </button>
      </div>

      {/* Navigation Items List */}
      <ul className="hamburger-drawer__list">
        {navItems.map((item) => {
          const IconComp = item.icon;
          const isActive = activeItem === item.id;

          return (
            <li key={item.id} className="hamburger-drawer__item">
              <button
                className={`hamburger-drawer__btn ${isActive ? 'hamburger-drawer__btn--active' : ''}`}
                onClick={() => handleItemClick(item.id)}
                type="button"
              >
                <div className="hamburger-drawer__btn-left">
                  <IconComp size={24} color="#ffffff" className="hamburger-drawer__icon" />
                  <span className="hamburger-drawer__label">{item.label}</span>
                </div>
                {item.hasChevron && (
                  <ChevronDown size={20} color="#ffffff" className="hamburger-drawer__chevron" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

/**
 * Container rendering the full Hamburger Menu Drawer inside the subtle purple dashed border container
 * matching image_0.png exactly.
 */
export const HamburgerPreviewContainer: React.FC = () => {
  return (
    <div className="hamburger-preview-wrapper">
      <div className="hamburger-preview-container">
        <Hamburger isOpen={true} />
      </div>
    </div>
  );
};
