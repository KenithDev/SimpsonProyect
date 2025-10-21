import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const Text: React.FC<TextProps> = ({ children, className = '', as = 'p' }) => {
  const Tag = as;

  return (
    <Tag className={`${className}`}>
      {children}
    </Tag>
  );
};

export default Text;