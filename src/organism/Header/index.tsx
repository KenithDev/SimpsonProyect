import React from 'react';
import Text from '../../atoms/Text';

interface HeaderProps {
  siteTitle: string;
  navLinks: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ siteTitle, navLinks }) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-(--simpsons-teal-bg) p-4 flex justify-between items-center shadow-md z-50">
      <Text as="h1" className="text-4xl font-simpsons text-(--simpsons-yellow) tracking-wider">
        {siteTitle}
      </Text>
      <nav className="flex space-x-4">
        {navLinks.map((link) => (
          <button 
            key={link.href} 
            onClick={() => scrollToSection(link.href)}
            className="font-simpsons text-xl text-(--simpsons-white) hover:text-(--simpsons-yellow) transition-colors"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;