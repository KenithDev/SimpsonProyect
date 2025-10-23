import { useState, useEffect } from 'react';

//--- Definiciones de Tipos ---
interface Character {
  id: number;
  name: string;
  phrases?: string[];
}

//--- Componente: Lista de Personajes ---
function ListCharacter() {              
    const [data, setData] = useState<Character[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await fetch('https://thesimpsonsapi.com/api/characters');
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                const jsonData = await response.json();
                console.log('Datos obtenidos (listCharacter):', jsonData);
                
                // La API devuelve { count, next, prev, pages, results }
                const charactersArray = jsonData.results || [];
                
                // Tomamos solo los primeros 10 personajes
                setData(charactersArray.slice(0, 10)); 
            } catch (err) {
                console.error('Error en fetch:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
    if (loading) return <p className="text-blue-500">Cargando personajes...</p>;
    if (error) return <p className="text-red-500">Error al cargar personajes: {error.message}</p>;
    if (!data || !Array.isArray(data)) return <p className="text-gray-500">No hay datos disponibles</p>;
    
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Personajes</h2> 
            <ul className="list-disc pl-5 space-y-2">
                {data.map((char) => (
                    <li key={char.id} className="text-gray-800">{char.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListCharacter;