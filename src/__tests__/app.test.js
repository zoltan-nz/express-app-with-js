const request = require('supertest');
const app = require('../app');

it('exists', () => {
  expect(app).toBeDefined();
});

it('hides x-powered-by', async () => {
  const response = await request(app).get('/');

  expect(response.get('x-powered-by')).toBeUndefined();
});
