// check-ts

const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const errorHandler = require('errorhandler');

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.disable('x-powered-by');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => next(createError(404)));
app.use(errorHandler);

module.exports = app;
