const { Queue } = require('../Helpers/Queue');

const dogs = [
  {
    imageUrl:
      'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
    imageDescription: 'A tan, derpy pug with his tongue sticking out',
    name: 'Stephen',
    sex: 'Male',
    age: 2,
    breed: 'Pug',
    story:
      'This handsome man was once a tenured University professor who is now looking for a new home.'
  },
  {
    imageUrl:
      'https://eb8.petinsurance.com/-/media/all-phz-images/2016-images-breeds-850/greyhound850.jpg',
    imageDescription:
      'A grey and white greyhound staring off into the distance',
    name: 'Stella',
    sex: 'Female',
    age: 3,
    breed: 'Greyhound',
    story:
      'Once a racecar driver and pitstop technician, this greyhound is looking for love in all the right places.'
  },
  {
    imageUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/6/asset/buzzfeed-prod-web13/sub-buzz-24434-1468407414-1.png?downsize=700:*&output-format=auto&output-quality=auto',
    imageDescription: 'An orange and black haired corgi smiling',
    name: 'Corgilicious',
    sex: 'Female',
    age: 5,
    breed: 'Corgi',
    story:
      'This confident little lady loves to stay at home and watch Sopranos.'
  },
  {
    imageUrl:
      'https://www.thesprucepets.com/thmb/UGZpTl4N27XY8JppKyNzyqvKDa0=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/16_Love-5bb4c12bc9e77c00263933b3.jpg',
    imageDescription: 'A grey and black German Shepherd puppy',
    name: 'Maximillian',
    sex: 'Male',
    age: 2,
    breed: 'German Shepherd',
    story: 'Max loves pets, snuggles and WWII historical fiction.'
  },
  {
    imageUrl:
      'https://i0.wp.com/grapevine.is/wp-content/uploads/Leifturs-Platina-7months_Gunnur-Sif-Sigurgeirsdottir.jpg?fit=780%2C460&quality=99&ssl=1',
    imageDescription: 'A light tan whippet mid stride through a field',
    name: 'Charles',
    sex: 'Male',
    age: 3,
    breed: 'Whippet',
    story:
      'Charles, a former Navy SEAL and green beret, is blindingly fast and will steal your heart just as quickly!'
  },
  {
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2660/2782/products/IMG_5229_1024x1024.jpg?v=1547617723',
    imageDescription:
      'Black mini-poodle sitting on a wood floor with a string of paper hearts in the background',
    name: 'Oreo',
    sex: 'Male',
    age: 3,
    breed: 'Poodle',
    story:
      'Previous owner was a spy and was KIA. But we probably shouldn\'t be telling you that...'
  },
  {
    imageUrl:
      'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F818521%252F5809666d-8a76-4631-9de2-3f1cfda9ac52.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=ij6Fj5f799AVltttFUiI96gxYaA=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com',
    imageDescription: 'Black lab lounging on some grass',
    name: 'Mikey',
    sex: 'Male',
    age: 7,
    breed: 'Black Lab',
    story:
      'Retired from a successful career as a soccer player, now looking for a great home.'
  },
  {
    imageUrl: 'https://www.k9web.com/wp-content/uploads/2019/01/shiba-inu.jpg',
    imageDescription:
      'Shiba Inu sitting on grass with a tennis ball in his lap',
    name: 'Mai',
    sex: 'Female',
    age: 1,
    breed: 'Shiba Inu',
    story:
      'Former ramen shop owner. Now hiding from the Yakuza. Looking for her dream home.'
  },
  {
    imageUrl:
      'http://2.bp.blogspot.com/-jKQ4Z-r-knI/UGp1M_C9UGI/AAAAAAAARj0/nmAFnCJ720c/s1600/Alaska+Malamute.JPG',
    imageDescription: 'Malamute sitting gracefully in some snow next to a tree',
    name: 'Bruno',
    sex: 'Male',
    age: 5,
    breed: 'Malamute',
    story:
      'Former professional sled dog who was injured saving his home from an epidemic.'
  },
  {
    imageUrl:
      'http://www.petpaw.com.au/wp-content/uploads/2014/03/American-Foxhound-2-1030x772.jpg',
    imageDescription:
      'A baby foxhound looking at the camera with puppy-dog eyes',
    name: 'Sally',
    sex: 'Female',
    age: 1,
    breed: 'Foxhound',
    story:
      'This young puppy was abandoned because his acting-mother was a fox, and now he acts like one.'
  }
];

const dogQueue = new Queue();

dogs.forEach(dog => {
  dogQueue.enqueue(dog);
});

module.exports = { dogQueue, dogs};
