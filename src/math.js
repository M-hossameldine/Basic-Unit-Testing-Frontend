import { cleanNumbers } from './util/numbers.js';

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export const calculateResult = (numberValues) => {
  let result = '';

  try {
    // validate inputs data
    let numbers = cleanNumbers(numberValues);

    // get result
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
};
