const { Router } = require('express');
const sendServerIsRunning = require('../controllers/root-controller');

const rootRouter = Router();

rootRouter.get('/', sendServerIsRunning);

module.exports = rootRouter;
