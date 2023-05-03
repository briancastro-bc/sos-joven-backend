import ws from 'ws';
import http from 'node:http';
import express, { Application } from 'express';
import { Server } from 'socket.io';

import { initializeContainer, winstonLogger } from './shared/infraestructure';

async function bootstrap(): Promise<void> {
  const app: Application = express();
  const PORT: number | string = process.env.PORT as string || 3000;

  const httpServer = http.createServer(app);

  const io = new Server(httpServer, {
    wsEngine: ws.Server,
    transports: ['websocket'],
    connectTimeout: 120000,
    cors: {
      origin: '*',
      credentials: true
    },
  });

  io.on('connection', (socket) => {
    socket.on("hello", () => {
      console.log('world');
    })
  });

  httpServer.listen(PORT, () => {
    winstonLogger.info(`Server running on port: ${PORT}`);
  });
}

async function init(): Promise<void> {
  initializeContainer()
    .then(bootstrap);
}

init()
  .catch((err: any) => winstonLogger.error(`Error: ${err}`));