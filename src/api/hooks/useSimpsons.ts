import { useState, useEffect, useCallback } from 'react';
import { simpsonsService } from '../services/simpsons.service';
import type { Character, Episode, Product, UseApiReturn, ApiError } from '../types';

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

/**
 * Hook para obtener un personaje por ID
 */
export function useCharacter(id: number): UseApiReturn<Character> {
  const [data, setData] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const character = await simpsonsService.getCharacterById(id);
      setData(character);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al obtener personaje',
      });
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook para buscar personajes
 */
export function useSearchCharacters(query: string): UseApiReturn<Character[]> {
  const [data, setData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    if (!query.trim()) {
      setData([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const characters = await simpsonsService.searchCharacters(query);
      setData(characters);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al buscar personajes',
      });
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * ==========================================
 * EPISODES HOOKS
 * ==========================================
 */

/**
 * Hook para obtener todos los episodios
 */
export function useEpisodes(): UseApiReturn<Episode[]> {
  const [data, setData] = useState<Episode[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const episodes = await simpsonsService.getAllEpisodes();
      setData(episodes);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al obtener episodios',
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

/**
 * Hook para obtener un episodio por ID
 */
export function useEpisode(id: number): UseApiReturn<Episode> {
  const [data, setData] = useState<Episode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const episode = await simpsonsService.getEpisodeById(id);
      setData(episode);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al obtener episodio',
      });
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook para buscar episodios
 */
export function useSearchEpisodes(query: string): UseApiReturn<Episode[]> {
  const [data, setData] = useState<Episode[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    if (!query.trim()) {
      setData([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const episodes = await simpsonsService.searchEpisodes(query);
      setData(episodes);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al buscar episodios',
      });
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook para obtener episodios por temporada
 */
export function useEpisodesBySeason(seasonNumber: number): UseApiReturn<Episode[]> {
  const [data, setData] = useState<Episode[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const episodes = await simpsonsService.getEpisodesBySeason(seasonNumber);
      setData(episodes);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al obtener episodios de la temporada',
      });
    } finally {
      setLoading(false);
    }
  }, [seasonNumber]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * ==========================================
 * PRODUCTS HOOKS
 * ==========================================
 */

/**
 * Hook para obtener todos los productos
 */
export function useProducts(): UseApiReturn<Product[]> {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const products = await simpsonsService.getAllProducts();
      setData(products);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al obtener productos',
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

/**
 * Hook para obtener un producto por ID
 */
export function useProduct(id: number): UseApiReturn<Product> {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const product = await simpsonsService.getProductById(id);
      setData(product);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al obtener producto',
      });
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook para buscar productos
 */
export function useSearchProducts(query: string): UseApiReturn<Product[]> {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    if (!query.trim()) {
      setData([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const products = await simpsonsService.searchProducts(query);
      setData(products);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Error al buscar productos',
      });
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

