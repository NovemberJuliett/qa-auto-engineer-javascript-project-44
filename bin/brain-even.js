import {gameRounds} from "../src/index.js";

console.log('Answer "yes" if the number is even, otherwise answer "no". ');

export function generateRandomNumber(min=0, max=100){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isEven(number){
    return (number % 2 === 0) ? "yes" : "no"
}

let random_number = generateRandomNumber()



console.log("Question: " + random_number)

if (isEven){
    console.log(gameRounds(isEven()))
}






