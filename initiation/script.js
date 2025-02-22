console.log('connected');
const title = document.getElementById('title');
title.style.color ="green";
console.log(title);
// Selected & stock
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");

let count = 0;
console.log(count, "count start")

// Submission action 
btnRed.addEventListener('click', function(){
    count = count + 1;
    console.log(count, "incremented count")
    //console.log('cliqued');
})
btnBlue.addEventListener('click', function(){
    count = count + 1;
    console.log(count, "incremented count")
    //console.log('cliqued');
})

