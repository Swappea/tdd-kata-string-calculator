const assert = require('assert')
const { addString } = require('./StringCalculator')

describe('String Calculator', () => {
  it('will add and return 0 for empty string', () => {
    assert.strictEqual(addString(''), 0);
  });

  it('will add and return value for 1 element in string', () => {
    assert.strictEqual(addString('1'), 1);
  });
});
