import express from 'express';
import pathConfig from './pathConfig';
import { IPathConfig } from '../../../types/base.interface';
import path from 'path';

const apiRouter = express.Router();

pathConfig.forEach((pathConfigItem: IPathConfig) => {
  const { path: pathString, file, method } = pathConfigItem;
  apiRouter[method](pathString, require(path.join(__dirname, file)).default);
});

export default apiRouter;

export { rootPath } from './pathConfig';
