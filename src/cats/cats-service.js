const { queueSize } = require('../Helpers/Queue');
const adoptedCats = require('./store-adopted-cats');
const { cats } = require('./store-cats');

//normally you would store these in a DB, and just pull the 5 most recent. This attempts to emulate that.
const ADOPTED_CATS_LIMIT = 5;

const catsService = {
  addAdoptedCat(cat, human) {
    this.keepAdoptedCatsUnderLimit();
    const data = {
      ...cat,
      adoptedBy: human,
    }
    const newCat = cats.find(item => item.name === data.name);
    newCat.adoptedBy = data.adoptedBy;
  },
  keepAdoptedCatsUnderLimit() {
    const size = queueSize(adoptedCats);
    if (size >= ADOPTED_CATS_LIMIT) {
      adoptedCats.dequeue();
    }
  }
};

module.exports = catsService;