let results = [];

function calculate() {
    let continueLoop = true;
    
    while (continueLoop) {
        let x = prompt("Enter the first number:");
        if (x === null) break;
        let y = prompt("Enter the second number:");
        if (y === null) break;
        let operator = prompt("Enter an operator (+, -, *, /, %):");
        if (operator === null) break;

        x = parseFloat(x);
        y = parseFloat(y);
        
        let result;
        if (isNaN(x) || isNaN(y)) {
            result = "Error: Invalid number";
        } else {
            switch (operator) {
                case "+":
                    result = x + y;
                    break;
                case "-":
                    result = x - y;
                    break;
                case "*":
                    result = x * y;
                    break;
                case "/":
                    result = y !== 0 ? x / y : "Error: Division by zero";
                    break;
                case "%":
                    result = x % y;
                    break;
                default:
                    result = "Error: Invalid operator";
            }
        }

        // Push result to results array only if it's a valid number
        if (!isNaN(result)) {
            results.push(result);
        }

        // Display the current operation and result in a table
        document.write("<table>");
        document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
        document.write("</table>");
    }

    // After the loop ends, show the summary of results
    showSummaryTable(results);
}

function showSummaryTable(results) {
    if (results.length > 0) {
        let min = Math.min(...results);
        let max = Math.max(...results);
        let total = results.reduce((acc, val) => acc + val, 0);
        let avg = total / results.length;

        document.write("<h2>Summary Table</h2>");
        document.write("<table>");
        document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
        document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
        document.write("</table>");
    } else {
        document.write("<h2>No valid results to summarize</h2>");
    }
}

// Start the calculator when the page is loaded
window.onload = calculate;
