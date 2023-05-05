import { Controller } from '@shared/infraestructure/index.ts';
import { provideSingleton, inject, IOC_TYPES } from '@shared/infraestructure/index.ts';

import { login } from '@oauth/application/login/login.ts';
import { signup } from '@oauth/application/signup/signup.ts';
import { OAuth } from '@oauth/domain/oauth-repository.ts';

@provideSingleton(OAuthController)
export class OAuthController extends Controller {

  constructor(
    @inject(IOC_TYPES.oauthRepository.symbol as symbol) private readonly oauthRepository: OAuth,
  ) {
    super();
  }

  async login(username: string, password: string): Promise<boolean> {
    const result = await login(username, password, this.oauthRepository);
    return true;
  }

  async signup(user: any): Promise<boolean> {
    const result = await signup(user, this.oauthRepository);
    return true;
  }
}