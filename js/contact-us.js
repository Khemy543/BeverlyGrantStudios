function contactUs(e){
    let name = document.querySelector('.contact-name').value;
    let email = document.querySelector('.contact-email').value;
    let message = document.querySelector('.contact-message').value;

    console.log(message)

    axios.post(' localhost:5000/api/contact-us',{
        name,email,message
    },{
        header : { 
            'Access-Control-Allow-Origin': '*'
         }
    })
    .then(response => {
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
}