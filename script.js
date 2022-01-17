let firstNum = 0;
let secondNum = 0;
let operator = "";
let lastInput;
let firstNumCheck = false;
const display = document.querySelector("#displayFieldText");

//Event listener calling the action function when a key is pressed on the keyboard
document.addEventListener("keydown", (e) => actionKey(e));

//This adds an event listener to all calculator keys firstly calling the action function and also removing the class that is responsible for the pressdown animation
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
    let clickEvent = false; //this is for easier checking whether the event fired was a click or a keydown
    //defines keyId properly by checking if its click or keydown
    if(e.type === "click"){
        keyId = e.target.getAttribute("id");
        clickEvent = true;
    } else {
        keyId = e.key;
    }
    //switch case statement for all possible calculator inputs
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
            if(display.textContent.length>=6 && display.textContent !== "Universe crashed!"){ //Display an error message if the input number gets to large to avoid display overflow
                display.textContent = "Too many numbers!";
            } else {
                if(lastInput === "equals"){ //if a calculation has just been made entering a number will clear everything to start a new calculation
                    clearEverythingAfterEquals(keyId);
                } else if(lastInput === "operator") { 
                    display.textContent = keyId;//if last input was an operator, instead of concatenating the input number it will clear the screen and then add the number 
                    lastInput = "key";
                }else{
                    display.textContent += keyId; //will concatenate the input number to the currently displayed number
                    lastInput = "key";
                }
            }
            if(clickEvent){ //results in the pressdown animation on the keys but has to differentiate whether it was click or keydown and use different code
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if(display.textContent!==""){ //checks wheter display is empty, if so does nothing
                if(firstNumCheck === false){ //to make sure its a fresh calculation
                    firstNum = parseFloat(display.textContent);
                    firstNumCheck = true;
                } else{ //if its not a fresh calculation it has to do sub-results without the user pressing equal/enter
                    if (operator !== ""){
                        if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){ //if its equals or NaN then there is no calculation to be made
                            secondNum = display.textContent;
                            if(typeof operate(firstNum, secondNum, operator) === "string"){ //in case user divided by 0 the function operate will return a string so it shouldnt parseFloat
                                display.textContent = operate(firstNum, secondNum, operator);
                            } else {
                                display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(6)); //calculates the result and fixes it to 6 digits
                                firstNum = display.textContent; //to keep track of sub results the sub result will be declared as firstNum for further calculations
                                secondNum = 0;
                            }
                            lastInput = "operator";
                        }
                    }
                }
            }
            operator = keyId;
            lastInput = "operator";
            if(clickEvent){//results in the pressdown animation on the keys but has to differentiate whether it was click or keydown and use different code
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case ".":
            if(display.textContent.length>=6 && display.textContent !== "Universe crashed!"){//Display an error message if the input number gets to large to avoid display overflow
                display.textContent = "Too many numbers!";
            } else if(display.textContent.includes(".") && lastInput !== "equals"){//checks whether there is already a decimal point in the displayed number (cant be more than one)
                display.textContent += "";
            } else {
                if(display.textContent === "" || lastInput === "equals"){ //if there has not been a number input but the decimal point is pressed it should display 0.
                    firstNum = 0;
                    secondNum = 0;
                    display.textContent = "0.";
                    operator = "";
                    lastInput = "float";
                } else if(lastInput === "operator") { //same thing as above but without overwriting first and secondNum
                    display.textContent = "0.";
                    lastInput = "float";
                } else{
                    display.textContent += ".";
                }
                lastInput = "float";
            }
            if(clickEvent){//results in the pressdown animation on the keys but has to differentiate whether it was click or keydown and use different code
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case "Enter":
            if (operator !== ""){ //if no operator was assigned enter will not calculate anything
                if(lastInput !== "equals" && !isNaN(parseFloat(display.textContent))){ //makes sure it will not calculate using an error message (NaN)
                    secondNum = display.textContent;
                    if(typeof operate(firstNum, secondNum, operator) === "string"){ //in case user divided by 0 the function operate will return a string so it shouldnt parseFloat
                        display.textContent = operate(firstNum, secondNum, operator);
                    } else {
                        display.textContent = parseFloat(operate(firstNum, secondNum, operator).toFixed(6));//calculates the result and fixes it to 6 digits
                    }
                    lastInput = "equals";
                }
            }
            if(clickEvent){//results in the pressdown animation on the keys but has to differentiate whether it was click or keydown and use different code
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            firstNumCheck = false;
            break;
        case "Escape":
            clearEverythingAfterEquals(""); //clears everything
            if(clickEvent){//results in the pressdown animation on the keys but has to differentiate whether it was click or keydown and use different code
                e.target.classList.add("pressed");
            } else{
                document.getElementById(keyId).classList.add("pressed");
            }
            break;
        case "Backspace":
            if(display.textContent.length>=6 || lastInput === "equals" || lastInput === "operator"){ //if backspace is entered after calculating a result or inputting an operator, clears everything
                clearEverythingAfterEquals("");
            } else{
                display.textContent = display.textContent.slice(0, -1); //removes the last number from the display value
                lastInput = "key";
            }
            break;
        default:
            break;
    }
}
//clears everything 
function clearEverythingAfterEquals(input){
    firstNum = 0;
    secondNum = 0;
    display.textContent = input;
    operator = "";
    lastInput = "";
    firstNumCheck = false;
}
//handles all 4 available math operations
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