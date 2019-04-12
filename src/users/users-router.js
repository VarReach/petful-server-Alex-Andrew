const express = require('express');
const userQueue = require('./store-users');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .post((req, res, next) => {
    return res.status(200).json(req.user);
  })
  .delete((req, res, next) => {
    const user = userQueue.first;
    if (user.id !== req.params.id) {
      return res.status(404).json({ message: 'User not found '});
    }
    userQueue.dequeue();
    return res.sendStatus(204);
  });

module.exports = usersRouter;


// /users
// POST, DELETE

// /users/:userId/status
// GET
