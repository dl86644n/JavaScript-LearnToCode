"use strict";

window.onload = function() {
    const estimateYourCostBtn = document.getElementById("estimateYourCostBtn")
    estimateYourCostBtn.onclick = estimateYourCostBtnClicked;
}

function estimateYourCostBtnClicked() {
    // get pickup date from <input> element
    const numberOfDaysField = document.getElementById("numberOfDays");
    let numberOfDays = Number(numberOfDaysField.value);
    
    let carRental = numberOfDays * 29.99;

    // get selections from checkbox
    let options = 0;

    const electronicTollTagCheckbox = document.getElementById("electronicTollTag")
    
    if  (electronicTollTagCheckbox.checked == true) {
        
        options += numberOfDays * 3.95;

    }
    
   const gpsCheckbox = document.getElementById("gps");
   
   if (gpsCheckbox.checked == true) {

       options += numberOfDays * 2.95;

   }

   const roadsideAssistanceCheckbox = document.getElementById("roadsideAssistance");

   if (roadsideAssistanceCheckbox.checked == true) {

    options += numberOfDays * 2.95;
   }

   //get selections from radio buttons

   let under25Surcharge = 0;

   const yesUnder25RadiotBtn = document.getElementById("yesUnder25");

   if (yesUnder25RadiotBtn.checked == true) {

       under25Surcharge = carRental * .30;
   } 


   let totalDue = carRental + options + under25Surcharge;

   const carRentalPara = document.getElementById("carRental");
   carRentalPara.innerHTML = "Car Rental: $" + carRental.toFixed(2);

   const optionsPara = document.getElementById("options");
   optionsPara.innerHTML = "Options: $" + options.toFixed(2);

   const under25SurchargePara = document.getElementById("under25Surcharge");
   under25SurchargePara.innerHTML = "Under 25 Surcharge: $" + under25Surcharge.toFixed(2);

   const totalDuePara = document.getElementById("totalDue");
   totalDuePara.innerHTML = "Total Due: $" + totalDue.toFixed(2);


   //JavaScript to make card appear
    //let totalCard = document.getElementById("totalCard");
    //totalCard.style.display = "block"
}