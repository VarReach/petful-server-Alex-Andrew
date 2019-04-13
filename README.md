# Pet-O-Rama 5001

An app by Alex Reich and Andrew Bituin.

## Intro

Pet-O-Rama 5001 is an app that helps connect pets who are up for adoption with their future forever homes!
We want all pets at Pet-O-Rama 5001 to find a home. With that in mind, we've designed our app so that the cats and dogs who have arrived first at our animal shelter have first priority in the adoption process. As such, pets that are first in line must be adopted before any other pets can be selected
for adoption. This ensures all of our lovely pets find a home as quick as possible. Similarly, as a user, you will be put into a queue behind other users in the order of registration. 

### Live Demo

https://andrew-alex-petful.now.sh/

### Documented Endpoints

/api/cat
    GET returns the cat first in the queue
    DELETE dequeues the first cat in the queue

/api/cat/adopted
    GET returns all cats who have been slotted for adoption

/api/dog
    GET returns the dog first in the queue
    DELETE dequeues the first dog in the queue

/api/dog/adopted
    GET returns all dogs who have been slotted for adoption

/api/users
    POST adds a user to the users' queue
    DELETE removes the first user from the queue

/api/users/:userName
    GET returns the position of the user in the queue given the userName 

### Tech Stack
Node.js, Express
