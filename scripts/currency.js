"use-strict";


const $flag2 = $('#flag2');
const $usd = $('#usd');
const $country = $('#country');
const $money = $('#money');

// function to calculate currency with changing the flag

$('#convert').on('click', function () {
   
   //Canada
    if ($country.val() == "CANADA") {
        $($flag2).attr('src', 'images/canada.png');
        $money.val($usd.val() * 1.34 + " DOLLARS");
    }
    //Japan
    else if ($country.val() == "JAPAN") {
        $($flag2).attr('src', 'images/japan.png');
        $money.val($usd.val() * 109.31 + " YEN");
        
    }
    //Europe
    else if ($country.val() == "EUROPE") {
        $($flag2).attr('src', 'images/euro.png');
        $money.val($usd.val() * 0.89 + " EURO");        
    }
    //if does not select any country 
    else{
        alert("Please enter a country");
    }

});




