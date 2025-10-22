import React, { useMemo, useState, useEffect } from 'react';
import Text from '../../atoms/Text';
import { useCharacters } from '../../api/hooks/useCharacter';

const DEFAULT_PAGE_SIZE = 6;
const POPULAR_CHARACTERS_LIMIT = 50;

function getWindowedPages(current: number, total: number, window = 2) {
  const pages: (number | string)[] = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  const left = Math.max(2, current - window);
  const right = Math.min(total - 1, current + window);

  pages.push(1);
  if (left > 2) pages.push('...');
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push('...');
  pages.push(total);
  return pages;
}

const CardsSection: React.FC = () => {
  const { data: personajes, loading, error } = useCharacters();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const personajesArray = useMemo(() => {
    if (!personajes || !Array.isArray(personajes)) return [];
    return personajes.slice(0, POPULAR_CHARACTERS_LIMIT);
  }, [personajes]);

  const totalItems = personajesArray.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const currentItems = useMemo(() => {
    if (personajesArray.length === 0) return [];
    const start = (page - 1) * pageSize;
    return personajesArray.slice(start, start + pageSize);
  }, [personajesArray, page, pageSize]);

  const goTo = (p: number) => setPage(Math.max(1, Math.min(totalPages, p)));
  
  useEffect(() => setPage(1), [pageSize]);

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

        <div className="flex justify-between items-center mb-6">
          <div>
            <Text as="h3" className="text-lg font-medium text-(--simpsons-white)">
              {totalItems} personajes | Página {page} de {totalPages}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-(--simpsons-white) font-semibold">Por página:</label>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="px-3 py-2 rounded-lg border-2 border-(--simpsons-yellow) bg-(--simpsons-white) text-(--simpsons-text) font-semibold cursor-pointer hover:bg-(--simpsons-yellow) transition-colors"
            >
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={12}>12</option>
            </select>
          </div>
        </div>

        {totalItems === 0 ? (
          <p className="text-(--simpsons-white) text-lg">No hay personajes disponibles.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentItems.map((personaje) => {
          
  
                
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

            {/* Paginación */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="px-6 py-3 rounded-full bg-(--simpsons-yellow) hover:bg-(--simpsons-yellow-light) text-(--simpsons-text) font-simpsons text-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                ← Anterior
              </button>

              <div className="space-x-2 flex items-center">
                {getWindowedPages(page, totalPages).map((p, idx) => {
                  if (p === '...') return <span key={`dots-${idx}`} className="px-2 text-(--simpsons-white) text-xl">…</span>;
                  const pn = p as number;
                  return (
                    <button
                      key={pn}
                      onClick={() => goTo(pn)}
                      className={`px-4 py-2 rounded-full font-bold text-lg transition-all ${
                        pn === page 
                          ? 'bg-(--simpsons-yellow) text-(--simpsons-text) shadow-lg scale-110' 
                          : 'bg-(--simpsons-white)/80 text-(--simpsons-text) hover:bg-(--simpsons-white) hover:scale-105'
                      }`}
                    >
                      {pn}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="px-6 py-3 rounded-full bg-(--simpsons-yellow) hover:bg-(--simpsons-yellow-light) text-(--simpsons-text) font-simpsons text-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                Siguiente →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CardsSection;
