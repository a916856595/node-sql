import { AnyType } from '../../types/base.interface';

interface IHeader { [key: string]: string }

interface IRequestInstance {
  get: (url: string, parameters?: object) => any;
  post: (url: string, parameters?: object) => any;
}

interface IRequestOptions {
  headers?: IHeader;
  baseURL?: string;
}

interface IRequest {
  create: (options: IRequestOptions) => IRequestInstance;
}

class RequestInstance {
  private headers: IHeader = {};
  private baseURL: string = '';

  constructor(requestOptions: IRequestOptions = {}) {
    const { headers, baseURL } = requestOptions;
    if (headers) this.headers = { ...headers };
    if (baseURL) this.baseURL = baseURL;
  }

  private getMergedUrl(url: string) {
    let requestUrl = url;
    if (this.baseURL && !requestUrl.startsWith('http://') && !requestUrl.startsWith('https://')) {
      requestUrl = this.baseURL + requestUrl;
    }
    return requestUrl;
  }

  private getPostBody(parameters: object, options: AnyType) {
    if (parameters !== undefined) {
      const fieldName = 'Content-Type';
      const contentType = options && options.headers && options.headers[fieldName] || this.headers[fieldName];
      if (!contentType || contentType.startsWith('application/json')) {
        return JSON.stringify(parameters);
      }
    }
    return parameters;
  }

  get(url: string, parameters?: object) {
    let requestUrl = this.getMergedUrl(url);
    if (parameters) {
      const hasParams = requestUrl.includes('?');
      const joinSymbol = hasParams ? (requestUrl.endsWith('&') ? '' : '&') : '?';
      let paramsString = '';
      Object.entries(parameters).forEach((keyAndValue: [string, string], index: number) => {
        const firstSymbol = index === 0 ? '' : '&';
        const [key, value] = keyAndValue;
        paramsString += `${firstSymbol}${key}=${value}`;
      });
      requestUrl += joinSymbol + paramsString;
    }
    return fetch(requestUrl, {
      method: 'GET',
      headers: this.headers,
    });
  }

  post(url: string, parameters?: AnyType, options: AnyType = {}) {
    const requestUrl = this.getMergedUrl(url);
    return fetch(requestUrl, {
      method: 'POST',
      headers: this.headers,
      body: this.getPostBody(parameters, options) as AnyType,
    });
  }
}

class Request implements IRequest {
  create(requestOptions?: IRequestOptions): IRequestInstance {
    return new RequestInstance(requestOptions);
  }
}

export default new Request();
