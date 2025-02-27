import greetUser from '../src/cli.js';
import readlineSync from "readline-sync";
import {generateRandomNumber} from "../bin/brain-even.js";

const userName = greetUser()

export function gameRounds(generator) {
    let counter = 0;
    while (counter < 3) {
        let question = generator()
        console.log("Question: " + question.number)
        let usersAnswer = readlineSync.question("Your answer: ");
        if (usersAnswer !== question.result) {
            console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${question.result}.`)
            console.log(`Let's try again, ${userName} !`)
            return false;
        } else {
            counter++
            console.log("Correct!");
        }
    }
    if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
    }
}





