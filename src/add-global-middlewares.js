const { json } = require('body-parser');

/**
 * @param {import('express').Express} app
 * @return {import('express').Express}
 */
const addGlobalMiddlewares = app => {
  app.use(json());

  return app;
};

module.exports = addGlobalMiddlewares;
