import React from 'react';
import './Badge.css';

interface BadgeProps {
  variant?: 'solid' | 'outline' | 'dot';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'solid', children, className = '' }) => {
  if (variant === 'dot') {
    return (
      <div className={`shi-badge shi-badge-dot ${className}`}>
        <span className="shi-dot-container">
          <span className="shi-dot-ping"></span>
          <span className="shi-dot-solid"></span>
        </span>
        <span>{children}</span>
      </div>
    );
  }

  return (
    <div className={`shi-badge shi-badge-${variant} ${className}`}>
      {children}
    </div>
  );
};
