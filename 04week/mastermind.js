'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';                                            //set global variable #0
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {        //pass in guess to generate hint #2
  // your code here
  let guessArray = guess.split('');                 //create arrays that slit up passed in arguments #2.1
  let solutionArray = solution.split('');           //create arrays that slit up passed in arguments #2.1
  let correctLetterLocations = 0;                   //determine correct letter locations #2.2
  for (let i = 0; i<solutionArray.length; i++) {
      if (solutionArray[i] == guessArray[i]){
        correctLetterLocations += 1;
        solutionArray[i] = null;
  } 
}
let correctLetters = 0;                             //determine correct letters #2.3
for (let n=0; solutionArray.length > n; n++){
  let targetIndex = guessArray.indexOf([solutionArray[n]]);
  if (targetIndex > -1){
    correctLetters += 1;
    solutionArray[n] = null;
  }
}

let hint = correctLetterLocations + "-" + correctLetters; //determine hint #2.4
console.log(hint);
return hint;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if (guess === solution) {                       //add guess #3
    console.log('You guessed it!')                       //if guess is equal to solution then return you guessed it #1
  } else {
    generateHint(solution, guess);
    console.log('try again');
    board += 1;
  }
  if (board.length >= 10) {                       //end game #4
    console.log('You ran out! The solution was: ${solution}');
    return;
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint(solution, 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint(solution, 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
