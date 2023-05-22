import { Router, Request, Response } from 'express';

import { ioc } from '@shared/infraestructure/index.ts';

import { OAuthController } from '@oauth/infraestructure/controllers/oauth.controller.ts';

const router = Router({
  mergeParams: true,
  caseSensitive: true,
});

router.post('/token', async (req: Request, res: Response) => {
  // Do something
});

router.post('/login', async (req: Request, res: Response) => {

  const { username, password }: { username: string, password: string } = req.body;
  if(!username || !password) {
    return res.status(400).json({
      message: "Something went wrong",
      success: false,
    });
  }

  const controller = ioc.get<OAuthController>(OAuthController);
  const result = await controller.login(username, password);

  res.status(200).json({
    message: "Succesfully logged in",
    success: result,
  });
});

router.post('/signup', async (req: Request, res: Response) => {

  const { user }: { user: any} = req.body;
  if(!user) {
    return res.status(400).json({
      message: "Not pased user",
      success: false,
    });
  }

  const controller = ioc.get<OAuthController>(OAuthController);
  const result = await controller.signup(user);

  res.status(200).json({
    message: "Successfully signed up",
    success: result,
  });
});

router.post('/password-recovery', async (req: Request, res: Response) => {
  // Do something
});

export default router;
