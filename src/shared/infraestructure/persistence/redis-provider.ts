import { createClient } from 'redis';

import { Provider } from '@shared/domain/persistence/provider';

export class RedisDBProvider implements Provider<any> {

  private readonly _database: any;

  constructor() {
    this._database = createClient();
  }

  get database(): any {
   return this._database;
  }
}