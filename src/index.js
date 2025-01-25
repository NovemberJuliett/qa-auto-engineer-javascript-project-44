import greetUser from '../src/cli.js';

const userName = greetUser()

export function getRandomNumber(min=0, max=100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkAnswer(usersAnswer, correctAnswer) {
    let counter = 0;
    while (counter < 3) {
        if (usersAnswer !== correctAnswer){
            return `${usersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
            Let's try again, ${userName} !`
        }
        else {
            counter++
            console.log("Correct!");
        }
    }
    return (`Congratulations,${userName}!`);
}
