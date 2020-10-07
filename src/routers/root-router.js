const { Router } = require('express');
const sendExpressTitle = require('../controllers/root-controller');

const rootRouter = Router();

rootRouter.get('/', sendExpressTitle);

module.exports = rootRouter;
