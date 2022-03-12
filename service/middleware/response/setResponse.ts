import { Response } from 'express';
import { IExRequest } from '../../../types/express.interface';

const setResponse = (request: IExRequest, response: Response) => {
  const { status, message, result } = request.extra.getResponse();
  response.status(status);
  response.json({ message, result });
};

export default setResponse;