// const action = require('./add');
const {sub, add} = require('./add'); // if you neew any specific function

// console.log(action); { add: [Function: add], sub: [Function: sub] }

// console.log(action.add(2,4));
// console.log(action.sub(5,100));

console.log(sub(2,4));
console.log(add(2,3));

