import { OAuth } from "@oauth/domain/oauth-repository.ts";

export async function login(
  username: string, 
  password: string,
  oauthRepository: OAuth
): Promise<any> {
  return await oauthRepository.login(username, password);
}