import axios, { type AxiosInstance } from "axios";
// ... (puedes dejar tus interceptores, están bien)

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL ,
      timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (typeof (this as any).setupInterceptors === "function") {
      (this as any).setupInterceptors(); // ¡Esto está bien!
    }
  }


  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

export const apiClient = new ApiClient().getInstance();
export default apiClient;

