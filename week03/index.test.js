const { convertStringToNumber,  convertNumberToString} = require('./index');

describe(`string to number `, () => {
  test('string to number 10 by Decimal', () => {
    expect(convertStringToNumber('10')).toBe(10);
  });
  test('string to number 0b1010 by binary', () => {
    expect(convertStringToNumber('0b1010')).toBe(10);
  });
  test('string to number 0o13 by octal', () => {
    expect(convertStringToNumber('0o13')).toBe(11);
  });
  test('string to number 1e2 by scientific notation', () => {
    expect(convertStringToNumber('1e2')).toBe(100);
  });
  test('string to number 0x12 by hexadecimal', () => {
    expect(convertStringToNumber('0x12')).toBe(18);
  });
});

describe(`number to string `, () => {
  test('string to number 10', () => {
    expect(convertNumberToString(10)).toBe('10');
  });
  test('string to number 0x12', () => {
    expect(convertNumberToString(0x12)).toBe('18');
  });
});