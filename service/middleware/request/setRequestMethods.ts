import { NextFunction } from 'express';
import {
  AnyType,
  IResponse,
} from '../../../types/base.interface';
import { IExRequest, IExResponse } from '../../../types/express.interface';
import { IExtra } from '../../../types/extra.interface';

class Extra implements IExtra {
  private result: AnyType = undefined;

  private status = 200;

  private message = 'success';

  public setResult(result: AnyType) {
    this.result = result;
    return this;
  }

  public getResult(): AnyType {
    return this.result;
  }

  public setBody(status?: number, message?: string): this {
    if (status !== undefined) this.status = status;
    if (message !== undefined) this.message = message;
    return this;
  }

  public getResponse(): IResponse {
    const response: IResponse = {
      status: this.status,
      message: this.message,
    };
    if (this.result !== undefined) {
      response.result = this.result;
    }
    return response;
  }
}

const setRequestMethods = (request: IExRequest, response: IExResponse, next: NextFunction): void => {
  request.extra = new Extra();
  next();
};

export default setRequestMethods;
