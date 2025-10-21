import React from 'react';
import Text from '../../atoms/Text'; // Importamos nuestro átomo Text

interface LogoProps {
  title: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ title, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Text as="h1" className="text-3xl font-bold text-(--simpsons-yellow) font-simpsons tracking-wide">
        {title}
      </Text>
    </div>
  );
};

export default Logo;