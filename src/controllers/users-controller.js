/** @type {import('express').RequestHandler} */
const respondWithResource = (req, res, next) => res.send('respond with a resource');

module.exports = respondWithResource;
