import { generateRandomNumber } from './randomNumber.js';
import { checkGuess } from './checkguess.js';

const MAX_ATTEMPTS = 5;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function startGame() {
    const targetNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
    let attempts = 0;
    let guessedCorrectly = false;

    while (attempts < MAX_ATTEMPTS && !guessedCorrectly) {
        const userInput = prompt(`Tentativa ${attempts + 1}/${MAX_ATTEMPTS}. Adivinhe um número entre ${MIN_NUMBER} e ${MAX_NUMBER}:`);
        const guess = Number(userInput);

        if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
            console.log('Entrada inválida. Por favor, insira um número dentro do intervalo.');
            continue;
        }

        const result = checkGuess(guess, targetNumber);
        console.log(result);

        if (result === 'Parabéns! Você acertou!') {
            guessedCorrectly = true;
        }

        attempts++;
    }

    if (!guessedCorrectly) {
        console.log(`Você esgotou todas as tentativas. O número era ${targetNumber}.`);
    }
}

startGame();