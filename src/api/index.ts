/**
 * Punto de entrada central para la API de Los Simpsons
 * Exporta todos los servicios, hooks y tipos necesarios
 */

// Exportar servicios
export { default as simpsonsService } from './services/simpsons.service';

// Exportar cliente de axios
export { default as apiClient } from './config/axios.config';

// Exportar todos los tipos
export type {
  Character,
  Episode,
  Product,
  ApiResponse,
  ApiError,
  PaginationParams,
  SearchParams,
  UseApiState,
  UseApiReturn,
} from './types';

// Exportar todos los hooks
export {
  // Character hooks
  useCharacters,
  useCharacter,
  useSearchCharacters,
  
  // Episode hooks
  useEpisodes,
  useEpisode,
  useSearchEpisodes,
  useEpisodesBySeason,
  
  // Product hooks
  useProducts,
  useProduct,
  useSearchProducts,
} from './hooks/useSimpsons';

