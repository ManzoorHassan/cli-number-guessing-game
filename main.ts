#! /usr/bin/env node
import inquirer from "inquirer";

console.log("wellcome to -cli number guessing game");

const randomNumber = Math.floor(Math.random() * 6 +1);

const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "enter your guess numer(number limit from 1 to 6):",
    },
]);

if (answer.userGussedNumber === randomNumber){
    console.log("congratulation ! you guess a correct number");
}
else {
    console.log("sorry you guess a wrong number plz try again");
}