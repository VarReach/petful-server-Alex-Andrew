const express = require('express');
const dogQueue = require('./store-dogs');
const dogsService = require('./dogs-service');

const dogsRouter = express.Router();

dogsRouter
  .route('/')
  .all((req, res, next) => {
    const dog = dogQueue.first;
    if (!dog) {
      return res.status(404).json({ message: 'No dogs left in queue' });
    }
    req.dog = dog.value;
    next();
  })
  .get((req, res, next) => {
    return res.status(200).json(req.dog);
  })
  .delete((req, res, next) => {
    dogQueue.dequeue();
    if (req.dog) {
      dogsService.addAdoptedDog(req.dog);
    }
    return res.sendStatus(204);
  });

module.exports = dogsRouter;