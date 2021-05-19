"use strict";


// inputs


let length = 22;
let width = 14;

let pricePerBox = 22.75;

//calculate the area of the room
let area = length * width;

//calculate the number of tiles needed (incl a 10% extra for breakage)
let tilesNeeded = area + (area * .1);

//calculate the number of boxes needed; tiles are packaged 12 per box ; cant buy a partial box
let boxesNeeded = Math.ceil(tilesNeeded / 12);

//calculate the cost of all boxes
let totalCost = pricePerBox * boxesNeeded;
//display the output
console.log("You will need " + boxesNeeded + " boxes for a total price of $ " + totalCost);

