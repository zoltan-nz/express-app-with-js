#!/usr/bin/env node
const errorHandler = require('errorhandler');
const listEndpoints = require('express-list-endpoints');

const createExpressApp = require('../create-express-app');
const addGlobalMiddlewares = require('../add-global-middlewares');
const addRouters = require('../add-routers');
const { Environment } = require('../models/environment');
const createExpressServer = require('../create-express-server');

(() => {
  const { NODE_ENV, PORT } = process.env;
  if (!NODE_ENV) throw Error(`Please setup NODE_ENV environment variable. Valid values: ${Environment}`);
  if (!PORT) throw Error('Please setup PORT environment variable');

  const app = createExpressApp(NODE_ENV);

  addGlobalMiddlewares(app);
  addRouters(app);

  if (app.get('env') === Environment.DEVELOPMENT) {
    app.use(errorHandler());
    console.info(listEndpoints(app));
  }

  createExpressServer(app, PORT);
})();
