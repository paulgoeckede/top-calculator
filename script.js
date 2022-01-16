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

key1.addEventListener("click", () => {
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
});

key2.addEventListener("click", () => {
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
});

key3.addEventListener("click", () => {
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
});

key4.addEventListener("click", () => {
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
});

key5.addEventListener("click", () => {
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
});

key6.addEventListener("click", () => {
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
});

key7.addEventListener("click", () => {
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
});

key8.addEventListener("click", () => {
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
});

key9.addEventListener("click", () => {
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
});

key0.addEventListener("click", () => {
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
});

keyFloat.addEventListener("click", () => {
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
});

keyAdd.addEventListener("click", () => {
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "add";
    lastInput = "operator";
});

keySub.addEventListener("click", () => {
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "subtract";
    lastInput = "operator";
});

keyMul.addEventListener("click", () => {
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "multiply";
    lastInput = "operator";
});

keyDiv.addEventListener("click", () => {
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
    operator = "divide";
    lastInput = "operator";
});

keyClear.addEventListener("click", () => {
    firstNum = 0;
    secondNum = 0;
    display.textContent = "";
    operator = "";
    lastInput = "";
});

keyEquals.addEventListener("click", () => {
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
});







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

 