import apiClient from '../config/axios.config'; // Importa el cliente principal
import type { Character } from '../types';

class SimpsonsService {
  /**
   * ==========================================
   * CHARACTERS ENDPOINTS
   * ==========================================
   */

  /**
   * Obtener todos los personajes
   */
  async getAllCharacters(): Promise<Character[]> {
    try {
      // La API devuelve un objeto paginado con la estructura: { count, next, prev, pages, results }
      const response = await apiClient.get<{ results: Character[] }>('/characters');
      
      
      // Extraer el array de personajes del campo 'results'
      return response.data.results || [];

    } catch (error) {
      console.error(' Error al obtener personajes:', error);
      throw error;
    }
  }

  // BORRA TODOS LOS DEMÁS MÉTODOS
  // (getCharacterById, searchCharacters, getAllEpisodes, getAllProducts, etc.)
}

export const simpsonsService = new SimpsonsService();
export default simpsonsService;