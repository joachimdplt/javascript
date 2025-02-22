console.log('connected');
const title = document.getElementById('title');
title.style.color ="green";
console.log(title);
// Selected & stock
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");
const btnGreen = document.getElementById("btn-green");
const replayLoop = document.getElementById('replay');


let count = 0;
console.log(count, "count start")

// Submission action 
btnRed.addEventListener('click', function(){
    add();
})
btnBlue.addEventListener('click', function(){
    add();
})  
btnGreen.addEventListener('click', function(){
    removeCount();
})  

function add(){
    count = count + 1;
    console.log(count, "incremented count")
    title.innerText = count;
    //console.log('cliqued');
}
function removeCount(){
    count = count - 1;
    console.log(count, "incremented count")
    title.innerText = count;
    //console.log('cliqued');
}

setTimeout(function(){
    btnBlue.remove();
    btnRed.remove();
}, 100000);

replayLoop.addEventListener('click', function(){
	location.reload();
}); 


