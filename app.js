'use strict';
let number = document.querySelector('.secret-number');
let inputOfGuess = document.querySelector('.guess');
let checkBtn = document.querySelector('.btn-checker');
let message = document.querySelector('.message');
let againBtn = document.querySelector('.again');
let score = document.querySelector('.score');
let trials = 6;
let randomNumGen = Math.ceil(Math.random() * 6);

// logic function
function gamer(e) {
  e.preventDefault();
  let body = document.body.style;
  // if guesssed higher
  if (!inputOfGuess.value) {
    message.textContent = 'You must input a number';
  } else if (Number(inputOfGuess.value) > randomNumGen) {
    if (trials > 1) {
      message.textContent = 'You Guessed Higher';
      body.backgroundColor = 'blue';
      trials--;
      score.textContent = trials;
    } else {
      message.textContent = 'Ouch, You Lost';
      score.textContent = 0;
    }

    // if guesssed lower
  } else if (Number(inputOfGuess.value) < randomNumGen) {
    if (trials > 1) {
      message.textContent = 'You Guessed Lower';
      body.backgroundColor = 'yellow';
      trials--;
      score.textContent = trials;
    } else {
      message.textContent = 'Ouch, You Lost';
      score.textContent = 0;
    }
  } else if (Number(inputOfGuess.value) === randomNumGen) {
    message.textContent = 'Correct, You Won!';
    body.backgroundColor = 'green';
    number.textContent = randomNumGen;
  }
}

checkBtn.addEventListener('click', gamer);

// game reset function
againBtn.addEventListener('click', function () {
  let body = document.body.style;
  randomNumGen = Math.ceil(Math.random() * 6);
  trials = 6;
  message.textContent = 'Start guessing...';
  score.textContent = trials;
  number.textContent = '?';
  inputOfGuess.value = '';
  body.backgroundColor = 'red';
});
