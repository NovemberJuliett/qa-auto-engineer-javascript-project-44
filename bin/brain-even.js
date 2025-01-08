import readlineSync from 'readline-sync';
import greetUser from "../src/cli.js";

const min = 0;
const max = 100;
const userName = greetUser()

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random_number = getRandomNumber(min, max)
console.log("Question: " + random_number)

console.log('Answer "yes" if the number is even, otherwise answer "no". ');

let users_answer = readlineSync.question("Your answer: ");
let positive_answer = "yes"
let negative_answer = "no"


if (random_number % 2 === 0 && users_answer === positive_answer) {
    console.log("Correct!")
}
if (random_number % 2 !== 0 && users_answer === negative_answer){
    console.log("Correct!")
}
else if(random_number % 2 === 0 && users_answer === negative_answer){
    (console.log("'" + negative_answer + "'", "is wrong answer ;(. Correct answer was",
        "'" + positive_answer + "'"))
    console.log("Let's try again,", userName + "!")
}

if(random_number % 2 !== 0 && users_answer === positive_answer){
    (console.log("'" + positive_answer + "'", "is wrong answer ;(. Correct answer was",
        "'" + negative_answer + "'"))
    console.log("Let's try again,", userName + "!")
}

