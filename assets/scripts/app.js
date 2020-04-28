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

// function calculateResult(calculationType) {
//     const enteredNumber = getUserNumberInput();
//     if (
//         calculationType !== 'ADD' && 
//         calculationType !== 'SUBTRACT' && 
//         calculationType !== 'MULTIPLY' && 
//         calculationType !== 'DIVIDE' ||
//         !enteredNumber
//     ) {
//         return;
//     }

//     const initialResult = currentResult;
//     let mathOperator;
//     if (calculationType === 'ADD') {
//         currentResult += enteredNumber;
//         mathOperator = '+';
//     } else if (calculationType === 'SUBTRACT') {
//         currentResult -= enteredNumber;
//         mathOperator = '-';
//     } else if (calculationType === 'MULTIPLY') {
//         currentResult *= enteredNumber;
//         mathOperator = '*';
//     } else if (calculationType === 'DIVIDE') {
//         currentResult /= enteredNumber;
//         mathOperator = '/';
//     }
//     createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//     writeToLog(calculationType, initialResult, enteredNumber, currentResult);
// }

// function add() {
//     calculateResult('ADD');
// }

// function subtract() {
//     calculateResult('SUBTRACT');
// }

// function multiply() {
//     calculateResult('MULTIPLY');
// }

// function divide() {
//     calculateResult('DIVIDE');
// }

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else {
        currentResult /= enteredNumber;
        operator = '/';
    // } else if(calculationType === 'CLEAR') {
    //     currentResult = defaultResult;
    //     mathOperator = 'reset';
    //     userInput.value = 0;
    // }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);

// function clearResult() {
//     calculateResult('CLEAR');
// }

// btnClear.addEventListener('click', clearResult);

