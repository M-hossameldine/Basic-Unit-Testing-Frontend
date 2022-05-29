import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();

  // getting data
  const numberInputs = extractEnteredNumberValues(form);

  // validating data and getting result
  const result = calculateResult(numberInputs);

  // getting output text
  const resultText = generateResultText(result);

  // rendering output
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
