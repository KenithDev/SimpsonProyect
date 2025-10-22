/**
 * 📺 Ejemplo de componente usando los hooks de episodios
 * 
 * Este archivo muestra diferentes formas de usar los hooks de episodios.
 * Úsalo como referencia para tus propios componentes.
 */

import React, { useState } from 'react';
import { useEpisodes, useEpisodesBySeason, useSearchEpisodes } from '../index';

// Ejemplo 1: Listado completo de episodios
export function AllEpisodes() {
  const { data: episodes, loading, error } = useEpisodes();
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Cargando episodios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        Error al cargar episodios: {error.message}
      </div>
    );
  }

  // Obtener temporadas únicas
  const seasons = Array.from(
    new Set(episodes?.map(ep => ep.season).filter(Boolean))
  ).sort((a, b) => (a ?? 0) - (b ?? 0));

  // Filtrar episodios por temporada si hay una seleccionada
  const filteredEpisodes = selectedSeason
    ? episodes?.filter(ep => ep.season === selectedSeason)
    : episodes;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Episodios de Los Simpsons</h2>

      {/* Selector de temporadas */}
      <div className="mb-6 flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedSeason(null)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            selectedSeason === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Todas
        </button>
        {seasons.map(season => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season ?? null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              selectedSeason === season
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Temporada {season}
          </button>
        ))}
      </div>

      {/* Lista de episodios */}
      <div className="space-y-4">
        {filteredEpisodes?.map(episode => (
          <div 
            key={episode.id}
            className="p-4 border-2 border-blue-300 rounded-lg bg-blue-50 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-xl text-gray-800">{episode.name}</h3>
            
            <div className="flex gap-4 mt-2 text-sm text-gray-600">
              {episode.season && episode.episode && (
                <span className="font-semibold">
                  S{episode.season}E{episode.episode}
                </span>
              )}
              {episode.air_date && (
                <span>📅 {episode.air_date}</span>
              )}
              {episode.rating && (
                <span>⭐ {episode.rating}/10</span>
              )}
            </div>

            {episode.description && (
              <p className="mt-3 text-gray-700">{episode.description}</p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-600 text-center">
        Mostrando {filteredEpisodes?.length || 0} episodios
      </p>
    </div>
  );
}

// Ejemplo 2: Episodios por temporada específica
export function SeasonEpisodes({ seasonNumber }: { seasonNumber: number }) {
  const { data: episodes, loading, error } = useEpisodesBySeason(seasonNumber);

  if (loading) return <div className="p-4">Cargando temporada {seasonNumber}...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Temporada {seasonNumber}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodes?.map(episode => (
          <div 
            key={episode.id}
            className="p-4 border rounded-lg bg-white shadow hover:shadow-md transition-shadow"
          >
            <div className="font-bold text-sm text-gray-500 mb-2">
              Episodio {episode.episode}
            </div>
            <h3 className="font-bold text-lg mb-2">{episode.name}</h3>
            {episode.air_date && (
              <p className="text-sm text-gray-600">📅 {episode.air_date}</p>
            )}
          </div>
        ))}
      </div>

      {episodes && episodes.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No hay episodios disponibles para esta temporada
        </p>
      )}
    </div>
  );
}

// Ejemplo 3: Buscador de episodios avanzado
export function AdvancedEpisodeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  const { data: results, loading, error } = useSearchEpisodes(debouncedQuery);

  // Debounce para evitar muchas peticiones
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">🔍 Buscador de Episodios</h2>
      
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Busca por nombre o descripción del episodio..."
          className="w-full p-4 text-lg border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setDebouncedQuery('');
            }}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            Limpiar búsqueda ✕
          </button>
        )}
      </div>

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <p className="mt-3 text-gray-600">Buscando episodios...</p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          ❌ Error: {error.message}
        </div>
      )}

      {!loading && debouncedQuery && results && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            😕 No se encontraron episodios
          </p>
          <p className="text-gray-400 mt-2">
            Intenta con otras palabras clave
          </p>
        </div>
      )}

      {results && results.length > 0 && (
        <div>
          <p className="text-sm text-gray-600 mb-4">
            📺 {results.length} episodio{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
          </p>
          
          <div className="space-y-4">
            {results.map(episode => (
              <div 
                key={episode.id}
                className="p-5 border-2 border-blue-200 rounded-xl bg-white hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl text-gray-800 flex-1">
                    {episode.name}
                  </h3>
                  {episode.rating && (
                    <span className="ml-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                      ⭐ {episode.rating}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 mb-3 text-sm text-gray-600">
                  {episode.season && episode.episode && (
                    <span className="font-semibold">
                      Temporada {episode.season}, Episodio {episode.episode}
                    </span>
                  )}
                  {episode.air_date && (
                    <span>📅 {episode.air_date}</span>
                  )}
                </div>

                {episode.description && (
                  <p className="text-gray-700 leading-relaxed">
                    {episode.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!debouncedQuery && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">Escribe algo para buscar episodios</p>
          <p className="text-sm mt-2">
            Ejemplo: "Homer", "monorail", "espacio", etc.
          </p>
        </div>
      )}
    </div>
  );
}

export default AdvancedEpisodeSearch;

