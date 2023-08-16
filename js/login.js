// step - 01 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){ 

   //step-02  get the email address inside the email input field
    // always remember to use .value to get text from an input filed 
    // "ইনপুট" ফাইল থেকে টেক্সট পেতে সর্বদা .value ব্যবহার করতে মনে রাখুন।
const emailField = document.getElementById('user-email');
const email  = emailField.value;
// step -03 get password
// 3.a: set id on the html element
// 3.b: get the element
// 3.c: get the valude from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log(email,password);

// DO NOT email password on the client side
// Step-04 : verify email and password and check whether valid usr or invalid user
if(email === 'ctgmorshed45@gmail.com' && password === '363745'){
    window.location.href = 'bank.html';
}
else{
    alert('Invalid user');
}
})

