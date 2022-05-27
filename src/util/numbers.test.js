import { it, expect, describe } from 'vitest';

import { transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should always yield numeric value if called with numeric string value', () => {
    const input = '2';

    const result = transformToNumber(input);

    // 'number' is the type of NaN, so make sure it's not a NaN
    expect(result).toBeTypeOf('number').not.toBeNaN();
  });

  it('should yield NaN if called with invalid value', () => {
    let input = 'invalid';
    let input2 = {};

    let result = transformToNumber(input);
    let result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });

  it('should yield NaN if called with no arguments', () => {
    const result = transformToNumber();

    expect(result).toBeNaN();
  });
});
