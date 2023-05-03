import { Repository } from "@shared/domain/index.ts";

export interface IOAuthRepository extends Repository<any> {
  signup(user: NonNullable<any>): Promise<boolean>;

  login(username: NonNullable<string>, password: NonNullable<string>): Promise<boolean>;

  logout(): Promise<boolean>;

  passwordRecovery(): Promise<boolean>;

  createToken(): Promise<any>;

  refreshToken(token: NonNullable<any>): Promise<any>
}