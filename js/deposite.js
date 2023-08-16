// step - 01 add event listener to the deposite button

document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-02  get the deposite amoun from the deposite input field
    // for input field use .value to the value inside the input feild "ইনপুট" ফাইল থেকে টেক্সট পেতে সর্বদা .value ব্যবহার করতে মনে রাখুন।
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    depositeField.value = '';

    if(isNaN(newDepositeAmount)){
        alert('Please provide a valid number');
        return;
    }

// step-3 : set the current deposite total
// for non-input(element other than input, textarea) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    // step-4: add numbers t set the total deposite.
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;
    

    // step-5: get balance current 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    //step-6: culculated current totoal balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-4:  clear the deposite field
})
