import React from 'react';
import './Article thumbnail.css';

export interface HikerMapIllustrationProps {
  className?: string;
}

/**
 * Detailed SVG illustration matching image_0.png & Figma Purple girl illustration:
 * Hiker walking across a map with mountains, pine trees, and location pins.
 */
export const HikerMapIllustration: React.FC<HikerMapIllustrationProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 340 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`hiker-map-illustration ${className}`}
  >
    <defs>
      <linearGradient id="skyGrad" x1="170" y1="20" x2="170" y2="180" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffeee8" />
        <stop offset="100%" stopColor="#fcdbe1" />
      </linearGradient>
      <linearGradient id="mtnGrad1" x1="100" y1="80" x2="100" y2="180" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a5f3fc" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
      <linearGradient id="mtnGrad2" x1="220" y1="100" x2="220" y2="180" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="jacketGrad" x1="150" y1="90" x2="190" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
    </defs>

    {/* Background Soft Backdrop */}
    <ellipse cx="170" cy="115" rx="145" ry="75" fill="url(#skyGrad)" opacity="0.85" />

    {/* Folded Map Base Frame */}
    <path
      d="M50 140 L160 125 L290 138 L275 185 L160 175 L65 185 Z"
      fill="#ffffff"
      stroke="#1e1b4b"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Map Grid / Contour Lines */}
    <path d="M70 148 Q110 135 155 145 T255 142" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M85 165 Q140 152 185 162 T265 158" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Left Mountain Range */}
    <path d="M60 155 L105 85 L145 135 L170 110 L195 150 Z" fill="url(#mtnGrad1)" stroke="#1e1b4b" strokeWidth="2.2" strokeLinejoin="round" />
    {/* Snowcap Peak Left */}
    <path d="M105 85 L95 102 L103 100 L108 105 L116 98 Z" fill="#ffffff" stroke="#1e1b4b" strokeWidth="1.8" />

    {/* Right Mountain Backdrop */}
    <path d="M195 150 L240 100 L275 145 Z" fill="url(#mtnGrad2)" stroke="#1e1b4b" strokeWidth="2.2" strokeLinejoin="round" />

    {/* Left Location Pin (Bubble) */}
    <g transform="translate(75, 55)">
      <circle cx="16" cy="16" r="14" fill="#818cf8" stroke="#1e1b4b" strokeWidth="2" />
      <circle cx="16" cy="14" r="5" fill="#1e1b4b" />
      <path d="M16 30 L11 23 H21 Z" fill="#818cf8" stroke="#1e1b4b" strokeWidth="1.5" />
    </g>

    {/* Top Right Speech Location Pin */}
    <g transform="translate(180, 22)">
      <circle cx="15" cy="15" r="13" fill="#6366f1" stroke="#1e1b4b" strokeWidth="2" />
      <circle cx="15" cy="13" r="4.5" fill="#1e1b4b" />
      <path d="M15 28 L11 22 H19 Z" fill="#6366f1" fillOpacity="1" stroke="#1e1b4b" strokeWidth="1.5" />
    </g>

    {/* Far Right Location Pin */}
    <g transform="translate(235, 65)">
      <circle cx="14" cy="14" r="12" fill="#818cf8" stroke="#1e1b4b" strokeWidth="2" />
      <circle cx="14" cy="12" r="4" fill="#1e1b4b" />
      <path d="M14 26 L10 20 H18 Z" fill="#818cf8" stroke="#1e1b4b" strokeWidth="1.5" />
    </g>

    {/* Pine Trees (Dark Indigo Line Art) */}
    {/* Left trees */}
    <path d="M68 152 L73 138 L78 152 Z M71 146 L73 134 L75 146 Z" fill="#2e1065" stroke="#1e1b4b" strokeWidth="1.5" />
    <path d="M82 158 L87 144 L92 158 Z" fill="#2e1065" stroke="#1e1b4b" strokeWidth="1.5" />
    {/* Right trees */}
    <path d="M232 150 L237 132 L242 150 Z M235 142 L237 128 L239 142 Z" fill="#2e1065" stroke="#1e1b4b" strokeWidth="1.5" />
    <path d="M245 156 L250 140 L255 156 Z" fill="#2e1065" stroke="#1e1b4b" strokeWidth="1.5" />

    {/* Hiker Character */}
    {/* Back leg */}
    <path d="M165 125 L195 170 L210 178" stroke="#2e1065" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M165 125 L195 170 L210 178" stroke="#1e1b4b" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.15" />
    {/* Boot Back */}
    <path d="M202 173 L218 178 L214 184 L198 180 Z" fill="#93c5fd" stroke="#1e1b4b" strokeWidth="1.8" />

    {/* Front leg */}
    <path d="M152 125 L135 165 L120 180" stroke="#2e1065" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    {/* Boot Front */}
    <path d="M112 175 L128 180 L124 186 L108 181 Z" fill="#93c5fd" stroke="#1e1b4b" strokeWidth="1.8" />

    {/* Hiker Torso (Jacket) */}
    <rect x="140" y="78" width="35" height="48" rx="10" fill="url(#jacketGrad)" stroke="#1e1b4b" strokeWidth="2.2" />
    {/* Backpack Straps & Detail */}
    <path d="M148 78 V126 M165 78 V126" stroke="#bfdbfe" strokeWidth="3" />
    <rect x="146" y="94" width="22" height="6" rx="3" fill="#60a5fa" stroke="#1e1b4b" strokeWidth="1.2" />

    {/* Raised Waving Arm (Right) */}
    <path d="M172 88 L188 78 L194 65" stroke="#818cf8" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="195" cy="63" r="4.5" fill="#fbcfe8" stroke="#1e1b4b" strokeWidth="1.5" />

    {/* Left Arm */}
    <path d="M142 88 L132 102 L125 110" stroke="#818cf8" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="123" cy="112" r="4" fill="#fbcfe8" stroke="#1e1b4b" strokeWidth="1.5" />

    {/* Hiker Head & Hair */}
    {/* Long Dark Hair */}
    <path d="M142 55 Q135 70 140 85 Q152 90 148 70 Z" fill="#1e1b4b" />
    {/* Face Skin */}
    <circle cx="162" cy="58" r="10" fill="#fbcfe8" stroke="#1e1b4b" strokeWidth="1.8" />
    {/* Beanie Hat */}
    <path d="M152 56 C152 44 172 44 172 56 Z" fill="#4338ca" stroke="#1e1b4b" strokeWidth="2" />
    <rect x="150" y="54" width="24" height="5" rx="2.5" fill="#6366f1" stroke="#1e1b4b" strokeWidth="1.5" />
    {/* Facial Profile Detail */}
    <circle cx="165" cy="56" r="1" fill="#1e1b4b" />
    <path d="M162 62 Q165 64 167 62" stroke="#1e1b4b" strokeWidth="1.2" fill="none" />
  </svg>
);

export interface ArticleThumbnailProps {
  /** Variant state: 'Default' (flat top) or 'Press' (outlined card) */
  state?: 'Default' | 'Press';
  /** Card title text */
  title?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Article thumbnail
 * Preserved Figma Layer Name: "Article thumbnail"
 * Node ID: 52:4614
 * 
 * Re-created with exact fidelity to image_0.png & Figma specs:
 * - Hiker map vector illustration
 * - #2e1065 dark deep purple bottom banner with 20px rounded bottom corners
 * - White Montserrat 600 text "How to navigate safely"
 * - Outlined variant (#8b5cf6 border, 20px corner radius)
 */
export const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  state = 'Default',
  title = 'How to navigate safely',
  onClick,
}) => {
  const isOutlined = state === 'Press';

  return (
    <div
      className={`article-thumb-card ${isOutlined ? 'article-thumb-card--outlined' : 'article-thumb-card--default'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="article-thumb-card__illustration-wrap">
        <HikerMapIllustration />
      </div>
      <div className="article-thumb-card__banner">
        <span className="article-thumb-card__title">{title}</span>
      </div>
    </div>
  );
};

export interface ArticleThumbnailGridProps {
  /** Optional title header */
  header?: string;
}

/**
 * Container rendering both Article Thumbnail variants (Default and Press/Outlined)
 * inside the purple dashed container matching image_0.png exactly.
 */
export const ArticleThumbnailGrid: React.FC<ArticleThumbnailGridProps> = () => {
  return (
    <div className="article-thumb-grid-wrapper">
      <div className="article-thumb-grid-container">
        <ArticleThumbnail state="Default" title="How to navigate safely" />
        <ArticleThumbnail state="Press" title="How to navigate safely" />
      </div>
    </div>
  );
};
