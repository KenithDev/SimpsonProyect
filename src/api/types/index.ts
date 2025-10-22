/**
 * Tipos y interfaces para la API de Los Simpsons
 */

// ============================================
// Character Types
// ============================================
export interface Character {
  id: number;
  name: string;
  normalized_name?: string;
  gender?: string;
}

// ============================================
// Episode Types
// ============================================
export interface Episode {
  id: number;
  name: string;
  season?: number;
  episode?: number;
  air_date?: string;
  description?: string;
  rating?: number;
  image_url?: string;
  thumbnail_url?: string;
}

// ============================================
// Product Types
// ============================================
export interface Product {
  id: number;
  name: string;
  description?: string;
  price?: number;
  image?: string;
}

// ============================================
// API Response Types
// ============================================
export type ApiResponse<T> = T;

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface SearchParams extends PaginationParams {
  query?: string;
}

// ============================================
// Error Types
// ============================================
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

// ============================================
// Hook State Types
// ============================================
export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

export interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => Promise<void>;
}

