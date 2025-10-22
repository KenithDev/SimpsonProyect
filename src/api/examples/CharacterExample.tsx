import { useState}  from 'react';
import { useCharacters, useSearchCharacters } from '../index';

// Ejemplo 1: Mostrar todos los personajes
export function AllCharacters() {
  const { data: characters, loading, error, refetch } = useCharacters();

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        <p>Error: {error.message}</p>
        <button 
          onClick={refetch}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Personajes de Los Simpsons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {characters?.map(character => (
          <div 
            key={character.id}
            className="p-4 border-2 border-yellow-400 rounded-lg bg-yellow-50 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg text-gray-800">{character.name}</h3>
            {character.gender && (
              <p className="text-sm text-gray-600 mt-1">
                {character.gender === 'Male' ? '👨' : character.gender === 'Female' ? '👩' : '👤'} {character.gender}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-gray-600 text-center">
        Total de personajes: {characters?.length || 0}
      </p>
    </div>
  );
}

// Ejemplo 2: Buscador de personajes en tiempo real
export function CharacterSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: results, loading, error } = useSearchCharacters(searchTerm);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Buscar Personajes</h2>
      
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Escribe el nombre de un personaje..."
          className="w-full p-4 text-lg border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {loading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
          <p className="mt-2 text-gray-600">Buscando...</p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          Error: {error.message}
        </div>
      )}

      {!loading && searchTerm && results && results.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No se encontraron personajes con "{searchTerm}" 😕
        </p>
      )}

      {results && results.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600 mb-4">
            Encontrados {results.length} resultado{results.length !== 1 ? 's' : ''}
          </p>
          {results.map(character => (
            <div 
              key={character.id}
              className="p-4 border border-yellow-400 rounded-lg bg-white hover:bg-yellow-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{character.name}</h3>
                  {character.gender && (
                    <p className="text-sm text-gray-600">
                      {character.gender}
                    </p>
                  )}
                </div>
                <span className="text-2xl">
                  {character.gender === 'Male' ? '👨' : character.gender === 'Female' ? '👩' : '👤'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Ejemplo 3: Componente compacto con manejo de estados
export function CharacterList() {
  const { data, loading, error } = useCharacters();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Personajes</h2>
      
      {loading && <p>Cargando personajes... ⏳</p>}
      {error && <p className="text-red-600">❌ {error.message}</p>}
      
      {data && (
        <ul className="space-y-2">
          {data.slice(0, 10).map(character => (
            <li 
              key={character.id}
              className="p-2 bg-yellow-100 rounded hover:bg-yellow-200"
            >
              {character.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CharacterSearch;

