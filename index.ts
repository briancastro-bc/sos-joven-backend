
import { bootstrap } from '@src/server.ts';
import { winstonLogger } from '@shared/infraestructure/index.ts';

bootstrap()
  .catch((err: any) => winstonLogger.error(`Error: ${err}`));