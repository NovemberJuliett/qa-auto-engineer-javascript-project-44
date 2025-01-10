import readlineSync from 'readline-sync';
import greetUser from "../src/cli.js";

const min = 0;
const max = 100;
const userName = greetUser()

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let counter = 0;

while (counter < 3) {
    let randomNumber = getRandomNumber(min, max);
    console.log("Question: " + randomNumber);
    console.log('Answer "yes" if the number is even, otherwise answer "no". ');

    let usersAnswer = readlineSync.question("Your answer: ");
    let correctAnswer = (randomNumber % 2 === 0) ? "yes" : "no";

    if (usersAnswer === correctAnswer) {
        console.log("Correct!");
        ++counter
    } else {
        console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log("Let's try again,", userName + "!")
        break
    }
}

console.log("Congratulations", userName + "!");
