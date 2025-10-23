import { useState, useEffect } from 'react';

//--- Definiciones de Tipos ---
interface Character {
  id: number;
  name: string;
  phrases?: string[];
}

//--- Componente: Lista de Frases ---
function ListPhrase() {  
    const [data, setData] = useState<Character[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Usando la API correcta
                const response = await fetch('https://thesimpsonsapi.com/api/characters');  
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                const jsonData = await response.json();
                console.log('Datos obtenidos (ListPhrase):', jsonData);
                console.log('Primera frase:', jsonData.results?.[0]?.phrases?.[0]);
                
                // La API devuelve { count, next, prev, pages, results }
                const charactersArray = jsonData.results || [];
                setData(charactersArray);
            } catch (err) {
                console.error('Error en fetch:', err);
                setError(err as Error);
            }
            finally {
                setLoading(false);
            }  
        };
        fetchData();
    }, []);
    
    if (loading) return <p className="text-blue-500">Cargando frases...</p>;
    if (error) return <p className="text-red-500">Error al cargar frases: {error.message}</p>;
    if (!data || !Array.isArray(data)) return <p className="text-gray-500">No hay datos disponibles</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Frases Famosas</h2>
            <ul className="space-y-3 max-h-96 overflow-y-auto">
                {data.slice(0, 10).map(character => (
                    <li key={character.id} className="text-gray-800 p-2 bg-gray-100 rounded">
                        <strong>{character.name}:</strong> "{character.phrases?.[0] || 'Sin frases'}"
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListPhrase;
