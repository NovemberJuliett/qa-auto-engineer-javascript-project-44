import readlineSync from 'readline-sync';

function greetUser() {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

export default greetUser;
