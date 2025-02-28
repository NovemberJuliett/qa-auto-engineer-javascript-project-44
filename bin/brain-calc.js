import {gameRounds} from "../src/index.js";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
}

console.log('What is the result of the expression?');

export function calculateResult() {
    let operatorsList = ["+", "-", "*"];
    const min = 0;
    const max = 30;
    let firstNumber = getRandomNumber(min, max);
    let secondNumber = getRandomNumber(min, max);
    let operator = getRandomOperator(operatorsList);
    let rightAnswer;
    switch (operator) {
        case "+":
            rightAnswer = firstNumber + secondNumber;
            break;
        case "-":
            rightAnswer = firstNumber - secondNumber;
            break;
        case "*":
            rightAnswer = firstNumber * secondNumber;
            break;
    }
    return {
        gameQuestion: `${firstNumber} ${operator} ${secondNumber}`,
        rightAnswer: rightAnswer,
        answerType:"number"
        }
    }

gameRounds(calculateResult)