import Request from './lib/request';

const request = Request.create({
  baseURL: 'http://localhost:3000',
});

const exampleContrast = {
  test: function() {
    request.get('/api/test', { key: 123 })
      .then((result: any) => {
        console.log('r', result);
      })
  }
}

Object.entries(exampleContrast).forEach((elementIdAndHandler: [string, () => void]) => {
  const [elementId, handler] = elementIdAndHandler;
  document.querySelector('#' + elementId).addEventListener('click', handler);
});
