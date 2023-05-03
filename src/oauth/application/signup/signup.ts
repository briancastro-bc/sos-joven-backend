import { IOAuthRepository } from '@oauth/domain/oauth-repository.ts';

export async function signup(
  user: any,
  oauthRepository: IOAuthRepository,
): Promise<any> {
  return await oauthRepository.signup(user);
}