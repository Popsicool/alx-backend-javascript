const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('send payment to API', function () {
  it('send payment to api uses cal from utils', function () {
    const spy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
