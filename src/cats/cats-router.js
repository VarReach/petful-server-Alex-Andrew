const express = require('express');
const catQueue = require('../store-cats');

const catsRouter = express.Router();

catsRouter.route('/').get((req, res, next) => {
    const cat = catQueue.dequeue();
    console.log(catQueue, cat);
    return res.status(200).json(catQueue.dequeue());
})

module.exports = catsRouter;