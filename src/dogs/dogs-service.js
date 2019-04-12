const { queueSize } = require('../Helpers/Queue');
const adoptedDogs = require('./store-adopted-dogs');

//normally you would store these in a DB, and just pull the 5 most recent. This attempts to emulate that.
const ADOPTED_DOGS_LIMIT = 5;

const dogsService = {
  addAdoptedDog(dog, human) {
    this.keepAdoptedDogsUnderLimit();
    const data = {
      ...dog,
      adoptedBy: human,
    }
    adoptedDogs.enqueue(data);
  },
  keepAdoptedDogsUnderLimit() {
    const size = queueSize(adoptedDogs);
    if (size >= ADOPTED_DOGS_LIMIT) {
      adoptedDogs.dequeue();
    }
  }
};

module.exports = dogsService;