let firstNum = 0;
let secondNum = 0;
let operator = "";
let lastInput;

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

key1.addEventListener("click", keyOne);
key2.addEventListener("click", keyTwo);
key3.addEventListener("click", keyThree);
key4.addEventListener("click", keyFour);
key5.addEventListener("click", keyFive);
key6.addEventListener("click", keySix);
key7.addEventListener("click", keySeven);
key8.addEventListener("click", keyEight);
key9.addEventListener("click", keyNine);
key0.addEventListener("click", keyZero);
keyFloat.addEventListener("click", keyFloatFunc);
keyAdd.addEventListener("click", keyAddFunc);
keySub.addEventListener("click", keySubFunc);
keyMul.addEventListener("click", keyMulFunc);
keyDiv.addEventListener("click", keyDivFunc);
keyClear.addEventListener("click", keyClearFunc);
keyEquals.addEventListener("click", keyEqualsFunc);

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

function keyOne(){
    if(display.textContent.length>=15 && display.textContent !== "Universe crashed!"){
        display.textContent = "Too many numbers!";
    } else {
        if(lastInput === "equals"){
            firstNum = 0;
            secondNum = 0;
            display.textContent = "";
            operator = "";
            lastInput = "";
        } else {
            display.textContent += "1";
            lastInput = "key";
        }
    }
}

function keyTwo(){
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
        display.textContent += "2";
        lastInput = "key";
    }
}

function keyThree(){
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
        display.textContent += "3";
        lastInput = "key";
    }
}

function keyFour(){
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
        display.textContent += "4";
        lastInput = "key";
    }
}

function keyFive(){
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
        display.textContent += "5";
        lastInput = "key";
    }
}

function keySix(){
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
        display.textContent += "6";
        lastInput = "key";
    }
}

function keySeven(){
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
        display.textContent += "7";
        lastInput = "key";
    }
}

function keyEight(){
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
        display.textContent += "8";
        lastInput = "key";
    }
}

function keyNine(){
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
        display.textContent += "9";
        lastInput = "key";
    }
}

function keyZero(){
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
        display.textContent += "0";
        lastInput = "key";
    }
}

function keyFloatFunc(){
    if(display.textContent.length>=15 && display.textContent !== "Universe crashed!"){
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
            
        } else {
            display.textContent += ".";
        }
        lastInput = "float";
    }
}

function keyAddFunc(){
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "add";
    lastInput = "operator";
}

function keySubFunc(){
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "subtract";
    lastInput = "operator";
}

function keyMulFunc(){
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "multiply";
    lastInput = "operator";
}

function keyDivFunc(){
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "divide";
    lastInput = "operator";
}

function keyClearFunc(){
    firstNum = 0;
    secondNum = 0;
    display.textContent = "";
    operator = "";
    lastInput = "";
}

function keyEqualsFunc(){
    if (operator !== ""){
        if(lastInput !== "equals"){
            secondNum = display.textContent;
            if(typeof operate(firstNum, secondNum, operator) === "string"){
                display.textContent = operate(firstNum, secondNum, operator);
            } else {
                display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(10));
            }
            lastInput = "equals";
        }
    }
}

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

 