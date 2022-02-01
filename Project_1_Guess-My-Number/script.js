'use strict';

// let c = document.querySelector('.message').textContent;
// console.log(c);

// document.querySelector('.message').textContent = '🎉Corect number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// let v = document.querySelector('.guess').value;
// console.log(v);
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

btnCheck.addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);

  // When player is no input
  if (!guessValue) {
    // document.querySelector('.message').textContent = '🚫 No number!';
    displayMessage('🚫 No number!');

    // When player wins
  } else if (guessValue === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    if (hightscore < score) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      const m = (document.querySelector('.message').textContent =
        guessValue > secretNumber
          ? '📈 To hight number!'
          : '📉 To low number!');
      displayMessage(m);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = '😒 You lose the game!';
      displayMessage('😒 You lose the game!');
    }
  }

  // // When number to hight
  // else if (guessValue > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 To hight number!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😒 You lose the game!';
  //   }
  //   // When number to low
  // } else if (guessValue < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 To low number!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😒 You lose the game!';
  //   }
  // }
});
