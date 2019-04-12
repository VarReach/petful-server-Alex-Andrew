const express = require('express');
const dogQueue = require('./store-dogs');
const dogsService = require('./dogs-service');

const dogsRouter = express.Router();
const bodyParser = express.json();

dogsRouter
  .route('/')
  .all((req, res, next) => {
    const dog = dogQueue.first;
    if (!dog) {
      return res.status(200).json({ message: 'No dogs left in queue' });
    }
    req.dog = dog.value;
    next();
  })
  .get((req, res, next) => {
    return res.status(200).json(req.dog);
  })
  .delete(bodyParser, (req, res, next) => {
    dogQueue.dequeue();
    if (req.dog) {
      dogsService.addAdoptedDog(req.dog, req.body.userName);
    }
    return res.sendStatus(204);
  });

module.exports = dogsRouter;