const { createServer } = require('net');
const express = require('express');
const launchExpressServer = require('./launch-express-server');

/**
 *
 * @param {number} port
 * @returns {Promise<number>}
 */
function getPort (port = 3456) {
  const server = createServer();
  return new Promise((resolve, reject) =>
    server
      .on('error', error => (error.code === 'EADDRINUSE' ? server.listen(++port) : reject(error)))
      .on('listening', () => server.close(() => resolve(port)))
      .listen(port)
  );
}

describe('createExpressServer', () => {
  it('should start a server', async () => {
    const app = express();
    const port = await getPort();
    const server = launchExpressServer(app, port);
    expect(server.listening).toEqual(true);
    expect(app.get('port')).toEqual(port);
    await server.close();
  });
});
