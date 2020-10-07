/** @type {import('express').RequestHandler}} */
const sendServerIsRunning = (req, res, next) => res.json({ message: 'Server is running...' });

module.exports = sendServerIsRunning;
