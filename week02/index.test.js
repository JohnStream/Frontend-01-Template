const { verifyNumber, verifyString } = require('./index');

describe('matching number字面量', () => {
  test('0 is NumericLiteral', () => {
    expect(verifyNumber('0')).toBeTruthy();
  });

  test('01 is NumericLiteral', () => {
    expect(verifyNumber('01')).toBeTruthy();
  });

  test('0.111111111 is NumericLiteral', () => {
    expect(verifyNumber('0.111111111')).toBeTruthy();
  });

  test('0x10 is NumericLiteral', () => {
    expect(verifyNumber('0x10')).toBeTruthy();
  });

  test('0X10 is NumericLiteral', () => {
    expect(verifyNumber('0X10')).toBeTruthy();
  });

  test('1e2 is NumericLiteral', () => {
    expect(verifyNumber('1e2')).toBeTruthy();
  });

  test('1E2 is NumericLiteral', () => {
    expect(verifyNumber('1E2')).toBeTruthy();
  });

  test('0.1e2 is NumericLiteral', () => {
    expect(verifyNumber('0.1e2')).toBeTruthy();
  });

  test('+10 is NumericLiteral', () => {
    expect(verifyNumber('+10')).toBeTruthy();
  });

  test('-10 is NumericLiteral', () => {
    expect(verifyNumber('-10')).toBeTruthy();
  });


  test('0b10000000 is NumericLiteral', () => {
    expect(verifyNumber('0b10000000')).toBeTruthy();
  });

  test('0O13 is NumericLiteral', () => {
    expect(verifyNumber('0O13')).toBeTruthy();
  });

  test('0o13 is NumericLiteral', () => {
    expect(verifyNumber('0o13')).toBeTruthy();
  });

  test('0O is not NumericLiteral', () => {
    expect(verifyNumber('0O')).toBeFalsy();
  });

  test('0o is not NumericLiteral', () => {
    expect(verifyNumber('0o')).toBeFalsy();
  });

  test('0x is not NumericLiteral', () => {
    expect(verifyNumber('0x')).toBeFalsy();
  });

  test('0X is not NumericLiteral', () => {
    expect(verifyNumber('0X')).toBeFalsy();
  });

  test('xixi is not NumericLiteral', () => {
    expect(verifyNumber('xixi')).toBeFalsy();
  });
});

describe('matching String字面量', () => {
  test(`'foo' is String字面量`, () => {
    expect(verifyString(`'foo'`)).toBeTruthy();
  });
  test(`'\\xA9' is String字面量`, () => {
    expect(verifyString(`'\\xA9'`)).toBeTruthy();
  });
  test(`'\\u00A9' is String字面量`, () => {
    expect(verifyString(`'\\u00A9'`)).toBeTruthy();
  });
  test(`'\\u{2F804}' is String字面量`, () => {
    expect(verifyString(`'\\u{2F804}'`)).toBeTruthy();
  });
  test(`'\\uD87E\\uDC04' is String字面量`, () => {
    expect(verifyString(`'\\uD87E\\uDC04'`)).toBeTruthy();
  });
})