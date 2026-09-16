import React from 'react';
import './HankoSeal.css';

interface HankoSealProps {
  text: string;
  variant?: 'square' | 'round';
  className?: string;
}

export const HankoSeal: React.FC<HankoSealProps> = ({ text, variant = 'square', className = '' }) => {
  return (
    <div className={`shi-hanko shi-hanko-${variant} ${className}`}>
      <div className="shi-hanko-inner">
        {text}
      </div>
    </div>
  );
};
