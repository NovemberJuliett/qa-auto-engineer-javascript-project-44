import greetUser from '../src/cli.js';
import readlineSync from "readline-sync";

const userName = greetUser()

export function gameRounds(generateQuestion) {
    let counter = 0;
    while (counter < 3) {
        let gameSet = generateQuestion()
        console.log("Question: " + gameSet.gameQuestion)
        let usersAnswer = readlineSync.question("Your answer: ");
        if (gameSet.answerType === "number") {
            usersAnswer = Number(usersAnswer);
        }
        if (usersAnswer !== gameSet.rightAnswer) {
            console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${gameSet.rightAnswer}.`)
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





