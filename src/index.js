import greetUser from '../src/cli.js';
import readlineSync from "readline-sync";

const userName = greetUser()
let usersAnswer = readlineSync.question("Your answer: ");


function checkAnswer(usersAnswer, correctAnswer) {
    let counter = 0;
    while (counter < 3) {

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
}