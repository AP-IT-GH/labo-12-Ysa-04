"use strict";

let currentTime = 14;
let addTime = 33;
let result = currentTime + addTime;

console.log(`Het is nu ${currentTime} uur.`);
if (result > 24) {
    result = result - 24;
}
console.log(`Over ${addTime} uur is het ${result} uur.`);
// console.log(over ${addTime} is het ${(currentTime + addTime) % 24} uur.); dan hoeft de loop niet

