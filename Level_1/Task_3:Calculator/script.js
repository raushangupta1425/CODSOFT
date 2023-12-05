// Selectors
let numberButtons = document.querySelectorAll('[number]');
let operationButtons = document.querySelectorAll('[oper]');
let equalsButton = document.querySelector('[equl]');
let equalsButton2 = document.getElementById("equal");
let clearButton = document.querySelector('[clear]');
let clearButton2 = document.getElementById("clear");
let deletButton = document.querySelector('[delet]');
let deletButton2 = document.getElementById("delet");
let previousButton = document.getElementById("previous");
let currentButton = document.getElementById("current");         // for Recently typed number
let switchBtn = document.getElementById("switch");
let switchBackBtn = document.getElementById("switchBack");
let Pannel_1 = document.getElementById("pannel_1");
let Pannel_2 = document.getElementById("pannel_2");

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
        let ansBtn = document.getElementById("ansBtn");
        ansBtn.onclick = function (){
            sessionStorage.setItem("Ans",currentButton.innerHTML);
            currentButton.innerHTML = "Ans";
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

//Accept all clear button of pannel 1.
clearButton.addEventListener('click', button =>{ 
    currentButton.innerHTML = "0";
    previousButton.innerHTML = "";
    currentButton.style.color = "#ccc"
})

//Accept all clear button of pannel 2.
clearButton2.addEventListener('click', button =>{ 
    currentButton.innerHTML = "0";
    previousButton.innerHTML = "";
    currentButton.style.color = "#ccc"
})

//Accept delete button of pannel 1.
deletButton.addEventListener('click', button =>{ 
    previousButton.innerHTML = "";
    currentButton.innerHTML = currentButton.innerHTML.toString().slice(0, -1);
})

//Accept delete button of pannel 2.
deletButton2.addEventListener('click', button =>{ 
    previousButton.innerHTML = "";
    currentButton.innerHTML = currentButton.innerHTML.toString().slice(0, -1);
})

//Accept equal button of pannel 1.
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

//Accept equal button of pannel 2.
equalsButton2.addEventListener('click', button =>{ 
    previousButton.innerHTML = currentButton.innerHTML;
    let operation = sessionStorage.getItem("operation");
    let combineString = currentButton.innerHTML.toString();
    // currentButton.innerHTML = eval(combineString);
    let operands = combineString.split(operation);
    if(combineString.includes('Ans')){
        let AnsStore = sessionStorage.getItem("Ans");
        operands[0] = AnsStore;
        currentButton.innerHTML = compute(operands[0],operands[1],operation,combineString);
    }else{
        if(combineString.includes('(') && combineString.includes(')')){
            combineString = combineString.replace('(','*(');
        }
        currentButton.innerHTML = compute(operands[0],operands[1],operation,combineString);
    }
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

// Switching to another pannel coding.
switchBtn.onclick = function (){
    Pannel_1.style.display = "none";
    Pannel_2.style.display = "grid";
}
switchBackBtn.onclick = function (){
    Pannel_2.style.display = "none";
    Pannel_1.style.display = "grid";
}