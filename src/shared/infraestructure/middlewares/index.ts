import compression from 'compression';
import { 
  json, 
  Application, 
  Request, 
  Response, 
  NextFunction, 
} from "express";

export default function(app: Application): void {

  const limitRequests = async (req: Request, res: Response, next: NextFunction) => {
    return next();
  }

  app
    .use(json())
    .use(compression())
    .use(limitRequests);
}