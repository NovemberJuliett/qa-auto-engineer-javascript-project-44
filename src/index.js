import greetUser from '../src/cli.js';
import readlineSync from "readline-sync";

const userName = greetUser()

export function getRandomNumber(min=0, max=100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getGameLogic(gameQuestion, correctAnswer) {
    let counter = 0;
    while (counter < 3) {
        console.log("Question: " + gameQuestion)
        let usersAnswer = readlineSync.question("Your answer: ");
        if (usersAnswer !== correctAnswer){
            console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
            console.log(`Let's try again, ${userName} !`)
            break
        }
        else {
            console.log("Correct!");
            counter++;
        }
    }
    return `Congratulations, ${userName}!`;

}
