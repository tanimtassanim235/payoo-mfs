// show the cash out form 

document.getElementById('show-cashout').addEventListener('click', function () {
    // show cash out button clicked
    console.log('show cash out button clicked');
    document.getElementById('cashout-form').classList.remove('hidden');

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
})

// show add money form and hide the cash out form 
document.getElementById('show-addmoney').addEventListener('click', function () {

    // add the cashout form
    document.getElementById('cashout-form').classList.add('hidden');

    // remove the add money form
    document.getElementById('add-money-form').classList.remove('hidden');
})