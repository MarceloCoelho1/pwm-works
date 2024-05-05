const form = document.querySelector('form');
const guessInput = document.querySelector('.guess-input');
const resultsContainer = document.querySelector('.results')


form.addEventListener('submit', handleSubmit);
let iterations = 1;
let randomNumber;

function handleSubmit(e) {
    e.preventDefault();
    const guess = guessInput.value;

    const showResultsDiv = document.querySelector('.show-results').cloneNode(true);

    const iterationsSpan = showResultsDiv.querySelector('.iterations');
    iterationsSpan.textContent = iterations;

    const guessSpan = showResultsDiv.querySelector('.guess');
    guessSpan.textContent = guess;

    if (iterations === 1) {
        randomNumber = start();
    }

    const result = verifyGuess(randomNumber, guess);

    const bullsDiv = showResultsDiv.querySelector('.bulls');
    const bullsSpan = bullsDiv.querySelector('span:last-child');
    bullsSpan.textContent = result.bulls;

    const cowsDiv = showResultsDiv.querySelector('.cows');
    const cowsSpan = cowsDiv.querySelector('span:last-child');
    cowsSpan.textContent = result.cows;

    resultsContainer.appendChild(showResultsDiv);

    if (result.bulls === 4) {
        console.log('Parabéns! Você acertou o número!');
        endGame();
    }

    guessInput.value = '';
    iterations++;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function formatNumber(number) {
    return number.toString().padStart(4, '0');
}

function endGame() {
    const resultDivs = resultsContainer.querySelectorAll('.show-results');
    
    for (let i = 1; i < resultDivs.length; i++) {
        resultDivs[i].remove();
    }

    iterations = 1;
}

function start() {
    let randomNumber = getRandomNumber(0, 10000);
    randomNumber = formatNumber(randomNumber);
    console.log(randomNumber);
    return randomNumber;
}

function verifyGuess(randomNumber, guess) {
    let bulls = 0;
    let cows = 0;

    const randomNumberDigits = randomNumber.split('');
    const guessDigits = guess.split('');

    for (let i = 0; i < 4; i++) {
        if (randomNumberDigits[i] === guessDigits[i]) {
            bulls++;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (randomNumberDigits.includes(guessDigits[i]) && randomNumberDigits[i] !== guessDigits[i]) {
            cows++;
        }
    }

    return { bulls, cows };
}