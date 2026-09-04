import React from 'react';
import { X, Check } from 'lucide-react';
import './Arrival card.css';

export interface ArrivalCardProps {
  /** Main arrival headline */
  title?: string;
  /** Arrival subtext message */
  subtitle?: string;
  /** Destination facility / location name */
  destination?: string;
  /** Trip time metric string */
  tripTime?: string;
  /** Distance metric string */
  distance?: string;
  /** Safety score metric string */
  safetyScore?: string;
  /** Close button click handler */
  onClose?: () => void;
  /** Safety check-in button click handler */
  onSafetyCheckIn?: (type: 'safe' | 'help') => void;
  /** Route reaction click handler */
  onSelectReaction?: (reaction: 'Safe' | 'Unsafe' | 'Ok' | 'Report') => void;
}

/**
 * Arrival Card Component
 * Preserved Figma Layer Name: "Arrival card" (Node ID: 52:5981)
 * 
 * Re-created with 100% exact fidelity to image_0.png:
 * - Deep purple bottom-sheet modal (#551ba8)
 * - Yellow checkmark circle hero icon (#ffd000)
 * - Yellow headline "You've arrived!" & lavender subtext
 * - Dark location badge "Mrug Crafts" with yellow dot
 * - Tri-metric stats (Trip time, Distance, Safety score)
 * - Safety check-in card with "I am safe" and "Need help" pill buttons
 * - Route feedback section with 4 reaction buttons (Safe, Unsafe, Ok, Report)
 */
export const ArrivalCard: React.FC<ArrivalCardProps> = ({
  title = "You've arrived!",
  subtitle = "You reached your destination safe.",
  destination = "Mrug Crafts",
  tripTime = "5 min",
  distance = "700m",
  safetyScore = "3.9",
  onClose,
  onSafetyCheckIn,
  onSelectReaction,
}) => {
  return (
    <div className="figma-arrival-card-sheet">
      {/* Top Handle Bar */}
      <div className="figma-arrival-card__handle-wrap">
        <div className="figma-arrival-card__handle" />
      </div>

      {/* Top Right Close Button */}
      <button
        className="figma-arrival-card__close-btn"
        onClick={onClose}
        type="button"
        aria-label="Close card"
      >
        <X size={20} stroke="#2e1065" strokeWidth={2.5} />
      </button>

      {/* Hero Checkmark Icon */}
      <div className="figma-arrival-card__hero">
        <div className="figma-arrival-card__hero-circle">
          <Check size={36} stroke="#551ba8" strokeWidth={3.8} />
        </div>
        <h2 className="figma-arrival-card__title">{title}</h2>
        <p className="figma-arrival-card__subtitle">{subtitle}</p>
      </div>

      {/* Destination Pill Badge */}
      <div className="figma-arrival-card__badge-wrap">
        <div className="figma-arrival-card__badge">
          <span className="figma-arrival-card__badge-dot" />
          <span className="figma-arrival-card__badge-text">{destination}</span>
        </div>
      </div>

      {/* Tri-Metrics Section */}
      <div className="figma-arrival-card__metrics-row">
        <div className="figma-arrival-card__metric-col">
          <span className="figma-arrival-card__metric-val">{tripTime}</span>
          <span className="figma-arrival-card__metric-lbl">Trip time</span>
        </div>
        <div className="figma-arrival-card__metric-divider" />
        <div className="figma-arrival-card__metric-col">
          <span className="figma-arrival-card__metric-val">{distance}</span>
          <span className="figma-arrival-card__metric-lbl">Distance</span>
        </div>
        <div className="figma-arrival-card__metric-divider" />
        <div className="figma-arrival-card__metric-col">
          <span className="figma-arrival-card__metric-val">{safetyScore}</span>
          <span className="figma-arrival-card__metric-lbl">Safety score</span>
        </div>
      </div>

      {/* Safety Check-in Card Box */}
      <div className="figma-arrival-card__checkin-box">
        <div className="figma-arrival-card__checkin-header">
          <h4 className="figma-arrival-card__checkin-title">Safety check-in</h4>
          <p className="figma-arrival-card__checkin-sub">Let your saathis know you're ok</p>
        </div>
        <div className="figma-arrival-card__checkin-btns">
          <button
            className="figma-arrival-card__btn-safe"
            onClick={() => onSafetyCheckIn && onSafetyCheckIn('safe')}
            type="button"
          >
            I am safe
          </button>
          <button
            className="figma-arrival-card__btn-help"
            onClick={() => onSafetyCheckIn && onSafetyCheckIn('help')}
            type="button"
          >
            Need help
          </button>
        </div>
      </div>

      {/* Route Feedback Section */}
      <div className="figma-arrival-card__feedback-section">
        <div className="figma-arrival-card__feedback-lbl">How was your route?</div>
        <div className="figma-arrival-card__reactions-grid">
          <button
            className="figma-arrival-card__reaction-btn"
            onClick={() => onSelectReaction && onSelectReaction('Safe')}
            type="button"
          >
            <span className="figma-arrival-card__emoji">😁</span>
            <span className="figma-arrival-card__reaction-lbl">Safe</span>
          </button>
          <button
            className="figma-arrival-card__reaction-btn"
            onClick={() => onSelectReaction && onSelectReaction('Unsafe')}
            type="button"
          >
            <span className="figma-arrival-card__emoji">😟</span>
            <span className="figma-arrival-card__reaction-lbl">Unsafe</span>
          </button>
          <button
            className="figma-arrival-card__reaction-btn"
            onClick={() => onSelectReaction && onSelectReaction('Ok')}
            type="button"
          >
            <span className="figma-arrival-card__emoji">😐</span>
            <span className="figma-arrival-card__reaction-lbl">Ok</span>
          </button>
          <button
            className="figma-arrival-card__reaction-btn"
            onClick={() => onSelectReaction && onSelectReaction('Report')}
            type="button"
          >
            <span className="figma-arrival-card__emoji">🚨</span>
            <span className="figma-arrival-card__reaction-lbl">Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};
