import http, { 
  Server as HttpServer 
} from 'node:http';
import express, { 
  Application 
} from 'express';
import { Server as IOServer } from 'socket.io';
import { Container } from 'inversify';

import { winstonLogger } from '@shared/infraestructure/index.ts';

export async function bootstrap(): Promise<void> {
  const app: Application = express();
  const PORT: number | string = process.env.PORT as string || 3000;

  const httpServer: HttpServer = http.createServer(app);

  const io: IOServer = new IOServer(httpServer, {
    path: 'io',
    serveClient: true,
    connectTimeout: 120000,
    cors: {
      origin: '*',
      credentials: true
    }
  });

  // io.on('connection', bootstrapGateways);

  httpServer.listen(PORT, () => {
    winstonLogger.info(`Server running on port: ${PORT}`);
  });
}