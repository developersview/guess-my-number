'use strict';

let score = 20;
let secret = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        // when there is no input
        displayMessage('⛔ No Number!');
    } else if (guess === secret) {
        // when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayMessage('🎉Correct Number');
        document.querySelector('.number').textContent = secret;
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secret) {
        if (score > 1) {
            displayMessage(guess > secret ? '📈 Too High' : '📉 Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!..😐');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
});