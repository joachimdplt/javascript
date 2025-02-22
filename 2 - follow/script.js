//  Select and stock
const icone = document.querySelector('i');
const btnButton = document.querySelector('.btn');
console.log(btnButton)


// Add event listener
icone.addEventListener('click', function() {
    console.log('bouton cliqué');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
});

btnButton.addEventListener('click', function(){
    console.log('bouton cliqué');
    if(btnButton.innerText === "Abonné"){
        btnButton.innerText = "Abonnez vous";

    } else {
        console.log('else');
        btnButton.innerText = "Abonné";

    }
})