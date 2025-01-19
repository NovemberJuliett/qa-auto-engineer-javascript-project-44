#!/usr/bin/env node

import greetUser from '../src/cli.js';

greetUser();

console.log("Choose the game you want to play:")
console.log(`Odd or even? - press 1 
Guess the result - press 2
Find GCD - press 4
Guess missing number - press 5`)
