import express, { Request, Response, NextFunction } from 'express';
import apiRouter, { rootPath as apiRouterPath } from './router/api';
import requestMiddleware from './middleware/request';
import responseMiddleware from './middleware/response';

const app = express();
const port = 3000;

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});

app.use(requestMiddleware);

app.use(apiRouterPath, apiRouter);

app.use(responseMiddleware);

app.listen(port, () => {
  console.log(`Service listening on port ${port}`);
});
