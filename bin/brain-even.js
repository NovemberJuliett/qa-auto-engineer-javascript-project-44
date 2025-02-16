import readlineSync from 'readline-sync';
import {getRandomNumber, getGameLogic} from "../src/index.js";

console.log('Answer "yes" if the number is even, otherwise answer "no". ');

let number = getRandomNumber()
let isEven = (number % 2 === 0) ? "yes" : "no";

getGameLogic(number, isEven)
