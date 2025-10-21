"use strict";

const AMOUNT_TO_PAY = 454;
const NUMBER_OF_50 = Math.ceil(AMOUNT_TO_PAY / 50);
const CHANGE = (NUMBER_OF_50 * 50) - AMOUNT_TO_PAY;

console.log(`Te betalen bedrag is ${AMOUNT_TO_PAY}`);
console.log(`Je hebt ${NUMBER_OF_50} briefjes van 50 nodig`);
console.log(`Je wisselgeld is dan ${CHANGE}`);
