import readlineSync from 'readline-sync';
import {checkAnswer, gameRounds} from "../src/index.js";

console.log('Answer "yes" if the number is even, otherwise answer "no". ');

export function getRandomNumber(min=0, max=100){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let isEven = (getRandomNumber() % 2 === 0) ? "yes" : "no";

gameRounds(getRandomNumber(), isEven)