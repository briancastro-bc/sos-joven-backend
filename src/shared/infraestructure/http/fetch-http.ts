import { HttpParams, HttpRepository, HttpResponse } from "@src/shared/domain/index.ts";

export class FetchClientHttp implements HttpRepository {

  async get<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, queryParams, } = parameters;
    const fetchResponse = await fetch(url, {
      method: 'GET'
    });
    const response: HttpResponse<T> = {
      url,
      body: fetchResponse.body as T,
      status: fetchResponse.status,
      success: fetchResponse.status <= 399 ? true : false,
      statusText: fetchResponse.statusText,
      headers: fetchResponse.headers,
    }
    return response;
  }

  async put<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    throw new Error("Method not implemented");
  }

  async post<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    throw new Error("Method not implemented");
  }

  async patch<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    throw new Error("Method not implemented");
  }

  async delete<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    throw new Error("Method not implemented");
  }
}