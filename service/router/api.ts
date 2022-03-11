import express from 'express';
import requestMiddleware from '../middleware/request';

const apiRouter = express.Router();

apiRouter.use('/', requestMiddleware);

apiRouter.get('/data', (req, res, next) => {
  // @ts-ignore
  req.extra.setData({a: 123});
  // @ts-ignore
  res.send(req.extra.getData());
});

export default apiRouter;
