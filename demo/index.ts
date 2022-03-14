import Request from './lib/request';

const request = Request.create({
  baseURL: 'http://localhost:3000',
});

const exampleContrast = {
  'test-get': () => {
    request.get('/api/test', { key: 123 })
      .then((result: any) => {
        console.log('get', result);
      });
  },
  'test-post': () => {
    request.post('/api/test', { key: 123 })
      .then((result: any) => {
        console.log('post', result);
      });
  },
};

Object.entries(exampleContrast).forEach((elementIdAndHandler: [string, () => void]) => {
  const [elementId, handler] = elementIdAndHandler;
  document.querySelector(`#${elementId}`).addEventListener('click', handler);
});
