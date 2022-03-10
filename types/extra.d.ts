import { AnyType } from './base';

export interface IExtra {
  setData: (data: AnyType) => this;
  getData: () => AnyType;
}