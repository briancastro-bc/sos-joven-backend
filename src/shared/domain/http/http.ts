
export interface HttpHeaders {
  [key: string]: any;
}

export interface HttpQueryParams {
  [key: string]: string | number | boolean;
}

export interface HttpParams {
  url: string;
  body?: any;
  timeout?: number;
  headers?: HttpHeaders;
  queryParams?: HttpQueryParams;
}

export interface HttpResponse<T> {
  body: T;
  url: string;
  status: number;
  success: boolean;
  statusText: string;
  headers?: HttpHeaders;
}