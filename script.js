let firstNum = 0;
let secondNum = 0;
let operator = "";
let lastInput;
let firstNumCheck = false;
const display = document.querySelector("#displayFieldText");

document.addEventListener("keydown", (e) => actionKey(e));

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("click", (e) => actionKey(e));
    key.addEventListener("transitionend", removeTransition);
});

//This function is for the little pressdown animation that plays whenever a key is clicked or pressed
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("pressed");
}

function actionKey(e){
    let keyId;
    let clickEvent = false;
    if(e.type === "click"){
        keyId = e.target.getAttribute("id");
        clickEvent = true;
    } else {
        keyId = e.key;
    }
    switch(keyId){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if(display.textContent.length>=6 && display.textContent !== "Universe crashed!"){
                display.textContent = "Too many numbers!";
            } else {
                if(lastInput === "equals"){
                    clearEverythingAfterEquals(keyId);
                } else if(lastInput === "operator") {
                    display.textContent = keyId;
                    lastInput = "key";
                }else{
                    display.textContent += keyId;
                    lastInput = "key";
                }
            }
            if(clickEvent){
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if(display.textContent!==""){
                if(firstNumCheck === false){
                    firstNum = parseFloat(display.textContent);
                    firstNumCheck = true;
                } else{
                    if (operator !== ""){
                        if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){
                            secondNum = display.textContent;
                            if(typeof operate(firstNum, secondNum, operator) === "string"){
                                display.textContent = operate(firstNum, secondNum, operator);
                            } else {
                                display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(6));
                                firstNum = display.textContent;
                                secondNum = 0;
                            }
                            lastInput = "operator";
                        }
                    }
                }
            }
            operator = keyId;
            lastInput = "operator";
            if(clickEvent){
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case ".":
            if(display.textContent.length>=6 && display.textContent !== "Universe crashed!"){
                display.textContent = "Too many numbers!";
            } else if(display.textContent.includes(".") && lastInput !== "equals"){
                display.textContent += "";
            } else {
                if(display.textContent === "" || lastInput === "equals"){
                    firstNum = 0;
                    secondNum = 0;
                    display.textContent = "0.";
                    operator = "";
                    lastInput = "float";
                    
                } else if(lastInput === "operator") {
                    display.textContent = "0.";
                    lastInput = "float";
                } else{
                    display.textContent += ".";
                }
                lastInput = "float";
            }
            if(clickEvent){
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case "Enter":
            if (operator !== ""){
                if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){
                    secondNum = display.textContent;
                    if(typeof operate(firstNum, secondNum, operator) === "string"){
                        display.textContent = operate(firstNum, secondNum, operator);
                    } else {
                        display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(6));
                    }
                    lastInput = "equals";
                }
            }
            if(clickEvent){
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            firstNumCheck = false;
            break;
        case "Escape":
            clearEverythingAfterEquals("");
            if(clickEvent){
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case "Backspace":
            if(display.textContent.length>=6 || lastInput === "equals" || lastInput === "operator"){
                clearEverythingAfterEquals("");
            } else{
                display.textContent = display.textContent.slice(0, -1);
                lastInput = "key";
            }
            break;
        default:
            break;
    }
}

function clearEverythingAfterEquals(input){
    firstNum = 0;
    secondNum = 0;
    display.textContent = input;
    operator = "";
    lastInput = "";
    firstNumCheck = false;
}

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return (parseFloat(num1) + parseFloat(num2));
        case "-":
            return (parseFloat(num1) - parseFloat(num2));
        case "*":
            return (parseFloat(num1) * parseFloat(num2));
            break;
        case "/":
            if(parseFloat(num2) === 0){
                return "Universe crashed!";
            }
            return parseFloat(num1)/parseFloat(num2);
        default:
            alert("Something went wrong. Check your code");
            break;
    }
}