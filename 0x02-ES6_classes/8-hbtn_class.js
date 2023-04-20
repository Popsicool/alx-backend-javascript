export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this._size;
    }
    if (type === 'string') {
      return this._location;
    }

    return this;
  }
}
