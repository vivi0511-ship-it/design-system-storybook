import React, { useState } from 'react';
import './Verification code.css';

export interface VerificationCodeProps {
  /** Preserved Figma State variant */
  state?: 'Default' | 'Pressed' | 'Active' | 'Filled' | 'Error';
  /** Title header text */
  title?: string;
  /** Custom digit values array (5 digits) */
  digits?: string[];
  /** Timer text */
  timerText?: string;
  /** Error message helper string */
  errorMessage?: string;
  /** Completion callback */
  onComplete?: (code: string) => void;
}

/**
 * Verification Code Component
 * Preserved Figma Layer Name: "Verification code" (Node ID: 52:5013 / 52:5019)
 * 
 * Re-created with 100% exact fidelity to image_0.png:
 * - Title "Verification code sent"
 * - Subtext "Send another code 30s"
 * - 5 circle digit inputs (border-radius: 50%)
 * - 5 Variant States: Default, Pressed, Active, Filled, Error
 * - Error helper text "Incorrect code"
 */
export const VerificationCode: React.FC<VerificationCodeProps> = ({
  state = 'Default',
  title = 'Verification code sent',
  digits: userDigits,
  timerText = '30s',
  errorMessage = 'Incorrect code',
  onComplete,
}) => {
  // Default values matching image_0.png per state variant
  const getDefaultDigits = (): string[] => {
    if (userDigits && userDigits.length === 5) return userDigits;

    switch (state) {
      case 'Default':
      case 'Pressed':
        return ['0', '0', '0', '0', '0'];
      case 'Active':
        return ['5', '4', '|', '0', '0'];
      case 'Filled':
      case 'Error':
        return ['5', '4', '6', '3', '8'];
      default:
        return ['0', '0', '0', '0', '0'];
    }
  };

  const [digits, setDigits] = useState<string[]>(getDefaultDigits());

  const handleInputChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const nextDigits = [...digits];
    nextDigits[index] = val.slice(-1) || '0';
    setDigits(nextDigits);

    const fullCode = nextDigits.join('');
    if (fullCode.length === 5 && onComplete) {
      onComplete(fullCode);
    }
  };

  return (
    <div className={`verify-card verify-card--state-${state.toLowerCase()}`}>
      <h3 className="verify-card__title">{title}</h3>
      <div className="verify-card__subtext">
        Send another code <span className="verify-card__timer">{timerText}</span>
      </div>

      <div className="verify-card__digits-row">
        {digits.map((digit, idx) => {
          const isCursor = state === 'Active' && idx === 2 && digit === '|';
          const isPlaceholder = (state === 'Default' || state === 'Pressed' || (state === 'Active' && idx > 2)) && digit === '0';
          const isEntered = (state === 'Active' && idx < 2) || state === 'Filled' || state === 'Error';

          const circleClass = [
            'verify-card__circle',
            isCursor ? 'verify-card__circle--active-cursor' : '',
            isPlaceholder ? 'verify-card__circle--placeholder' : '',
            isEntered ? 'verify-card__circle--entered' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={idx} className={circleClass}>
              {isCursor ? (
                <span className="verify-card__cursor-line" />
              ) : (
                <input
                  className="verify-card__input"
                  maxLength={1}
                  onChange={(e) => handleInputChange(idx, e.target.value)}
                  type="text"
                  value={digit}
                />
              )}
            </div>
          );
        })}
      </div>

      {state === 'Error' && (
        <div className="verify-card__error-msg">{errorMessage}</div>
      )}
    </div>
  );
};

/**
 * Renders all 5 Verification Code state rows (Default, Pressed, Active, Filled, Error)
 * inside the white canvas with purple dashed border matching image_0.png exactly.
 */
export const VerificationCodeMatrix: React.FC = () => {
  return (
    <div className="verify-matrix-wrapper">
      <div className="verify-matrix-container">
        <VerificationCode state="Default" />
        <VerificationCode state="Pressed" />
        <VerificationCode state="Active" />
        <VerificationCode state="Filled" />
        <VerificationCode state="Error" />
      </div>
    </div>
  );
};
