// console.log('button clicked login');

// search : form submit reloading the page

// step-1: set event handler
// document.getElementById('btn-login').addEventListener('click', function (event) {
   // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();

   // step-3: get the phone number & pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber, pinNumber);

    // this is temporary, you should like it

//  step-4: validate phone and pin 
//     if(phoneNumber === '5' && pinNumber === '1234') {
//         console.log('you are logging in');
      // step-5: allow user to the website
//     }
//     else{
//         alert('Wrong phone number or Pin');
//     }
// })


document.getElementById('btn-login').addEventListener('click', function(event) {
    event.preventDefault();

    // get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    // bad way to validate
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are login');
        window.location.href = '/home.html';
    }
    else {
        alert('Wrong pin & phone number');
    }
})