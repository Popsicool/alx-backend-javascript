const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test sum by adding numbers', function () {
  it('adding 2 and 3 to give 5', function () {
    assert.equal(calculateNumber('SUM', 2, 3), 5);
  });
  it('adding 1 and 3.7 to give 5', function () {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('adding 1.2 and 3.7 to give 5', function () {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('adding 1.5 and 3.7 to give 6', function () {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('adding 0 and 0 to give 0', function () {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });
});

describe('Test subtract by subtracting numbers', function () {
  it('subtracting 2 and 3 to give -1', function () {
    assert.equal(calculateNumber('SUBTRACT', 2, 3), -1);
  });
  it('subtracting 1 and 3.7 to give -3', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });
  it('subtracting 1.2 and 3.7 to give -3', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('subtracting 1.5 and 3.7 to give -2', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('subtracting 0 and 0 to give 0', function () {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });
});

describe('Test divide by dividing numbers', function () {
  it('dividing 3 and 2 to give 1.5', function () {
    assert.equal(calculateNumber('DIVIDE', 3, 2), 1.5);
  });
  it('dividing 3 and 3.0 to give 1', function () {
    assert.equal(calculateNumber('DIVIDE', 3, 3.0), 1);
  });
  it('dividing 4.0 and 1 to give 4', function () {
    assert.equal(calculateNumber('DIVIDE', 4.0, 1), 4);
  });
  it('dividing 2 and 4 to give 0.5', function () {
    assert.equal(calculateNumber('DIVIDE', 2, 4), 0.5);
  });
  it('dividing 10 and 0.3 to give ERROR', function () {
    assert.equal(calculateNumber('DIVIDE', 10, 0.3), 'Error');
  });
});
