// ============================================
// Character Types
// ============================================
export interface Character {
  id: number;
  name: string;
  portrait_path?: string;
  occupation?: string;
  age?: number | null;
  status?: string;
  phrases?: string[];
  gender?: string;
  birthdate?: string | null;
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

