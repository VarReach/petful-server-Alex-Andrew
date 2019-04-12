const express = require('express');
const userQueue = require('./store-users');
const uuid = require('uuid/v4');

const usersRouter = express.Router();
const bodyParser = express.json();

usersRouter
  .route('/')
  .post(bodyParser, (req, res, next) => {
    const { userName } = req.body; 
    userQueue.enqueue(userName);
    return res.status(201).json(userName);
  })
  .delete((req, res, next) => {
    const user = userQueue.dequeue();
    if(user === null){
      return res.sendStatus(204).json({ message: 'No users in queue'});
    }
    return res.sendStatus(204);
  });
usersRouter
  .route('/:userName')
  .get((req, res, next) => {
    if(userQueue.first === null){
      return res.status(404).json({ message: 'User does not exist'});
    }
    let current = userQueue.first;
    let index = 0;
    while(current !== null){
      index++
      if(current.value === req.params.userName){
        return res.json(index);
      }
      current = current.next
    }
    return res.status(404).json({ message: 'User does not exist'});
  })

module.exports = usersRouter;


// /users
// POST, DELETE

// /users/:userId/status
// GET
