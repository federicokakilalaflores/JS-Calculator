//initialize
let btns  = document.getElementById("btns");
let display  = document.getElementById("calcEntry");
const numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/", "**"];
let equation = "";
let currentEntry = "";
let entryLen = currentEntry.length; 
let res = "";
  
btns.addEventListener("click", e => {
    clearFunction(e.target.id);
    calculationProcess(e.target.id);
});

// All clear key functionality
function clearFunction(key){
    function clearAll(){
        currentEntry = "";
        entryLen = 0;
        equation = "";
    }

    function backspace(){
        (entryLen > 0) ? entryLen-- : entryLen = 0;
        currentEntry = currentEntry.substring(0, entryLen);
    }

    (key == "ca") ? clearAll() : false;
    (key == "ce") ? backspace() : false;
}

function displays(){
    display.innerText = currentEntry.substring(0, entryLen);
    console.log("equation " + equation);
    console.log("entry " + currentEntry);
    console.log(res);
}

// the process of calculation
function calculationProcess(key){
    let initialRes = "" 

    if(entryLen >= 15){ 
        currentEntry += "";
    }else if(operators.includes(key) === true){
        equation += currentEntry + key;
        initialRes = eval(equation.substring(0, equation.length-1)).toString();
        currentEntry = initialRes;
        entryLen = initialRes.length;
        
    }else if(numbers.includes(key) === true){
        if(operators.includes(equation[equation.length - 1])){
            currentEntry = "";
            entryLen = 0; 
        }

        currentEntry += key;
        entryLen++;       
    }else if(key == "="){
        res = eval(equation + currentEntry).toString();
        currentEntry = res;
        entryLen = res.length;
        equation = "";
    }

    displays();
}



