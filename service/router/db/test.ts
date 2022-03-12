import { Response, NextFunction } from 'express';
import { IExRequest } from '../../../types/express.interface';

const test = (request: IExRequest, response: Response, next: NextFunction) => {
  request.extra.setResult('test data');
  next();
};

export default test;