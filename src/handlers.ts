import compression from 'compression';
import express, { Application } from "express";
import { Server } from "socket.io";

import chatRouter from '@chat/infraestructure/routes/chat.routes';
import oauthRouter from '@oauth/infraestructure/routes/oauth.routes';

export function handleGlobalMiddlewares(app: Application): void {
  app.use(compression());
  app.use(express.json());
}

export function handleRoutes(app: Application): void {
  app.use('/api/chat', chatRouter);
  app.use('/api/oauth', oauthRouter);
}

export function handleNamespaces(io: Server): void {
  
}