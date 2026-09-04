import React from 'react';
import { MapPin, Calendar, X } from 'lucide-react';
import './Incident heat map card.css';

export interface IncidentHeatMapCardProps {
  /** Preserved Figma State variant */
  state?: 'Default' | 'Hover';
  /** Incident title / heading */
  heading?: string;
  /** Harassment / incident categories list string */
  categoriesList?: string;
  /** Incident location address */
  location?: string;
  /** Incident date and time range */
  dateTime?: string;
  /** View more link button text */
  viewMoreText?: string;
  /** Close cross button click handler */
  onClose?: () => void;
  /** View more click handler */
  onViewMore?: () => void;
}

/**
 * Incident Heat Map Card Component
 * Preserved Figma Layer Name: "Incident heat map card" (Node ID: 42:7004)
 * 
 * Re-created with 100% exact fidelity to image_0.png & Figma specs:
 * - Variant 1 (Default): Pure White card fill (#ffffff) with rounded corners (24px)
 * - Variant 2 (Hover): Light Lavender-White card fill (#f8f5fe) with rounded corners (24px)
 * - Heading "Domestic Violence" & top-right close cross (✕)
 * - Categories list "Physical assault | Ogling/Facial Expressions/Staring | Taking photos without permission"
 * - Location row with purple MapPin icon + "Somalwada, Nagpur"
 * - Date & Time row with purple Calendar icon + "20 June 2019, 6:00 pm - 12:00 am"
 * - Vibrant purple "View more" action link
 */
export const IncidentHeatMapCard: React.FC<IncidentHeatMapCardProps> = ({
  state = 'Default',
  heading = 'Domestic Violence',
  categoriesList = 'Physical assault | Ogling/Facial Expressions/Staring | Taking photos without permission',
  location = 'Somalwada, Nagpur',
  dateTime = '20 June 2019, 6:00 pm - 12:00 am',
  viewMoreText = 'View more',
  onClose,
  onViewMore,
}) => {
  const isHoverState = state === 'Hover';

  return (
    <div
      className={`figma-heatmap-card ${isHoverState ? 'figma-heatmap-card--hover' : 'figma-heatmap-card--default'}`}
    >
      {/* Header Row */}
      <div className="figma-heatmap-card__header">
        <h3 className="figma-heatmap-card__heading">{heading}</h3>
        <button
          className="figma-heatmap-card__close-btn"
          onClick={onClose}
          type="button"
          aria-label="Close card"
        >
          <X size={20} color="#2e1065" strokeWidth={2.4} />
        </button>
      </div>

      {/* Categories Subtitle List */}
      <p className="figma-heatmap-card__categories">{categoriesList}</p>

      {/* Location Details Row */}
      <div className="figma-heatmap-card__detail-row">
        <MapPin size={22} color="#9333ea" fill="#9333ea" stroke="#9333ea" className="figma-heatmap-card__icon" />
        <span className="figma-heatmap-card__detail-text">{location}</span>
      </div>

      {/* Date & Time Details Row */}
      <div className="figma-heatmap-card__detail-row">
        <Calendar size={22} color="#9333ea" fill="#9333ea" stroke="#ffffff" className="figma-heatmap-card__icon" />
        <span className="figma-heatmap-card__detail-text">{dateTime}</span>
      </div>

      {/* View More Link */}
      <div className="figma-heatmap-card__action-row">
        <button
          className="figma-heatmap-card__view-more"
          onClick={onViewMore}
          type="button"
        >
          {viewMoreText}
        </button>
      </div>
    </div>
  );
};

/**
 * Container rendering both Incident Heat Map Card variants (Default white card and Hover light lavender card)
 * vertically inside the grey canvas with purple dashed border matching image_0.png exactly.
 */
export const IncidentHeatMapCardMatrix: React.FC = () => {
  return (
    <div className="heatmap-matrix-wrapper">
      <div className="heatmap-matrix-container">
        {/* Variant 1: Default White Card */}
        <IncidentHeatMapCard state="Default" />

        {/* Variant 2: Hover Light Lavender Card */}
        <IncidentHeatMapCard state="Hover" />
      </div>
    </div>
  );
};
