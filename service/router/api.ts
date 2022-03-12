import express, { Response, NextFunction } from 'express';
import requestMiddleware from '../middleware/request';
import { IExRequest } from '../../types/express.interface';
import responseMiddleware from '../middleware/response';
import pathConfig from './pathConfig';
import { IPathConfig } from '../../types/base.interface';
import path from 'path';

const apiRouter = express.Router();

apiRouter.use(requestMiddleware);

pathConfig.forEach((pathConfigItem: IPathConfig) => {
  const { path: pathString, file, method } = pathConfigItem;
  apiRouter[method](pathString, require(path.join(__dirname, file)).default);
});

apiRouter.use(responseMiddleware);

export default apiRouter;
