import { AnyType } from './base.interface';

export interface IExtra {
  setData: (data: AnyType) => this;
  getData: () => AnyType;
}
