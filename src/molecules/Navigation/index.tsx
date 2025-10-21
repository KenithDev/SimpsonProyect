import React from 'react';
import Button from '../../atoms/Button'; // Importamos nuestro átomo Button

interface NavigationProps {
  links: { label: string; href: string }[]; // Array de objetos con label y href
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ links, className = '' }) => {
  const handleClick = (href: string) => {
    // Implementa el desplazamiento suave a la sección
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`flex space-x-4 ${className}`}>
      {links.map((link) => (
        <Button key={link.href} onClick={() => handleClick(link.href)}>
          {link.label}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;