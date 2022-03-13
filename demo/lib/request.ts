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

  get(url: string, parameters?: object) {
    let requestUrl = url;
    if (this.baseURL && !requestUrl.startsWith('http://') && !requestUrl.startsWith('https://')) {
      requestUrl = this.baseURL + requestUrl;
    }
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
      headers: this.headers,
    })
  }

  post(url: string, parameters?: object) {

  }
}

class Request implements IRequest {
  create(requestOptions?: IRequestOptions): IRequestInstance {
    return new RequestInstance(requestOptions);
  }
}

export default new Request();
