//initialize
let calculator = document.getElementById("calculator");
let btns  = document.getElementById("btns");
let display  = document.getElementById("calcEntry");
const numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/", "**"];
let equation = "";
  
btns.addEventListener("click", e => {
    clearFunction(e.target);
    calculationProcess(e.target);
});

function clearFunction(key){
    if(key.id == "ca"){
        display.innerText = "0";
        equation = "";
    }

    if(key.id == "ce"){
        if(display.innerText.length == 1){
            display.innerText = "0";
        }else{
            display.innerText = display.innerText.slice(0, -1);
        }    
    }    
}

function calculationProcess(key){
    const keyValue = key.id; 
    const displayNum = display.innerText;
    const previousKeyType = calculator.dataset.previousKeyType;
    let result = "";

    if(numbers.includes(keyValue)){
        calculator.dataset.previousKeyType = "number";
        if(keyValue === "0" && displayNum == 0)
        {
            display.innerText = keyValue;
        }else{
            if(displayNum === "0" || previousKeyType == "operator"){ 
                (keyValue == ".") ? display.innerText = "0" + keyValue :  display.innerText = keyValue;
            }else{
                    display.innerText = displayNum + keyValue;     
            } 
        }   
    }else if(operators.includes(keyValue)){
        if(displayNum != "0"){
            equation += displayNum + keyValue;
            (keyValue == "**") ? result = eval(equation.slice(0, -2)) : result = eval(equation.slice(0, -1)); 
            display.innerText = result; 

            calculator.dataset.previousKeyType = "operator";
        }
    }else if(key.id == "="){
        display.innerText = eval(equation + displayNum); 
        equation = "";
    }

    console.log(equation); 

}




