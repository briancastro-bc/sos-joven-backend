import { Application, Router } from 'express';

import chatRouter from '@chat/infraestructure/routes/chat.routes';
import oauthRouter from '@oauth/infraestructure/routes/oauth.routes';

export default function(app: Application): void {

  const apiRouter = (): Router => {
    return Router({
      mergeParams: true,
      caseSensitive: true,
    })
      .use('/chat', chatRouter)
      .use('/oauth', oauthRouter)
  }

  app.use('/api', apiRouter());
}