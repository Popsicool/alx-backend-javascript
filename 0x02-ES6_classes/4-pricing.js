import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Must be type Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number' || typeof (conversionRate) !== 'number') {
      throw new TypeError('Must be number');
    }
    return amount * conversionRate;
  }
}
