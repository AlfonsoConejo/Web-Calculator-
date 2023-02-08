
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const resultDisplay= document.querySelector('.result');
const lastOperationDisplay = document.querySelector('.operation');

//const calculator = new Calculator(lastOperationDisplay, resultDisplay);
let result = '';
let lastResult = '';
let operand= undefined;

function appendResult(button){
    console.log(typeof(result))
    if (result === ''  && button.innerText === '.'){
        result = '0.';
        console.log(result)
    }
    else if (result === '') {
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
    if ( (result != '') && (result.includes('+') || result.includes('-') ||result.includes('x')||result.includes('%')||result.includes('÷'))){
        console.log('entró else if')
        return
    }
    else if (result != ''){
        lastResult = result + ' ' + button.innerText
        result = ''
        lastOperationDisplay.innerHTML = lastResult
        resultDisplay.innerHTML = result
        operand = button.innerText
        
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

})

clearBtn.addEventListener('click', () =>{
    result = ''
    resultDisplay.textContent = ''
    operand = ''
    lastResult = ''
    lastOperationDisplay.innerHTML = ''
    console.log('Last result: '+ lastResult)
    console.log('Result: '+ result)
})

deleteBtn.addEventListener('click', () =>{
    console.log('result ' + result);
    console.log('last result ' + lastResult);
    if (result === '' && lastResult != '' ){
        result = lastResult.substring(0, lastResult.length - 2);
        lastResult = ''
        lastOperationDisplay.innerHTML = ''
        resultDisplay.innerHTML = result
        console.log('result ' + result);
        console.log('last result ' + lastResult);
    }
    else{
        result = result.substring(0, result.length - 1);
        resultDisplay.textContent = result;
    }
    
})

equalsBtn.addEventListener('click', () =>{
    let previous = parseFloat(lastResult.substring(0, lastResult.length -2))
    let current = parseFloat(result)
    if (operand === '+' && result !== ''){
        lastResult = ''
        lastOperationDisplay.innerHTML = lastResult
        result = previous + current
        result = result.toString()
        resultDisplay.innerHTML = result
        operand = undefined
    }
    else if (operand === '-' && result !== ''){
        lastResult = ''
        lastOperationDisplay.innerHTML = lastResult
        result = previous - current;
        result = result.toString()
        resultDisplay.innerHTML = result
        operand = undefined
    }
    else if (operand === 'x' && result !== ''){
        lastResult = ''
        lastOperationDisplay.innerHTML = lastResult
        result = previous * current;
        result = result.toString()
        resultDisplay.innerHTML = result
        operand = undefined
    }
    else if (operand === '÷' && result !== ''){
        lastResult = ''
        lastOperationDisplay.innerHTML = lastResult
        result = previous / current;
        result = result.toString()
        resultDisplay.innerHTML = result
        operand = undefined
    }
})