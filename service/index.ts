const express = require('express');

const app = express();
const port = 3000;

app.use('/api', (request: any, response: any, next: any) => {
  response.send('api');
  next();
});

app.listen(port, () => {
  console.log(`Service listening on port ${port}`);
});
