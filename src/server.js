const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const catsRouter = require('./cats/cats-router');
const dogsRouter = require('./dogs/dogs-router');
const usersRouter = require('./users/users-router');
const { NODE_ENV, CLIENT_ORIGIN, PORT } = require('./config');

const app = express();

const morganSetting = (NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganSetting));
app.use(helmet());
app.use(cors({ 
  origin: CLIENT_ORIGIN
}));

app.use('/api/cat', catsRouter);
app.use('/api/dog', dogsRouter);
app.use('/api/users', usersRouter);
// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log('Serving on 8080');
});