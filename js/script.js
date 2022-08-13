'use strict';

let score = 20;
let secret = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        // when there is no input
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secret) {
        // when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').textContent = '🎉Correct Number';
        document.querySelector('.number').textContent = secret;
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secret) {
        // when guess is too high
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!..😐';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secret) {
        // when guess is too low
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!..😐';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
});