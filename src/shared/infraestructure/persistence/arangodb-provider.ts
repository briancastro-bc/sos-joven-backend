import 'reflect-metadata';
import { Database } from 'arangojs';
import { injectable } from 'inversify';

import { Provider } from '@shared/domain/persistence/provider'
import { Configuration } from '@shared/infraestructure/config/config';

@injectable()
export class ArangoDBProvider implements Provider<Database> {

  private readonly _database: Database;

  constructor() {
    this._database = new Database({
      url: Configuration.get<string>('ARANGO_DB_URL'),
      databaseName: Configuration.get<string>('ARANGO_DB_NAME'),
      auth: {
        username: Configuration.get<string>('ARANGO_DB_USERNAME'),
        password: Configuration.get<string>('ARANGO_DB_PASSWORD'),
      },
    });
  }

  get database(): Database {
    return this._database;
  }
}