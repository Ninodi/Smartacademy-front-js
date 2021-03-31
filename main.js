class Calculator {
  constructor(aboveTxt, belowTxt) {
    this.aboveTxt = aboveTxt
    this.belowTxt = belowTxt
    this.clear()
  }

  clear() {
    this.above = ''
    this.below = ''
    this.operation = undefined
  }

  appendNumber(number) {
    this.below = this.below.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.below === '') return
    if (this.above !== '') {
      this.compute()
    }
    this.operation = operation
    this.above = this.below
    this.below = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.above)
    const current = parseFloat(this.below)
    if (this.operation === '+') {
      computation = prev + current
    } else if (this.operation === '-') {
      computation = prev - current
    } else if (this.operation === '*') {
      computation = prev * current
    } else if (this.operation === '÷') {
      computation = prev / current
    } 
    
    this.below = computation
    this.operation = undefined
    this.above = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay} ${this.operation}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.belowTxt.innerText =
      this.getDisplayNumber(this.below)
    if (this.operation != null) {
      this.aboveTxt.innerText =
        `${this.getDisplayNumber(this.above)} ${this.operation}`
    } else {
      this.aboveTxt.innerText = ''
    }
  }
}


const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const clear = document.querySelector('[data-clear]')
const aboveTxt = document.querySelector('[above]')
const belowTxt = document.querySelector('[below]')

const calculator = new Calculator(aboveTxt, belowTxt)

numbers.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operations.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equals.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

clear.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})


// let numbers = document.querySelectorAll('.number')
// let operations = document.querySelectorAll('.data-operation')
// let equals = document.querySelector('.equals')
// let clear = document.querySelector('.clear')
// let aboveTxt = document.getElementById('above')
// let belowTxt = document.getElementById('below')

// clear.addEventListener('click', () => {
//     action.innerText = ''
//     result.innerText = ''
//     action.removeAttribute('var1')
//     action.removeAttribute('var2')
//     action.removeAttribute('operator')
// })

// numbers.forEach((number) => {
//     number.addEventListener('click', () => {
//         let num = number.innerText
//         action.innerText += num

//         let prevValue = ''
//         if (action.getAttribute('operator')){          
//             if (action.getAttribute('var2')){
//                 prevValue = action.getAttribute('var2')
//             }
//             action.setAttribute('var2', prevValue + num)
//         } else {
//             if (action.getAttribute('var1')){
//                 prevValue = action.getAttribute('var1')
//             }
//             if (action.innerText === '-' ) {
//                 action.setAttribute('var1', prevValue + "-" + num)
//             } else {
//                 action.setAttribute('var1', prevValue + num)
//             }
//         }
//         result.innerText = ''
//     })
// })

// operators.forEach(operator => {
//     operator.addEventListener('click', () => {
//         if (action.getAttribute("var2")) return
//         if (!action.getAttribute('var1') && operator.innerText !== '-' ) return
//         let charactersArray = action.innerText.split('')
//         if (operatorSymbols.includes(charactersArray[charactersArray.length - 1])){
//             action.innerText = action.innerText.slice(0,-1)
//         }
//         action.innerText += operator.innerText
//         if (!action.getAttribute('var1')) return
//         action.setAttribute('operator', operator.innerText)

//     })
// })

// equals.addEventListener('click', () => {
//     if (action.getAttribute("var1") && action.getAttribute("var2") && action.getAttribute("operator")) {
//         let operator = action.getAttribute('operator')
//         if (operator === '+') {
//             result.innerText = +action.getAttribute('var1') + +action.getAttribute('var2')
//         } else if (operator === '-') {
//             result.innerText = +action.getAttribute('var1') - +action.getAttribute('var2')
//         } else if (operator === '÷') {
//             result.innerText = +action.getAttribute('var1') / +action.getAttribute('var2')
//         } else {
//             result.innerText = +action.getAttribute('var1') * +action.getAttribute('var2')
//         }        
//     }
// })
