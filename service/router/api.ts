const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/data', (req: any, res: any, next: any) => {
  res.send('data');
});

export default apiRouter;
