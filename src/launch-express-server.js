const listEndpoints = require('express-list-endpoints');
const { createServer } = require('http');

/**
 * @enum {string}
 * @readonly
 */
const ErrorCode = Object.freeze({
  inUse: 'EADDRINUSE',
  noAccess: 'EACCES',
  sigInt: 'SIGINT'
});

const portAlreadyInUse = port => {
  console.error(`Port ${port} is already in use`);
  process.exit(1);
};

const noAccessToPort = port => {
  console.error(`No access to port ${port}`);
  process.exit(1);
};

const onError = (exception, portNumber) => {
  if (exception.syscall !== 'listen') throw exception;

  switch (exception.code) {
    case ErrorCode.inUse:
      portAlreadyInUse(portNumber);
      break;
    case ErrorCode.noAccess:
      noAccessToPort(portNumber);
      break;
    default:
      throw exception;
  }
};

/**
 * @param {import('http').Server} server
 */
const onListening = server => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
  console.log(`Server started and listening on ${bind}`);
};

const shutDownServer = server => {
  console.log('Shutting down server');
  server.close(() => {
    console.log('Server shut down');
    process.exit(0);
  });
};

/**
 * @param {import('express').Express} app
 * @param {string} port
 * @return {import('http').Server}
 */
const launchExpressServer = (app, port) => {
  const portNumber = parseInt(port, 10);
  app.set('port', portNumber);

  const server = createServer(app);

  process.on(ErrorCode.sigInt, () => shutDownServer(server));
  server.on('error', err => onError(err, portNumber));
  server.on('listening', () => onListening(server));

  console.log(app.settings);
  console.log(listEndpoints(app));

  server.listen(portNumber);
  return server;
};

module.exports = launchExpressServer;
