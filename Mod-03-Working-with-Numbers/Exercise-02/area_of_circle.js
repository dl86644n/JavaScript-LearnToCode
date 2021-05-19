"use strict";

let radius = 6;
let area = Math.PI * (radius ** 2); // only works in the newest of browsers
let area = Math.PI *  Math.pow(radius,2)
console.log("The area of a circle with radius " + radius + " is " + area);