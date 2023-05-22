import { IoC } from '@shared/domain/index.ts';

import { WinstonLogger } from '@shared/infraestructure/logger/winston.logger';
import { OAuthRepository } from '@oauth/infraestructure/repository/oauth.repository';

export const IOC_TYPES: IoC = {
  WinstonLogger: {
    symbol: Symbol.for('WinstonLogger'),
    value: WinstonLogger,
    type: Symbol('Logger'),
  },
  OAuthRepository: { 
    symbol: Symbol('OAuthRepository'), 
    value: OAuthRepository,
    type: Symbol('OAuth'),
  },
}