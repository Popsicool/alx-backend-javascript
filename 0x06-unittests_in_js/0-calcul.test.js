const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test sum by adding numbers', function () {
  it('adding 2 and 3 to give 5', function () {
    assert.equal(calculateNumber(2, 3), 5);
  });
  it('adding 1 and 3.7 to give 5', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('adding 1.2 and 3.7 to give 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('adding 1.5 and 3.7 to give 6', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6)
  });
  it('adding 0 and 0 to give 0', function () {
    assert.equal(calculateNumber(0, 0), 0);
  });
});
