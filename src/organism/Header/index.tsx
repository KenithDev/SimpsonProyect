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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      <div className="max-w-7xl mx-auto 
                      bg-(--simpsons-white)/45 backdrop-blur-xl 
                      rounded-3xl shadow-xl shadow-black/10
                      border border-(--simpsons-white)/20
                      px-6 md:px-8 py-4
                      transition-all duration-300 hover:shadow-2xl hover:shadow-black/15">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/Logo.svg" 
                alt="Donutmind Logo" 
                className="h-10 md:h-12 transition-all duration-500 ease-out
                           group-hover:scale-110 group-hover:rotate-12
                           filter drop-shadow-lg" 
              />
              <div className="absolute inset-0 bg-(--simpsons-yellow)/20 rounded-full blur-xl 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 md:gap-3 ">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="relative px-4 md:px-6 py-2 md:py-2.5 
                           rounded-full font-simpsons text-base md:text-lg 
                           text-(--simpsons-white) [text-shadow:3px_3px_0_rgb(121_79_16)] 
                           bg-(--simpsons-yellow)/10
                           hover:bg-(--simpsons-violet) hover:text-(--simpsons-white)
                           transition-all duration-300 
                           transform hover:scale-105 hover:-translate-y-0.5
                           active:scale-95 active:translate-y-0
                           shadow-md hover:shadow-lg hover:shadow-(--simpsons-yellow)/30
                           border border-(--simpsons-white)/10 hover:border-(--simpsons-violet)
                           overflow-hidden group"
              >
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-(--simpsons-white)/20 to-transparent
                                -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-700 ease-out"></div>
                
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
