import readlineSync from 'readline-sync';
import {getRandomNumber, checkAnswer} from "../src/index.js";

let number = getRandomNumber()
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

while (true) {
    console.log("Question: " + number);
    let isEven = (number % 2 === 0) ? "yes" : "no";
    if (checkAnswer(isEven)) {
        number = getRandomNumber();
    } else {
        break;
    }
}


