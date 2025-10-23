import React, { useMemo } from 'react';
import Text from '../../atoms/Text';
import { useCharacters } from '../../api/hooks/useCharacter';

const POPULAR_CHARACTERS_LIMIT = 15;

const CardsSection: React.FC = () => {
  const { data: personajes, loading, error } = useCharacters();

  const personajesArray = useMemo(() => {
    if (!personajes || !Array.isArray(personajes)) return [];
    return personajes.slice(0, POPULAR_CHARACTERS_LIMIT);
  }, [personajes]);

  const totalItems = personajesArray.length;

  if (loading) {
    return (
      <section id="cards" className="bg-(--simpsons-teal-bg) py-16 px-6 text-center border-t-8 border-(--simpsons-yellow)">
        <div className="max-w-7xl mx-auto">
          <Text as="h2" className="text-4xl font-simpsons text-(--simpsons-yellow) mb-6 [text-shadow:3px_3px_0_rgb(121_79_16)]">
            Personajes Populares
          </Text>
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-(--simpsons-yellow) border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="cards" className="bg-(--simpsons-teal-bg) py-16 px-6 text-center border-t-8 border-(--simpsons-yellow)">
        <div className="max-w-7xl mx-auto">
          <Text as="h2" className="text-4xl font-simpsons text-(--simpsons-yellow) mb-6 [text-shadow:3px_3px_0_rgb(121_79_16)]">
            Personajes Populares
          </Text>
          <div className="p-4 bg-red-100 text-red-700 rounded-lg inline-block">
            Error: {error.message}
          </div>
        </div>
      </section>
    );
  }


  return (
    <section id="cards" className="bg-(--simpsons-teal-bg) py-16 px-6 text-center border-t-8 border-(--simpsons-yellow)">
      <div className="max-w-7xl mx-auto">
        <Text 
          as="h2" 
          className="text-4xl md:text-5xl font-simpsons text-(--simpsons-yellow) mb-3 [text-shadow:3px_3px_0_rgb(121_79_16)]"
        >
          Personajes Populares
        </Text>
        
        <p className="text-(--simpsons-white) text-lg mb-8 max-w-2xl mx-auto">
          Los personajes más icónicos de Springfield
        </p>

        <Text as="h3" className="text-lg font-medium text-(--simpsons-white) mb-8">
          {totalItems} personajes populares de Springfield
        </Text>

        {totalItems === 0 ? (
          <p className="text-(--simpsons-white) text-lg">No hay personajes disponibles.</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personajesArray.map((personaje) => {
          
  
                
                // Obtener la primera frase si existe
                const primeraFrase = personaje.phrases && personaje.phrases.length > 0 
                  ? personaje.phrases[0] 
                  : null;
    
                return (
                  <div
                    key={personaje.id}
                    className="bg-(--simpsons-yellow) p-6 rounded-3xl shadow-2xl border-4 border-(--simpsons-border)
                               transform transition-all duration-300 hover:scale-105 
                               hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer
                               relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Nombre */}
                      <Text as="h3" className="text-2xl font-simpsons text-(--simpsons-text) mb-4 text-center [text-shadow:2px_2px_0_rgb(255_255_255/50%)]">
                        {personaje.name}
                      </Text>

                      {/* Datos del personaje */}
                      <div className="text-sm text-(--simpsons-text)/90 space-y-2">
                        {/* Especialidad */}
                        {personaje.occupation && (
                          <div className="flex items-center justify-center font-semibold bg-(--simpsons-white)/40 py-2 px-4 rounded-lg">
                            <span className="truncate">{personaje.occupation}</span>
                          </div>
                        )}
                        
                        {/* Edad y Estado */}
                        <div className="flex items-center justify-center gap-3 text-xs">
                          {personaje.age && (
                            <span className="bg-(--simpsons-white)/40 py-1 px-3 rounded-full font-medium">
                              {personaje.age} años
                            </span>
                          )}
                          {personaje.status && (
                            <span className={`py-1 px-3 rounded-full font-medium ${
                              personaje.status === 'Alive' 
                                ? 'bg-green-400/60 text-green-900' 
                                : 'bg-gray-400/60 text-gray-900'
                            }`}>
                              {personaje.status === 'Alive' ? 'Vivo' : 'Fallecido'}
                            </span>
                          )}
                        </div>

                        {/* Frase */}
                        {primeraFrase && (
                          <div className="mt-3 p-3 bg-(--simpsons-white)/30 rounded-lg italic text-xs text-center border-2 border-(--simpsons-white)/50">
                            "{primeraFrase}"
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        )}
      </div>
    </section>
  );
};

export default CardsSection;
