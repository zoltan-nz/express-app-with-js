const supertest = require('supertest');
const createExpressApp = require('./create-express-app');
const { Environment } = require('./models/environment');

it('should create an express app', () => {
  const app = createExpressApp(Environment.DEVELOPMENT);
  expect(app).toBeDefined();
  expect(app.get('env')).toEqual('development');
});

it('should setup the environment variable', () => {
  const app = createExpressApp(Environment.PRODUCTION);
  expect(app.get('env')).toEqual('production');
});

it('should hide x-powered-by header for security reason', async () => {
  const app = createExpressApp(Environment.TEST);
  app.get('/', (req, res) => res.json({}));

  const { status, headers } = await supertest(app).get('/');

  expect(status).toEqual(200);
  expect(headers['x-powered-by']).toBeUndefined();
});

it('should raise an error if unsupported environment passed', () => {
  expect(() => {
    createExpressApp('not-supported-environment');
  }).toThrowError('The given NODE_ENV value is not supported. Accepted values: development,test,production,staging');
});
