// add money to the account 


// step-1: add an event handler to the add money button inside the form 
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // step-2: get money to be add to the amount 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('pin-number').value;
    console.log(pinNumberInput);
})