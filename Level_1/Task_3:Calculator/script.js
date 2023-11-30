let numberButtons = document.querySelectorAll('[number]');
let operationButtons = document.querySelectorAll('[oper]');
let equalsButton = document.querySelector('[equl]');
let clearButton = document.querySelector('[clear]');
let deletButton = document.querySelector('[delet]');
let previousButton = document.getElementById("previous");
let currentButton = document.getElementById("current");         // for Recently typed number

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

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{ 
        currentButton.style.color = "#ffffff";
        currentButton.innerHTML += button.innerHTML;
    })
})
clearButton.addEventListener('click', button =>{ 
    currentButton.innerHTML = "0";
    previousButton.innerHTML = "";
    currentButton.style.color = "#ccc"
})
deletButton.addEventListener('click', button =>{ 
    previousButton.innerHTML = "";
    currentButton.innerHTML = currentButton.innerHTML.toString().slice(0, -1);
})

equalsButton.addEventListener('click', button =>{ 
    previousButton.innerHTML = currentButton.innerHTML;
    let combineString = currentButton.innerHTML.toString();
    currentButton.innerHTML = eval(combineString);
    // var operands = combineString.split("+");
    // var operands = combineString.split("-");
    // var operands = combineString.split("*");
    // alert(operands[1]);
    // var res = compute(operands[0],operands[1]);
    // alert(res);
    // currentButton.innerHTML = res;
})
// var operation = '+';
// function compute(prev, current){
//     let computation;
//     if(currentButton.toString.includes('+' || '-' || '*' || '/')){
//             operation = currentButton.toString().slice(length/2,(length/2)+1)
//         }
//     let first = parseFloat(prev);
//     let sec = parseFloat(current);
//     alert(typeof first)
//     switch(operation) {
//         case '+':
//             computation = first + sec;
//             break;
//         case '-':
//             computation = prev - current;
//             break;
//         case '*':
//             computation = prev * current;
//             break;
//         case '/':
//             computation = prev / current;
//             break;
//         default:
//             operation = undefined;
//         return computation;
//     }
// }