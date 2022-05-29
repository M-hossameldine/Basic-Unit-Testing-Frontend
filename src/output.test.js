import { describe, it, expect } from 'vitest';

import { generateResultText } from './output';

describe('generateResultText()', function () {
  it('should always return string, no matter which value is passed in', () => {
    let inputNum = 3;
    let inputStr = 'test';
    let inputBool = true;

    let resultNum = generateResultText(inputNum);
    let resultStr = generateResultText(inputStr);
    let resultBool = generateResultText(inputBool);

    expect(resultNum).toBeTypeOf('string');
    expect(resultStr).toBeTypeOf('string');
    expect(resultBool).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    let result = 3;

    let resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return empty string if "no-calc" is provided as a caculation result', () => {
    let result = 'no-calc';

    let resultText = generateResultText(result);

    expect(resultText).toBe('');
  });

  it('should return string that contains "invalid" if "invalid" is provided as a result', () => {
    let result = 'invalid';

    let resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
  });
});
