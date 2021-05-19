"use strict";

// inputs
let numPeople = 38;

//calculate the number of vans needed (leave no person behind)
let numVans = Math.ceil(numPeople/15);

//calculate cost of the van rental
let totalCost = 250 * numVans;

//calculate the cost per person for van

let costPerPerson = totalCost / numPeople;

console.log("The cost per person is $" + costPerPerson.toFixed(2))