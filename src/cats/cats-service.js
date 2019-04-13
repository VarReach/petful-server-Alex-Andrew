const { cats } = require('./store-cats');

//normally you would store these in a DB, and just pull the 5 most recent. This attempts to emulate that.
const ADOPTED_CATS_LIMIT = 5;

const catsService = {
  addAdoptedCat(name, human) {
    const data = {
      name,
      adoptedBy: human,
    }
    const newCat = cats.find(item => item.name === data.name);
    console.log(data)
    newCat.adoptedBy = data.adoptedBy;
  },
};

module.exports = catsService;