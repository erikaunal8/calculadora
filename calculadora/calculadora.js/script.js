let currentOperand = ''; 
let previousOperand = ''; 
let operation = undefined; 


function updateDisplay() {
    const display = document.getElementById('calc-display');
    display.innerText = currentOperand || '0'; 
}


function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return; 
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}


function setOperation(op) {
    if (currentOperand === '') return; 
    if (previousOperand !== '') {
        calculate(); 
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = ''; 
}


function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return; 

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current; 
            break;
        default:
            return;
    }

    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}


function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}
