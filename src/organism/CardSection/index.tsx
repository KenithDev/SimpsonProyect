import React from 'react';
import Text from '../../atoms/Text';

const CardsSection: React.FC = () => {
  const personajes = [
    { nombre: 'Homer Simpson', emoji: '🍩' },
    { nombre: 'Bart Simpson', emoji: '🛹' },
    { nombre: 'Lisa Simpson', emoji: '🎷' }
  ];

  return (
    <section id="cards" className="bg-(--simpsons-teal-bg) py-16 px-6 text-center border-t-8 border-(--simpsons-yellow)">
      <div className="max-w-7xl mx-auto">
        <Text 
          as="h2" 
          className="text-4xl md:text-5xl font-simpsons text-(--simpsons-yellow) mb-12
                     [text-shadow:3px_3px_0_rgb(121_79_16)]"
        >
          Personajes Destacados
        </Text>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personajes.map((personaje, index) => (
            <div 
              key={index} 
              className="bg-(--simpsons-yellow) p-6 rounded-2xl shadow-2xl border-6 border-(--simpsons-border)
                         transform transition-all duration-300 hover:scale-105 hover:rotate-1 
                         hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer
                         relative overflow-hidden group"
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-(--simpsons-white)/70 h-48 w-full rounded-xl mb-4 
                              flex items-center justify-center text-(--simpsons-text) text-6xl
                              border-4 border-(--simpsons-border) shadow-inner
                              transition-transform duration-300 group-hover:scale-110">
                  {personaje.emoji}
                </div>
                <Text 
                  as="h3" 
                  className="text-2xl md:text-3xl font-simpsons text-(--simpsons-text) mb-2
                             [text-shadow:2px_2px_0_rgb(255_255_255/50%)]"
                >
                  {personaje.nombre}
                </Text>
                <div className="mt-3 pt-3 border-t-2 border-(--simpsons-border)/30">
                  <span className="text-sm font-semibold text-(--simpsons-text)/70 uppercase tracking-wider">
                    Ver más →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;