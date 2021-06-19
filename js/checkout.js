const urlParams = new URLSearchParams(window.location.search);
const packages = urlParams.get('packages');
const type = urlParams.get('package_type');
const amount = urlParams.get('amount')

let arrayPackags = packages.split(',')
console.log(arrayPackags);

var extras = document.getElementById('extras');
extras.innerHTML = '<ul>' + arrayPackags.map(function (package){
    return '<li>' + package + '</li>';
}).join('') + '</ul>';

if(type === 'studio-shoot'){
    document.getElementById('package_type').innerHTML = 'STUDIO SHOOT';
    document.getElementById('studio-shoot-packages').style.display = 'block';
    document.getElementById('make-up-shoot-packages').style.display = 'none'
}else{
    document.getElementById('package_type').innerHTML = 'MAKE UP SHOOT';
    document.getElementById('studio-shoot-packages').style.display = 'none';
    document.getElementById('make-up-shoot-packages').style.display = 'block'
}

document.getElementById('amount').innerHTML = amount;
document.getElementById('pay_amount').innerHTML = amount;

let user_details = document.getElementById('user_details');
let account_details = document.getElementById('account_details');

function onProceed(e){
    user_details.style.display = 'none';
    account_details.style.display = 'block'
}

function back(){
    user_details.style.display = 'block'
    account_details.style.display = 'none'
}

function checkout(e){
    let first_name = document.querySelector('.first_name').value;
    let last_name = document.querySelector('.last_name').value;
    let phonenumber = document.querySelector('.momo_number').value;
    let email = document.querySelector('.email').value;
    let network = document.querySelector('.network').value;
    let voucher = document.querySelector('.voucher').value;

    axios.post('https://api.flutterwave.com/v3/payments',{
        tx_ref:"bgs-tx-19btytty",
        amount:"5",
        currency:"GHS",
        redirect_url:"http://beverlygrantstudios.herokuapp.com/",
        email:email,
        phone_number:phonenumber,
        name: `${first_name} ${last_name}`,
        ...(network ==='vodafone' ? { voucher : voucher } : {} ),
        network : network,
        payment_options:"mobilemoneyghana",
    },{
        headers : {
            "Authorization" : 'Bearer FLWSECK-eedbdcaaf5ce73a4495cd3522f5c68e6-X',
            "Content-Type" : "application/json",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
            'Access-Control-Allow-Origin': '*',
            "crossdomain": true 
        }
    })
    .then(response => {
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })


    /* axios.post('https://api.flutterwave.com/v3/charges?type=mobile_money_ghana',
    {
        tx_ref:"bgs-tx-1920bbtytty",
        amount:"5",
        currency:"GHS",
        redirect_url:"http://beverlygrantstudios.herokuapp.com/",
        email:email,
        phone_number:phonenumber,
        name: `${first_name} ${last_name}`,
        ...(network ==='vodafone' ? { voucher : voucher } : {} ),
        network : network,

    },
    {headers : 'Bearer FLWSECK-eedbdcaaf5ce73a4495cd3522f5c68e6-X'})
    .then(response => {
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    }) */
}