const
  screen = document.getElementById('calculatorScreen'),
  keys = document.getElementById('calculatorKeys')
  
screen.textContent = '0'

let
  operationStatus = false,
  number1,
  typeOperation


const calculator = () => {
  if (!keys) return

  keys.addEventListener('click', e => {
    const t = e.target,
      d = t.dataset

    // deterctar si se pulso un numero 
    if (d.number) writeScreen(d.number)
    // deterctar si se pulso una operacion matematica
    if (d.math) getOperation(t, d.math)
    // detectar si se pulso otra operacion
    if (d.operation) runOperation(d.operation)
  })
}

const writeScreen = number => {
  screen.textContent === '0' || operationStatus === true
    ? screen.textContent = number
    : number === '.' && !screen.textContent.includes('.')
      ? screen.textContent += number
      : number !== '.'
        ? screen.textContent += number
        : null

  operationStatus = false
}

const getOperation = (element, operation) => {
  operationStatus = true
  number1 = Number(screen.textContent)
  typeOperation = operation

  screen.textContent = element.textContent
}

const runOperation = (operation) => {

  const getResult = (number1, typeOperation) => {
    const number2 = Number(screen.textContent)
    let result

    switch (typeOperation) {
      case 'add':
        result = number1 + number2
        break;
      case 'minus':
        result = number1 - number2
        break;
      case 'multiply':
        result = number1 * number2
        break;
      case 'divide':
        result = number1 / number2
        break;
    }

    result == Infinity
      ? screen.textContent = 'Error'
      : screen.textContent = result
  }

  // Operation
  operation === 'clear'
    ? screen.textContent = '0'
    : getResult(number1, typeOperation)

  operationStatus = true
}

export { calculator }