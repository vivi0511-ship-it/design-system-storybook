import React from 'react';
import { MapPin, Navigation, Star } from 'lucide-react';
import './Location card 1.css';

export interface LocationCard1Props {
  /** Preserved Figma State variant */
  state?: 'default' | 'Press';
  /** Location title */
  locationName?: string;
  /** Distance text */
  distance?: string;
  /** Rating score */
  rating?: number;
  /** Image URL */
  imageUrl?: string;
  /** On navigate click */
  onNavigate?: () => void;
}

/**
 * Location card 1
 * Preserved Figma Layer Name: "Location card 1"
 * 
 * Geographic point of interest card matching Figma specs and design tokens.
 */
export const LocationCard1: React.FC<LocationCard1Props> = ({
  state = 'default',
  locationName = 'Valley AgStation North',
  distance = '2.4 km away',
  rating = 4.8,
  imageUrl = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60',
  onNavigate,
}) => {
  return (
    <div className={`figma-loc-card ${state === 'Press' ? 'figma-loc-card--pressed' : ''}`}>
      <div className="figma-loc-card__media">
        <img alt={locationName} src={imageUrl} />
        <div className="figma-loc-card__rating">
          <Star fill="#f59e0b" color="#f59e0b" size={12} />
          <span>{rating}</span>
        </div>
      </div>
      <div className="figma-loc-card__details">
        <h4 className="figma-loc-card__name">{locationName}</h4>
        <div className="figma-loc-card__distance">
          <MapPin size={14} color="var(--uedp-primary-400)" />
          <span>{distance}</span>
        </div>
        <button className="figma-loc-card__action-btn" onClick={onNavigate} type="button">
          <Navigation size={14} />
          <span>Navigate</span>
        </button>
      </div>
    </div>
  );
};
