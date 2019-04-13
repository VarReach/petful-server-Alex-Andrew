const { dogs } = require('./store-dogs');

//normally you would store these in a DB, and just pull the 5 most recent. This attempts to emulate that.
const ADOPTED_DOGS_LIMIT = 5;

const dogsService = {
  addAdoptedDog(name, adoptedBy) {
    console.log(name, adoptedBy);
    const newDog = dogs.find(item => item.name === name);
    newDog.adoptedBy = adoptedBy;
  }
};

module.exports = dogsService;