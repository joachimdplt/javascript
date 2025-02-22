console.log('connected');

// Defines variables

const title = document.getElementById('title');
let count = 0;

// Selected & stock
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");
const replayLoop = document.getElementById('replay');

// Increment
function add(){
    count = count + 1;
    console.log(count, "incremented count")
    title.innerText = count;
}

// Chrono function
setTimeout(function(){
    btnBlue.remove();
    btnRed.remove();
}, 100000);

replayLoop.addEventListener('click', function(){
	location.reload();
}); 

// Submission action 
btnRed.addEventListener('click', function(){
    add();
})
btnBlue.addEventListener('click', function(){
    add();
})  


