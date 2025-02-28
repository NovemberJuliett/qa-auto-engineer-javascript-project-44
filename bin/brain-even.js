import {gameRounds} from "../src/index.js";

console.log('Answer "yes" if the number is even, otherwise answer "no". ');

export function generateRandomNumber(min=0, max=100){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isEven() {
    let number = generateRandomNumber();
    return {
        gameQuestion: number,
        rightAnswer: number % 2 === 0 ? "yes" : "no",
        answerType:"string"
    };
}

gameRounds(isEven)








