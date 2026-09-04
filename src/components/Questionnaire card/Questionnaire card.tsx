import React, { useState } from 'react';
import './Questionnaire card.css';

export interface QuestionnaireOption {
  id: string;
  label: string;
}

export interface QuestionnaireCardProps {
  /** Survey question title */
  question?: string;
  /** Option list */
  options?: QuestionnaireOption[];
  /** Default or controlled selected option ID */
  selectedId?: string;
  /** On option selection callback */
  onSelectOption?: (selectedId: string) => void;
}

const defaultOptions: QuestionnaireOption[] = [
  { id: 'opt1', label: 'Option1' },
  { id: 'opt2', label: 'Option2' },
  { id: 'opt3', label: 'Option3' },
  { id: 'opt4', label: 'Option4' },
];

/**
 * Questionnaire card
 * Preserved Figma Layer Name: "Questionnaire card" (Node ID: 47:4495)
 * 
 * Synchronized with exact Figma node 47:4495 specifications:
 * - Light lavender background (#f3e8ff) card container with 24px border radius
 * - Inter 16px weight 600 dark purple question title (#2e1065)
 * - Vertical option items list (Option1, Option2, Option3, Option4)
 * - Figma radial radio buttons (#c084fc stroke, #ede9fe fill, #c084fc selected dot)
 */
export const QuestionnaireCard: React.FC<QuestionnaireCardProps> = ({
  question = '1. How do u usually travel?',
  options = defaultOptions,
  selectedId: controlledSelectedId,
  onSelectOption,
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string | null>(null);

  const activeSelectedId = controlledSelectedId !== undefined ? controlledSelectedId : internalSelectedId;

  const handleSelect = (id: string) => {
    setInternalSelectedId(id);
    if (onSelectOption) onSelectOption(id);
  };

  return (
    <div className="figma-questionnaire" data-node-id="47:4495">
      <h3 className="figma-questionnaire__title">{question}</h3>

      <div className="figma-questionnaire__options">
        {options.map((opt) => {
          const isSelected = activeSelectedId === opt.id;
          return (
            <button
              className={`figma-questionnaire__opt ${isSelected ? 'figma-questionnaire__opt--selected' : ''}`}
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              type="button"
            >
              <div className="figma-questionnaire__radio">
                <div className="figma-questionnaire__radio-dot" />
              </div>
              <span className="figma-questionnaire__opt-label">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
