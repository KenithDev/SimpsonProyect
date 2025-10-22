import type { AxiosInstance } from "axios";
import axios, { type AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios';


/**
 * Configuración del cliente HTTP para la API de Los Simpsons
 */
class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.sampleapis.com/simpsons',
      timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  /**
   * Configurar interceptores de request y response
   */
  private setupInterceptors(): void {
    // Request interceptor
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Aquí puedes agregar tokens de autenticación si es necesario
        // config.headers.Authorization = `Bearer ${token}`;
        
        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error: AxiosError) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log(`✅ API Response: ${response.config.url} - Status: ${response.status}`);
        return response;
      },
      (error: AxiosError) => {
        this.handleError(error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Manejo centralizado de errores
   */
  private handleError(error: AxiosError): void {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error('❌ API Error Response:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
      });

      switch (error.response.status) {
        case 400:
          console.error('Bad Request: Verifica los parámetros enviados');
          break;
        case 401:
          console.error('No autorizado: Verifica tu autenticación');
          break;
        case 404:
          console.error('No encontrado: El recurso no existe');
          break;
        case 500:
          console.error('Error del servidor: Intenta más tarde');
          break;
        default:
          console.error('Error desconocido');
      }
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      console.error('❌ No Response:', error.request);
    } else {
      // Algo sucedió al configurar la petición
      console.error('❌ Request Setup Error:', error.message);
    }
  }

  /**
   * Obtener la instancia de axios configurada
   */
  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

// Exportar una única instancia del cliente
export const apiClient = new ApiClient().getInstance();
export default apiClient;

