'use strict';

const assert = require('assert');

function forEach(arr, callback) {
  // Your code here
}

function map(array, callback) {
  let newArray = [];
  for(let i=0; i < array.length; i++){
    let elements = callback(array[i]);
    newArray.push(elements);
  }
  return newArray;
  // Your code here
}
// const checkObject = [{price: 10},{price: 20},{price: 30}];
// const checkArray = [10, 20, 30];
// function reduce(array, accumulator) {
//     accumulator = accumulator || 0;
//     for (let index = 0; index < array.length; index++) {
//         if(typeof array[index] == 'number') {
//             accumulator = accumulator + array[index];
//         } else if(typeof array[index] == 'object') {
//             for(let i in array[index]){
//                 accumulator = accumulator + array[index][i];
//             }
//         }   
//     }
//     return accumulator;
// }
// const sum = reduce(checkArray, 10); // Set accumulator to 10
// console.log("ANSWER: ",sum);


function filter(arr, callback) {
  // Your code here
}

function some(arr, callback) {
  // Your code here
}

function every(arr, callback) {
  // Your code here
}

if (typeof describe === 'function') {
  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], (acc, num) => {
        return acc + num;
      });
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}
