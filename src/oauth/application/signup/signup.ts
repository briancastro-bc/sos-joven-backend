import { OAuth } from '@oauth/domain/oauth-repository.ts';

export async function signup(
  user: any,
  oauthRepository: OAuth,
): Promise<any> {
  return await oauthRepository.signup(user);
}