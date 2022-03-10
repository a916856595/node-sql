import apiRouter from './router/api';

const express = require('express');

const app = express();
const port = 3000;

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Service listening on port ${port}`);
});
