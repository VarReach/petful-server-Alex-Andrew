const express = require("express");
const { catQueue } = require("./store-cats");
const catsService = require("./cats-service");
const { cats } = require('./store-cats');
const xss = require("xss");

const catsRouter = express.Router();
const bodyParser = express.json();

catsRouter
  .route("/")
  .all((req, res, next) => {
    const cat = catQueue.first.value;
    if (!cat) {
      return res.status(200).json({ message: "No cats left in queue" });
    }
    req.cat = cat;
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
    return res.status(200).json(cats)
  })
module.exports = catsRouter;
