import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Hamburger.css';

export interface HamburgerProps {
  /** Open/close menu state */
  isOpen?: boolean;
  /** Click callback */
  onToggle?: (open: boolean) => void;
}

/**
 * Hamburger
 * Preserved Figma Layer Name: "Hamburger"
 * 
 * Interactive menu icon toggle button bound to design system tokens.
 */
export const Hamburger: React.FC<HamburgerProps> = ({
  isOpen: initialOpen = false,
  onToggle,
}) => {
  const [open, setOpen] = useState(initialOpen);

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    if (onToggle) onToggle(next);
  };

  return (
    <button
      className={`figma-hamburger ${open ? 'figma-hamburger--open' : ''}`}
      onClick={handleToggle}
      type="button"
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};
