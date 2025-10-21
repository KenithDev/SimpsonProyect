import React from "react";

interface HeaderProps {
  siteTitle: string;
  navLinks: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-(--simpsons-teal-bg) px-6 py-4 flex justify-between items-center shadow-2xl z-50 ">
      <div className="flex items-center space-x-3">
        <img 
          src="/Logo.svg" 
          alt="Donutmind Logo" 
          className="h-12 md:h-14 transition-transform hover:scale-110 duration-300" 
        />
      </div>
      <nav className="flex gap-2 md:gap-4">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollToSection(link.href)}
            className="px-4 py-2 rounded-lg font-simpsons text-lg md:text-xl text-(--simpsons-white) 
                       hover:text-(--simpsons-yellow) hover:bg-(--simpsons-white)/10 
                       transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
