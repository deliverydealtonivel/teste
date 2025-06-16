const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let operand1 = null;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('operator')) {
      if (operator && operand1 !== null) {
        operand1 = calculate(operand1, parseFloat(currentInput), operator);
        display.value = operand1;
        currentInput = '';
      } else {
        operand1 = parseFloat(currentInput);
        currentInput = '';
      }
      operator = btn.dataset.value;
    } else if (btn.classList.contains('equal')) {
      if (operator && operand1 !== null && currentInput !== '') {
        let operand2 = parseFloat(currentInput);
        let result = calculate(operand1, operand2, operator);
        display.value = result;
        currentInput = '';
        operator = '';
        operand1 = null;
      }
    } else if (btn.classList.contains('clear')) {
      display.value = '';
      currentInput = '';
      operator = '';
      operand1 = null;
    } else {
      currentInput += btn.dataset.value;
      display.value = currentInput;
    }
  });
});

function calculate(op1, op2, operator) {
  switch (operator) {
    case '+': return op1 + op2;
    case '-': return op1 - op2;
    case '*': return op1 * op2;
    case '/': return op2 !== 0 ? op1 / op2 : 'Erro';
    default: return op2;
  }
}
