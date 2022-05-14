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
});
