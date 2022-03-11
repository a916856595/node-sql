import { NextFunction } from 'express';
import { AnyType } from '../../../types/base.interface';
import { IExRequest, IExResponse } from '../../../types/express.interface';
import { IExtra } from '../../../types/extra.interface';

class Extra implements IExtra {
  private data: AnyType;

  public setData(data: AnyType) {
    this.data = data;
    return this;
  }

  public getData(): AnyType {
    return this.data;
  }
}

const setRequestMethods = (request: IExRequest, response: IExResponse, next: NextFunction): void => {
  request.extra = new Extra();
  next();
};

export default setRequestMethods;
