import React from 'react';
import { CheckCircle, Clock, Navigation, ShieldCheck } from 'lucide-react';
import './Arrival card.css';

export interface ArrivalCardProps {
  /** Cargo/Shipment title */
  title?: string;
  /** Destination facility */
  destination?: string;
  /** Trip duration */
  tripTime?: string;
  /** Distance */
  distance?: string;
  /** Safety score */
  safetyScore?: string;
  /** Callback for safety reaction */
  onSelectReaction?: (reaction: string) => void;
}

/**
 * Arrival card
 * Preserved Figma Layer Name: "Arrival card" (Node ID: 52:5981)
 * 
 * Synchronized with exact Figma colors (#5b21b6 background, #eab308 title, #a78bfa subtext, #3e2a64 card fill).
 */
export const ArrivalCard: React.FC<ArrivalCardProps> = ({
  title = "You've arrived!",
  destination = 'Mrug Crafts',
  tripTime = '5 min',
  distance = '700m',
  safetyScore = '3.9',
  onSelectReaction,
}) => {
  return (
    <div className="figma-arrival-card">
      <div className="figma-arrival-card__header">
        <div>
          <h3 className="figma-arrival-card__title">{title}</h3>
          <div className="figma-arrival-card__subtitle">You reached your destination safe.</div>
        </div>
        <CheckCircle size={24} color="#eab308" />
      </div>

      <div className="figma-arrival-card__dest-box">
        <span>{destination}</span>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }} />
      </div>

      <div className="figma-arrival-card__metrics">
        <div className="figma-arrival-card__metric-item">
          <span className="figma-arrival-card__metric-label">Trip time</span>
          <span className="figma-arrival-card__metric-val">{tripTime}</span>
        </div>
        <div className="figma-arrival-card__divider" />
        <div className="figma-arrival-card__metric-item">
          <span className="figma-arrival-card__metric-label">Distance</span>
          <span className="figma-arrival-card__metric-val">{distance}</span>
        </div>
        <div className="figma-arrival-card__divider" />
        <div className="figma-arrival-card__metric-item">
          <span className="figma-arrival-card__metric-label">Safety score</span>
          <span className="figma-arrival-card__metric-val">{safetyScore}</span>
        </div>
      </div>

      <div className="figma-arrival-card__footer-title">How was your route?</div>

      <div className="figma-arrival-card__safety-btns">
        <button
          className="figma-arrival-card__safety-btn"
          onClick={() => onSelectReaction && onSelectReaction('Safe')}
          type="button"
        >
          <span>😁</span>
          <span>Safe</span>
        </button>
        <button
          className="figma-arrival-card__safety-btn"
          onClick={() => onSelectReaction && onSelectReaction('Ok')}
          type="button"
        >
          <span>😐</span>
          <span>Ok</span>
        </button>
        <button
          className="figma-arrival-card__safety-btn"
          onClick={() => onSelectReaction && onSelectReaction('Unsafe')}
          type="button"
        >
          <span>😟</span>
          <span>Unsafe</span>
        </button>
        <button
          className="figma-arrival-card__safety-btn"
          onClick={() => onSelectReaction && onSelectReaction('Report')}
          type="button"
        >
          <span>🚨</span>
          <span>Report</span>
        </button>
      </div>
    </div>
  );
};
