const request = require('request');
const { expect } = require('chai');

describe('test api integration', () => {
  const url = 'http://localhost:7865';

  it('make a call to the / endpoint', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
        expect(body).to.be.equal('Welcome to the payment system');
        expect(res.statusCode).to.be.equal(200);
        done();
    });
  });
});
