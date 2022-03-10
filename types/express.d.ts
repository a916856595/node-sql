import { IExtra } from './extra';

export interface IExRequest {
  extra: IExtra;
}

export interface IExResponse {

}

export type NextType = () => void;