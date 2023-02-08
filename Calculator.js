class Calculator {
    constructor(lastOperationDisplay, resultDisplay){
        this.lastOperationDisplay = lastOperationDisplay;
        this.resultDisplay = resultDisplay;
        this.clear();
    }

    clear(){
    this.result = '';
    this.lastOperation = '';
    this.operation = undefined;
    }

    appendNumber(number){
        if (this.result.length === 0 && number === '.'){
                this.result = '0.';
        }
        else if (this.result === '0' && number === '0'){
            return
        }
        else if ( number === '.' && this.result.includes('.')){
            return
        }
        else{
            this.result = this.result.toString() + number.toString();
            
        }
        
    }

    appendOperand(operand){
        if (this.result === ''){
            return;
        }
        if (this.lastOperation !== ''){
            this.calculateOperation();
        }
        this.operand = operand;
        this.lastOperation = this.result + ' ' +operand;
        this.result = ''
    }

    updateDisplay(){
        this.resultDisplay.innerText = this.result;
        this.lastOperationDisplay.innerText = this.lastOperation;
    }

    calculateOperation(){
        let computation;
        console.log('previous =' + this.computation)
        const prev = parseFloat(this.lastOperation);
        const current = parseFloat(this.result);
        if (isNaN(prev) || isNaN(current)) return;
        switch(this.operation){
            case '+':
                computation = prev + current;
                console.log('suma')
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case '%':
                computation = prev + current;
                break;
            default:
                return;
        }
        console.log('previous =' + this.prev)
        this.result = computation;
        this.operation = undefined;
        this.lastOperation = '';
    }
}