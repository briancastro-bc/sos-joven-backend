import { HttpParams, HttpResponse } from './http.ts';

export interface HttpRepository {
  get<T>(parameters: HttpParams): Promise<HttpResponse<T>>;

  put<T>(parameters: HttpParams): Promise<HttpResponse<T>>;

  post<T>(parameters: HttpParams): Promise<HttpResponse<T>>;

  patch<T>(parameters: HttpParams): Promise<HttpResponse<T>>;

  delete<T>(parameters: HttpParams): Promise<HttpResponse<T>>;
}