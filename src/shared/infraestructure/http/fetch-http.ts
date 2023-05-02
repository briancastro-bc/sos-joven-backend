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
    const { url, body, } = parameters;
    return this.http.put(url, body);
  }

  async post<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, body, } = parameters;
    return this.http.post(url, body);
  }

  async patch<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, body, } = parameters;
    return this.http.patch(url, body);
  }

  async delete<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, } = parameters;
    return this.http.delete(url);
  }
}