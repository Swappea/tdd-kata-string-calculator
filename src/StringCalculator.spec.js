const assert = require('assert');
const { addString } = require('./StringCalculator');

describe('String Calculator', () => {
  it('will add and return 0 for empty string', () => {
    assert.strictEqual(addString(''), 0);
  });

  it('will add and return value for 1 element in string', () => {
    assert.strictEqual(addString('1'), 1);
  });

  it('will add and return value for 2 elements in string', () => {
    assert.strictEqual(addString('1,2'), 3);
  });

  it('will add and return value for n elements in string', () => {
    const randomInput = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 20)
    );
    const sum = randomInput.reduce((accu, val) => accu + val, 0);
    assert.strictEqual(addString(randomInput.join(',')), sum);
  });

  it('will add and return value for numbers with new line delimiter', () => {
    assert.strictEqual(addString('1,2\n3'), 6);
  });

  it('will throw an error when input syntax is wrong', () => {
    assert.throws(() => addString('1,2,\n3'));
  });

  it('will accept a default delimiter passed in input string', () => {
    assert.strictEqual(addString('//;\n1;2'), 3);
  });

  it('will accept a default delimiter passed in input string and support existing scenarios', () => {
    assert.strictEqual(addString('//;\n1;2\n3'), 6);
  });

  it('will throw a message for negative numbers not allowed with the negative numbers', () => {
    assert.strictEqual(addString('1,-2'), 'negatives not allowed : -2');
  });

  it('will throw a message for negative numbers not allowed with the negative numbers - 2', () => {
    assert.strictEqual(addString('2,-4,-9'), 'negatives not allowed : -4,-9');
  });

  it('will ignore number more than 1000', () => {
    assert.strictEqual(addString('2,1002,5'), 7);
  });
});
