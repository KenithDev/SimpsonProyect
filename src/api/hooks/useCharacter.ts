import { useState, useEffect, useCallback } from 'react';
import { simpsonsService } from '../services/simpsons.service';
import type { Character, UseApiReturn, ApiError } from '../types';

/**
 * ==========================================
 * CHARACTERS HOOKS
 * ==========================================
 */

/**
 * Hook para obtener todos los personajes
 */
export function useCharacters(): UseApiReturn<Character[]> {
  const [data, setData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const characters = await simpsonsService.getAllCharacters();
      setData(characters);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al obtener personajes',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// BORRA TODOS LOS DEMÁS HOOKS
// (useCharacter, useSearchCharacters, useEpisodes, useEpisode, useProducts, etc.)