document.getElementById('btn-cashout')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('handler clicked');

        const cashOut = document.getElementById('input-cashout-money').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('cashout-pin').value;

        console.log(cashOut, pinNumber);
        // wrong way to verify pin number 
        if(pinNumber === '1234') {
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);

            const balanceNumber = parseFloat(balance);

            // reduce the balance
            const updateBalance = balanceNumber - cashOutNumber;
            // update the UI
            document.getElementById('account-balance').innerText = updateBalance;
        }
        else {
            alert('Failed to cashout , please try later')
        }
    })