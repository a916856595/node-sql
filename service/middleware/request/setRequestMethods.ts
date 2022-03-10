import { AnyType } from '../../../types/base';
import { IExRequest, IExResponse, NextType } from '../../../types/express';
import { IExtra } from '../../../types/extra';

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

const setRequestMethods = (request: IExRequest, response: IExResponse, next: NextType): void => {
  request.extra = new Extra();
  next();
};

export default setRequestMethods;