import axios, { Axios } from 'axios';

import { HttpParams, HttpRepository, HttpResponse } from '@shared/domain/index.ts'

export class AxiosHttpClient implements HttpRepository {

  private readonly http: Axios;

  constructor() {
    this.http = axios.create();
  }

  async get<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, queryParams, } = parameters;
    const axiosResponse = await this.http.get(url, { params: queryParams, });
    const response: HttpResponse<T> = {
      url,
      body: axiosResponse.data as T,
      status: axiosResponse.status,
      success: axiosResponse.status <= 399,
      statusText: axiosResponse.statusText,
      headers: axiosResponse.headers,
    };
    return response;
  }

  async put<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, body, } = parameters;
    const axiosResponse = await this.http.put(url, body);
    const response: HttpResponse<T> = {
      url,
      body: axiosResponse.data as T,
      status: axiosResponse.status,
      success: axiosResponse.status <= 399,
      statusText: axiosResponse.statusText,
      headers: axiosResponse.headers,
    };
    return response;
  }

  async post<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, body, } = parameters;
    return await this.http.post(url, body);
  }

  async patch<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, body, } = parameters;
    return await this.http.patch(url, body);
  }

  async delete<T>(parameters: HttpParams): Promise<HttpResponse<T>> {
    const { url, } = parameters;
    return await this.http.delete(url);
  }
}