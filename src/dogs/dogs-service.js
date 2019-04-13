const { dogs } = require('./store-dogs');

const dogsService = {
  addAdoptedDog(name, adoptedBy) {
    console.log(name, adoptedBy);
    const newDog = dogs.find(item => item.name === name);
    newDog.adoptedBy = adoptedBy;
  }
};

module.exports = dogsService;