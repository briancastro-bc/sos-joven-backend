import ws from 'ws';
import dotenv from 'dotenv';
import path from 'node:path';
import http from 'node:http';
import { Server } from 'socket.io';
import express, { Application } from 'express';

import { initializeContainer, Configuration } from '@shared/infraestructure';
import handleApplicationRoutes from '@shared/infraestructure/routes';
import handleApplicationMiddlewares from '@shared/infraestructure/middlewares';

dotenv.config({
  path: `${path.resolve(path.join(process.cwd(), '..'), '.env')}`
});

async function bootstrap(): Promise<void> {
  const app: Application = express();
  const PORT: number | string = Configuration.get<string>('PORT', 3001);

  const httpServer = http.createServer(app);

  const io = new Server(httpServer, {
    wsEngine: ws.Server,
    connectTimeout: 120000,
    cors: {
      origin: '*',
      credentials: true
    },
  });

  handleApplicationMiddlewares(app);
  handleApplicationRoutes(app);
  // handleNamespaces(io);

  httpServer.listen(PORT, () => {
    // winstonLogger.info(`Server running on port: ${PORT}`);
    console.log(`Server running on port ${PORT}`);
  });
}

async function init(): Promise<void> {
  return initializeContainer()
    .then(bootstrap);
}

init()
  .catch((err: any) => console.error(`Error: ${err}`));