"use strict";

let samsWeight = 201;
let samsLenght = 1.45;
let samsBmi = samsWeight / (samsLenght **2);

let gerrysWeight = 90;
let gerrysLenght = 2.05;
let gerrysBmi = gerrysWeight / (gerrysLenght * gerrysLenght);

console.log(`BMI van Sam: ${samsBmi.toFixed(2)}`);
console.log(`BMI van Gerry: ${gerrysBmi.toFixed(2)}`);