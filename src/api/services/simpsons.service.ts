import apiClient from '../config/axios.config';
import type { Character, Episode, Product, ApiResponse } from '../types';

/**
 * Servicio para interactuar con la API de Los Simpsons
 * Endpoints disponibles:
 * - /characters - Obtener personajes
 * - /episodes - Obtener episodios
 * - /products - Obtener productos
 */
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
    const response = await apiClient.get<ApiResponse<Character[]>>('/characters');
    return response.data;
  }

  /**
   * Obtener un personaje por ID
   */
  async getCharacterById(id: number): Promise<Character> {
    const response = await apiClient.get<ApiResponse<Character>>(`/characters/${id}`);
    return response.data;
  }

  /**
   * Buscar personajes por nombre
   */
  async searchCharacters(query: string): Promise<Character[]> {
    const characters = await this.getAllCharacters();
    return characters.filter(char => 
      char.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  /**
   * ==========================================
   * EPISODES ENDPOINTS
   * ==========================================
   */

  /**
   * Obtener todos los episodios
   */
  async getAllEpisodes(): Promise<Episode[]> {
    const response = await apiClient.get<ApiResponse<Episode[]>>('/episodes');
    return response.data;
  }

  /**
   * Obtener un episodio por ID
   */
  async getEpisodeById(id: number): Promise<Episode> {
    const response = await apiClient.get<ApiResponse<Episode>>(`/episodes/${id}`);
    return response.data;
  }

  /**
   * Buscar episodios por nombre o descripción
   */
  async searchEpisodes(query: string): Promise<Episode[]> {
    const episodes = await this.getAllEpisodes();
    return episodes.filter(episode => 
      episode.name.toLowerCase().includes(query.toLowerCase()) ||
      episode.description?.toLowerCase().includes(query.toLowerCase())
    );
  }

  /**
   * Obtener episodios por temporada
   */
  async getEpisodesBySeason(seasonNumber: number): Promise<Episode[]> {
    const episodes = await this.getAllEpisodes();
    return episodes.filter(episode => episode.season === seasonNumber);
  }

  /**
   * ==========================================
   * PRODUCTS ENDPOINTS
   * ==========================================
   */

  /**
   * Obtener todos los productos
   */
  async getAllProducts(): Promise<Product[]> {
    const response = await apiClient.get<ApiResponse<Product[]>>('/products');
    return response.data;
  }

  /**
   * Obtener un producto por ID
   */
  async getProductById(id: number): Promise<Product> {
    const response = await apiClient.get<ApiResponse<Product>>(`/products/${id}`);
    return response.data;
  }

  /**
   * Buscar productos por nombre
   */
  async searchProducts(query: string): Promise<Product[]> {
    const products = await this.getAllProducts();
    return products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}

// Exportar una única instancia del servicio
export const simpsonsService = new SimpsonsService();
export default simpsonsService;

