const listEndpoints = require('express-list-endpoints');

const onError = error => {
  console.error(error);
  throw error;
};
const onListening = data => {
  console.info(data);
};

/**
 * @param {import('express').Express} app
 * @param {string} port
 * @return {import('http').Server}
 */
const createExpressServer = (app, port) => {
  const portNumber = parseInt(port, 10);
  app.set('port', portNumber);

  const httpServer = app.listen(portNumber);

  app.on('error', onError);
  app.on('listening', onListening);

  console.log(app.settings);
  console.log(listEndpoints(app));

  return httpServer;
};

module.exports = createExpressServer;
