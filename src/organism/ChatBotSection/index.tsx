import React from 'react';
import Button from '../../atoms/Button';

const ChatbotSection: React.FC = () => {
  return (
    <section id="chatbot" className="bg-(--simpsons-teal-bg) py-16 px-6 text-center flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-simpsons text-(--simpsons-yellow) mb-8
                       [text-shadow:3px_3px_0_rgb(121_79_16)]">
          Encuentra tu episodio 🎬
        </h2>
        
        <div className="bg-(--simpsons-yellow) p-8 rounded-2xl shadow-2xl border-6 border-(--simpsons-border)
                        transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="bg-(--simpsons-white)/90 h-72 rounded-xl mb-6 p-5 text-left text-(--simpsons-text) 
                          border-4 border-(--simpsons-border) shadow-inner overflow-y-auto
                          font-body">
            <p className="text-lg mb-2 font-semibold text-(--simpsons-teal-bg)">
              🤖 DonutMind:
            </p>
            <p className="mb-4">
              ¡Hola! Soy tu asistente para encontrar episodios de Los Simpsons. 
              Cuéntame qué escena o momento recuerdas, y te ayudaré a encontrar el episodio. 🍩
            </p>
            <p className="text-sm text-(--simpsons-text)/60 italic">
              Ejemplo: "El episodio donde Homer va al espacio"
            </p>
          </div>
          
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Describe la escena que recuerdas..."
              className="grow p-4 rounded-xl bg-(--simpsons-white) text-(--simpsons-text) 
                         border-3 border-(--simpsons-border)
                         focus:outline-none focus:ring-4 focus:ring-(--simpsons-blue) 
                         font-body placeholder:text-(--simpsons-text)/50
                         transition-all duration-200"
            />
            <Button 
              onClick={() => alert('¡Buscando episodio! 🍩')} 
              variant="primary"
              className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Buscar
            </Button>
          </div>
          
          <p className="text-xs text-(--simpsons-text)/70 mt-4 font-body">
            💡 Tip: Mientras más detalles proporciones, mejor será el resultado
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;