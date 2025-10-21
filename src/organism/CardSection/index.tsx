import React from 'react';
import Text from '../../atoms/Text';

const CardsSection: React.FC = () => {
  return (
    <section id="cards" className="bg-(--simpsons-teal-bg) p-12 text-center border-t-8 border-(--simpsons-yellow)">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-(--simpsons-yellow) p-6 rounded-2xl shadow-xl border-4 border-(--simpsons-text)">
            <div className="bg-(--simpsons-white)/50 h-48 w-full rounded-md mb-4 flex items-center justify-center text-(--simpsons-text) text-lg font-semibold">
              Imagen de Personaje
            </div>
            <Text as="h3" className="text-3xl font-simpsons text-(--simpsons-text) mb-2">
              Personaje {index + 1}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;