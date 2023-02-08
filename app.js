
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const resultDisplay= document.querySelector('.result');
const lastOperationDisplay = document.querySelector('.operation');

//const calculator = new Calculator(lastOperationDisplay, resultDisplay);
let result;
let operand;

function appendResult(button){
    if (result === undefined  && button.innerText === '.'){
        result = '0.';
        console.log(result)
    }
    else if (result === undefined) {
        result = button.innerText;
        console.log(result)
    }
    else if (result === '0' && button.innerText === '0'){
        return
    }

    else if (button.innerText === '.' && result.includes('.')){
        return
    }
    else{
        result = result + button.innerText;
        console.log(result)
    }
    resultDisplay.textContent = result; 
}

function appendOperand(button){
    if ( (result != undefined) && (result.includes('+') || result.includes('-') ||result.includes('x')||result.includes('%')||result.includes('÷'))){
        console.log('entró else if')
        return
    }
    else if (result != undefined){
        result = result + button.innerText
        console.log(result)
        resultDisplay.textContent = result;
        console.log('Entró')
        operand = button.innerText
        console.log(operand)
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendResult (button)
    )
})

operandButtons.forEach(button => {
    button.addEventListener('click', () => appendOperand (button)

    )
})

equalsBtn.addEventListener('click', () =>{
        calculator.calculateOperation();
        calculator.updateDisplay();
})

clearBtn.addEventListener('click', () =>{
    result = undefined
    resultDisplay.textContent = ''
    operand = undefined
})