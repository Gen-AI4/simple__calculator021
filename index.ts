#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    message : "Enter your first number" , type : "number" , name : "firstNumbr"},
    {message : "Enter your second number" , type : "number" , name : "secondNumber"},
    {message : "select one of the operation + - * /" , type : "list" , name : "operation" , choices : ["+","-","*","/"],
},
]);
if (answer.operation === "+") {
    console.log(answer.firstNumbr + answer.secondNumber);
} else if (answer.operation === "-") {
    console.log(answer.firstNumbr - answer.secondNumber);
} else if (answer.operation === "*") {
    console.log(answer.firstNumbr * answer.secondNumber);
} else if (answer.operation === "/") {
    console.log(answer.firstNumbr / answer.secondNumber);
} else {
    console.log("Invalid operation")
};
    
