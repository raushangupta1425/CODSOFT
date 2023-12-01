// Selectors
let numberButtons = document.querySelectorAll('[number]');
let operationButtons = document.querySelectorAll('[oper]');
let equalsButton = document.querySelector('[equl]');
let clearButton = document.querySelector('[clear]');
let deletButton = document.querySelector('[delet]');
let previousButton = document.getElementById("previous");
let currentButton = document.getElementById("current");         // for Recently typed number

//Accept all numbers.
numberButtons.forEach(button => {
    button.addEventListener('click', () =>{ 
        if(currentButton.innerHTML == "0"){
            currentButton.innerHTML = "";
            currentButton.style.color = "#ffffff";
            currentButton.innerHTML += button.innerHTML;
        }else{
            currentButton.style.color = "#ffffff";
            currentButton.innerHTML += button.innerHTML;
        }
    })
})

//Accept all operators.
operationButtons.forEach(button => {
    button.addEventListener('click', () =>{ 
        currentButton.style.color = "#ffffff";
        currentButton.innerHTML += button.innerHTML;
        sessionStorage.setItem("operation",button.innerHTML);
    })
})

//Accept all clear button.
clearButton.addEventListener('click', button =>{ 
    currentButton.innerHTML = "0";
    previousButton.innerHTML = "";
    currentButton.style.color = "#ccc"
})

//Accept delete button.
deletButton.addEventListener('click', button =>{ 
    previousButton.innerHTML = "";
    currentButton.innerHTML = currentButton.innerHTML.toString().slice(0, -1);
})

//Accept equal button.
equalsButton.addEventListener('click', button =>{ 
    previousButton.innerHTML = currentButton.innerHTML;
    let operation = sessionStorage.getItem("operation");
    let combineString = currentButton.innerHTML.toString();
    // currentButton.innerHTML = eval(combineString);
    let operands = combineString.split(operation);
    if(combineString.includes('(') && combineString.includes(')')){
        combineString = combineString.replace('(','*(');
    }
    currentButton.innerHTML = compute(operands[0],operands[1],operation,combineString);
})

// Calculation or computation of numbers.
function compute(prev, current, operation,combineString){
    let computation;
    let firstNumber = parseFloat(prev);
    let secondNumber = parseFloat(current);
    switch(operation) {
        case '+':
            computation = firstNumber + secondNumber;
            break;
        case '-':
            computation = firstNumber - secondNumber;
            break;
        case '*':
            computation = firstNumber * secondNumber;
            break;
        case '/':
            computation = firstNumber / secondNumber;
            break;
        case '%':
            computation = firstNumber % secondNumber;
            break;
        case ')':
            computation = eval(combineString);
            break;
        case '^':
            computation = firstNumber ** secondNumber;
            break;
        default:
            operation = undefined;
        }
    return computation;
}