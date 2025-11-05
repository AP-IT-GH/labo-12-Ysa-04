"use strict";

let email = "ysa.vanassche@ap.be";
let endIndex = email.indexOf("@");
let fullName = email.substring(0,endIndex).replace(".", " ").toUpperCase();

console.log(`${fullName}`);


