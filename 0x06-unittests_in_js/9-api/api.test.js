const request = require('request');
const { expect } = require('chai');

describe('test api integration', () => {
  const url = 'http://localhost:7865';

  it('make a call to the / endpoint', () => new Promise((done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  }));

  it('test GET /cart/:id with valid :id', () => new Promise((done) => {
    request.get(`${url}/cart/95`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 95');
      done();
    });
  }));

  it('test GET /cart/:id returns 404 with negative :id', () => new Promise((done) => {
    request.get(`${url}/cart/-95`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));

  it('test GET /cart/:id returns 404 with uuid :id', () => new Promise((done) => {
    request.get(`${url}/cart/ad34-sget-5643`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
});
