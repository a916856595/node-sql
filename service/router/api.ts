import express from 'express';
import requestMiddleware from '../middleware/request';
import { IExRequest } from '../../types/express.interface';
import { Response, NextFunction } from 'express';

const apiRouter = express.Router();

apiRouter.use('/', requestMiddleware);

apiRouter.get('/data', (request: IExRequest, response: Response, next: NextFunction) => {
  request.extra.setData({a: 456});
  response.send(request.extra.getData());
});

export default apiRouter;
