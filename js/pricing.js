/**
 * Script to process the submitted form data of the form in file
 * pricing.html 
 */

// event listeners for validation of number of guests and number of nights 
document.getElementById('num-guests').addEventListener('focusout', validateNumberOfGuests);
document.getElementById('num-nights').addEventListener('focusout', validateNumberOfNights);

// event listener for button click 
document.getElementById('price-button').addEventListener('click', displayResults);

/** 
 * Checks if the entered numbers are valid. If so, the cost is calculated and
 * displayed using the function calculateCost
 */
function displayResults() {
    const result = document.getElementById('price-result');
    let validGuests = validateNumberOfGuests();
    let validNights = validateNumberOfNights();
    if(!validGuests || !validNights) {
        result.classList.add('display-none');
    } else {
        calculateCost();
        result.classList.remove('display-none'); 
    }
}

/** 
 * Determines if breakfast and dinner boxes are checked
 * Calculates cost before taxes
 * calculates taxes and fees
 * calculates total
 * Displays results on webpage 
 */
function calculateCost() {
    let guests = document.getElementById('num-guests').value;
    let nights = document.getElementById('num-nights').value;
    let checkBreakfast = document.getElementById("breakfast").checked;
    let checkDinner = document.getElementById("dinner").checked; 

    if (checkBreakfast) {
        breakfast = 10;
    } else { 
        breakfast = 0; 
    }
    if (checkDinner) {
        dinner = 20;
    } else {
        dinner = 0;
    }

    let cost = (30 * guests * nights) + (breakfast * guests * nights) + (dinner * guests * nights);
    let tax = cost * 0.21;
    let total = cost + tax; 

    let resultCost = document.getElementById('price-value');
    resultCost.innerHTML = "$" + cost.toFixed(2);

    let resultTax = document.getElementById('taxes-value');
    resultTax.innerHTML = "$" + tax.toFixed(2);

    let resultTotal = document.getElementById('total-value');
    resultTotal.innerHTML = "$" + total.toFixed(2);
}

/** 
 * Validates whether the number entered in the form for number of guests is positive
 * 
 * @returns {boolean} true if the number is valid 
 */
function validateNumberOfGuests() {
    let numGuests = document.getElementById('num-guests').value;
    let guestError = document.getElementById('guests-error');
    if (numGuests == "" || parseInt(numGuests) < 1) {
        guestError.classList.remove('display-none');
        return false;
    } else {
        guestError.classList.add('display-none');
        return true;
    }
}

/** 
 * Validates whether the number entered in the form for number of nights is greater than 1
 * 
 * @returns {boolean} true if the number is valid 
 */
function validateNumberOfNights() {
    let numNights = document.getElementById('num-nights').value;
    let nightsError = document.getElementById('nights-error');
    if (numNights == "" || parseInt(numNights) < 2) {
        nightsError.classList.remove('display-none');
        return false;
    } else {
        nightsError.classList.add('display-none');
        return true;
    }
}