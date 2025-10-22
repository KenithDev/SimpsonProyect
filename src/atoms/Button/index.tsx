import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  disabled = false
}) => {
  const baseStyles = 'px-8 py-3 rounded-xl font-simpsons text-2xl tracking-wider uppercase transform transition-transform duration-200 focus:outline-none';

  const variantStyles = {
    primary: 'bg-(--simpsons-yellow) text-(--simpsons-text) shadow-lg hover:bg-(--simpsons-yellow-light) active:scale-95',
    secondary: 'bg-transparent border-2 border-(--simpsons-yellow) text-(--simpsons-yellow) hover:bg-(--simpsons-yellow) hover:text-(--simpsons-text) active:scale-95'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;