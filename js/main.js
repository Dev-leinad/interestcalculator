const amount = document.getElementById("amount-input");
const years = document.getElementById("years-input");
const rate = document.getElementById("rate");

const errorMsgAmount = document.getElementById("amountErrorMsg");
const errorMsgRate = document.getElementById("rateErrorMsg");
const errorMsgYear = document.getElementById("yearErrorMsg");

const amountErrorContent = document.getElementById("input-amount-wrapper");
const yearErrorContent = document.getElementById("input-year-wrapper");
const rateErrorContent = document.getElementById("input-rate-wrapper");

const clearBtn = document.getElementById("clearBtn");
const calculateBtn = document.getElementById("calculate");
const selectedType = document.getElementsByName("mortage-type");

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  amount.value = "";
  rate.value = "";
  years.value = "";
});

calculateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let typeOption;

  console.log(amount);
  // Trim the input values and parse them
  let amountValue = parseFloat(amount.value);
  let yearsValue = parseInt(years.value, 10);
  let rateValue = parseFloat(rate.value);

  let hasError = false;


  if (amount.value === "") {
    errorMsgAmount.innerHTML = "The field is required!";
    amountErrorContent.style.border = "1px solid red";
    hasError = true;
    console.log("errorAmount");
  }

  if (rate.value === "") {
    errorMsgRate.innerHTML = "The field is required!";
    rateErrorContent.style.border = "1px solid red";
    console.log("errorRate");
    hasError = true;
  }

  if (years.value === "") {
    errorMsgYear.innerHTML = "The field is required!";
    yearErrorContent.style.border = "1px solid red";
    hasError = true;
    console.log("errorYear");
  }


//   const repayTypeInput = document.getElementsByName('mortage-type');

//  repayTypeInput.forEach(input=>{
    
//    if (input.checked = false ) console.log('select type')
//  })

  // if (hasError) {
  //   return;
  // }
  selectedType.forEach((option) => {
    if (option.checked) {
      typeOption = option.value;
      console.log(1);
    }else{
        
        console.log('select one type')
    }
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

function getRepaymentAmount(amount, year, rate) {
  let totalRepay;
  totalRepay = amount * year * (rate / 100);

  const totalRepayDisplay  = formatNumber(totalRepay.toFixed(2));

  
  const monthlyInterest = totalRepay/12;

  displayResult( totalRepayDisplay, monthlyInterest);

  console.log("Total Repay:", totalRepay);
  return totalRepay;
}

function formatNumber(number) {
  // Split the number on the decimal point
  let parts = number.split(".");
  // Add commas to the integer part of the number
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Join the integer and decimal parts
  return parts.join(".");
}
