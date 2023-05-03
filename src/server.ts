import ws from 'ws';
import http from 'node:http';
import express, { Application } from 'express';
import { Server } from 'socket.io';

import { initializeContainer, winstonLogger } from '@shared/infraestructure';

import { handleRoutes, handleNamespaces, handleGlobalMiddlewares } from '@src/handlers';

async function bootstrap(): Promise<void> {
  const app: Application = express();
  const PORT: number | string = process.env.PORT as string || 3000;

  const httpServer = http.createServer(app);

  const io = new Server(httpServer, {
    wsEngine: ws.Server,
    connectTimeout: 120000,
    cors: {
      origin: '*',
      credentials: true
    },
  });

  handleGlobalMiddlewares(app);
  handleRoutes(app);
  handleNamespaces(io);

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