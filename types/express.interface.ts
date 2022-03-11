import { Request, Response } from 'express';
import { IExtra } from './extra.interface';

export interface IExRequest extends Request {
  extra: IExtra;
}

export interface IExResponse extends Response{

}
