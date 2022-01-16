let firstNum = 0;
let secondNum = 0;
let operator = "";
let lastInput;
let firstNumCheck = false;

//reference all the calculators buttons

const key1 = document.querySelector("#key1");
const key2 = document.querySelector("#key2");
const key3 = document.querySelector("#key3");
const key4 = document.querySelector("#key4");
const key5 = document.querySelector("#key5");
const key6 = document.querySelector("#key6");
const key7 = document.querySelector("#key7");
const key8 = document.querySelector("#key8");
const key9 = document.querySelector("#key9");
const key0 = document.querySelector("#key0");
const keyAdd = document.querySelector("#keyAdd");
const keySub = document.querySelector("#keySub");
const keyMul = document.querySelector("#keyMul");
const keyDiv = document.querySelector("#keyDiv");
const keyFloat = document.querySelector("#keyFloat");
const keyEquals = document.querySelector("#keyEquals");
const keyClear = document.querySelector("#keyClear");
const display = document.querySelector("#displayFieldText");

//This calls the functionality for each key whenever they are clicked
key1.addEventListener("click", () => actionKey("1"));
key2.addEventListener("click", () => actionKey("2"));
key3.addEventListener("click", () => actionKey("3"));
key4.addEventListener("click", () => actionKey("4"));
key5.addEventListener("click", () => actionKey("5"));
key6.addEventListener("click", () => actionKey("6"));
key7.addEventListener("click", () => actionKey("7"));
key8.addEventListener("click", () => actionKey("8"));
key9.addEventListener("click", () => actionKey("9"));
key0.addEventListener("click", () => actionKey("0"));
keyFloat.addEventListener("click", keyFloatFunc);
keyAdd.addEventListener("click", keyAddFunc);
keySub.addEventListener("click", keySubFunc);
keyMul.addEventListener("click", keyMulFunc);
keyDiv.addEventListener("click", keyDivFunc);
keyClear.addEventListener("click", keyClearFunc);
keyEquals.addEventListener("click", keyEqualsFunc);

//This calls the functionality for each key whenever the corresponding key is pressed on the users keyboard (additional functionality for backspace, clear = Enter)
document.addEventListener("keydown", (e) => {
    switch(e.key){
        case "1":
            keyOne();
            break;
        case "2":
            keyTwo();
            break;
        case "3":
            keyThree();
            break;
        case "4":
            keyFour();
            break;
        case "5":
            keyFive();
            break;
        case "6":
            keySix();
            break;
        case "7":
            keySeven();
            break;
        case "8":
            keyEight();
            break;
        case "9":
            keyNine();
            break;
        case "0":
            keyZero();
            break;
        case "+":
            keyAddFunc();
            break;
        case "-":
            keySubFunc();
            break;
        case "*":
            keyMulFunc();
            break;
        case "/":
            keyDivFunc();
            break;
        case "Enter":
            keyEqualsFunc();
            break;
        case ".":
            keyFloatFunc();
            break;
        case ",":
            keyFloatFunc();
            break;
        case "Escape":
            keyClearFunc();
            break;
        case "Backspace":
            keyBackspaceFunc();
            break;
        default:
            break;
    }
})

function clearEverythingAfterEquals(input){
    firstNum = 0;
    secondNum = 0;
    display.textContent = input;
    operator = "";
    lastInput = "";
}

function actionKey(input){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            clearEverythingAfterEquals(input);
        } else if(lastInput === "operator") {
            display.textContent = input;
            lastInput = "key";
        }else{
            display.textContent += input;
            lastInput = "key";
        }
    }
    this.classList.add("pressed");
}

//functions keyOne to keyZero all do basically the same thing, check if the amount of string in the display is too much and if not, display and save the value

function keyOne(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            clearEverythingAfterEquals("1");
        } else if(lastInput === "operator") {
            display.textContent = "1";
            lastInput = "key";
        }else{
            display.textContent += "1";
            lastInput = "key";
        }
    }
    key1.classList.add("pressed");
}

function keyTwo(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "2";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "2";
            lastInput = "key";
        } else {
            display.textContent += "2";
            lastInput = "key";
        }
    }
    key2.classList.add("pressed");
}

function keyThree(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "3";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "3";
            lastInput = "key";
        } else {
            display.textContent += "3";
            lastInput = "key";
        }
    }
    key3.classList.add("pressed");
}

function keyFour(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "4";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "4";
            lastInput = "key";
        } else {
            display.textContent += "4";
            lastInput = "key";
        }
    }
    key4.classList.add("pressed");
}

function keyFive(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "5";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "5";
            lastInput = "key";
        } else {
            display.textContent += "5";
            lastInput = "key";
        }
    }
    key5.classList.add("pressed");
}

function keySix(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "6";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "6";
            lastInput = "key";
        } else {
            display.textContent += "6";
            lastInput = "key";
        }
    }
    key6.classList.add("pressed");
}

function keySeven(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "7";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "7";
            lastInput = "key";
        } else {
            display.textContent += "7";
            lastInput = "key";
        }
    }
    key7.classList.add("pressed");
}

function keyEight(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "8";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "8";
            lastInput = "key";
        } else {
            display.textContent += "8";
            lastInput = "key";
        }
    }
    key8.classList.add("pressed");
}

function keyNine(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "9";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "9";
            lastInput = "key";
        } else {
            display.textContent += "9";
            lastInput = "key";
        }
    }
    key9.classList.add("pressed");
}

function keyZero(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "0";
            operator = "";
            lastInput = "";
        } else if(lastInput === "operator") {
            display.textContent = "0";
            lastInput = "key";
        } else {
            display.textContent += "0";
            lastInput = "key";
        }
    }
    key0.classList.add("pressed");
}

//Adds functionality for the float button, different because it has to check if there is already one decimal point in the displayed value;
function keyFloatFunc(){
    if(display.textContent.length>=8 && display.textContent !== "Universe crashed!"){
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
    keyFloat.classList.add("pressed");
}

//Next 4 functions add functionality for the operator buttons
function keyAddFunc(){
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
                        display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(10));
                        firstNum = display.textContent;
                    }
                    lastInput = "operator";
                }
            }
        }
    }
    operator = "add";
    lastInput = "operator";
    keyAdd.classList.add("pressed");
}

function keySubFunc(){
    if(display.textContent!==""){
        if (firstNumCheck === false){
            firstNum = parseFloat(display.textContent);
            firstNumCheck = true;
        } else {
            if (operator !== ""){
                if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){
                    secondNum = display.textContent;
                    if(typeof operate(firstNum, secondNum, operator) === "string"){
                        display.textContent = operate(firstNum, secondNum, operator);
                    } else {
                        display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(10));
                        firstNum = display.textContent;
                    }
                    lastInput = "operator";
                }
            }
        }
    }
    operator = "subtract";
    lastInput = "operator";
    keySub.classList.add("pressed");
}

function keyMulFunc(){
    if(display.textContent!==""){
        if (firstNumCheck === false){
            firstNum = parseFloat(display.textContent);
            firstNumCheck = true;
        } else {
            if (operator !== ""){
                if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){
                    secondNum = display.textContent;
                    if(typeof operate(firstNum, secondNum, operator) === "string"){
                        display.textContent = operate(firstNum, secondNum, operator);
                    } else {
                        display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(10));
                        firstNum = display.textContent;
                    }
                    lastInput = "operator";
                }
            }
        }
    }
    operator = "multiply";
    lastInput = "operator";
    keyMul.classList.add("pressed");
}

function keyDivFunc(){
    if(display.textContent!==""){
        if (firstNumCheck === false){
            firstNum = parseFloat(display.textContent);
            firstNumCheck = true;
        } else {
            if (operator !== ""){
                if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){
                    secondNum = display.textContent;
                    if(typeof operate(firstNum, secondNum, operator) === "string"){
                        display.textContent = operate(firstNum, secondNum, operator);
                    } else {
                        display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(10));
                        firstNum = display.textContent;
                    }
                    lastInput = "operator";
                }
            }
        }
    }
    operator = "divide";
    lastInput = "operator";
    keyDiv.classList.add("pressed");
}

function keyClearFunc(){
    firstNum = 0;
    secondNum = 0;
    display.textContent = "";
    operator = "";
    lastInput = "";
    keyClear.classList.add("pressed");
    firstNumCheck = false;
}

//equal button functionality, has to check if two numbers have been input and if so, calls the operate function to calculate and display the result
function keyEqualsFunc(){
    if (operator !== ""){
        if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){
            secondNum = display.textContent;
            if(typeof operate(firstNum, secondNum, operator) === "string"){
                display.textContent = operate(firstNum, secondNum, operator);
            } else {
                display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(10));
            }
            lastInput = "equals";
        }
    }
    keyEquals.classList.add("pressed");
    firstNumCheck = false;
}

//removes the last number from the string if backspace is pressed on keyboard
function keyBackspaceFunc(){
    if(display.textContent.length>=15 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "";
            operator = "";
            lastInput = "";
        }
        display.textContent = display.textContent.slice(0, -1);
        lastInput = "key";
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(parseFloat(num2) === 0){
        return "Universe crashed!";
    }
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case "add":
            return parseFloat(add(parseInt(num1), parseInt(num2)));
            break;
        case "subtract":
            return parseFloat(subtract(num1, num2));
            break;
        case "multiply":
            return parseFloat(multiply(num1, num2));
            break;
        case "divide":
            if (typeof divide(num1, num2) === "string"){
                return divide(num1, num2);
            }
            return parseFloat(divide(num1, num2));
            break;
        default:
            alert("Something went wrong. Check your code");
            break;
    }
}

//These next two functions are for the little pressdown animation that plays whenever a key is clicked or pressed
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("pressed");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
});