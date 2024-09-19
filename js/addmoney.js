/**
 * 1. add event listener to the add Money button (form submit)
 * 2.get the money user wants to add 
 * also, get the pin number provided
 * 
 * 3. verify the pin number. for, wrong pin number ==> failed to add
 * for right pin number, allow to add the number to the account balance
 * 
 * 4. get current balance 
 * 
 * 5. add money to be added with the current balance
 * 
 * 6. display / update the balance in the DOM/ UI
 */

document.getElementById('btn-add-money')
    .addEventListener('click', function(event) {
        event.preventDefault();
        console.log('added the event handler');

        // get money  & pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('pin-number').value;

        // console.log(phoneNumber,pinNumber);

        if(pinNumber === '1234') {
            // add money to the account 
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            // new balance 
            const updateBalance = balanceNumber + addMoneyNumber;

            // update the DOM  with update balance
            document.getElementById('account-balance').innerText = updateBalance;
        }
        else {
            alert('Failed to add money. Please try again')
        }

    })