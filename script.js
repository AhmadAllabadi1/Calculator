const displayT = document.querySelector(".top");
const displayB = document.querySelector(".bottom");
const numbers = document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");

let num1 = ''
let num2 = ''
let operator = ''
let input = ''
let result = '0'



window.addEventListener('click', function() {
    input = num1 + ' ' + operator + ' ' + num2;
    displayT.textContent = input;
    displayB.textContent = result;
})

numbers.forEach(occurence => {
    occurence.addEventListener('click', function() {
        let id = occurence.getAttribute('id');
        appendNumber(id);
    })
})



operators.forEach(occurence => {
    occurence.addEventListener('click', function() {
        let id = occurence.getAttribute('id');
        updateOperator(id);
    })
})




function updateOperator(operation) {
    if (num1!='' && operator!='' && num2!='') {
        result = operate();
        num1 = result;
        num2 = ''
        operator = ''
    }


    if (num1!=''){
        if (num2==='') {
            operator = operation;
        }

        else{
            input = num1 + ' ' + operator+' ' + num2
        }
    }
}


function appendNumber(num) {
    if (operator === '') {
        if (num1 === '') {
            num1 = num
        }
        else{
            num1+=num
        }
    }
    else{
        if (num2 === '') {
            num2 = num
        }
        else{
            num2+=num
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
        return add(parseInt(num1),parseInt(num2));
    }
    else if (operator === "-") {
        return subtract(parseInt(num1),parseInt(num2));
    }
    else if (operator === "x") {
        return multiply(parseInt(num1),parseInt(num2));
    }
    else if (operator === "/") {
        return divide(parseInt(num1),parseInt(num2));
    }

}