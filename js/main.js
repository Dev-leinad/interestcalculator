// Get all the input fields 
const amount = document.getElementById("amount-input");
const years = document.getElementById("years-input");
const rate = document.getElementById("rate");

// Get span tags to display the error messages
const errorMsgAmount = document.getElementById("amountErrorMsg");
const errorMsgRate = document.getElementById("rateErrorMsg");
const errorMsgYear = document.getElementById("yearErrorMsg");

const amountSpan = document.getElementById('amount-span');
const yearSpan = document.getElementById('year-span');
const rateSpan = document.getElementById('rate-span');

// Gets the input container to display error when inputs are empty
const amountErrorContent = document.getElementById("input-amount-wrapper");
const yearErrorContent = document.getElementById("");
const rateErrorContent = document.getElementById("input-rate-wrapper");


const nextWrapper = document.getElementById('year-wrapper');


// The Clear Btn declaration
const clearBtn = document.getElementById("clearBtn"); 

// The calculate button declaration
const calculateBtn = document.getElementById("calculate");
const selectedType = document.getElementsByName("mortage-type");


let hasError ;
// Clear the input field function


clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  amount.value = "";
  rate.value = "";
  years.value = "";
});

calculateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let typeOption;

  // if (years.value === '') {
  //  '1px solid red';
  //   nextWrapper.style.zIndex = 100;
  // }
  // Trim the input values and parse them
  let amountValue = parseFloat(amount.value);
  let yearsValue = parseInt(years.value, 10);
  let rateValue = parseFloat(rate.value);
  // let hasError = false;
const errorMessage =  "The field is required!";
const errorBorder = "1px solid red";

  if (amount.value === "") {
    errorMsgAmount.innerHTML = errorMessage;
    amountErrorContent.style.border = errorBorder;
    amountSpan.style.backgroundColor = 'red';
    amountSpan.style.color='white';
    hasError = true;
  }

 

  if (rate.value === "") {
    errorMsgRate.innerHTML = errorMessage;
    rateErrorContent.style.border = errorBorder;
    rateSpan.style.backgroundColor = 'red';
    rateSpan.style.color='white';
    hasError=true;
  }

 if (years.value === "") {
    errorMsgYear.innerHTML = errorMessage;
    nextWrapper.style.border = errorBorder;
    yearSpan.style.backgroundColor = 'red';
    yearSpan.style.color='white';
    hasError = true;
  }


  // check if radio is checked

  let isChecked = false;

  for (let i = 0; i < selectedType.length; i++) {
    if (selectedType[i].checked) {
        isChecked = true;
        break;
    }
}


if (!isChecked) {
  const errorSpan = document.getElementById('repay-type-error');

        errorSpan.innerHTML = errorMessage;
        errorSpan.style.color = 'red';
    
}

if (hasError) {
  return ;
}

  selectedType.forEach((option) => {
    
    if (option.checked) {
      typeOption = option.value;
      
    }
    
    // else{
    //     
  });

  switch (typeOption) {
    case "repayment":
      break;
    case "interest":
      getRepaymentAmount(amountValue, yearsValue, rateValue);
      break;
    default:
        
      break;
  }
});


// Function to display the result after been calculated.
function displayResult (interestResult, monthlyInterest){

    const emptyWrapper = document.getElementById('empty-wrapper');
    emptyWrapper.classList.remove('empty-wrapper');
    emptyWrapper.classList.add('hide-empty')


    const resultWrapper = document.getElementById('result-wrapper');
    resultWrapper.style.display= 'block';

    const monthlyInterestValue = document.getElementById('monthly-repay');
    
    const displayResult = document.getElementById('total-repay');
    displayResult.innerHTML = interestResult;
    monthlyInterestValue.innerHTML = monthlyInterest;
   
}


// Function to calculate the Interest when selected.
function getRepaymentAmount(amount, year, rate) {
  let totalRepay;
  totalRepay = amount * year * (rate / 100);

  const totalRepayDisplay  = formatNumber(totalRepay.toFixed(2));
const amountMonthly = year * 12;

  
  const monthlyInterest = formatNumber((totalRepay/amountMonthly).toFixed(2));

  displayResult( totalRepayDisplay, monthlyInterest);

  amount.value==''
  years.value =='';
  rate.value == ''

  console.log("Total Repay:", totalRepay);
  return totalRepay;
}


// Function to format the result to add commas 

function formatNumber(number) {
  // Split the number on the decimal point
  let parts = number.split(".");
  // Add commas to the integer part of the number
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Join the integer and decimal parts
  return parts.join(".");
}








window.onload = function() {
  var image = document.getElementById('animatedImage');
  image.classList.add('animate');
};