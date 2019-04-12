const express = require('express');
const userQueue = require('./store-users');
const uuid = require('uuid/v4');

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
  .get((req, res, next) => {
    if(userQueue.first === null){
      return res.status(404).json({ message: 'User does not exist'});
    }
    const user_name = req.params.userName.replace('%20', ' ');
    let current = userQueue.first;
    let index = 0;
    while(current !== null){
      index++
      if(current.value === user_name){
        return res.json(index);
      }
      current = current.next;
    }
    return res.status(404).json({ message: 'User does not exist'});
  })

module.exports = usersRouter;


// /users
// POST, DELETE

// /users/:userId/status
// GET
