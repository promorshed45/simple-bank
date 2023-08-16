  
// step - 01 add event listener to the deposite button

document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-02  get the withdraw amoun from the withdraw input field
    // for input field use .value to the value inside the input feild "ইনপুট" ফাইল থেকে টেক্সট পেতে সর্বদা .value ব্যবহার করতে মনে রাখুন।
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newwithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

// step-3 : set the current withdraw total
// for non-input(element other than input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

   
    // step-5: get balance current 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newwithdrawAmount > previousBalanceTotal){
        alert('Mamar barir abdar paico naki??? Taka ki Gace dore');
        return;
    }

     // step-4: add numbers t set the total withdraw.
     const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;
     withdrawTotalElement.innerText = currentwithdrawTotal;
 
    
    //step-6: culculated current totoal balance
    const currentBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})
