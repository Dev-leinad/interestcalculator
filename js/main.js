const amount = document.getElementById('amount-input');
const years = document.getElementById('years-input');
const rate = document.getElementById('rate');

const errorMsgAmount = document.getElementById('amountErrorMsg');
const errorMsgRate = document.getElementById('rateErrorMsg');
const errorMsgYear = document.getElementById('yearErrorMsg');

const amountErrorContent = document.getElementById('input-amount-wrapper');
const yearErrorContent = document.getElementById('input-year-wrapper');
const rateErrorContent = document.getElementById('input-rate-wrapper');

const clearBtn = document.getElementById('clearBtn');
const calculateBtn = document.getElementById('calculate');
const selectedType = document.getElementsByName('mortage-type');

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    amount.value='';
   rate. value= '';
   years.value='';
});

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let typeOption;

    console.log(amount);
        // Trim the input values and parse them
        let amountValue = parseFloat(amount.value);
        let yearsValue = parseInt(years.value, 10);
        let rateValue = parseFloat(rate.value);


        let hasError = false;

   
        console.log('Raw amount value:', amount.value);
        console.log('Parsed amount value:', amountValue);
        console.log('Raw rate value:', rate.value);
        console.log('Parsed rate value:', rateValue);
        console.log('Raw years value:', years.value);
        console.log('Parsed years value:', yearsValue);

    if ( amount.value === '') {
        errorMsgAmount.innerHTML = 'The field is required!';
        amountErrorContent.style.border = '1px solid red';
        hasError=true;
        console.log('errorAmount');
    } 

    if ( rate.value === '') {
        errorMsgRate.innerHTML = 'The field is required!';
        rateErrorContent.style.border = '1px solid red';
        console.log('errorRate');
        hasError = true;
    }

    if ( years.value === '') {
        errorMsgYear.innerHTML = 'The field is required!';
        yearErrorContent.style.border = '1px solid red';
        hasError=true;
        console.log('errorYear');
    } 

    // if (hasError) {
    //   return;
    // }
    selectedType.forEach((option) => {
        if (option.checked) {
            typeOption = option.value;
        }
    });

    switch(typeOption) {
        case 'repayment':
         
            break;
        case 'interest':
          getRepaymentAmount(amountValue, yearsValue, rateValue);
            break;
        default:
            break;
    }
});

function getRepaymentAmount(amount, year, rate) {
  let totalRepay;
  totalRepay = amount * year * (rate / 100);

  const totalRepayDisplay = document.getElementById('total-repay');
  totalRepayDisplay.innerHTML = formatNumber(totalRepay.toFixed(2));

  console.log('Total Repay:', totalRepay);
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
