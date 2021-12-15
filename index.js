let tipamt = 0.00;
let totamt = 0.00;
let tip = 0;
let billval = 0;
let personval = 0;
let dollarSign = '$'

let bill = document.getElementById('billuserin');
let person = document.getElementById('ppluserin');

let five = document.getElementById('5in');
let ten = document.getElementById('10in');
let fifteen = document.getElementById('15in');
let twentyfive = document.getElementById('25in');
let fifty = document.getElementById('50in');
let custom = document.getElementById('customin');
let reset = document.getElementById('resetbtn');


let percent = {
    "5%" : 0.05,
    "10%" : 0.10,
    "15%" : 0.15,
    "25%" : 0.25,
    "50%" : 0.5
};


document.getElementById('totalamtdsp').innerHTML = dollarSign + parseFloat(totamt).toFixed(2);
document.getElementById('tipamtdsp').innerHTML = dollarSign + parseFloat(tipamt).toFixed(2);

person.addEventListener('input', updatePerson);
bill.addEventListener('input', updateBill);
five.addEventListener('click',updateTipm);
ten.addEventListener('click',updateTipm);
fifteen.addEventListener('click',updateTipm);
twentyfive.addEventListener('click',updateTipm);
fifty.addEventListener('click',updateTipm);
custom.addEventListener('input', updateTipc);
reset.addEventListener('click', updateRst);


function updatePerson(p){
    personval = p.target.value;
    console.log(personval);
    if(personval.length > 0)
    {
        enableReset();
    }
    else if (billval.length > 0)
    {
        enableReset();
    }
    else{
        disableReset();
    }
    updateTip();
    updateTotal();

}

function updateBill(p){
    billval = p.target.value;
    console.log(billval);
    if(billval.length > 0)
    {
        enableReset();
    }
    else if (personval.length > 0)
    {
        enableReset();
    }
    else{
        disableReset();
    }
    updateTip();
    updateTotal();
}

function updateTipm(p){
    console.log('hi');
    console.log(p);
    console.log(percent[p.target.value]);
    tip = percent[p.target.value] ;
    enableReset();
    updateTip();
    updateTotal();
}

function updateTipc(p){
    console.log('hi');
    tip = p.target.value / 100;
    enableReset();
    updateTip();
    updateTotal();
}

function updateTotal(){
    if(personval.length > 0 && personval != 0)
    {
        totamt = (billval / personval) + tipamt;
    }
    else
    {
        totamt = 0;
    }
    document.getElementById('totalamtdsp').innerHTML = dollarSign + parseFloat(totamt).toFixed(2);
}

function updateTip(){
    if(personval.length > 0 && personval != 0)
    {
        tipamt = (billval * tip) / personval;

    }
    else
    {
        tipamt = 0;
    }
    document.getElementById('tipamtdsp').innerHTML = dollarSign + parseFloat(tipamt).toFixed(2);
}

function enableReset()
{
    reset.classList.remove("reset");
    reset.classList.add("enablerst");
}

function disableReset()
{
    reset.classList.remove("enablerst");
    reset.classList.add("reset");
}

function updateRst(p)
{
    tipamt = 0.00;
    totamt = 0.00;
    tip = 0;
    billval = 0;
    personval = 0;
    disableReset();
    bill.value = '';
    person.value = '';
    custom.value = '';
    updateTip();
    updateTotal();
}




