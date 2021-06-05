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
    alert('checked')
}