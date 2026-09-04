import React from 'react';
import { Star, Heart } from 'lucide-react';
import './Location card 1.css';

export interface LocationCard1Props {
  /** Preserved Figma State variant: 'default' or 'Press' */
  state?: 'default' | 'Press';
  /** Location title */
  locationName?: string;
  /** Safety score value */
  safetyScore?: string | number;
  /** Woman owned badge indicator */
  isWomanOwned?: boolean;
  /** Category description */
  category?: string;
  /** Operational status */
  status?: string;
  /** Closing time text */
  closingTime?: string;
  /** Distance display */
  distance?: string;
  /** Image URL for top thumbnail */
  imageUrl?: string;
  /** On click callback */
  onClick?: () => void;
}

/**
 * Location card 1
 * Preserved Figma Layer Name: "Location card 1"
 * Node ID: 51:4530
 * 
 * Re-created with 100% exact fidelity to image_0.png & Figma specs:
 * - Traditional Indian artwork top thumbnail (20px top border radius)
 * - Light lavender bottom card body (#e9d5ff / #ede4ff)
 * - Montserrat typography & exact colors (#362061 title, #60507e text, #16a34a open status)
 * - Yellow Star & Heart woman-owned badge
 * - State=default (no border stroke) and State=Press (1.5px purple border stroke #4c1d95)
 */
export const LocationCard1: React.FC<LocationCard1Props> = ({
  state = 'default',
  locationName = 'Mrug Crafts',
  safetyScore = '4.9',
  isWomanOwned = true,
  category = 'Craft center',
  status = 'Open',
  closingTime = 'Closes 22:30',
  distance = '8 km',
  imageUrl = 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80',
  onClick,
}) => {
  const isPressed = state === 'Press';

  return (
    <div
      className={`loc-card-1 ${isPressed ? 'loc-card-1--pressed' : 'loc-card-1--default'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="loc-card-1__media">
        <img src={imageUrl} alt={locationName} className="loc-card-1__image" />
      </div>
      <div className="loc-card-1__body">
        <h3 className="loc-card-1__title">{locationName}</h3>
        <div className="loc-card-1__safety-row">
          <span className="loc-card-1__safety-label">Safety score</span>
          <span className="loc-card-1__score">{safetyScore}</span>
          <Star className="loc-card-1__star-icon" fill="#facc15" color="#facc15" size={13} />
          {isWomanOwned && (
            <div className="loc-card-1__woman-owned">
              <Heart className="loc-card-1__heart-icon" fill="#facc15" color="#facc15" size={11} />
              <span className="loc-card-1__woman-owned-text">woman owned</span>
            </div>
          )}
        </div>
        <div className="loc-card-1__category">{category}</div>
        <div className="loc-card-1__footer-row">
          <div className="loc-card-1__status-wrap">
            <span className="loc-card-1__status">{status}</span>
            <span className="loc-card-1__dot"> . </span>
            <span className="loc-card-1__closing">{closingTime}</span>
          </div>
          <span className="loc-card-1__distance">{distance}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Matrix container rendering both Location Card 1 variants (default and Press)
 * side-by-side inside the subtle purple dashed border container matching image_0.png.
 */
export const LocationCard1Matrix: React.FC = () => {
  return (
    <div className="loc-card-1-matrix-wrapper">
      <div className="loc-card-1-matrix-container">
        <LocationCard1 state="default" />
        <LocationCard1 state="Press" />
      </div>
    </div>
  );
};
