import {
  AnyType,
  IResponse,
} from './base.interface';

export interface IExtra {
  setResult: (result: AnyType) => this;
  getResult: () => AnyType;
  setBody: (status: number, message: string) => this;
  getResponse: () => IResponse;
}
