
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(): void {
    let score = 0;
    let round = 1;

    function playRound(): void {
        const randomNumber = generateRandomNumber(1, 100);

        rl.question(`Round ${round}. Guess the number between 1 and 100: `, (answer) => {
            const guess = parseInt(answer);

            if (guess === randomNumber) {
                console.log(`Congratulations! You guessed the correct number: ${randomNumber}`);
                score++;
            } else {
                console.log(`Incorrect guess. The correct number was: ${randomNumber}`);
            }

            round++;

            if (round <= 5) {
                playRound();
            } else {
                endGame(score);
            }
        });
    }

    playRound();
}

function endGame(score: number): void {
    console.log(`Game over. Your final score is: ${score}`);
    rl.close();
}

console.log('Welcome to the Number Guessing Game!');
startGame();