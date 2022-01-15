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
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case "add":
            return add(parseInt(num1), parseInt(num2));
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
        default:
            alert("Something went wrong. Check your code");
            break;
    }
}

/* const addButton = document.querySelector(".add");
const subButton = document.querySelector(".subtract");
const mulButton = document.querySelector(".multiply");
const divButton = document.querySelector(".divide");

addButton.addEventListener("click", () => {
    const num1 = prompt("Enter first numer", "");
    const num2 = prompt("Enter second numer", "");
    const result = alert(operate(num1, num2, "add"));
})
subButton.addEventListener("click", () => {
    const num1 = prompt("Enter first numer", "");
    const num2 = prompt("Enter second numer", "");
    const result = alert(operate(num1, num2, "subtract"));
})
mulButton.addEventListener("click", () => {
    const num1 = prompt("Enter first numer", "");
    const num2 = prompt("Enter second numer", "");
    const result = alert(operate(num1, num2, "multiply"));
})
divButton.addEventListener("click", () => {
    const num1 = prompt("Enter first numer", "");
    const num2 = prompt("Enter second numer", "");
    const result = alert(operate(num1, num2, "divide"));
}) */