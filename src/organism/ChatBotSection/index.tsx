import React, { useState } from 'react';
import Button from '../../atoms/Button';
import { useSearchEpisodes } from '../../api';
import type { Episode } from '../../api';

const ChatbotSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { data: episodes, loading, error } = useSearchEpisodes(searchQuery);

  const handleSearch = () => {
    if (query.trim()) {
      setSearchQuery(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const renderResults = () => {
    if (loading) {
      return (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-(--simpsons-teal-bg)"></div>
          <p className="mt-2 text-sm">Buscando episodios...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-4 text-red-600">
          <p>❌ Error: {error.message}</p>
          <button 
            onClick={handleSearch}
            className="mt-2 text-sm underline hover:text-red-800"
          >
            Reintentar
          </button>
        </div>
      );
    }

    if (searchQuery && episodes && episodes.length > 0) {
      return (
        <div className="space-y-3 max-h-64 overflow-y-auto">
          <p className="font-semibold text-(--simpsons-teal-bg)">
            🎬 Encontrados {episodes.length} episodio{episodes.length !== 1 ? 's' : ''}:
          </p>
          {episodes.slice(0, 5).map((episode: Episode) => (
            <div 
              key={episode.id} 
              className="p-3 bg-(--simpsons-yellow)/30 rounded-lg border-2 border-(--simpsons-border) hover:bg-(--simpsons-yellow)/50 transition-colors"
            >
              <h4 className="font-bold text-(--simpsons-teal-bg)">
                {episode.name}
              </h4>
              {episode.season && episode.episode && (
                <p className="text-sm text-(--simpsons-text)/80">
                  Temporada {episode.season}, Episodio {episode.episode}
                </p>
              )}
              {episode.description && (
                <p className="text-sm text-(--simpsons-text)/70 mt-1 line-clamp-2">
                  {episode.description}
                </p>
              )}
              {episode.air_date && (
                <p className="text-xs text-(--simpsons-text)/60 mt-1">
                  📅 {episode.air_date}
                </p>
              )}
            </div>
          ))}
          {episodes.length > 5 && (
            <p className="text-xs text-(--simpsons-text)/60 italic text-center">
              ...y {episodes.length - 5} más resultados
            </p>
          )}
        </div>
      );
    }

    if (searchQuery && episodes && episodes.length === 0) {
      return (
        <p className="text-center py-4 text-(--simpsons-text)/70">
          😕 No se encontraron episodios para "{searchQuery}"
        </p>
      );
    }

    return (
      <>
        <p className="text-lg mb-2 font-semibold text-(--simpsons-teal-bg)">
          🤖 DonutMind:
        </p>
        <p className="mb-4">
          ¡Hola! Soy tu asistente para encontrar episodios de Los Simpsons. 
          Cuéntame qué escena o momento recuerdas, y te ayudaré a encontrar el episodio. 🍩
        </p>
        <p className="text-sm text-(--simpsons-text)/60 italic">
          Ejemplo: "El episodio donde Homer va al espacio" o "monorail"
        </p>
      </>
    );
  };

  return (
    <section id="chatbot" className="bg-(--simpsons-teal-bg) py-16 px-6 text-center flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-simpsons text-(--simpsons-yellow) mb-8
                       [text-shadow:3px_3px_0_rgb(121_79_16)]">
          Encuentra tu episodio 🎬
        </h2>
        
        <div className="bg-(--simpsons-yellow) p-8 rounded-2xl shadow-2xl border-6 border-(--simpsons-border)
                        transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="bg-(--simpsons-white)/90 min-h-72 rounded-xl mb-6 p-5 text-left text-(--simpsons-text) 
                          border-4 border-(--simpsons-border) shadow-inner
                          font-body">
            {renderResults()}
          </div>
          
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe la escena que recuerdas..."
              disabled={loading}
              className="grow p-4 rounded-xl bg-(--simpsons-white) text-(--simpsons-text) 
                         border-3 border-(--simpsons-border)
                         focus:outline-none focus:ring-4 focus:ring-(--simpsons-blue) 
                         font-body placeholder:text-(--simpsons-text)/50
                         transition-all duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button 
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              variant="primary"
              className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? '🔍' : 'Buscar'}
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
