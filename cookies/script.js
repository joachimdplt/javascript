// Select and stock variables
const btnSuccess = document.querySelector('.btn-success')
console.log(btnSuccess);
const cookies = document.querySelector('.cookies')
console.log(cookies);

// Add event Listener
btnSuccess.addEventListener('click', function() {
    console.log('bouton cliqué');
    cookies.style.opacity = "0";
});

