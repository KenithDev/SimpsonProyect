import React, { useState } from 'react';
import Button from '../../atoms/Button';

const ChatbotSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      setHasSearched(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const renderContent = () => {
    if (hasSearched && query) {
      return (
        <div className="space-y-4">
          <p className="text-lg font-semibold text-(--simpsons-teal-bg)">
             Resultados para: "{query}"
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-(--simpsons-yellow)/30 rounded-lg border-2 border-(--simpsons-border) hover:bg-(--simpsons-yellow)/50 transition-colors">
              <h4 className="font-bold text-(--simpsons-teal-bg) mb-1">
                Homer's Odyssey
              </h4>
              <p className="text-sm text-(--simpsons-text)/80">
                Temporada 1, Episodio 3
              </p>
              <p className="text-sm text-(--simpsons-text)/70 mt-2">
                Homer pierde su trabajo en la planta nuclear y debe encontrar una nueva forma de mantener a su familia.
              </p>
              <p className="text-xs text-(--simpsons-text)/60 mt-2">
                21 de enero de 1990
              </p>
            </div>

            <div className="p-4 bg-(--simpsons-yellow)/30 rounded-lg border-2 border-(--simpsons-border) hover:bg-(--simpsons-yellow)/50 transition-colors">
              <h4 className="font-bold text-(--simpsons-teal-bg) mb-1">
                Last Exit to Springfield
              </h4>
              <p className="text-sm text-(--simpsons-text)/80">
                Temporada 4, Episodio 17
              </p>
              <p className="text-sm text-(--simpsons-text)/70 mt-2">
                Homer lidera el sindicato en una huelga contra el Sr. Burns cuando elimina el plan dental.
              </p>
              <p className="text-xs text-(--simpsons-text)/60 mt-2">
                 11 de marzo de 1993
              </p>
            </div>

            <div className="p-4 bg-(--simpsons-yellow)/30 rounded-lg border-2 border-(--simpsons-border) hover:bg-(--simpsons-yellow)/50 transition-colors">
              <h4 className="font-bold text-(--simpsons-teal-bg) mb-1">
                Marge vs. the Monorail
              </h4>
              <p className="text-sm text-(--simpsons-text)/80">
                Temporada 4, Episodio 12
              </p>
              <p className="text-sm text-(--simpsons-text)/70 mt-2">
                Un vendedor estafa a Springfield vendiéndoles un monorraíl defectuoso.
              </p>
              <p className="text-xs text-(--simpsons-text)/60 mt-2">
               14 de enero de 1993
              </p>
            </div>
          </div>

          <p className="text-xs text-(--simpsons-text)/60 italic text-center pt-2">
             Esto es solo una demostración visual
          </p>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-6xl mb-4"></div>
        <p className="text-xl font-semibold text-(--simpsons-teal-bg) mb-3">
          DonutMind - Asistente de Episodios
        </p>
        <p className="text-center text-(--simpsons-text)/80 mb-2">
          ¡Hola! Soy tu asistente para encontrar episodios de Los Simpsons.
        </p>
        <p className="text-center text-(--simpsons-text)/80 mb-4">
          Cuéntame qué escena o momento recuerdas, y te ayudaré a encontrar el episodio. 
        </p>
        <p className="text-sm text-(--simpsons-text)/60 italic">
          Ejemplo: "El episodio donde Homer va al espacio" o "monorail"
        </p>
      </div>
    );
  };

  return (
    <section id="chatbot" className="bg-(--simpsons-teal-bg) py-16 px-6 text-center flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-simpsons text-(--simpsons-yellow) mb-8
                       [text-shadow:3px_3px_0_rgb(121_79_16)]">
          Encuentra tu episodio 
        </h2>
        
        <div className="bg-(--simpsons-yellow) p-8 rounded-2xl shadow-2xl border-6 border-(--simpsons-border)
                        transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Área de resultados */}
          <div className="bg-(--simpsons-white)/90 min-h-72 rounded-xl mb-6 p-5 text-left text-(--simpsons-text) 
                          border-4 border-(--simpsons-border) shadow-inner font-body">
            {renderContent()}
          </div>
          
          {/* Input de búsqueda */}
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe la escena que recuerdas..."
              className="grow p-4 rounded-xl bg-(--simpsons-white) text-(--simpsons-text) 
                         border-3 border-(--simpsons-border)
                         focus:outline-none focus:ring-4 focus:ring-(--simpsons-blue) 
                         font-body placeholder:text-(--simpsons-text)/50
                         transition-all duration-200"
            />
            <Button 
              onClick={handleSearch}
              disabled={!query.trim()}
              variant="primary"
              className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Buscar
            </Button>
          </div>
          
          <p className="text-xs text-(--simpsons-text)/70 mt-4 font-body">
             Tip: Esta es una demostración visual del buscador de episodios
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
