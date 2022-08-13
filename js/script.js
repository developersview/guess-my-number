'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';
document.querySelector('.number').textContent = 17;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let score = 20;
const secret = Math.trunc(Math.random() * 20) + 1;

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