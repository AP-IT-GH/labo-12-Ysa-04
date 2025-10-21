"use strict";

let start = 100000;
const RENTE = 0.02;
let year = 7;

let afterSevenYears = start * (1 + RENTE)**year;
console.log(`Op een periode van 7 jaar stijgt je bezit van ${start} naar ${afterSevenYears.toFixed(0)}`);
console.log(`Dit met een rentevoet van ${RENTE}`);



