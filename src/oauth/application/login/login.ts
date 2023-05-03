import { IOAuthRepository } from "@oauth/domain/oauth-repository.ts";

export async function login(
  username: string, 
  password: string,
  oauthRepository: IOAuthRepository
): Promise<any> {
  return await oauthRepository.login(username, password);
}