const displayT = document.querySelector(".top");
const displayB = document.querySelector(".bottom");
const numbers = document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal=document.querySelector(".equal");
const del=document.querySelector(".delete");

let firstNum = ''
let secondNum = ''
let operator = ''
let current=true
let equalBool = false

window.addEventListener('click', function() {
    updateTop();
    updateBottom();
    equalBool = false;
    console.log(firstNum);
})

del.addEventListener('click', function() {
    if (firstNum!=''&&secondNum===''&&operator===''){
        firstNum=firstNum.substring(0,firstNum.length-1);
    }
    else if (firstNum!=''&&operator!=''&&secondNum==='') {
        operator = ''
    }

    else{
        secondNum = secondNum.substring(0,secondNum.length-1);
    }
})

equal.addEventListener('click',function () {
    if (secondNum===''){}
    else{equalBool=true}
})


operators.forEach(occurence => {
    occurence.addEventListener('click', function () {
        operatorClick(occurence.getAttribute("id"));
    })
})

numbers.forEach(occurence => {
    occurence.addEventListener('click',function(){
        appendNumber(occurence.getAttribute('id'));
    })
})


clear.addEventListener('click', function() {
    firstNum = ''
    secondNum = ''
    operator = ''
    current=true
    updateBottom();
    updateTop();
})


function updateTop(){

    if (equalBool===true) {
        if (operator==="x"){
            displayT.textContent = firstNum + ' ' + String.fromCharCode(215) + ' ' + secondNum + ' =' ;    
        }
        else if (operator==='/') {
            displayT.textContent = firstNum + ' ' + String.fromCharCode(247) + ' ' + secondNum + ' =';    
     
        } 
        else{
            displayT.textContent = firstNum + ' ' + operator + ' ' + secondNum+' =';    
            }   
    }

    else{
    if (operator==="x"){
        displayT.textContent = firstNum + ' ' + String.fromCharCode(215) + ' ' + secondNum;    
    }
    else if (operator==='/') {
        displayT.textContent = firstNum + ' ' + String.fromCharCode(247) + ' ' + secondNum;    
 
    }
    else{
    displayT.textContent = firstNum + ' ' + operator + ' ' + secondNum;    
    }
    }}


function updateBottom(){
    if(equalBool===true){
        displayB.textContent = operate();
    }
    else{
    if (current===true){
        displayB.textContent = firstNum;
    }
    else{
        displayB.textContent = secondNum;
    }
    }}


function operatorClick(operation) {

    if (firstNum!=''&&secondNum==='') {
        operator=operation;
        current=false;
    }

    if (firstNum!=''&&secondNum!=''&&operator!='') {
        firstNum = operate();
        secondNum = ''
        operator = operation;
        current=false;
    }
}

function appendNumber(num) {
    if (operator === '') {
        if (firstNum === '') {
            firstNum = num
        }
        else{
            firstNum+=num
        }
    }
    else{
        if (secondNum === '') {
            secondNum = num
        }
        else{
            secondNum+=num
        }
    }
}


function add(a,b) {
    return (a+b).toString();
}

function subtract(a,b) {
    return (a-b).toString();
}

function multiply(a,b) {
    return (a*b).toString();
}

function divide(a,b) {
    return (a/b).toString();
}

function operate() {
    if (operator === "+") {
        return add(parseInt(firstNum),parseInt(secondNum));
    }
    else if (operator === "-") {
        return subtract(parseInt(firstNum),parseInt(secondNum));
    }
    else if (operator === "x") {
        return multiply(parseInt(firstNum),parseInt(secondNum));
    }
    else if (operator === "/") {
        return divide(parseInt(firstNum),parseInt(secondNum));
    }

}