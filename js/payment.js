let packages = [];

function StudioShootSum(){
    packages = []
    var make_up = document.getElementsByName('make-up');
    for(var n = 0; n < make_up.length; n++){
        if(make_up[n].checked){
            make_up[n].checked = false
        }
    }
    let reset_make_up_total = 459
    document.getElementById('makeUpTotal').innerHTML = reset_make_up_total.toFixed(2);

    var value = document.getElementsByName("studio");
    var total = 0;
    for (var i = 0; i < value.length; i++) {
        if (value[i].checked) {
            total += parseFloat(value[i].value);
            packages.push(value[i].title)
        }
    }
    let studio_total = 359;
    let new_total = Number(studio_total) + total;
    document.getElementById("studioTotal").innerHTML = new_total.toFixed(2);
}

function MakeUpShootSum(){
    packages = []
    var studio = document.getElementsByName('studio');
    for(var n = 0; n < studio.length; n++){
        if(studio[n].checked){
            studio[n].checked = false
        }
    }

    let reset_studio_total = 359;
    document.getElementById('studioTotal').innerHTML = reset_studio_total.toFixed(2);

    var value = document.getElementsByName("make-up");
    var total = 0;
    for (var i = 0; i < value.length; i++) {
        if (value[i].checked) {
            total += parseFloat(value[i].value);
            packages.push(value[i].title)
        }
    }
    let make_up_total = 459;
    let new_total = Number(make_up_total) + total;
    document.getElementById("makeUpTotal").innerHTML = new_total.toFixed(2);
}

function makePayment( type ){
    let payment_amount = 0;
    if(type === 'studio-shoot'){
        payment_amount = document.getElementById('studioTotal').innerHTML
        console.log('studio-shoot',packages, payment_amount);
        window.location = `https://beverlygrantstudios.herokuapp.com/checkout.html?packages=${packages}&package_type=${type}&amount=${payment_amount}`
    }else if(type === 'make-up-shoot'){
        payment_amount = document.getElementById('makeUpTotal').innerHTML
        console.log('make-up-shoot', packages, payment_amount);
        window.location = `https://beverlygrantstudios.herokuapp.com/checkout.html?packages=${packages}&package_type=${type}&amount=${payment_amount}`
    }

}