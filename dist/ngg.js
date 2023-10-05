"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startGame() {
    let score = 0;
    let round = 1;
    function playRound() {
        const randomNumber = generateRandomNumber(1, 100);
        rl.question(`Round ${round}. Guess the number between 1 and 100: `, (answer) => {
            const guess = parseInt(answer);
            if (guess === randomNumber) {
                console.log(`Congratulations! You guessed the correct number: ${randomNumber}`);
                score++;
            }
            else {
                console.log(`Incorrect guess. The correct number was: ${randomNumber}`);
            }
            round++;
            if (round <= 5) {
                playRound();
            }
            else {
                endGame(score);
            }
        });
    }
    playRound();
}
function endGame(score) {
    console.log(`Game over. Your final score is: ${score}`);
    rl.close();
}
console.log('Welcome to the Number Guessing Game!');
startGame();
