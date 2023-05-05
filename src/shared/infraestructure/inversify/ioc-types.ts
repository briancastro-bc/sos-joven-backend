import { IoC } from '@shared/domain/index.ts';

import { OAuthRepository } from '@oauth/infraestructure/repository/oauth-repository.ts';
import { WinstonLogger } from '@shared/infraestructure/logger/winston.logger';

export const IOC_TYPES: IoC = {
  logger: {
    symbol: Symbol('WinstonLogger'),
    value: WinstonLogger,
    type: Symbol('Logger'),
  },
  oauthRepository: { 
    symbol: Symbol('OAuthRepository'), 
    value: OAuthRepository,
    type: Symbol('OAuth'),
  },
}