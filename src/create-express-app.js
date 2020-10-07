const express = require('express');
const { supportedEnvironments } = require('./models/environment');

/**
 * @param {Environment | string} environment
 * @returns {import('express').Express}
 */
const createExpressApp = environment => {
  if (!supportedEnvironments.includes(environment)) {
    throw new TypeError(`The given NODE_ENV value is not supported. Accepted values: ${supportedEnvironments}`);
  }

  const app = express();

  app.set('env', environment);
  app.disable('x-powered-by');

  return app;
};

module.exports = createExpressApp;
