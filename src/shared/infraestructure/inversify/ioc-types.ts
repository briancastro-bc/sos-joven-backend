import { IoC } from '@shared/domain/index.ts';

import { OAuthRepository } from '@oauth/infraestructure/repository/oauth-repository.ts';

export const IOC_TYPES: IoC = {
  oauthRepository: { 
    symbol: Symbol('OAuthRepository'), 
    value: OAuthRepository,
    type: Symbol('IOAuthRepository'),
  },
}