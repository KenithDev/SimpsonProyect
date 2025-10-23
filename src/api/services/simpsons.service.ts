import apiClient from '../config/axios.config'; // Importa el cliente principal
import type { Character } from '../types';

class SimpsonsService {

  /**
   * Obtener todos los personajes
   */
  async getAllCharacters(): Promise<Character[]> {
    try {
      const response = await apiClient.get<{ results: Character[] }>('/characters');
      return response.data.results || [];

    } catch (error) {
      console.error(' Error al obtener personajes:', error);
      throw error;
    }
  }
}

export const simpsonsService = new SimpsonsService();
export default simpsonsService;