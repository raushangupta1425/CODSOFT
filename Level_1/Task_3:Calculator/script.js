let numberButtons = document.querySelectorAll('[number]');
let operationButtons = document.querySelectorAll('[oper]');
let equalsButton = document.querySelector('[equl]');
let clearButton = document.querySelector('[clear]');
let deletButton = document.querySelector('[delet]');
let previousButton = document.getElementById("previous");
let currentButton = document.getElementById("current");

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
    currentButton.style.color = "#ccc"
})
deletButton.addEventListener('click', button =>{ 
    var str = currentButton.innerHTML;
    str.pop(1);
    currentButton.innerHTML = str;
})