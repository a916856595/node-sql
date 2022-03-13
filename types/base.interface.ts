// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type RequestType = 'get' | 'post';

export interface IResponse {
  status: number;
  message: string;
  result?: AnyType;
}

export interface IPathConfig {
  path: string;
  file: string;
  method: RequestType;
}
