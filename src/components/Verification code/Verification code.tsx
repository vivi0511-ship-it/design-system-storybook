import React, { useState, useRef } from 'react';
import './Verification code.css';

export interface VerificationCodeProps {
  /** Preserved Figma State variant */
  state?: 'Default' | 'Active' | 'Filled' | 'Pressed' | 'Error';
  /** Number of digits */
  length?: number;
  /** Callback on submit */
  onComplete?: (code: string) => void;
}

/**
 * Verification code
 * Preserved Figma Layer Name: "Verification code"
 * 
 * OTP 4/6-digit verification code input fields matching Figma specs.
 */
export const VerificationCode: React.FC<VerificationCodeProps> = ({
  state = 'Default',
  length = 4,
  onComplete,
}) => {
  const [digits, setDigits] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const nextDigits = [...digits];
    nextDigits[index] = val.slice(-1);
    setDigits(nextDigits);

    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const fullCode = nextDigits.join('');
    if (fullCode.length === length && onComplete) {
      onComplete(fullCode);
    }
  };

  return (
    <div className={`figma-verify ${state === 'Error' ? 'figma-verify--error' : ''}`}>
      <div className="figma-verify__digits">
        {digits.map((digit, idx) => (
          <input
            className={`figma-verify__input ${digit ? 'figma-verify__input--filled' : ''}`}
            key={idx}
            maxLength={1}
            onChange={(e) => handleChange(idx, e.target.value)}
            ref={(el) => (inputsRef.current[idx] = el)}
            type="text"
            value={digit}
          />
        ))}
      </div>
    </div>
  );
};
