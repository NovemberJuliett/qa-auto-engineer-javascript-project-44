import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from "../src/index.js";

console.log('Answer "yes" if the number is even, otherwise answer "no". ');
console.log("Question: " + getRandomNumber());


let usersAnswer = readlineSync.question("Your answer: ");
let correctAnswer = (getRandomNumber % 2 === 0) ? "yes" : "no";

console.log(checkAnswer(usersAnswer, correctAnswer))

