"use strict";

let firstName = "Ysa";
let lastName = "Van Assche";

let firstLetter = firstName.substring(0,1).toUpperCase();
let lastNameCapitalize = lastName.substring(0,1).toUpperCase() + lastName.substring(1);

console.log(`${firstLetter}. ${lastNameCapitalize}`);

