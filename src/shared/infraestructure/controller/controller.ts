import 'reflect-metadata';
import { injectable } from 'inversify';

import { HttpHeaders } from '@src/shared/domain/index.ts';

@injectable()
export class Controller {

  private _headers: HttpHeaders | undefined;

  get headers(): HttpHeaders | undefined {
    return this._headers;
  }

  set headers(value: HttpHeaders | undefined) {
    this._headers = value;
  }
}