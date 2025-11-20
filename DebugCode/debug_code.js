function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation based on selection
        let result;

        switch(operation) {
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'add':
                result = add(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                result = 'Invalid operation';
        }

        // Display the result
        displayResult(result, operation);
    } else {
        displayResult('Please enter valid numbers', operation);
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Check for division by zero
    if (b === 0) {
        return 'Cannot divide by zero';
    }

    // Divide the numbers
    return a / b;
}

function displayResult(result, operation) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');

    if (typeof result === 'string' && result.includes('Please enter')) {
        resultElement.textContent = result;
    } else if (typeof result === 'string' && result.includes('Cannot divide')) {
        resultElement.textContent = result;
    } else {
        resultElement.textContent = `The result of ${operation} is: ${result}`;
    }
}
