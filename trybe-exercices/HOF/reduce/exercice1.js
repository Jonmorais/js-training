const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const newArray = arrays.reduce((acc, curr) => {
  return acc.concat(curr);
},[])

function flatten() {
  return newArray;
}

console.log(flatten())

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
