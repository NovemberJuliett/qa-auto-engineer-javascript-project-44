import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no". ');
const min = 0;
const max = 100;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random_number = getRandomNumber(min, max)
console.log("Question: " + random_number)

let users_answer = readlineSync.question("Your answer: ");
if (random_number % 2 === 0 && users_answer === "yes") {
    console.log("Correct!")
}
else if (random_number % 2 !== 0 && users_answer === "no"){
    console.log("Correct!")
}
else(console.log("'${users_answer} is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!"))
