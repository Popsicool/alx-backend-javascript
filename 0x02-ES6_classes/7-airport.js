export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
