import React from 'react';
import { Clock, Bookmark } from 'lucide-react';
import './Article thumbnail.css';

export interface ArticleThumbnailProps {
  /** Preserved Figma State variant */
  state?: 'Default' | 'Press';
  /** Article title */
  title?: string;
  /** Category badge */
  category?: string;
  /** Estimated reading time */
  readTime?: string;
  /** Image URL */
  imageUrl?: string;
  /** Click callback */
  onClick?: () => void;
}

/**
 * Article thumbnail
 * Preserved Figma Layer Name: "Article thumbnail"
 * 
 * Content card thumbnail component matching Figma variants and design tokens.
 */
export const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  state = 'Default',
  title = 'Sustainable Irrigation Practices for Modern Agriculture',
  category = 'Agronomy',
  readTime = '5 min read',
  imageUrl = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=60',
  onClick,
}) => {
  return (
    <article
      className={`figma-article-card ${state === 'Press' ? 'figma-article-card--pressed' : ''}`}
      onClick={onClick}
    >
      <div className="figma-article-card__img-wrap">
        <img alt={title} className="figma-article-card__img" src={imageUrl} />
        <span className="figma-article-card__badge">{category}</span>
      </div>
      <div className="figma-article-card__content">
        <h4 className="figma-article-card__title">{title}</h4>
        <div className="figma-article-card__footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} color="var(--uedp-slate-400)" />
            <span>{readTime}</span>
          </div>
          <Bookmark size={16} color="var(--uedp-slate-400)" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </article>
  );
};
