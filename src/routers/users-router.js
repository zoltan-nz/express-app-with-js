const { Router } = require('express');
const respondWithResource = require('../controllers/users-controller');

const usersRouter = Router();

usersRouter.get('/users', respondWithResource);

module.exports = usersRouter;
