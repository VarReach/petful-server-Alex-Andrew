const express = require('express');
const { catQueue } = require('./store-cats');
const catsService = require('./cats-service');
const xss = require('xss');
const catsRouter = express.Router();
const bodyParser = express.json();
const { cats } = require('./store-cats');

catsRouter
  .route('/')
  .all((req, res, next) => {
    const cat = catQueue.first;
    if (!cat) {
      return res.status(200).json({ message: 'No cats left in queue' });
    }
    req.cat = cat.value;
    next();
  })
  .get((req, res, next) => {
    return res.status(200).json(req.cat);
  })
  .delete(bodyParser, (req, res, next) => {
    catQueue.dequeue();
    if (req.cat) {
      catsService.addAdoptedCat(req.body.name, req.body.user_name);
    }
    return res.sendStatus(204);
  });
catsRouter.route('/all')
  .get((req, res, next) => {
    return res.status(200).json(cats);
  });

module.exports = catsRouter;