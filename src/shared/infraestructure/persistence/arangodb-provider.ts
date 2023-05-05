import { Database } from 'arangojs';
import { injectable } from 'inversify';

import { Provider } from '@shared/domain/persistence/provider'
import { Configuration } from '@shared/infraestructure/config/config';

@injectable()
export class ArangoDBProvider implements Provider<Database> {

  private readonly _database: Database;

  constructor() {
    this._database = new Database({
      databaseName: Configuration.get<string>('ARANGO_DB_NAME'),
    });
  }

  get database(): Database {
    return this._database;
  }
}