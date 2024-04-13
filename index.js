#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1, //Base currency
    EUR: 0.091,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'InR', 'PKR'],
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'InR', 'PKR'],
    },
    {
        name: 'amount',
        message: 'Enter Yor Amount',
        type: 'number',
    }
]);
let userFromCurrency = user_answer.from;
let usertoCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[usertoCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertAmount = baseAmount * toAmount;
let convertingAmount = Math.round(convertAmount);
console.log(convertingAmount);
