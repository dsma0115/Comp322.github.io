function calculate(setNumber) {
    // Get the input values based on the set number (1 or 2)
    const number1 = parseFloat(document.getElementById(`number1_${setNumber}`).value);
    const number2 = parseFloat(document.getElementById(`number2_${setNumber}`).value);
    const operator = document.getElementById(`operator${setNumber}`).value;
    
    let result;
    let summary;

    // Perform the calculation based on the selected operator
    switch(operator) {
        case '+':
            result = number1 + number2;
            summary = `${number1} + ${number2} = ${result}`;
            break;
        case '-':
            result = number1 - number2;
            summary = `${number1} - ${number2} = ${result}`;
            break;
        case '*':
            result = number1 * number2;
            summary = `${number1} * ${number2} = ${result}`;
            break;
        case '/':
            if (number2 === 0) {
                result = "Cannot divide by zero";
                summary = "Division by zero is not allowed";
            } else {
                result = number1 / number2;
                summary = `${number1} / ${number2} = ${result}`;
            }
            break;
        case '%':
            result = number1 % number2;
            summary = `${number1} % ${number2} = ${result}`;
            break;
        default:
            result = "Invalid operator";
            summary = "Please select a valid operator.";
    }

    // Display the result and summary in the appropriate div
    document.getElementById(`result${setNumber}`).innerHTML = `<strong>Result:</strong> ${result}`;
    document.getElementById(`summary${setNumber}`).innerHTML = `<strong>Summary:</strong> ${summary}`;
}
