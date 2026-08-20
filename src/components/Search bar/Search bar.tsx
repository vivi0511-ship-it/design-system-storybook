import React, { useState } from 'react';
import { Search, X, Filter } from 'lucide-react';
import './Search bar.css';

export interface SearchBarProps {
  /** Placeholder text */
  placeholder?: string;
  /** Initial query */
  value?: string;
  /** Show action filter button */
  showFilterBtn?: boolean;
  /** On query change callback */
  onSearch?: (query: string) => void;
}

/**
 * Search bar
 * Preserved Figma Layer Name: "Search bar"
 * 
 * Interactive search input container component bound to Figma design tokens.
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search locations, articles, metrics...',
  value: initialValue = '',
  showFilterBtn = true,
  onSearch,
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) onSearch(val);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <div className="figma-searchbar">
      <Search className="figma-searchbar__icon" size={18} />
      <input
        className="figma-searchbar__input"
        onChange={handleInputChange}
        placeholder={placeholder}
        type="text"
        value={query}
      />
      {query && (
        <button className="figma-searchbar__clear" onClick={handleClear} type="button">
          <X size={16} />
        </button>
      )}
      {showFilterBtn && (
        <button className="figma-searchbar__filter-btn" type="button">
          <Filter size={16} />
        </button>
      )}
    </div>
  );
};
