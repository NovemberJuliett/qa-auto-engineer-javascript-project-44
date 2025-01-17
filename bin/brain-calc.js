import readlineSync from 'readline-sync';
import greetUser from "../src/cli.js";

const min = 0;
const max = 20;
const userName = greetUser()

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
}

let operatorsList = ["+", "-", "*"];
let counter = 0;

let firstNumber = getRandomNumber(min, max);
let secondNumber = getRandomNumber(min, max);
let randomOperator = getRandomOperator(operatorsList);
console.log('What is the result of the expression?');
console.log("Question:", firstNumber, randomOperator, secondNumber);

let correctAnswer;
switch (randomOperator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
}
console.log(correctAnswer)
let usersAnswer = Number(readlineSync.question("Your answer: "));
if (usersAnswer === correctAnswer){
    console.log("Correct!");
}
else {
    console.log("Bad guy")
}