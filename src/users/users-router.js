const express = require('express');
const userQueue = require('./store-users');
const uuid = require('uuid/v4');

const { removeUserFromQueue } = require('../Helpers/Queue');

const usersRouter = express.Router();
const bodyParser = express.json();

usersRouter
  .route('/')
  .post(bodyParser, (req, res, next) => {
    const { user_name } = req.body;
    userQueue.enqueue(user_name);
    return res.status(201).json({user_name});
  })
  .delete((req, res, next) => {
    const user = userQueue.dequeue();
    if(user === null){
      return res.status(404).json({ message: 'No users in queue'});
    }
    return res.sendStatus(204);
  });

usersRouter
  .route('/:userName')
  .all((req, res, next) => {
    if(userQueue.first === null){
      return res.status(404).json({ message: 'User does not exist'});
    }
    req.user_name = req.params.userName.replace('%20', ' ');
    next();
  })
  .get((req, res, next) => {
    let current = userQueue.first;
    let index = 0;
    while(current !== null){
      index++;
      if(current.value === req.user_name){
        return res.json(index);
      }
      current = current.next;
    }
    return res.status(404).json({ message: 'User does not exist'});
  });

module.exports = usersRouter;


// /users
// POST, DELETE

// /users/:userId/status
// GET
