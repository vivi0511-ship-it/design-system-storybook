import React, { useState } from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';
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
  /** On submit callback */
  onSubmit?: (selectedId: string) => void;
}

const defaultQuestions: QuestionnaireOption[] = [
  { id: 'q1', label: 'Soil Nitrogen Depletion' },
  { id: 'q2', label: 'Irrigation Drainage Deficit' },
  { id: 'q3', label: 'Pest Infestation Risk' },
];

/**
 * Questionnaire card
 * Preserved Figma Layer Name: "Questionnaire card"
 * 
 * Interactive field diagnostic questionnaire card component bound to design tokens.
 */
export const QuestionnaireCard: React.FC<QuestionnaireCardProps> = ({
  question = 'What primary issue requires field inspection today?',
  options = defaultQuestions,
  onSubmit,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (onSubmit) onSubmit(id);
  };

  return (
    <div className="figma-questionnaire">
      <div className="figma-questionnaire__header">
        <HelpCircle size={20} color="var(--uedp-primary-400)" />
        <h4 className="figma-questionnaire__title">{question}</h4>
      </div>

      <div className="figma-questionnaire__options">
        {options.map((opt) => {
          const isSelected = selectedId === opt.id;
          return (
            <div
              className={`figma-questionnaire__opt ${isSelected ? 'figma-questionnaire__opt--selected' : ''}`}
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
            >
              <span>{opt.label}</span>
              {isSelected && <CheckCircle2 size={16} color="var(--uedp-primary-400)" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
