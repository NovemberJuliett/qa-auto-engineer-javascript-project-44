import {gameRounds} from "../src/index.js";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Find the greatest common divisor of given numbers.');

export function calculateGCD(){
    const min = 0;
    const max = 100;
    let firstNumber = getRandomNumber(min, max);
    let secondNumber = getRandomNumber(min, max);
}

let numOne = 23
let numTwo = 10

while (numOne !== 0 || numTwo !== 0){
    if (numOne > numTwo){
        numOne = numOne % numTwo
    }
    else{
        numTwo = numTwo % numOne
    }
    console.log(numOne + numTwo)
}