/**
 * Supported application environments
 * @readonly
 * @enum {string}
 */
const Environment = {
  TEST: 'test',
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production'
};

/** @type {(Environment|string)[]} */
const supportedEnvironments = [Environment.DEVELOPMENT, Environment.TEST, Environment.PRODUCTION, Environment.STAGING];

module.exports = {
  Environment,
  supportedEnvironments
};
