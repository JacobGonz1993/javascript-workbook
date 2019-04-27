'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
// Your code here
stacks[endStack].push(stacks[startStack].pop());
//take last item from an array and place it at the end of a different array
//is the piece we're moving the last item in its array
//check for win at the end of move

}
function isValid(startStack,endStack) {
  let newStart = startStack.toLowerCase().trim();
  let newEnd = endStack.toLowerCase().trim();
  if(newStart == "a" || newStart == 'b' || newStart == 'c' && newEnd == 'a' || newEnd == 'b' || newEnd == 'c') {
    return true;
  } else {
    return false;
  }
}

function isLegal(startStack, endStack) {
  //is the piece we're moving smaller than the last item in the array we're moving to
  //is the piece we're moving the last item in its array
  //must take pieces from stack of pieces length > 0
  //start stack same as end stack is illegal
  // Your code here
  let startArray = stacks[startStack];
  let endArray = stacks[endStack];
if (startStack != endStack && startArray.length > 0) {
  if (endArray.length === 0 || endArray[endArray.length-1]>startArray[startArray.length-1]) {
    return true
  } else return false
} else {
  console.log('Invalid move')
  return false
  } 
}

function checkForWin() {
  // Your code here
  //length of tower b or c is equal to 4
if(stacks.b.toString() == '4,3,2,1' || stacks.c.toString() == '4,3,2,1'){
  console.log('You Win!');
  return true;
} else return false;
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  //check to see if move is legal
  //return either true or false
  //if yes, execute move, if not, 'try again'
  //check for win
  if (isValid(startStack, endStack)) {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      checkForWin()
    } else return false;
  } else {
    console.log('Invalid Input');}
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
      towersOfHanoi('b', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2,1] });
    });
    it('should not be ableto move a block', () => {
      towersOfHanoi('b', 'a');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2,1] });
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2,1] });
      towersOfHanoi('b', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2,1] });
    });
  });
  describe('#movePiece()', () => {
    it( 'should move the piece', () => {
      stacks = {
        a: [4,3,2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
      stacks = {
        a: [4,3],
        b: [1],
        c: [2]
      };
      assert.equal(isLegal('b', 'c'), true);
    });
    it( 'should not move the piece', () => {
      stacks = {
        a: [4,3],
        b: [1],
        c: [2]
      };
      assert.equal(isLegal('a', 'c'), false);
      stacks = {
        a: [4,3],
        b: [],
        c: [2,1]
      };
      assert.equal(isLegal('b', 'c'), false);
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
      stacks = {
        a: [4,3],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('a', 'c'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
      stacks = {
        a: [4,3],
        b: [],
        c: [2,1]
      };
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = {a: [], b: [], c: [4,3,2,1] }; //added
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [4,3,2,1], b: [], c: [] }; //added
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}



