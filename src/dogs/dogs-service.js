const { dogs } = require('./store-dogs');

//normally you would store these in a DB, and just pull the 5 most recent. This attempts to emulate that.
const ADOPTED_DOGS_LIMIT = 5;

const dogsService = {
  addAdoptedDog(dog, human) {
    const data = {
      dog,
      adoptedBy: human,
    }
    const newDog = dogs.find(item => item.name === data.dog);
    newDog.adoptedBy = data.adoptedBy;
  }
};

module.exports = dogsService;