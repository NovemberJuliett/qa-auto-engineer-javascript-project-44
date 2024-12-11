import readlineSync from 'readline-sync'; // Импорт библиотеки readline-sync

function greetUser() {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

export default greetUser;
