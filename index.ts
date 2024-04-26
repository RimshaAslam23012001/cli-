#! /usr/bin/env node
import inquirer from"inquirer";

console.log("\n\twelcome to cli-number-guessing-game\n");

const randomNumber = Math.floor(Math.random() * 8 + 1);

const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 8):",
    },
]);

        if(answer.UserGuessedNumber === randomNumber){
            console.log("Congratulation ! You guess a correct number.");
        }
        else{
            console.log("Sorry, you guess a wrong number");
        }