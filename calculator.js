let displayValue = "";

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function appendCharacter(char) {
    displayValue += char;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}
