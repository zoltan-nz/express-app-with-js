const rootRouter = require('./routers/root-router');
const usersRouter = require('./routers/users-router');

/**
 * @param {import('express').Express} app
 * @return {import('express').Express}
 */
const addRouters = app => {
  app.use(rootRouter);
  app.use(usersRouter);

  return app;
};

module.exports = addRouters;
