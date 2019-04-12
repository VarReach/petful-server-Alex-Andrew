const { Queue } = require('../Helpers/Queue');

const cats = [
  {
    imageUrl:
        'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
    imageDescription: 'A brown and black kitten wearing a bowtie',
    name: 'Mittens',
    sex: 'Female',
    age: 1,
    breed: 'Abyissinian',
    story:
        'Mittens is done with the corporate life and wants a home with a cardboard box that she can relax in.'
  },
  {
    imageUrl: 'https://cdn.britannica.com/67/197567-131-1645A26E.jpg',
    imageDescription: 'A wide-eyed, white cat with gleaming yellow eyes',
    name: 'Robert',
    sex: 'Male',
    age: 4,
    breed: 'Persian Cat',
    story:
        'Hailing from the world of Hungarian dance, Robert wants a home that loves to dance as much as he does!'
  },
  {
    imageUrl:
        'https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.1080x0_q100_crop-scale.jpg',
    imageDescription:
        'An older, white and grey cat about to eat an ice cream cone',
    name: 'Baskin',
    sex: 'Female',
    age: 3,
    breed: 'Ragdoll',
    story:
        'An ice cream franchise owner, no more! Baskin will melt your heart quicker than ice cream in an Atlanta summer.'
  },
  {
    imageUrl:
        'https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/02/640/320/1862/1048/kitten-iStock.jpg?ve=1&tl=1?ve=1&tl=1',
    imageDescription: 'An orange kitten with green eyes',
    name: 'Marsden',
    sex: 'Male',
    age: 1,
    breed: 'Manx',
    story:
        'Marsden comes from Brooklyn. He loves pizza, hip-hop and hugs from people!'
  },
  {
    imageUrl:
        'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fa4b9db4764a8ae2cd84aedf5851564b5%2F0%2Faggressive-kitten-picture-id855025366',
    imageDescription: 'A grey, shrieking kitten',
    name: 'Boo',
    sex: 'Male',
    age: 2,
    breed: 'Burmese',
    story:
        'Boo is a strong, independent former prize fighter who is looking for an owner with personality to match!'
  },
  {
    imageUrl:
        'https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2734_balinese-460x290.jpg',
    imageDescription: 'A balinese cat with a white background',
    name: 'Ara',
    sex: 'Female',
    age: 5,
    breed: 'Malinese',
    story:
        'This brave cat stowed away on a cargo ship (we think). Up to date with all vaccinations.'
  },
  {
    imageUrl:
        'http://www.thai-siamois.com/_Media/10334386_524582370979646_59.jpeg',
    imageDescription: 'A suphalak cat lounging on some sand',
    name: 'Rebecca',
    sex: 'Female',
    age: 2,
    breed: 'Suphalak',
    story:
        'This outdoor cat wants a second family to pamper them. Just don\'t tell their original family.'
  },
  {
    imageUrl:
        'http://myfavpet.com/wp-content/uploads/2017/04/Snowshoe-cat1.jpg',
    imageDescription: 'A brown, black and white snowshoe cat',
    name: 'Rocky',
    sex: 'Male',
    age: 4,
    breed: 'Snowshoe',
    story:
        'This cat never blinks. Or, at least, we\'ve never seen it blink. Apparently that creeped the last owner out a little bit.'
  },
  {
    imageUrl:
        'http://s3.amazonaws.com/assets.prod.vetstreet.com/ca/02/b34e009f4d1cb4373d971d5c4be6/Manx-AP-1VQIW7-590lc050813.jpg',
    imageDescription: 'An orange and white furred manx cat outdoors',
    name: 'Timber',
    sex: 'Male',
    age: 6,
    breed: 'Manx',
    story:
        'This cat was taken away from his previous owners because they kept feeding him lasagna.'
  },
  {
    imageUrl:
        'https://www.mascotarios.org/wp-content/uploads/2011/08/highlander.jpg',
    imageDescription: 'A young highlander kitten',
    name: 'Max',
    sex: 'Female',
    age: 0.2,
    breed: 'Highlander',
    story:
        'We swear this cat sounds just like Sean Connery. It\'s a mystery as to why he was given up for adoption'
  }
];

const catQueue = new Queue();

cats.forEach(cat => {
  catQueue.enqueue(cat);
});

module.exports = {catQueue, cats};
