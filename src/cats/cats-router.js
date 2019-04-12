const express = require("express");
const { catQueue } = require("./store-cats");
const catsService = require("./cats-service");
const adoptedCats = require("./store-adopted-cats");
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
      catsService.addAdoptedCat(req.cat, req.body.userName);
    }
    return res.sendStatus(204);
  });

  catsRouter.route('/all')
  .get((req, res, next) => {
    return res.status(200).json(cats)
  })

catsRouter.route("/adopted").get((req, res, next) => {
  if (adoptedCats.first === null) {
    return res.status(200).json({ message: "No adopted cats. Adopt now!" });
  }
  const serializedQueue = {...adoptedCats};
  let current = serializedQueue.first;
  while (current !== null) {
    current = {
      ...current,
      value: {
        ...current.value,
        adoptedBy: xss(current.value.adoptedBy)
      }
    };
    current = current.next;
  }
  return res.status(200).json(serializedQueue);
});
module.exports = catsRouter;
