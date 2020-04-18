const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    let calcDescription;
    if (operator === 'reset') {
        calcDescription = 'reset calculations';
    } else {
        calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    }
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNum, 
    newResult
)   {
    if (operationIdentifier === 'CLEAR') {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
    } else {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNum,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    }
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' && 
        calculationType !== 'MULTIPLY' && 
        calculationType !== 'DIVIDE' &&
        calculationType !== 'CLEAR' ||
        !enteredNumber
    ) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    } else if (calculationType === 'CLEAR') {
        currentResult = defaultResult;
        mathOperator = 'reset';
        userInput.value = 0;
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

function clearResult() {
    calculateResult('CLEAR');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
btnClear.addEventListener('click', clearResult);
