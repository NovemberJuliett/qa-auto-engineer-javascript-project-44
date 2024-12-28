import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no". ');
const min = 0;
const max = 100;


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let users_number = readlineSync.question("Your answer: ");
if (random_number && users_number % 2 === 0){
    console.log("Correct!")
}

console.log("Question: " )
const random_number = getRandomNumber(min, max)

isEven()