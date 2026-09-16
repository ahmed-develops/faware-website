import React, { type ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'secondary', 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`shi-button shi-button-${variant} ${className}`}
      {...props}
    >
      <span className="shi-button-content">{children}</span>
    </button>
  );
};
