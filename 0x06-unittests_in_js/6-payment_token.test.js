const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI test', () => {
  it('teest when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  }));
});
