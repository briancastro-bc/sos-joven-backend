import { injectable } from 'inversify';

import { OAuth } from '@oauth/domain/oauth-repository.ts';

@injectable()
export class OAuthRepository implements OAuth {

  public async login(username: string, password: string): Promise<boolean> {
    throw new Error("Method not implemented");
  }

  public async signup(user: any): Promise<boolean> {
    throw new Error("Method not implemented");
  }

  public async logout(): Promise<boolean> {
    throw new Error("Method not implemented");
  }

  public async passwordRecovery(): Promise<boolean> {
    throw new Error("Method not implemented");
  }
  
  public async createToken(): Promise<any> {
    throw new Error("Method not implemented");
  }

  public async refreshToken(token: any): Promise<any> {
    throw new Error("Method not implemented");
  }
}