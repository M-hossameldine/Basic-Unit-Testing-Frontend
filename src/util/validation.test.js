import { it, expect, describe } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

// validateStingNotEmpty() test suite

describe('validateStringNotEmpty()', () => {
  it('should throw error, if an empty string is provided', () => {
    let input = '';
    let resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).toThrow();
  });

  it('should throw an error with message that contains reason (Invalid input - must not be empty)', () => {
    let input = '';
    let resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).toThrow(/Invalid input - must not be empty/);
  });

  it('should throw an error if any other value than a stirng is provided', () => {
    let inputNum = 1;
    let inputBool = true;
    let inputObj = {};

    let resultFnNum = () => validateStringNotEmpty(inputNum);
    let resultFnBool = () => validateStringNotEmpty(inputBool);
    let resultFnObj = () => validateStringNotEmpty(inputObj);

    expect(resultFnNum).toThrow();
    expect(resultFnBool).toThrow();
    expect(resultFnObj).toThrow();
  });

  it('should not throw an error, if non-empty string is provided', () => {
    let input = 'valid input';
    let resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).not.toThrow();
  });
});

// validateNumber() test suite

describe('validateNumber()', () => {
  it('should throw an error if Nan is provided', () => {
    let strInput = 'invalid';
    const nanInput = NaN;

    let resultStr = () => validateNumber(strInput);
    let resultNan = () => validateNumber(nanInput);

    expect(resultStr).toThrow(/Invalid number/);
    expect(resultNan).toThrow(/Invalid number/);
  });

  it('should throw an error with a message that contains a reason (invalid number)', () => {
    let strInput = 'invalid';
    const nanInput = NaN;

    let resultStr = () => validateNumber(strInput);
    let resultNan = () => validateNumber(nanInput);

    expect(resultStr).toThrow(/Invalid number/);
    expect(resultNan).toThrow(/Invalid number/);
  });

  it('should throw an error, if non-numeric value is provided', () => {
    let input = '1';
    let validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should not throw an error, if number is provided', () => {
    let number = 1;
    let resultFn = () => validateNumber(number);
    expect(resultFn).not.toThrow();
  });
});
