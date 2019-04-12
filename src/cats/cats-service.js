const { queueSize } = require('../Helpers/Queue');
const adoptedCats = require('./store-adopted-cats');

//normally you would store these in a DB, and just pull the 5 most recent. This attempts to emulate that.
const ADOPTED_CATS_LIMIT = 5;

const catsService = {
  addAdoptedcat(cat, human) {
    this.keepAdoptedcatsUnderLimit();
    const data = {
      ...cat,
      adoptedBy: human,
    }
    adoptedCats.enqueue(data);
  },
  keepAdoptedcatsUnderLimit() {
    const size = queueSize(adoptedcats);
    if (size >= ADOPTED_CATS_LIMIT) {
      adoptedCats.dequeue();
    }
  }
};

module.exports = catsService;