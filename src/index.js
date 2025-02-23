import greetUser from '../src/cli.js';
import readlineSync from "readline-sync";

const userName = greetUser()

export function checkAnswer(correctAnswer) {
    let usersAnswer = readlineSync.question("Your answer: ");
    if (usersAnswer !== correctAnswer) {
        console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
        console.log(`Let's try again, ${userName} !`)
    } else {
        return true;
    }
}

export function gameRounds(question, answer) {
    let counter = 0
    while (counter < 3) {
        console.log("Question: " + question)
        checkAnswer(answer)
        if (answer) {
            console.log("Correct!")
            counter++
        } else {
            break;
        }
    if (counter === 3) {
       return `Congratulations, ${userName}!`;
        }
    }
}





