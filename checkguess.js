    // checkGuess.js

export function checkGuess(guess, target) {
    if (guess < target) {
        return 'O número é maior.';
    } else if (guess > target) {
        return 'O número é menor.';
    } else {
        return 'Parabéns! Você acertou!';
    }
}
