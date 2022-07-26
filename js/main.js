let button = document.querySelector(".click-btn");
let bodyColor = document.querySelector(".main-body");
let colorCode = document.querySelector(".colorValue");
let resetButton = document.querySelector(".reset-btn");

button.addEventListener('click',function(){
    let color = '#'+ Math.floor(Math.random()*16777215).toString(16); 
    bodyColor.style.backgroundColor = color ;
    colorCode.innerHTML = color ;
    console.log(color)
})
resetButton.addEventListener('click',function(){
    bodyColor.style.backgroundColor = '#F3F3F3' ;
})
