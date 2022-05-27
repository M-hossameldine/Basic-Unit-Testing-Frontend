import { it, expect, describe } from 'vitest';

import { add } from './math';

describe('add()', () => {
  // Triple A pattern
  it('should summarize all number values in an array', () => {
    // Arrange - Define the testing environment and values
    let numbers = [1, 2];

    // Act - Run the actual code / function that should be tested
    const result = add(numbers);

    // Assert - Evaluate the produced result and compare it to the expected result
    let exptectedValue = numbers.reduce(
      (prevValue, currValue) => prevValue + currValue,
      0
    );
    expect(result).toBe(exptectedValue);
  });

  it('should yield NaN if at least invalid number is provided', () => {
    let numbers = ['invalid', 2];
    let result = add(numbers);
    expect(result).toBeNaN();
  });

  it('should yield a correct sum if array of numeric strings is provided', () => {
    const numbers = ['1', '2'];

    const result = add(numbers);

    const expectedValue = numbers.reduce(
      (prevValue, currValue) => prevValue + +currValue,
      0
    );
    expect(result).toBe(expectedValue);
  });

  it('should yield 0 if empty array is provided', () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  it('should throw an error if no value is passed to function', () => {
    let resultFn = () => add();

    expect(resultFn).toThrow();
  });

  it('should throw an error if providede with multiple argument instead of one array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => add(num1, num2);

    expect(resultFn).toThrow(/is not iterable/);
  });
});
