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

  it('test GET /cart/:id with valid :id', (done) => {
    request.get(`${API_URL}/cart/95`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 95');
      done();
    });
  });

  it('test GET /cart/:id returns 404 with negative :id', (done) => {
    request.get(`${API_URL}/cart/-95`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('test GET /cart/:id returns 404 with uuid :id', (done) => {
    request.get(`${API_URL}/cart/ad34-sget-5643`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
